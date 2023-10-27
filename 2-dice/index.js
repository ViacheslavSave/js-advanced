"use strict";
function getDiceNum(dice) {
	const res = dice.match(/^(?:d|dice)(4|6|8|10|12|16|20)$/);
	return res && Math.ceil(Math.random() *Number(res[1]));
}