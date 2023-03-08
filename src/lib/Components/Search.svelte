<script lang="ts">
    export let searchItem = '';
</script>

<div class="search">
    <input type="search" placeholder="Search..."/>
    <input type="button" alt="NEW" value="NEW">
</div>

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
    input[type=button] {
       justify-content: flex-end;
    }
</style>