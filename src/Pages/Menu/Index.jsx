import React, { useContext } from 'react';
import {
	AiOutlineShoppingCart as Carrinho,
	AiOutlineDollar as Purchase
} from "react-icons/ai";

import { IoExitOutline  as Sair } from "react-icons/io5";
import { MenuStyled, MenuContainer, CarrinhoContainer, Badge } from './Style';
import Context from "../../contexts/AppContext";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FormButton } from '../ShareComponents';


export default function Menu() {
	const { carrinho, deslogar, displayMessage } = useContext(Context);
	const navegate = useNavigate();
    const location = useLocation();

	return (
		<MenuStyled>
			<MenuContainer>
			<div>
			<Purchase onClick={() => navegate("/historico-de-compras")}></Purchase>
			<Sair onClick={()=> deslogar()}/>
			</div>
			<h1>Livraria</h1>
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
			</MenuContainer>
			{location.pathname !== '/' ? <FormButton onClick={()=> navegate(-1)}>Voltar</FormButton> : ''}
		</MenuStyled>
	);
}