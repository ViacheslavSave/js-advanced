if ("geolocation" in navigator) {
	new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { longitude, latitude } }) => resolve({ longitude, latitude }),
			() => reject(new Error("Prohibited by user"))
		);
	})
		.then((position) => console.log(position))
		.catch((err) => console.error(err));
} else {
	console.error(new Error("No geolocation object"));
}
