"use strict";
function checkValidAge(date, acceptableAge) {
	const birthday = new Date(date + " 00:00");
	const currentDate = new Date();

	return (
		currentDate.getFullYear() - birthday.getFullYear() > Number(acceptableAge) ||
		(currentDate.getFullYear() - birthday.getFullYear() === Number(acceptableAge) &&
			(currentDate.getMonth() > birthday.getMonth() ||
				(currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() >= birthday.getDate())))
	);
}
console.log(checkValidAge("2009-10-28", "14"));

/*
function checkValidAge(date, acceptableAge) {
	const res = new Date(date + " 00:00");
	res.setFullYear(res.getFullYear() + Number(acceptableAge));
	return res < new Date();
}
*/