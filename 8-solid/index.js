"use strict";
class Billing {
	#amount = 10;
  get amount(){
    return this.#amount
  }
}

class fixBilling extends Billing {
	calculateTotal() {
		return this.amount;
	}
}

class hourBilling extends Billing {
	hour;
	constructor(hour) {
		super();
		this.hour = hour;
	}
	calculateTotal() {
		return this.amount * this.hour;
	}
}

class itemBilling extends Billing {
	elem;
	constructor(elem) {
		super();
		this.elem = elem;
	}
	calculateTotal() {
		return this.amount * this.elem;
	}
}

class Result {
	static score(billing) {
		return billing.calculateTotal();
	}
}

console.log(Result.score(new fixBilling()));
console.log(Result.score(new hourBilling(50)));
console.log(Result.score(new itemBilling(100)));
