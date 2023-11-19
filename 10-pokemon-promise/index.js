"use strict";
 fetch("https://pokeapi.co/api/v2/pokemon/ditto")
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error("Status code: " + response.status);
	})
	.then(({ abilities }) => fetch(abilities[0].ability.url))
	.then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error("Status code: " + response.status);
	})
	.then(({ effect_entries }) => effect_entries.find((ef) => ef.language.name === "en").effect)
	.then((str) => console.log(str))
	.catch((err) => console.dir(err));
