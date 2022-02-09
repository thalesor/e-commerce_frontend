import axios from 'axios';

// USERS
async function postBook(data) 
{
    const requisitionObj = await axios.post("http://localhost:5000/book", data);
    return requisitionObj;
}

export {
    postBook
}