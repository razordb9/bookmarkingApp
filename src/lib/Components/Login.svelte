<script lang="ts">
    import { signInWithEmailAndPassword } from '$lib/firebase/client/helper';
    import { goto } from '$app/navigation';
    import uiStore from '$lib/stores/uiStore';
    import { fetchUserFromFireBase } from '$lib/utils/shared';
    import type { Credentials } from '$lib/types/credentials';
  
    const login = async (event: Event) => {
        const form = event.target as HTMLFormElement
        const formData = new FormData(form as HTMLFormElement);
  
        const userData:Credentials = {
            "email": formData.get("email")?.toString() || "",
            "password": formData.get("password")?.toString() || ""
        }
        if(userData.password && userData.email) {
  
            const userCredential = await signInWithEmailAndPassword(userData)
            const user = userCredential.user;
            const idToken = await user.getIdToken();
            const response = await fetchUserFromFireBase(idToken);
            if(response.ok && response.status === 200) {
                const {claims} = await user.getIdTokenResult();
                uiStore.set({admin:claims.admin, dashboard:claims.dashboard})
                goto('/dashboard');
            }
        }
    }
    
</script>


<main class="container">
    <form class="form" method="POST" on:submit|preventDefault="{login}" >
        <!-- <form class="form" method="POST" action="?/login" on:submit|preventDefault="{loginAction}" > -->
        <input type="email" id="email" name="email" placeholder="Email address" required>
        <input type="text" id="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
</main>

<style>
    #container {
        /* float:  */
    }
</style>