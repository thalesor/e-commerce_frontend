import React, { useState, useLayoutEffect, useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import Context from "../../contexts/AppContext";
import { getBook } from '../../services/axios-service';
import {  Legend, FormButton } from '../ShareComponents';
import Menu from "../Menu/Index";
import {  BookBox, Span, Title, Price, ProductContainer } from './Style';

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
    <Menu/>
    <ProductContainer>
        {bookData &&
        <>
            <Legend>Informações do livro</Legend>
            <BookBox>
                <img src={bookData.imageUrl}></img>
            </BookBox>
            <Title>{bookData.title}</Title>
            <Price>R$ {bookData.value}</Price>
            <Span>{bookData.description}</Span>
            <Span>Em estoque: {bookData.in_stock}</Span>
            <FormButton  onClick={()=> addCarrinho({...bookData})}>
                +Add. ao carrinho
            </FormButton>
        </>
        }
        </ProductContainer>
        </>
}

export default Product;