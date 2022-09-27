import { users } from "../../database";

export const retrieveUserService = (id) => {
	const user = users.find((user) => user.id === id);

	if (!user) {
		throw new Error("User not found");
	}

	return user;
};
