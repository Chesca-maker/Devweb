
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
          title.textContent = 'Connexion';
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
          title.textContent = 'Inscription';
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
