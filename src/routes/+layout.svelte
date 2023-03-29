<script lang="ts">
    import Header from '$lib/Components/Header.svelte';
    import Footer from '$lib/Components/Footer.svelte';
    // import './style.css';
    import '$lib/css/pico.min.css'
    import Navigation from '$lib/Components/Navigation.svelte';
</script>

<div class="main">
    <!--<Header />-->
    <Navigation></Navigation>
    <slot></slot>

    <!--<Footer />-->
</div>