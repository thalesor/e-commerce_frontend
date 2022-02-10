import axios from "axios";

const Base_URL = "http://localhost:5000";

// USERS
async function postBook(data) {
	const requisitionObj = await axios.post(`${Base_URL}/book`, data);
	return requisitionObj;
}

async function signUp(data) {
	try {
		const retorno = await axios.post(`${Base_URL}/signUp`, data);
		return retorno;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export { postBook, signUp };
