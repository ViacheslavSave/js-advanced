"use strict";
const resultCounterHTML = document.querySelector(".result__counter");
const resultButtonsHTML = document.querySelectorAll(".result__buttons > Button");
let counter = 0;

document.addEventListener("click", (e) => {
	if (e.target.nodeName === "BUTTON" && e.target.closest(".result__buttons")) {
		clicker(e);
	}
});

function clicker(e) {
	resultCounterHTML.innerText = `Количество нажатий = ${++counter}`;
	resultButtonsHTML.forEach((button) => {
		button.innerText = "Нажми меня";
	});
	e.target.innerText = "Нажата!";
}
