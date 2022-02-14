import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Context from "../../contexts/AppContext";
import { getCategories, getBooks } from '../../services/axios-service';
import {  Legend, AppContainer, FormButton } from '../ShareComponents';
import Menu from "../Menu/Index";
import { Row, BookBox, PriceTag} from './Style';

const Store = () =>
{
    const [categories, setCategories] = useState(null);
    const [books, setBooks] = useState(null);
    const { token } = useContext(Context);
    const navegate = useNavigate();
    
    useEffect(()=> {
        if(!token || token.length===0){
          navegate("/login")
        }
    },[token])
    
    useEffect(() => {
    async function fetchData() 
    {
        try 
        {
            const categoriesList = await getCategories();
            setCategories([...categoriesList.data]);

            const booksList = await getBooks();
            setBooks([...booksList.data]);
            
        }
        catch(err)
        {
            console.log("Erro ao retornar as categorias");
        }
    }
    fetchData();
    }, []);



    return <>
    <Menu/>
    <AppContainer>
    <FormButton onClick={()=> {
        navegate("/book-register")
    }}>
        Cadastrar livro
    </FormButton>
        { categories ?
        (
            categories.map((cat) => 
            {
                const filteredBooks = books?.filter(b => b.category === cat.name);
                return (
                        filteredBooks?.length ? 
                        <>
                        <Legend>{cat.name}</Legend>
                            <Row>
                            {
                                filteredBooks.map((book, i) => 
                                {
                                    return (
                                        <>
                                        <Link key={i} to={decodeURI(`/produtos/${book.title}`)}>
                                        <BookBox cover={book.imageUrl}>
                                            <PriceTag>{book.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</PriceTag>
                                        </BookBox>
                                        </Link>
                                        </>
                                    )
                                }
                            )}
                        </Row>
                        </>
                        :
                        ''
                );
            })
        )
        : 
        'Não há itens na loja'
        }
    </AppContainer>
    </>
}

export default Store;