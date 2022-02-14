import React, { useState, useLayoutEffect, useContext } from 'react';
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Context from "../../contexts/AppContext";
import { validateBook } from '../../services/joi-service';
import { postBook, getCategories } from '../../services/axios-service';
import Menu from "../Menu/Index";
import { Form, AppContainer, Input, FormButton, Legend, Label, TextArea} from '../ShareComponents';
import { Button, Grid} from './Style';

const BookRegister = () =>
{
    const [isFormActive, setIsFormActive] = useState(true);
    const [categories, setCategories] = useState(null);
    const { displayMessage, displayToast } = useContext(Context);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        imageUrl: '',
        description: '',
        value: '',
        in_stock: ''
    })

    useLayoutEffect(() => {
    async function fetchData() 
    {
        try 
        {
            const categoriesList = await getCategories();
            setCategories([...categoriesList.data]);
            
        }
        catch(err)
        {
            console.log("Erro ao retornar as categorias");
        }
    }
    fetchData();
    }, []);


    async function onPostBook(e)
    {
        e.preventDefault();
        setIsFormActive(false);
        
        const validation = validateBook(formData);
        if(validation.hasErrors === false)
        {
           
           try{
               formData.value = parseFloat(formData.value);
               formData.in_stock = parseInt(formData.in_stock);
                await postBook(formData);
                displayToast('success', 'O livro foi cadastrado 🥰');
                navigate('/');
           }
           catch(err)
           {
            displayMessage('error', 'Falha', err.response.data);
            setIsFormActive(true);
           }
        }
        else
        {
            displayMessage('error', 'Falha', validation.errors);
            setIsFormActive(true);
        }
        
    }

    const changeCategory = (category) =>
    {
        setFormData({...formData, 
            category: category});
    }

    const onInputChange = (e) => 
    {
        setFormData({...formData, 
        [e.target.name]: e.target.value});
    }

    return <>
        <Menu/>
        <AppContainer>
        <Legend>Cadastro de livros:</Legend>
      <Form onSubmit={onPostBook}>
        <Label>Título:</Label>
        <Input type="text" autoComplete='false' disabled={isFormActive ? false : true} name='title' onChange={onInputChange} value={formData.title} placeholder="Título" required></Input>
        <Label>Categoria: {formData.category !== "" && `selecionou ${formData.category}`}</Label>
        { categories ?
        (
            <Grid>
            { 
                categories.map((cat) => 
                {
                    return (
                        <>
                        <Button type="button" active={formData.category === cat.name} onClick={() => changeCategory(cat.name)}>{cat.name}</Button>
                        </>
                    );
                })
            }
            </Grid>
        )
        : 
        'Erro ao trazer as categorias'
        }
        <Label>URL da imagem:</Label>
        <Input type="url" autoComplete='false' disabled={isFormActive ? false : true} name='imageUrl' onChange={onInputChange} value={formData.imageUrl} placeholder="URL da imagem da capa" required></Input>
        <Label>Descrição:</Label>
        <TextArea  autoComplete='false' placeholder="Descreva a sinópse do livro" onChange={onInputChange} value={formData.description} disabled={isFormActive ? false : true} name='description'></TextArea>
        <Label>Valor da unidade:</Label>
        <Input type="number" autoComplete='false' placeholder="Quanto custa esse livro" onChange={onInputChange} value={formData.value} disabled={isFormActive ? false : true} name='value'></Input>
        <Label>Quantidade em estoque:</Label>
        <Input type="number" autoComplete='false' placeholder="Qual a quantidade em estoque" onChange={onInputChange} value={formData.in_stock} disabled={isFormActive ? false : true} name='in_stock'></Input>
        <FormButton type="submit" disabled={isFormActive ? false : true}>
        {isFormActive 
        ? 'Cadastrar' 
        :
            <Loader type="Oval" color="#FFFFFF" height={35} width={35} />
        }
        </FormButton>
      </Form>
      </AppContainer>
    </>
}

export default BookRegister;