"use strict";
function getDiceNum(dice) {
	return Math.ceil(Math.random() * Number(dice.replace(/\D/g,'')));
}