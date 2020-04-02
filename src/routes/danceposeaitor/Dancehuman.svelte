<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function sayHello() {
        dispatch('message', {
            radius: 10,
        });
    }
</script>

<svg width="360px" height="506px">
    <title>dancehuman</title>
    <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <g id="dancehuman">
            <g id="circulos" fill="#FF2200" fill-rule="nonzero">
                <circle on:click={sayHello} id="wrist" cx="6" cy="233" r="6" />
                <circle id="wrist" cx="354" cy="242" r="6" />
                <circle id="elbow" cx="281" cy="170" r="6" />
                <circle id="elbow" cx="79" cy="162" r="6" />
                <circle id="ear" cx="151" cy="26" r="6" />
                <circle id="ear" cx="223" cy="26" r="6" />
                <circle id="eye" cx="202" cy="6" r="6" />
                <circle id="eye" cx="173" cy="6" r="6" />
                <circle id="shoulder" cx="137" cy="64" r="6" />
                <circle id="shoulder" cx="248" cy="72" r="6" />
                <circle id="hip" cx="151" cy="255" r="6" />
                <circle id="hip" cx="217" cy="255" r="6" />
                <circle id="knee" cx="248" cy="398" r="6" />
                <circle id="knee" cx="122" cy="398" r="6" />
                <circle id="ankle" cx="110" cy="500" r="6" />
                <circle id="ankle" cx="248" cy="498" r="6" />
            </g>
            <g
                id="lineas"
                stroke-linecap="square"
                transform="translate(13.000000, 62.000000)"
                stroke="#FF2200"
                stroke-width="2">
                <line x1="123.5" y1="0.5" x2="236.5" y2="9.5" id="Line-3" />
                <line x1="236.5" y1="15.5" x2="205.5" y2="193.5" id="Line-4" />
                <line x1="205.5" y1="193.5" x2="137.5" y2="193.5" id="Line-5" />
                <line x1="205.5" y1="193.5" x2="137.5" y2="193.5" id="Line-5" />
                <line x1="137.5" y1="193.5" x2="123.5" y2="4.5" id="Line-6" />
                <line x1="236.5" y1="15.5" x2="268.5" y2="111.5" id="Line-7" />
                <line x1="268.5" y1="111.5" x2="341.5" y2="178.5" id="Line-8" />
                <line x1="205.5" y1="200.5" x2="236.5" y2="335.5" id="Line-9" />
                <line
                    x1="236.5"
                    y1="340.5"
                    x2="236.5"
                    y2="432.5"
                    id="Line-10" />
                <line x1="110.5" y1="340.5" x2="97.5" y2="439.5" id="Line-11" />
                <line
                    x1="137.5"
                    y1="200.5"
                    x2="110.5"
                    y2="335.5"
                    id="Line-12" />
                <line x1="123.5" y1="4.5" x2="62.5" y2="104.5" id="Line-13" />
                <line x1="62.5" y1="104.5" x2="0" y2="168" id="Line-14" />
            </g>
        </g>
    </g>
</svg>
