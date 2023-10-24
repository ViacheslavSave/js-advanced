"use strict";
function getDiceNum(dice) {
	const numDice = dice.charAt(0) === "d" && dice.slice(1);
	if (!["4", "6", "8", "10", "12", "16", "20"].includes(numDice)) return null;
	return Math.ceil(Math.random() * numDice);
}
