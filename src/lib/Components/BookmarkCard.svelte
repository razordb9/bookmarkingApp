<script lang="ts">
    export let Name = "";
    export let Beschreibung = "";
    export let URL = "";
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
        <h2>Name: {Name}</h2>
        Url: <a target="_blank" rel="noreferrer" href={URL}>{Name}</a>
        <p>Beschreibung: {Beschreibung}</p>
    {:else}
        <h2>Name: <input type="text" value={Name}></h2>
        Url: <input type="text" value={URL}><br>
        Beschreibung: <input type="text" value={Beschreibung}>
        <button>delete</button>
    {/if}
    
</div>

<style>
    .card {
        width: var(--card-width);
        height: var(--card-heigth);
        background: var(--card-background);
    }
</style>