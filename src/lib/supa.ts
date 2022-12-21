import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient;

export default function initializeSupabase() {
  if (supabase) {
    return supabase;
  }
  supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '');
  return supabase;
}
