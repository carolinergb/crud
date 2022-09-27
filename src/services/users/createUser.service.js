import { users } from "../../database";
import { v4 as uuidv4 } from "uuid";

export const createUserService = (name, email, isAdm) => {
	const newUser = {
		id: uuidv4(),
		name,
		email,
		isAdm,
		createdOn: new Date(),
		updatedOn: new Date(),
	};

	users.push(newUser);

	return newUser;
};
