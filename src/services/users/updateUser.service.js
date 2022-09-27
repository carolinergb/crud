import { users } from "../../database";

export const updateUserService = (id, user) => {
	const userIndex = users.findIndex((user) => user.id === id);

	if (userIndex === -1) {
		throw new Error("User not found");
	}

	users[userIndex] = { ...users[userIndex], ...user };

	return users[userIndex];
};
