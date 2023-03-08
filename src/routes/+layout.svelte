<script lang="ts">
    import Header from '$lib/Components/Header.svelte';
    import Footer from '$lib/Components/Footer.svelte';
    import './style.css';
</script>

<div class="main">
    <!--<Header />-->

    <slot></slot>

    <!--<Footer />-->
</div>