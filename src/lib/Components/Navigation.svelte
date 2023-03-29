<script lang="ts">
    import {routes} from "$lib/routes.js";
</script>

<nav class="navigation">
    <ul>
        {#each routes as route}
            {#if route.public}
                <li>
                    <a href="{route.pathname}">{route.name}</a>
                </li>
            {/if}
        {/each}
    </ul>
</nav>