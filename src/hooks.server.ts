/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    
    console.log("Server Hooks running");


    const response = await resolve(event);
    return response;
  }