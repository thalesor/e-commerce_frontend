import axios from 'axios';

// USERS
async function postBook(data) 
{
    const requisitionObj = await axios.post("http://localhost:5000/book", data);
    return requisitionObj;
}

async function getCategories() 
{
    const requisitionObj = await axios.get("http://localhost:5000/categories");
    return requisitionObj;
}

export {
    postBook,
    getCategories
}