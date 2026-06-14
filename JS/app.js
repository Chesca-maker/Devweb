//Importation de Supabase
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";


//  Récupère ces infos dans ton dashboard Supabase (URL + publishable/anon key)
const SUPABASE_URL = "Mettrel'URL copiée sur Supabase ici";
const SUPABASE_KEY = "Mettre la clé publique de votre projet Supabase ici";

//  Client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

     
