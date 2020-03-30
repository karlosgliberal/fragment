<script>
    // Sets up a p5 Canvas with Svelte
    // You typically won't need to worry about this file :)

    import { onMount } from 'svelte';

    export let sketch;

    // Default canvas size
    const width = 256;
    const height = 256;

    const props = { ...$$props };
    delete props.sketch;
    if ('p5' in props)
        console.warn('p5 has been passed into props, it will be ignored');
    if ('target' in props)
        console.warn('target has been passed into props, it will be ignored');

    let lastInstance;
    let propContainer, canvasContainer;
    $: {
        if (canvasContainer) update(sketch, canvasContainer, propContainer);
    }

    function update() {
        if (lastInstance) {
            lastInstance.remove();
            lastInstance = null;
        }
        if (sketch) {
            new p5(p => {
                p.width = width;
                p.height = height;
                const target = propContainer;
                const instance = new sketch({
                    target,
                    props: {
                        width: p.width,
                        height: p.height,
                        ...props,
                        target,
                        p5: p,
                    },
                });
                attachFunctions(p, instance, sketch);
                addHooks(p, instance);
                lastInstance = p;
            }, canvasContainer);
        }
    }

    function addHooks(p5Target, instance) {
        const setter = instance.$set;
        if (typeof setter !== 'function') {
            console.warn('Component did not provide $set function');
            return;
        }
        instance.$set = (...args) => {
            console.log('has changed', args);
            return setter.apply(instance, args);
        };
        // when the component is updated, trigger a re-draw if p5 is not looping
        const update = instance.$$.update || (() => {});
        instance.$$.update = (...args) => {
            const ret = update.apply(instance, args);
            if (p5Target && !p5Target._loop) p5Target.redraw();
            return ret;
        };
    }

    function attachFunctions(p5Target, instance, Component) {
        const funcs = Object.getOwnPropertyNames(Component.prototype).filter(
            prop => prop != 'constructor'
        );
        funcs.forEach(key => {
            if (key.startsWith('$')) {
                return;
            }
            let fn;
            try {
                fn = instance[key];
            } catch (_) {
                return; // ignore svelte no-accessor error
            }
            if (typeof fn === 'function') {
                if (key === 'destroy')
                    console.warn(
                        'Do not export destroy() function in your components'
                    );
                p5Target[key] = fn;
                if (key === 'setup') {
                    const setup = fn;
                    p5Target[key] = (...args) => {
                        p5Target.width = width;
                        p5Target.height = height;
                        return setup.call(instance, ...args);
                    };
                }
            }
        });
    }
</script>

<style>
    main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .canvas-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        flex-basis: 60%;
        min-width: 200px;
        flex-grow: 1;
        flex-shrink: 1;
    }
    /* .props-container {
        padding: 20px;
        box-sizing: border-box;
        flex-basis: 300px;
        min-width: 200px;
        max-width: 700px;
        flex-grow: 1;
        flex-shrink: 1;
        height: 100%;
        background: hsl(0, 0%, 95%);
        border-left: 4px solid hsl(10, 0%, 90%);
    } */
</style>

<main>
    <div bind:this={canvasContainer} class="canvas-container" />
    <div
        bind:this={propContainer}
        class="min-w-2 text-red-500 p-8 bg-green-800 " />
</main>
