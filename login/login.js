const loginForm = document.querySelector(".form");
const loginInput = document.querySelector(".form input");

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  greeting.innerText = `hi ${username}`;
}

loginForm.addEventListener("submit", loginSubmit);
