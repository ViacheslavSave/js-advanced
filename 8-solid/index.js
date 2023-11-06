"use strict";
class Billing {
	#amount = 10;

	calculateTotal() {
		return this.#amount;
	}
}

class FixBilling extends Billing {}

class HourBilling extends Billing {
	hour;
	constructor(hour) {
		super();
		this.hour = hour;
	}
	calculateTotal() {
		return super.calculateTotal() * this.hour;
	}
}

class ItemBilling extends Billing {
	elem;
	constructor(elem) {
		super();
		this.elem = elem;
	}
	calculateTotal() {
		return super.calculateTotal() * this.elem;
	}
}

class Result {
	static score(billing) {
		return billing.calculateTotal();
	}
}

console.log(Result.score(new FixBilling()));
console.log(Result.score(new HourBilling(50)));
console.log(Result.score(new ItemBilling(100)));
