"use strict";
new Promise((resolve, reject) => {
	navigator.geolocation.getCurrentPosition(
		({ coords: { longitude, latitude } }) => resolve({ longitude, latitude }),
		() => reject(new Error("Не удалось получить местоположение"))
	);
})
	.then((position) => console.log(position))
	.catch((err) => console.log(err));