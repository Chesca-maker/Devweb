//Importation de Supabase
import { createClient } from "https://efkrdnemrcvlytyfenng.supabase.co";


//  Récupère ces infos dans ton dashboard Supabase (URL + publishable/anon key)
const SUPABASE_URL = "https://efkrdnemrcvlytyfenng.supabase.co";
const SUPABASE_KEY = "sb_publishable_EwC1cqIYolku4XMNW0um5A_dUiU2QDu";

//  Client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log("Tentative inscription", Email, Prenom, Nom);

//  Inscription Supabase
const { data, error } = await supabase.auth.signUp({
    email: Email,
    password: Password,
    options: {
        data: {
            prenom: Prenom,
            nom: Nom
        }
    }
});

    if (error) {
        RegisterError.textContent = error.message;
        return;
    }
console.log("Réponse Supabase", data, error);

}

)
