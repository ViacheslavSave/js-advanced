"use strict";
const users = [
	{
		id: 1,
		name: "Вася",
	},
	{
		id: 2,
		name: "Петя",
	},
	{
		id: 1,
		name: "Вася",
	},
];

const unique = new Set(users.map(({id}) => users.find(user => user.id === id)));