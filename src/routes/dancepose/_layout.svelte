<script>
    import NavSlim from '../../components/NavSlim.svelte';
    import Footer from '../../components/Footer.svelte';

    export let segment;
</script>

<svelte:head>
    <title>Dance Pose</title>
    <meta name="segment" content={segment} />

    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js">

    </script>
    <script src="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js">

    </script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js">

    </script>
    <style>
        input[type='checkbox'] {
            background-color: transparent;
        }

        .dg .c input[type='checkbox'] {
            margin-top: 12px !important;
        }

        select {
            color: #fffcfc;
            width: 100%;
            height: 25px;
            background-color: #303030;
        }

        .dg li:not(.folder) {
            cursor: auto;
            height: 40px !important;
            line-height: 27px;
            padding: 0 4px;
        }

        .dg .c .slider-fg {
            background: white;
            max-width: 100%;
            height: 15px;
            position: relative;
            top: -6px;
        }

        .dg .slider {
            float: left;
            width: 66%;
            margin-left: 0;
            margin-right: 0;
            height: 4px !important;
            margin-top: 6px;
            position: relative;
            top: 13px;
        }

        .dg .cr.number input[type='text'] {
            color: #ffffff !important;
        }

        .property-name {
            padding-top: 3px !important;
        }

        .dg .c input[type='text'] {
            border: 0;
            margin-top: 4px;
            padding: 3px;
            width: 50%;
            float: right;
        }

        .dg .slider {
            margin-left: 0 !important;
        }

        .bga {
            background-image: url('bgf.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>
</svelte:head>

<div
    class="flex flex-col justify-between w-screen h-screen bga {segment === undefined ? 'overflow-hidden' : ''}">
    <NavSlim {segment} />
    <slot />
    <Footer />
</div>
