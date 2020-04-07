<script>
    export let url = '';
    export let segment;
    console.log(segment);
</script>

<div class="flex bg-black py-3">
    <div class="w-1/3 h-6 flex justify-star items-center" />
    <div class="w-1/3 flex items-center justify-center h-6">
        <div>
            <img src="logo.svg" alt="Dance pose" />
        </div>
    </div>
    <div class="w-1/3 flex items-center justify-end h-6">
        <div class="pr-4">
            <a class="uppercase font-bold text-white" href={url}>About</a>

        </div>
    </div>
</div>
