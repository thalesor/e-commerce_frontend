import React, { useState, useLayoutEffect, useContext } from 'react';
import {
	AiOutlineShoppingCart as Carrinho,
	AiOutlineLogout as Sair,
} from "react-icons/ai";
import { MenuStyled, CarrinhoContainer, Badge } from './Style';
import Context, { useAuth } from "../../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";


export default function Menu() {
	const { carrinho } = useContext(Context);
	const {deslogar} = useAuth();
	const navegate = useNavigate()

	function logout(){
		deslogar();
		navegate("/login");
	}

	return (
		<MenuStyled>
			<Sair onClick={()=> logout()}/>
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