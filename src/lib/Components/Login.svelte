<script lang="ts">


</script>

<form
  class="form"
  method="POST"
  action="?/login"
>
  <label for="email">Email address</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Email address"
    required
  />
  <div class="grid">
    <label for="password">
      Password
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Password"
        required
      />
    </label>
  </div>
  <button type="submit">Login</button>
</form>

<style lang="scss">
</style>
