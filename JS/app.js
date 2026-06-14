//Importation de Supabase
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";


//  Récupère ces infos dans ton dashboard Supabase (URL + publishable/anon key)
const SUPABASE_URL = "https://efkrdnemrcvlytyfenng.supabase.co";
const SUPABASE_KEY = "sb_publishable_EwC1cqIYolku4XMNW0um5A_dUiU2QDu";

//  Client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

//Champs du formulaire d'inscription
const RegisterEmail = document.getElementById("getEmail");
const RegisterPassword = document.getElementById("getPassword");
const RegisterPrenom = document.getElementById("registerPrenom");
const RegisterNom = document.getElementById("getName");

const form = document.getElementById(".form");

console.log("Tentative inscription", Email, Prenom, Nom);


//Contrôle des données du formulaire d'inscription
form.addEventListener("submit", (event) => {
    event.preventDefault();     //Empêche l'envoi automatique du formulaire

//  Récupération des valeurs des formulaires
    const Email = RegisterEmail.value.trim();
    const Password = RegisterPassword.value;
    const Prenom = RegisterPrenom.value.trim();
    const Nom = RegisterNom.value.trim();

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
