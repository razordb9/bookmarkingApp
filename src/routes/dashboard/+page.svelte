<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData, PageServerData } from './$types';
    export let data: PageServerData;
    const user = data.client;
    const claims = data.claims;
</script>
<nav class="container-fluid">
    
</nav>

<main class="container">
    {#if user?.uid}  
        uid: {user?.uid} <br>
        name: {user?.displayName} <br>
        is admin: {claims?.admin} <br>
        dashboard: {claims?.dashboard}
    {:else}
        <p>not logged in...</p>
    {/if}
</main>



<style>

</style>