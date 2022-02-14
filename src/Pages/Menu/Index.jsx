import React, { useState, useLayoutEffect, useContext } from 'react';
import {
	AiOutlineShoppingCart as Carrinho,
	AiOutlineLogout as Sair,
	AiOutlineUser as User
} from "react-icons/ai";
import { MenuStyled, CarrinhoContainer, Badge } from './Style';
import Context from "../../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";


export default function Menu() {
	const { carrinho, deslogar } = useContext(Context);
	const navegate = useNavigate()

	return (
		<MenuStyled>
			<div>
			<User onClick={() => navegate("/historico-de-compras")}></User>
			<Sair onClick={()=> deslogar()}/>
			</div>
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