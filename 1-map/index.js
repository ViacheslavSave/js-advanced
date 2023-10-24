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

const usersAllId = users.map((user) => user.id);
const usersUnique = [...new Set(usersAllId)].map((idUnique) => users.find((user) => user.id === idUnique));
