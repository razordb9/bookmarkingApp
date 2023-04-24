import { supabase } from "$lib/supabase/helper";

  export async function load() {
    const { data } = await supabase.from("bookmarks").select();
    return {
      bookmarks: data ?? [],
    };
  }