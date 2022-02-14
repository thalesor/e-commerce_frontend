import React, { useState, useLayoutEffect, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
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
    const navegate = useNavigate();

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
            <BookBox cover={bookData.imageUrl}/>
            <Title>{bookData.title}</Title>
            <Price>{bookData.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Price>
            <Span>{bookData.description}</Span>
            {bookData.in_stock > 0 ? <Span>Em estoque: {bookData.in_stock}</Span> : <Span red>Estoque esgotado!</Span>}
            <FormButton disabled={bookData.in_stock > 0 ? false : true}  onClick={()=> {
                addCarrinho({...bookData})
                navegate("/")
            }}>
                {bookData.in_stock > 0 ? '+Add. ao carrinho' : 'Indisponível'}
            </FormButton>
        </>
        }
        </ProductContainer>
        </>
}

export default Product;