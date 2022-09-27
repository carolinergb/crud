import { users } from "../../database";
import { v4 as uuidv4 } from "uuid";

export const createUserService = (user) => {
	user.id = uuidv4();
	users.push(user);
	return user;
};
