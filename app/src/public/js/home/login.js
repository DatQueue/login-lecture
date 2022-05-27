"use strict";

const id = document.querySelector("#id");
const psWord = document.querySelector("#psWord");
const loginBtn = document.querySelector("button");

console.log(id);

loginBtn.addEventListener("click", () => {
  login();
});

function login() {
  const req = {
    id: id.value,
    psWord: psWord.value,
  };
  console.log(req);
}
