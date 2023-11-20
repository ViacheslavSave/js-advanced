"use strict";
const arrPromises = [];

// arrPromises.push(fetch(`https://dummyjson.com/products/1000`));
for (let index = 1; index < 10; index++) {
	arrPromises.push(fetch(`https://dummyjson.com/products/${index}`));
}

function race(arrPromises) {
	return new Promise((resolve, reject) => {
		for (const fetch of arrPromises) {
			fetch.then((response) => {
				if (response.ok) {
					resolve(response.json());
				} else {
					reject(`Status: ${response.status}`);
				}
			});
		}
	});
}
race(arrPromises).then(console.log).catch(console.warn);
