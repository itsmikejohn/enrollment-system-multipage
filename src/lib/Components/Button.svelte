<script lang="ts">
    export let title = "btn title";
    export let loader = false;
    export let loader_title = "loader title"
</script>

<button class="transition-all active:scale-95 hover:opacity-70 px-2 py-1 bg-blue-500 text-white rounded-sm" 
on:click
>
    {#if loader}
        <div class="flex gap-2 items-center justify-center">
            {loader_title}
            <div class="w-4 h-4 border-4 border-b-white rounded-full animate-spin"></div>
        </div>
    {:else}
        {title}
    {/if}
</button>