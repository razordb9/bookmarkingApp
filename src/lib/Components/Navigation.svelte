<script lang="ts">
    import {fire} from "$lib/actions";
    import {routes} from "$lib/routes.js";
    import {user} from "$lib/stores/fireStore";
    export let uid="";

    
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
        {#if $user?.uid}
            <li>
                <a role="" href="/dashboard">Dashboard</a>
            </li>
            <li>
                <a role="" use:fire on:logout href="/">Logout</a>
            </li>
        {:else}
            <li>
                <a role="" href="/login">Login</a>
            </li>
            <li>
                <a role="button" href="/signup"><span>Create accout</span></a>
            </li>
        {/if}
    </ul>
</nav>

<style lang="scss">
    nav{
        ul, li, a{
            margin: 0;
            a[role="button"] {
                width:auto;
                span{
                    margin: 0  10px;
                }
            }
            float: right;
            
        }
        float: right;
        // ul>li:last-child > a{
        //     border: 2px solid var(--primary);
        // }
    }
</style>