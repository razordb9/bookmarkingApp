<script lang="ts">
    import { page } from '$app/stores';
	import Signup from '$lib/Components/Signup.svelte';
    import { onMount } from 'svelte';
    import type { PageData, PageLoad, PageServerData } from './$types';
    
    let data: PageServerData = null;

    console.log("server data: ", data)
</script>


<Signup></Signup>

<style lang="scss">

</style>