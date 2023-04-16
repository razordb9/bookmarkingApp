<script lang="ts">
    import '$lib/css/custom_style.css';
    import '$lib/css/pico.min.css';
    

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
<div class="app">
    <Navigation on:logout={handleLogout}></Navigation>

    <main>
        <slot />
    </main>

    <footer>
		<p>Copyright &copy by Thomas Hudson Zaußnig</p>
	</footer>

</div>

