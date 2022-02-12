import React, { useState, useLayoutEffect, useContext } from 'react';
import {
	AiOutlineShoppingCart as Carrinho,
	AiOutlineMenu as Barras,
} from "react-icons/ai";
import { MenuStyled, CarrinhoContainer, Badge } from './Style';
import Context from "../../contexts/AppContext";
import { Link } from "react-router-dom";


export default function Menu() {
	const { carrinho } = useContext(Context);
	return (
		<MenuStyled>
			<Barras />
			<h1>Minha loja</h1>
			<Link to={`/carrinho`}>
				<CarrinhoContainer>
					<Carrinho />
						{carrinho.length > 0 &&
						<Badge>
						{carrinho.length}
						</Badge>
						}
				</CarrinhoContainer>
			</Link>
		</MenuStyled>
	);
}