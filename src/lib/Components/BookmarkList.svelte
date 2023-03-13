<script lang="ts">
    import { count } from '$lib/Components/store.js';
    import BookmarkCard from '$lib/Components/BookmarkCard.svelte';
    
    let listView = false;
    let tableData = [
        {
            "Name" : "google",
            "Beschreibung" : "Suchmaschine",
            "URL" : "https://www.google.at"
        },
        {
            "Name" : "ORF",
            "Beschreibung" : "RundFunk",
            "URL" : "https://orf.at"
        }
    ];

    // let bookmarks: { name: string, beschreibung: string, url: string} [] = [
    //    {"name": "google", "beschreibung": "Suchmaschine", "url": "https://www.google.at"}, 
    //    {"name": "ORF", "beschreibung": "Staatlicher RUndfunk", "url": "https://orf.at"}, 
    // ] 

    const switchView = () => {
        listView=!listView;
    }
</script>


<div>
    <h1>Available bookmarks</h1>
    {#if listView === false}
        <button on:click={switchView}>Liste</button>
        <div class="bookmarks">
            <ul>   
                {#each $count as item}
                    <li>
                        {item.Name}
                        {item.Beschreibung}
                        {item.URL}
                        <!-- <BookmarkCard 
                            {Name}
                            {Beschreibung}
                            {URL}
                            --card-background = "red"
                            --card-heigth = "auto"
                        >
                            
                        </BookmarkCard> -->
                    </li>
                    <br>
                {/each}
            </ul>
        </div> 
    {:else}
        <button on:click={switchView}>Kacheln</button>
        <div class="bookmarksList">
            <table>
                <thead>
                  <tr>
                    {#each Object.keys($count[0]) as columnHeading}
                        <th>{columnHeading}</th>
                    {/each}
                  </tr>
                </thead>
                <tbody>
                    {#each Object.values($count) as row}
                        <tr>
                            {#each Object.values(row) as cell}
                                <td>{cell}</td>
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
    

</div> 

<style>
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
