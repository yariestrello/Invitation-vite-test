import { createClient } from "@supabase/supabase-js";

// Leer las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Imprimir para asegurarnos que se cargan correctamente
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key:", supabaseAnonKey);

// Crear el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);