<script>
    import NavSlim from '../../components/NavSlim.svelte';
    import Footer from '../../components/Footer.svelte';
</script>

<NavSlim />
<div class="container flex px-10">
    <div class="w-3/12" />
    <div class="pt-10 px-10 w-4/6">
        <h2 class="font-ptserif font-bold text-5xl pb-4">About US</h2>
        <div class="font-lato text-about leading-relaxed">
            <p>
                <strong>DancePose</strong>
                utiliza modelos de machine learning de reconocimiento de
                posturas y los saca de su contexto de uso habitual,
                despojándolos de su carácter utilitario para generar algo…
                simplemente bonito.
            </p>

            <p>
                Se trata de un proyecto de arte generativo que fusiona las
                coreografías clásicas que se acomodan en nuestros recuerdos con
                inteligencia artificial, ese elemento cada vez más central en
                nuestras vidas.
            </p>
            <div class="pt-3 pb-8">
                <img class="max-w-full" src="AI.jpg" alt="Dancepose" />
            </div>

            <p>
                Un proyecto para interactuar con él, para jugar con la
                generación de partículas al ritmo de la música, para evadirse al
                menos el tiempo que dura un buen taconeo mientras explora la
                simple y a la vez compleja concepción de lo bonito.
            </p>
            <p class="font-bold">Enjoy!</p>

            <p class="pt-5 text-sm">
                * Por exigencias técnicas del modelo de ML, para interactuar con
                DancePose necesitas un equipo con una buena CPU.
                <br />
                Si no cuentas con ello, puedes disfrutar de los vídeos generados
                con la herramienta en el
                <a href="">Instagram</a>
                de #bikolabs.
            </p>

        </div>
    </div>
    <div class="w-3/12" />
</div>

<div class="divider-xl" />
<div class="divider-xl" />

<Footer />
