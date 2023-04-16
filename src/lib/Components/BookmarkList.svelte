<script lang="ts">
    import { count } from '$lib/Components/store.js';
    import BookmarkCard from '$lib/Components/BookmarkCard.svelte';
    import BookmarkTable from '$lib/Components/BookmarkTable.svelte';
    import { bookmarks} from '$lib/Components/bookmarkstore';
  	import type { Bookmark } from './Interfaces/bookmark'; 
    
      let bookmark:Bookmark = {};

    let listView = false;
    
    // const removeFromStore () {


    // }
    const removeFromStore = () => {
        const idx = $bookmarks.length > 0 ? Math.max(...$bookmarks.map(bookmark => bookmark["id"])) + 1 : 1;
		console.log("id: ", idx);

        let removeBookmark = {id: idx, ...bookmark}
        bookmarks.removeBookmark(removeBookmark);

    }

    const switchView = () => {
        listView=!listView;
    }
</script>


<main class="container">
    <div class="bookmarks">
        {#if !$bookmarks?.length == 0 || !$bookmarks.length === undefined} 
            <h1>Available bookmarks</h1>
            {#if listView === false}
                <button on:click={switchView}>Liste</button>
                <br>
                <ul>   
                    {#each $bookmarks as item}
                        <li>
                            {item["name"]}
                            {item["beschreibung"]}
                            {item["url"]}
                            <button type="submit">Delete</button>
                        </li>
                        <br>
                    {/each}
                </ul>
            {:else}
                <button on:click={switchView}>Kacheln</button>
                <table id="myTable">
                    <thead>
                    <tr>
                        {#each Object.keys($bookmarks[0]) as columnHeading}
                            <th>{columnHeading}</th>
                        {/each}
                        <th>Delete</th>
                        <th>Modify</th>
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
                                <td><button type="button" on:click={removeFromStore}>Delete</button></td>
                                <td><button type="submit">Modify</button></td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {/if}
        {:else}
            <h1>No bookmarks available</h1>
        {/if}
    </div>               
</main> 

<!-- <style lang="scss">
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
</style> -->
