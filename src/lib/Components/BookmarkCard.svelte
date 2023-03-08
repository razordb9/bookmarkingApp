<script lang="ts">
    export let name = "";
    export let beschreibung = "";
    export let url = "";
    let edit = false;

    const editCard = () => {
        edit=!edit;
    }

    const saveCard = () => {
        edit=false;
        
    }
</script>

<div class="card">
    <input type="button" on:click={editCard} value="edit"/>
    <button on:click={saveCard}>save</button>
    <h2>{name}</h2>
    {#if edit === false}
        <a target="_blank" rel="noreferrer" href={url}>{name}</a>
    {:else}
        <input type="text" value={beschreibung}>
    {/if}
    <p>{beschreibung}</p>
</div>

<style>
    .card {
        width: var(--card-width);
        height: var(--card-heigth);
        background: var(--card-background);
    }

</style>