export async function ValidateUserToken(token) {
	const response = await fetch("http://localhost:5050/Users/ValidateUser", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ token: token }),
	});

	return response.json();
}
