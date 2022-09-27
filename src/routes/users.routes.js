import { Router } from "express";
import {
	createUserController,
	deleteUserController,
	listUserController,
	retrieveUserController,
	updateUserController,
} from "../controllers/users.controller";
import { checkEmail } from "../middlewares/checkEmail.middleware";
import { userIsAdmin } from "../middlewares/userIsAdmin.middleware";

export const userRoutes = Router();

userRoutes.post("", checkEmail, createUserController);
userRoutes.get("", userIsAdmin, listUserController);
userRoutes.get("/:id", retrieveUserController);
userRoutes.delete("/:id", deleteUserController);
userRoutes.patch("/:id", updateUserController);
