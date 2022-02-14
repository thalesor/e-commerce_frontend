import axios from "axios";

const Base_URL = "https://back-library.herokuapp.com";

function createConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

async function postBook(data) {
	const requisitionObj = await axios.post(`${Base_URL}/book`, data);
	return requisitionObj;
}

async function getBooks() {
	const requisitionObj = await axios.get(`${Base_URL}/books`);
	return requisitionObj;
}

async function getBook(title) {
	const requisitionObj = await axios.get(`${Base_URL}/book`, {
		headers: {
			title: title,
		},
	});
	return requisitionObj;
}

async function getCategories() {
	const requisitionObj = await axios.get(`${Base_URL}/categories`);
	return requisitionObj;
}

async function signUp(data) {
	try {
		const retorno = await axios.post(`${Base_URL}/signUp`, data);
		return retorno;
	} catch (error) {
		return error;
	}
}

async function signIn(data) {
	const promesa = await axios.post(`${Base_URL}/signIn`, data);
	return promesa;
}

async function logout(data) {
	const config = createConfig(data);

	const user = await axios.post(`${Base_URL}/logout`, null, config);
	return user;
}

async function finalizarCompra(token, data) {
	const config = createConfig(token);

	await axios.post(`${Base_URL}/registrarCompra`, data, config);
}

async function getCompras(token) {
	const config = createConfig(token);

	const resposta = await axios.get(`${Base_URL}/getCompras`, config);
	return resposta.data;
}

export {
	postBook,
	signUp,
	getCategories,
	getBook,
	getBooks,
	signIn,
	finalizarCompra,
	logout,
	getCompras,
};
