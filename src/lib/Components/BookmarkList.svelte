<script lang="ts">
    import { count } from '$lib/Components/store.js';
    import BookmarkCard from '$lib/Components/BookmarkCard.svelte';
    import BookmarkTable from '$lib/Components/BookmarkTable.svelte';
    import { bookmarks} from '$lib/Components/bookmarkstore';
  	import type { Bookmark } from './Interfaces/bookmark'; 
    
    let listView = false;
    
    // const removeFromStore () {


    // }


    const switchView = () => {
        listView=!listView;
    }
</script>


<div class="container">
    <div class="bookmarks">
        <!-- {#if !$bookmarks?.length == 0 || !$bookmarks.length === undefined}  -->
        <h1>Available bookmarks</h1>
            {#if listView === false}
                <button on:click={switchView}>Liste</button>
                
                    <ul>   
                        {#each $bookmarks as item}
                            <li>
                                {item["name"]}
                                {item["beschreibung"]}
                                {item["url"]}
                            </li>
                            <br>
                        {/each}
                    </ul>
            
            {:else}
                <button on:click={switchView}>Kacheln</button>
                    <table>
                        <thead>
                        <tr>
                            {#each Object.keys($bookmarks[0]) as columnHeading}
                                <th>{columnHeading}</th>
                            {/each}
                        </tr>
                        </thead>
                        <tbody>
                            {#each Object.values($bookmarks) as row}
                                <tr>
                                    {#each Object.values(row) as content}
                                        <BookmarkTable
                                            {content}
                                        >

                                        </BookmarkTable>
                                    {/each}
                                </tr>
                            {/each}
                        </tbody>
                    </table>
            {/if}
        <!-- {:else}
            <h1>No bookmarks available</h1>
        {/if} -->
    </div>               
</div> 

<style lang="scss">
    .container {
        position: relative;
        border: 3px solid green;
    }
    ul {
        list-style-type: none;
    }
    .bookmarksList {
        display: flex;
        justify-content: space-around;
        /* align-items: center; */
        
    }
    .bookmarks {
        display: flex;
        justify-content: space-around;
        /* align-items: center; */
        
    }
    li {
        background-color: #e74c3c;
        justify-content: space-around;
        text-align: left;
        /* border: 10px solid mistyrose; */
    }
    
    h1{
        display: flex;
        justify-content: center;
    }
</style>
