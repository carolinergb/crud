import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUserService } from "../services/users/listUser.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";

export const createUserController = (request, response) => {
	const { name, email, isAdm } = request.body;

	const createdUser = createUserService(name, email, isAdm);

	return response.status(201).json(createdUser);
};

export const listUserController = (request, response) => {
	listUserService();
	return response.json(users);
};

export const retrieveUserController = (request, response) => {
	try {
		const id = request.params.id;
		const user = retrieveUserService(id);
		return response.status(200).json(user);
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const deleteUserController = (request, response) => {
	try {
		const id = request.params.id;
		deleteUserService(id);
		return response.status(204).send();
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};

export const updateUserController = (request, response) => {
	try {
		const id = request.params.id;
		const user = request.body;

		const updatedUser = updateUserService(id, user);

		return response.status(200).json(updatedUser);
	} catch (error) {
		return response.status(400).json({ message: error.message });
	}
};
