import { getUserFromToken } from '$lib/firebase/admin/helper';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async(event) => {

    const locals = event.locals;

    if(locals.claims.dashboard === false) throw redirect(307, '/');

    const client = getUserFromToken(locals.user);
    console.log(client);
    return {
        client:client,
        claims:locals.claims
    }

    
}) satisfies PageServerLoad;