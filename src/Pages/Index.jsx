import React, { useState, useEffect, useContext } from 'react';
import Loader from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import { validateBook } from '../../services/joi-service';
import { postBook } from '../../services/axios-service';

const SignUp = () =>
{
    const [isFormActive, setIsFormActive] = useState(true);
    const { userData, message, hideMessage } = useContext(UserContext);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        imageUrl: '',
        description: '',
        value: '',
        in_stock: ''
    })

    async function onPostBook(e)
    {
        e.preventDefault();
        setIsFormActive(false);
        const validation = validateBook(formData);
        if(validation.hasErrors === false)
        {
           
           try{
                const result = await postBook(formData);
                message(`O livro foi cadastrado 🥰`, 'success', 'Sucesso!', hideMessage());
                navigate('/');
           }
           catch(err)
           {
            message(err.response.data, 'error', 'Erro ao cadastrar o livro!');
            setIsFormActive(true);
           }
        }
        else
        {
            message(validation.errors, 'error', 'Erro ao cadastrar o livro!');
            setIsFormActive(true);
        }
    }

    const onInputChange = (e) => 
    {
        setFormData({...formData, 
        [e.target.name]: e.target.value});
    }

    return <>
      <Form onSubmit={onFormPost}>
        
      </Form>
    </>
}

export default SignUp;