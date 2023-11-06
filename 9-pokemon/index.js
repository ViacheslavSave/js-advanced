"use strict";
const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto/");
request.send();

request.addEventListener("load", function (e) {
	if (!status200(e)) return;
	const { abilities } = JSON.parse(this.responseText);
	const requestAbility = new XMLHttpRequest();
	requestAbility.open("GET", abilities[0].ability.url);
	requestAbility.send();

	requestAbility.addEventListener("load", function (e) {
		if (!status200(e)) return;
		const { effect_entries } = JSON.parse(this.responseText);
		const res = effect_entries.find((elem) => elem.language.name === "en").effect;
    console.log(res);
	});
});

function status200(e) {
	if (e.target.status === 200) {
		return true;
	}
	console.error(e.target.status, e.target.responseText);
}
