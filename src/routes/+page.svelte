<script lang="ts">

    import NewListItem from '$lib/Components/NewListItem.svelte';
    import Search from '$lib/Components/Search.svelte'; 
    import BookmarkList from '$lib/Components/BookmarkList.svelte';
	import { count } from '$lib/Components/store.js';
    import { getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
	let showNewListItem = false;

	// let showNewListItem = false;et countValue;

	// count.subscribe(value => {
	// 	countValue = value;
	// });
    
    // function signOUT () {
    //     const auth = getAuth();
    //     signOut(auth).then(() => {
    //         //Signout
    //     }).catch((error) => {
    //         alert(error.code + "\n" + error.message);
    //     });
    // }

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        console.log("User signed in");
    } else {
        console.log("Use not signed in");
    }
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         console.log("user is signed in " + user.email);
    //     } else {
    //         console.log("no user logged in");
    //     }
    // });
    
</script>

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
    <Search />
    
    <BookmarkList
    
    >


    </BookmarkList>


    <!-- <h1>The count is {countValue}</h1> -->
<p></p>

<!-- <button on:click={signOUT}>sign out</button> -->


<style>
    /* ul {
        list-style-type: none;
    }
    .box {
        color: white;
        font-size: 100px;
        text-align: center;
        text-shadow: 4px 4px 0 rgba(0,0,0,0,1);
        padding: 10px;
    }

    .box1 { background: #1abc9c;}
    .box2 { background: #3498db;}
    .box3 { background: #9b59b6;}
    .box4 { background: #34495e;}
    .box5 { background: #f1c40f;}
    .box6 { background: #e67e22;}
    .box7 { background: #e74c3c;}
    .box8 { background: #bdc3c7;}
    .box9 { background: #2ecc71;}
    .box10 { background: #16a085;}

    .container {
        display: flex;
        border: 10px solid mistyrose;
        align-items: center;
        height: 100vh;
    } */


</style>