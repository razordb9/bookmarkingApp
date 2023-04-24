<script lang="ts">
    import { supabase } from "$lib/supabase/helper";


    export let data;
    let { bookmarks } = data;
    $: ({ bookmarks } = data);

    async function addToDB() {
        let name = (document.getElementById("name") as HTMLInputElement).value;
		let url = (document.getElementById("url") as HTMLInputElement).value;

        const { data, error} = await supabase
            .from('countries')
            .insert([
                {'name': name, 'code': url}
            ])
        if (error)
            console.log('error: ', error);
        else
            console.log('Data added succesfully', data)


        console.log("working")
    }

</script>

<ul>
    {#each bookmarks as bookmark}
        <li>{bookmark.id} {bookmark.name}</li>
    {/each}
</ul>

<h1>test page</h1>
<main class="container">
    <form id="newListItem">
        <label for="name">Name</label>
        <input id="name" type="text" required><br>
        
        <label for="url">URL</label>
        <input id="url" type="text" required><br>
    
        <button on:click={addToDB}>save</button>
    </form>
</main>
