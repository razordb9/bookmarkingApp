<script lang="ts">
    




</script>
<main class="container">
    <h2>Search item</h2>
    <p>
        Here you can search for your own bookmark items.
    </p>
    <!-- <form class="form" method="POST" on:submit|preventDefault="{login}" > -->
    <form class="form" method="POST">
        <!-- <form class="form" method="POST" action="?/login" on:submit|preventDefault="{loginAction}" > -->
        <input type="email" id="email" name="email" placeholder="Search" required>

        <button type="submit">Search</button>
    </form>
</main>
<style>
    .search {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 10px solid red;
        height: 50px;

    }

    input[type=search] {
        width: 50%;
        height: 20px;
    }

</style>