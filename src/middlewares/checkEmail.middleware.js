import { users } from "../database";

export const checkEmail = (request, response, next) => {
	const { email } = request.body;

	const userAlreadyExists = users.find((user) => user.email === email);

	if (userAlreadyExists) {
		return response.status(400).json({ message: "E-mail already registered" });
	}

	next();
};
