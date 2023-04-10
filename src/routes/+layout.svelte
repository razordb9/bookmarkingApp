<script lang="ts">
    import Header from '$lib/Components/Header.svelte';
    import Footer from '$lib/Components/Footer.svelte';
    // import './style.css';
    import '$lib/css/pico.min.css'
    import Navigation from '$lib/Components/Navigation.svelte';
    import type { PageServerData } from './$types';
    import { onDestroy } from 'svelte';
    import { user } from '$lib/stores/fireStore';
    import { logout } from '$lib/firebase/client/helper';

    const handleLogout = async (e:any) => {
        console.log("logging out....", e);
        await logout();
    }
</script>

<div class="main">
    <!--<Header />-->
    <Navigation on:logout={handleLogout}></Navigation>
    <slot></slot>

    <!--<Footer />-->
</div>