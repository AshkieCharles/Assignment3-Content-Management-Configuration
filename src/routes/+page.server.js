import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("League").select();
  return {
    League: data ?? [],
  };
}