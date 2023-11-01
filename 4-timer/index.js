"use strict";

const RTF = new Intl.RelativeTimeFormat("ru");
const PR = new Intl.PluralRules("ru");
const untilTheNewYearHTML = document.querySelector(".untilTheNewYear__res");

const formatMinSec = {
	minutes: {
		one: "минута",
		few: "минуты",
		many: "минут",
	},
	seconds: {
		one: "секунда",
		few: "секунды",
		many: "секунд",
	},
};

function newYear() {
	const currentDate = new Date();
	const objDate = {
		month: 11 - currentDate.getMonth(),
		day: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() - currentDate.getDate(),
		hours: 24 - currentDate.getHours() - 1,
		minutes: 60 - currentDate.getMinutes() - 1,
		seconds: 60 - currentDate.getSeconds() - 1,
	};
	return Object.entries(objDate).reduce((acc, [period, num]) => (acc += formatDate(period, num) + " "), "");
}

function formatDate(period, num) {
	switch (period) {
		case "month":
		case "day":
		case "hours":
			return RTF.format(num, period).replace(/\D+\s/, "");
		case "minutes":
		case "seconds":
			return num + " " + formatMinSec[period][PR.select(num)];
	}
}

(function () {
	untilTheNewYearHTML.innerText = newYear();
	setInterval(() => {
		untilTheNewYearHTML.innerText = newYear();
	}, 1000);
})();
