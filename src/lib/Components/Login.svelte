<script lang="ts">
	import type { enhance, SubmitFunction } from '$app/forms';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    import { auth } from "$lib/firebase/client/initialize";
 

    const handleLogin:SubmitFunction = async (event)=>{
        
        const user = {
            email:document.getElementById("email").value,
            password:document.getElementById("password").value
        }
        console.log(user);

        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user);
            alert("User logged in");
            location.replace("/");
        })
        .catch((error) => {
            alert(error.code + "\n" + error.message);
            console.log(error.code);
            console.log(error.message);
        })
        
    }
    
</script>

<form class="form" method="POST" action="?/login" on:submit|preventDefault={handleLogin} >
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" placeholder="Email address" required>
    <div class="grid">
        <label for="password">
            Password
            <input type="text" id="password" name="password" placeholder="Password" required>
        </label>
    </div>
    <button type="submit">Login</button>
</form>


<style lang="scss">

</style>