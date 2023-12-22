"use server";
import { createClient } from "@/utils/supabase/server"

export async function readUserSession() {
    const supabase = await createClient();
    return supabase.auth.getSession();
};

export async function readUserAuth() {
    const supabase = await createClient();
    return supabase.auth.getUser();
};
