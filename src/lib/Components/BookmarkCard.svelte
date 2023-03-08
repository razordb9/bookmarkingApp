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
    
    {#if edit === false}
        <h2>Name: {name}</h2>
        Url: <a target="_blank" rel="noreferrer" href={url}>{name}</a>
        <p>Beschreibung: {beschreibung}</p>
    {:else}
        <h2>Name: <input type="text" value={name}></h2>
        Url: <input type="text" value={url}><br>
        Beschreibung: <input type="text" value={beschreibung}>
    {/if}
    
</div>

<style>
    .card {
        width: var(--card-width);
        height: var(--card-heigth);
        background: var(--card-background);
    }

</style>