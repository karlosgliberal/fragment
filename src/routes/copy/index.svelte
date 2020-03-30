<script>
    import Page from '../../components/Page.svelte';
    import GithubIcon from '../../components/GithubIcon.svelte';
</script>

<svelte:head>
    <title>fragment</title>
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet" />
    <style>
        @font-face {
            font-family: 'simplifica';
            src: url('simplifica.ttf') format('truetype');
        }
        .simplifica {
            font-family: 'simplifica';
        }
        .quicksand {
            font-family: 'Nunito', sans-serif;
        }
        .movida {
            height: 60vh;
        }
    </style>
</svelte:head>

<body class="bg-gray-400 text-white font-sans simplifica tracking-normal">

    <div>
        <div class="flex">
            <div
                class="w-full movida bg-center"
                style="background-image: url('un.png')">
                <div class="flex">
                    <div class="m-4 w-1/2 bg-red-700 h-12" />
                    <div class="m-4 w-1/2 bg-red-200 h-12" />
                </div>
            </div>
        </div>
        <!-- Two columns -->
        <div class="flex mb-4">
            <div class="w-1/2 bg-gray-600 h-12" />
            <div class="w-1/2 bg-gray-200 h-12" />
        </div>
        <div class="flex mb-4 content-center">
            <div class="w-1/2 bg-gray-600 h-auto mr-2">
                <p class="p-2 tracking-widest font-bold">
                    HOLA QUE TAL fsdfasdfasdfs fsdf asdfasdfasdfsadfsadfasdf sdf
                    sdf sdf sdf sd fa fsdfasdfasdfs fsdf
                    asdfasdfasdfsadfsadfasdf sdf sdf sdf sdf sd fa fsdfasdfasdfs
                    fsdf asdfasdfasdfsadfsadfasdf sdf sdf sdf sdf sd fa
                    fsdfasdfasdfs fsdf asdfasdfasdfsadfsadfasdf sdf sdf sdf sdf
                    sd fa
                </p>
            </div>
            <div class="w-1/2 bg-gray-500 h-12 mr-2" />
            <div class="w-1/2 bg-gray-800 h-12" />
        </div>
    </div>

    <!-- <div class="bg-red-300 flex">
        <div
            class="bg-cover bg-center h-screen w-screen"
            style="background-image: url('un.png')">
            hhh
        </div>

    </div> -->

</body>
