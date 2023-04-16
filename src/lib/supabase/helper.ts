import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASEURL, PUBLIC_SUPABASEKEY } from "$env/static/public";


export const supabase = createClient(PUBLIC_SUPABASEURL, PUBLIC_SUPABASEKEY);

