<script lang="ts">
	import { applyAction, deserialize, enhance, type SubmitFunction } from '$app/forms';
    import { signInWithCustomToken } from '$lib/firebase/client/helper';
    import type { FirebaseCreateUserResponse } from '$lib/types/firebaseCreateUserResponse';
    import { goto } from '$app/navigation';
    import uiStore from '$lib/stores/uiStore';
    import { fetchUserFromFireBase } from '$lib/utils/shared';
    
    let formError:string | null = "";
 
    // const FirebaseSignup = async (formData: FormData)=> {
    //     const userData = {
    //         "email":formData.get("email")?.toString() || "",
    //         "password":formData.get("password")?.toString() || "",
    //     }
    //     const credentials = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
    //     const user = (await credentials).user;
    //     return user;
    // }
    const submitAction = async (event:Event)=>{
        
        const from = event.target as HTMLFormElement
        const action = from.action;
        const formData = new FormData(from as HTMLFormElement);
        const response = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
                'x-sveltekit-action': 'true'
            }
        });
        const result = deserialize(await response.text());
        if (result.type === 'success') {
            const data = result.data as FirebaseCreateUserResponse;
            if(data.created && data.customToken) {
                goto('/login')
               
            }
            formError = data.errorInfo;
        }else {
            formError ="something went wrong...";
        }
        applyAction(result);
    }
</script>


<main class="container">
    <form class="form" method="POST" on:submit|preventDefault="{submitAction}" action="?/signup" >
        <!-- <form class="form" method="POST" use:enhance action="?/signup" > -->
        <input type="text" id="firstname" name="firstname" placeholder="First name" required>
        <input type="text" id="lastname" name="lastname" placeholder="Last name" required>    
        <input type="text" id="password" name="password" placeholder="Password" required>    
        <input type="email" id="email" name="email" placeholder="Email address" required>
        <button type="submit">Submit</button>
        {#if formError }
           { formError }
        {/if}
    </form>
</main>
    

<style lang="scss">
 
</style>