"use strict";
class Car {
	#brand;
	#model;
	#mileage;
	constructor(brand, model, mileage) {
		this.#brand = brand;
		this.#model = model;
		this.setMileage = mileage;
	}
	set setMileage(mileage) {
		this.#mileage = mileage;
	}
	get info() {
		console.log(`Марка: ${this.#brand} модель: ${this.#model} Пробег: ${this.#mileage}`);
	}
}

