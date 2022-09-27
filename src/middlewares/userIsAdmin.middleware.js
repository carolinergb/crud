export const userIsAdmin = (request, response, next) => {
	const { isAdm } = request.body;

	if (isAdm === true) {
		next();
	}

	return response.status(401).json({ message: "Unauthorized" });
};
