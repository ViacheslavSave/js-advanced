import { Task } from "./task.js";
import { User } from "./user.js";

const task = new Task("сообщение");
const user = new User(task);
user.do();
