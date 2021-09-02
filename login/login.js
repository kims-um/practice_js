const loginInput = document.querySelector(".form input");
const loginButton = document.querySelector(".form button");

function oneClickBtn() {
  let username = loginInput.value;
  if (username === "") {
    alert("write, your name");
  } else if (username.length > 4) {
    alert("4글자 이하로 작성해주세요");
  }
}

loginButton.addEventListener("click", oneClickBtn);
