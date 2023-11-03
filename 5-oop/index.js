"use strict";
const Person = function (race, name, leng) {
	this.race = race;
	this.name = name;
	this.leng = leng;
};
Person.prototype.speak = function () {
	console.log(`Язык: ${this.leng} Имя: ${this.name}`);
};

const Orc = function (name, weapon) {
	Person.call(this, "orc", name, "Орочий");
	this.weapon = weapon;
};

Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.makeDamage = function () {
	console.log("Нанесение урона orc");
};

const Elf = function (name, spell) {
	Person.call(this, "elf", name, "эльфийский");
	this.spell = spell;
};

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.createSpell = function () {
	console.log("Нанесение урона Elf");
};
