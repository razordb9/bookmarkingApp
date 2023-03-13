<script lang="ts">
    import NewListItem from '$lib/Components/NewListItem.svelte';

    let showNewListItem = false;



</script>

<div class="search">
    <input type="search" placeholder="Search..."/>

    <button >
        search
    </button>

    <button on:click={() => (showNewListItem = true)}>
        New
    </button>
    
    <NewListItem bind:showNewListItem>
        <!-- <h2 slot="header">
            Add new Bockmark Item
        </h2>
        <div>
            Name: <input type="text" value=""><br>
            Url: <input type="text" value=""><br>
            Beschreibung: <input type="text" value="">
        </div> -->
        
    </NewListItem>
</div>

<style>
    .search {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 10px solid red;
        height: 50px;

    }

    input[type=search] {
        width: 50%;
        height: 20px;
    }

</style>