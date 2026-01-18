import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qvwlozodesvrbablzqqw.supabase.co";
const supabaseKey = "sb_publishable_HyV4abLOLb3ed5T8-KL5wg_92eFbpqa";

export const supabase = createClient(supabaseUrl, supabaseKey);
