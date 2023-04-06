import type { PageServerLoad } from './$types'
import { fail, redirect } from "@sveltejs/kit";
import { signInWithEmailAndPassword} from "firebase/auth";
  import { auth } from "$lib/firebase/client/initialize";

export const load: PageServerLoad = async () => {
    // todo
}




export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();

    const cookie_options = {
        path: '/', 
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production', 
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30,
    }

    const email = data.get("email");
    const password = data.get("password");
    console.log("email:", email);
    console.log("passwd:", password)

    if (!email || !password) {
      return fail(400);
    }

    try {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log("+page.server.ts");
            console.log(userCredentials.user);
            const idToken = userCredentials.user.getIdToken();

            createSessionCookie(idToken, {expiresIn})
            .then((SessionCookie) => {
                cookies.set('session', SessionCookie, cookie_options);
            });
            
        })
        .catch((error) => {
            console.log("error: ", error.code + "\n" + error.message);

        })
    } catch (error) {
        return fail(400);
    }

    // throw redirect(303, "/");
  },
};

