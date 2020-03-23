<script>
    import Page from '../components/Page.svelte';
    import GithubIcon from '../components/GithubIcon.svelte';
</script>

<svelte:head>

    <title>Bikolabs</title>
</svelte:head>

<Page className="mt-10 bg-black">
    <h1 class="text-2xl text-white font-bold uppercase">Fragmentos Bikolabs</h1>

    <p class="mt-4 font-medium text-white text-lg">
        Fragmentos que pueden ser recuperados, amplificados…
    </p>

    <ul class="flex items-center mt-3">
        <li>
            <a
                href="https://github.com/karlosgliberal"
                class="text-red-500"
                title="Github">
                <GithubIcon />
            </a>
        </li>
    </ul>
</Page>
