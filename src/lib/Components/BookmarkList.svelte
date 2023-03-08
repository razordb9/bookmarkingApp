<script lang="ts">
    // export let name = '';
    // export let beschreibung = '';
    // export let url = '';
    import BookmarkCard from '$lib/Components/BookmarkCard.svelte';

    let x = 7;
    let bookmarks: { name: string, beschreibung: string, url: string} [] = [
       {"name": "google", "beschreibung": "Suchmaschine", "url": "https://www.google.at"}, 
       {"name": "ORF", "beschreibung": "Staatlicher RUndfunk", "url": "https://orf.at"}, 
    ]
    
</script>

<div>
    <h1>Available bookmarks</h1>
    <input type="button" value="Liste">
    <input type="button" value="Kachel">
    <div class="bookmarks">
        <ul>
            {#each bookmarks as {name, beschreibung, url}}
                <li>
                    <BookmarkCard 
                        beschreibung = {beschreibung}
                        {name}
                        {url}
                        --card-background = "red"
                        --card-heigth = "auto"
                    >
                        
                    </BookmarkCard>
                </li>
                <br>
            {/each}
        </ul>
    </div> 

</div>

<style>
    ul {
        list-style-type: none;
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