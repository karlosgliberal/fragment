<script>
    import { fade } from 'svelte/transition';
    import resolveConfig from 'tailwindcss/resolveConfig';

    import tailwindConfig from '../../tailwind.js';

    import NavLink from './NavLink.svelte';
    import MenuIcon from './MenuIcon.svelte';

    export let segment;

    const fullConfig = resolveConfig(tailwindConfig) || '768px';
    const BREAKPOINT = Number(fullConfig.theme.screens.md.replace('px', ''));

    const links = [
        {
            href: 'bikolabs',
            text: 'Bikolabs',
        },
        {
            href: 'fragmentos',
            text: 'Fragmentos',
        },
        {
            href: 'contacto',
            text: 'Contacto',
        },
    ];

    let showNavBar = false;

    function toggle() {
        showNavBar = !showNavBar;
    }

    function handleWindowResize({ target: { innerWidth } }) {
        if (BREAKPOINT <= innerWidth && showNavBar) {
            showNavBar = false;
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Geo&display=swap&text=Devessier');

    .main-link-font {
        font-family: 'Arial', sans-serif;
    }
</style>

<svelte:window on:resize={handleWindowResize} />

<nav class="py-6">
    <div class="flex items-center justify-between">
        <a href="." class="main-link-font text-2xl text-white tracking-wider">
            Dance Pose
        </a>

        <div class="hidden md:flex items-center">
            {#each links as { href, text }, index}
                <NavLink
                    console.log(segment)
                    {href}
                    active={segment === href}
                    class={index < links.length - 1 ? 'mr-10 text-white' : 'text-white'}>
                    {text}
                </NavLink>
            {/each}
        </div>

        <div class="flex md:hidden items-center z-20">
            <button on:click={toggle}>
                <MenuIcon width="30" height="30" opened={showNavBar} />
            </button>
        </div>
    </div>

    {#if showNavBar}
        <div
            class="absolute inset-0 bg-white text- block md:hidden z-10 pt-20
            px-10"
            transition:fade={{ duration: 200 }}>
            {#each links as { href, text }}
                <NavLink
                    {href}
                    active={segment === href}
                    on:click={() => (showNavBar = false)}
                    class="font-bold">
                    {text}
                </NavLink>
            {/each}

        </div>
    {/if}

</nav>
