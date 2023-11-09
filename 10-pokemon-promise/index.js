"use strict";
fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
	.then((response) => response.json())
	.then(({ abilities }) => fetch(abilities[0].ability.url))
	.then((response) => response.json())
	.then(({ effect_entries }) => effect_entries.find((ef) => ef.language.name === "en").effect)
	.then((str) => console.log(str))
	.catch((err) => console.log(err));
