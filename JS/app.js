//Importation de Supabase
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";


//  Récupère ces infos dans ton dashboard Supabase (URL + publishable/anon key)
const SUPABASE_URL = "Mettrel'URL copiée sur Supabase ici";
const SUPABASE_KEY = "Mettre la clé publique de votre projet Supabase ici";

//  Client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

      const form = document.querySelector("form"),
      nameField1 = form.querySelector(".name-field1"),
      nameInput1 = emailField1.querySelector(".namefield"),
      emailField1 = form.querySelector(".email-field1"),
      emailInput1 = emailField1.querySelector(".email1"),
      passField1 = form.querySelector(".psw1-field1"),
      passInput1 = passField1.querySelector(".pass1"),
      cPassField1 = form.querySelector(".psw2-field1"),
      cPassInput1 = cPassField1.querySelector(".pass2");

      function nomutilisateur() {
        let namefield = document.getElementById("namefield").value;
        let message = document.getElementById("message");

        if(namefield.length != 0){
            message.classList.remove("invalid");
            passField1.classList.remove("invalid");
            message.style.display = 'none';
          }
          else {
            message.classList.add("invalid");
            passField1.classList.add("invalid");
            message.style.display = 'block';
          }
      }

      function arobase(){
        const passwordInp = document.querySelector(".email1");
        const message = document.querySelectorAll(".message1");

        const requirements = [
          { regex: /[@]/}
        ]

        passwordInp.addEventListener("keyup", () => {
          requirements.forEach((item, i) => {

            let isValid = item.regex.test(passwordInp.value);

            if(message[i].length != 0){
              if(isValid) {
                message[i].classList.remove("invalid");
                emailField1.classList.remove("invalid");
                message[i].style.display = 'none';
              } else{
                message[i].classList.add("invalid");
                emailField1.classList.remove("invalid");
                message[i].style.display = 'block';
              }
            }
          })
        })
      }

      function validate1(){
        let password = document.getElementById("pass1").value;
        let cnfrmPassword = document.getElementById("pass2").value;
        let message = document.getElementById("message2");

        if(password.length != 0){
          if(password == cnfrmPassword){
            message.classList.remove("invalid");
            passField1.classList.remove("invalid");
            message.style.display = 'none';
          }
          else {
            message.classList.add("invalid");
            passField1.classList.add("invalid");
            message.style.display = 'block';
          }
        }
      }

      function validate2(){
        let password = document.getElementById("pass1").value;
        let cnfrmPassword = document.getElementById("pass2").value;
        let message = document.getElementById("message3");

        if(cnfrmPassword.length != 0){
          if(password == cnfrmPassword){
            message.classList.remove("invalid");
            cPassField1.classList.remove("invalid");
            message.style.display = 'none';
          }
          else {
            message.classList.add("invalid");
            cPassField1.classList.add("invalid");
            message.style.display = 'block';
          }
        }
      }

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        arobase();
        validate1();
        validate2();

         const Email = RegisterEmail.value.trim();
    const Password = RegisterPassword.value;
    const Prenom = RegisterPrenom.value.trim();
    const Nom = RegisterNom.value.trim();

        if (
          !emailField1.classList.contains("invalid") &&
          !passField1.classList.contains("invalid") &&
          !cPassField1.classList.contains("invalid")
        ) {
          location.href = form.getAttribute("action");

          nameDisplayCheck();
        }
      });

console.log("Tentative inscription", Email, Password, Prenom, Nom);

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

const message = document.getElementById("message1");

if (error) {
    message.textContent = error.message;
    return;
}

console.log("Réponse Supabase", data, error);

      const greeting = document.querySelector('.greeting');
      const greeting2 = document.querySelector('.greeting2');
      const rememberMe = document.querySelector('.input-group1');
      const getName = document.querySelector('#namefield');
      const getEmail = document.querySelector('#email1');
      const getPassword = document.querySelector('#pass1');
      const submitBtn = document.querySelector('#submitBtn1');
      const forgetMe = document.querySelector('#fgtbtn1');

      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      forgetMe.addEventListener("click", function () {
        localStorage.removeItem("name");

        nameDisplayCheck();
      });

      function nameDisplayCheck() {

        if(localStorage.getItem('name')) {
          let name = localStorage.getItem('name');
          greeting.textContent = `${name}`;
          greeting2.textContent = `Bonjour ${name}! Vous êtes déjà connecté. Oublie-toi?`;
          greeting2.style.color = '#341539';
          forgetMe.style.display = 'block';
          rememberMe.style.display = 'none';
          opt2.classList.add("opt2");
          opt2.classList.remove("opt2");
          opt3.classList.remove("opt3");
          opt4.classList.remove("opt4");
          opt7.classList.remove("opt7");
          opt8.classList.remove("opt8");
          opt9.classList.remove("opt9");
          opt10.classList.remove("opt10");
          opt11.classList.remove("opt11");
          opt12.classList.remove("opt12");
          opt13.classList.remove("opt13");
          opt14.classList.remove("opt14");
          opt15.classList.remove("opt15");
        } else {
          greeting.textContent = '';
          greeting2.textContent = 'Bienvenue!';
          greeting2.style.display = 'none';
          forgetMe.style.display = 'none';
          rememberMe.style.display = 'block';
          opt2.classList.add("opt2");
          opt3.classList.add("opt3");
          opt4.classList.add("opt4");
          opt7.classList.add("opt7");
          opt8.classList.add("opt8");
          opt9.classList.add("opt9");
          opt10.classList.add("opt10");
          opt11.classList.add("opt11");
          opt12.classList.add("opt12");
          opt13.classList.add("opt13");
          opt14.classList.add("opt14");
          opt15.classList.add("opt15");
        }
      }

      document.body.onload = nameDisplayCheck;
      console.log(localStorage.getItem('name'));
