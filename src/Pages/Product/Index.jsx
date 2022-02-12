import React, { useState, useLayoutEffect, useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import Context from "../../contexts/AppContext";
import { getBook } from '../../services/axios-service';
import {  Legend, FormButton } from '../ShareComponents';
import {  BookBox, Span } from './Style';

const Product = () =>
{
    const { titulo_produto } = useParams();
    const [bookData, setBookData] = useState(null);
    const { addCarrinho } = useContext(Context);
    useLayoutEffect(() => {
    async function fetchData() 
    {
        try 
        {
            const book = await getBook(titulo_produto);
            setBookData({...book.data[0]});
            
        }
        catch(err)
        {
            console.log("Erro ao retornar as informações do livro");
        }
    }
    fetchData();
    }, []);



    return <>
                {bookData &&
                <>
                    <Legend>Informações do livro</Legend>
                    <BookBox>
                        <img src={bookData.imageUrl}></img>
                    </BookBox>
                    <Span>{bookData.title}</Span>
                    <Span>R$ {bookData.value}</Span>
                    <Span>{bookData.description}</Span>
                    <Span>Em estoque: {bookData.in_stock}</Span>
                    <FormButton  onClick={()=> addCarrinho({...bookData})}>
                        Add. ao carrinho
                    </FormButton>
                </>
                }
        </>
}

export default Product;