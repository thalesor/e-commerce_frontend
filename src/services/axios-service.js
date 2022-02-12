import axios from "axios";

const Base_URL = "http://localhost:5000";

// USERS
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
            title: title
          }
    });
	return requisitionObj;
}


async function getCategories() 
{
    const requisitionObj = await axios.get(`${Base_URL}/categories`);
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

async function signIn(data) {
	try {
		const promesa = await axios.post(`${Base_URL}/signIn`, data);
		const token = promesa.data;
		return token;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export { postBook, signUp, getCategories, getBook, getBooks, signIn };
