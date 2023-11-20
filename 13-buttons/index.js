"use strict";
const resultCounterHTML = document.querySelector(".result__count");
const resultButtonsBlockHTML = document.querySelector(".result__buttons");
const resultButtonsHTML = resultButtonsBlockHTML.querySelectorAll("Button");
let counter = 0;

resultButtonsBlockHTML.addEventListener("click", (e) => {
	if (e.target.nodeName === "BUTTON") {
		clicker(e);
	}
});

function clicker(e) {
	resultCounterHTML.innerText = `Количество нажатий = ${++counter}`;
	resultButtonsHTML.forEach((button) => (button.innerText = "Нажми меня"));
	e.target.innerText = "Нажата!";
}
