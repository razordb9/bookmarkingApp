<script lang="ts">
    import NewListItem from '$lib/Components/NewListItem.svelte';
    import Search from '$lib/Components/Search.svelte'; 
    import BookmarkList from '$lib/Components/BookmarkList.svelte';
	import { count } from '$lib/Components/store.js';
    import { getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
	let showNewListItem = false;
</script>


<main class="container">

    <button on:click={() => (showNewListItem = true)}>
        New
    </button>

    <NewListItem bind:showNewListItem>
    </NewListItem>


    <Search />
    
    <BookmarkList/>


    <!-- <h1>The count is {countValue}</h1> -->
<p></p>

<!-- <button on:click={signOUT}>sign out</button> -->
</main>



<style>


</style>