import React, { useState, useLayoutEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import Context from "../../contexts/AppContext";
import { getCategories, getBooks } from '../../services/axios-service';
import {  Legend } from '../ShareComponents';
import { Row, BookBox, PriceTag} from './Style';

const Store = () =>
{
    const [categories, setCategories] = useState(null);
    const [books, setBooks] = useState(null);
    const { userData, displayMessage, displayToast } = useContext(Context);
    
    useLayoutEffect(() => {
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
                                        <BookBox>
                                            <img src={book.imageUrl}></img>
                                            <PriceTag>{book.value}</PriceTag>
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
    </>
}

export default Store;