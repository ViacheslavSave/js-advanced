"use strict";
class Person {
	#race;
	#name;
	#leng;
	constructor(race, name, leng) {
		this.#race = race;
		this.#name = name;
		this.#leng = leng;
	}
	speak() {
		console.log(`Язык: ${this.#leng} Имя: ${this.#name}`);
	}
}

class Orc extends Person {
	#weapon;
	constructor(name, weapon) {
		super("orc", name, "Орочий");
		this.#weapon = weapon;
	}
	makeDamage() {
		console.log("Нанесение урона orc");
	}
	speak() {
		console.log(`Ака'Магош`);
	}
}

class Elf extends Person {
	#spell;
	constructor(name, spell) {
		super("elf", name, "эльфийский");
		this.#spell = spell;
	}
	createSpell() {
		console.log("Нанесение урона elf");
	}
	speak() {
		console.log(`Andaran atish'an`);
	}
}

const orc = new Orc("orc", "топор");
orc.speak();
orc.makeDamage();

const elf = new Elf("elf", "заклинание");
elf.speak();
elf.createSpell();
