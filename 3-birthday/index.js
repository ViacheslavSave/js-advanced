"use strict";
function checkValidAge(date, acceptableAge) {
	const [year, month, day] = date.split("-");
	return new Date(Number(year) + Number(acceptableAge), month - 1, day) < new Date();
}
console.log(checkValidAge("2009-10-17", "14"));
