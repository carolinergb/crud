import { Router } from "express";
import {
	createUserController,
	deleteUserController,
	listUserController,
	retrieveUserController,
	updateUserController,
} from "../controllers/users.controller";

export const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", listUserController);
userRoutes.get("/:id", retrieveUserController);
userRoutes.delete("/:id", deleteUserController);
userRoutes.patch("/:id", updateUserController);
