import React, { useContext } from "react";
import Menu from "../Menu/Index";
import Context from "../../contexts/AppContext";
import {
	Centralise,
	Img,
	Table,
	TotalStyled,
	EmptyContainer,
	Span
} from "./styles.js";
import { finalizarCompra } from "../../services/axios-service";
import { useNavigate } from "react-router-dom";
import empty from "./cart-empty.png";
export default function PageCarrinho() {
	const { token, carrinho, setCarrinho, displayMessage } = useContext(Context);
	const navegate = useNavigate();

	function Carrinho() {
		return (
			<Table>
				<thead>
					<tr>
						<td></td>
						<td>Livro</td>
						<td>Preço</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{carrinho.map((b, i) => (
						<tr key={i}>
							<td>
								<Img src={b.imageUrl} alt="erro" />
							</td>
							<td>{b.title}</td>
							<td>{b.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
							<td><Span onClick={()=> displayMessage(
								'warning',
								'Aviso',
								`Tem certeza que deseja remover ${b.title} do carrinho?`,
								() => removeItemCarrinho(b),
								true
							)}>Remover</Span></td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}

	function removeItemCarrinho(object)
	{
		const newCarrinho = carrinho.filter(b => b !== object); 
		setCarrinho([...newCarrinho]);
	}

	async function fecharCompra(dado) {
		try{
			await finalizarCompra(token, dado);

			const jesus = <><Carrinho />
			<Total /></>;
			
			setCarrinho([]);
			displayMessage("success", "Tudo certo", "Obrigado por comprar conosco 🤩");
			navegate("/");
		}
		catch(error)
		{
			displayMessage("error", "Falha", error.response.data);
		}
	}

	function Total() {
		let soma = 0;
		const compras = [...carrinho];
		for (let i = 0; i < carrinho.length; i++) {
			soma += carrinho[i].value;
			delete compras[i].category;
			delete compras[i].views;
			delete compras[i].in_stock;
			delete compras[i].description;
		}

		const comprasCompletas = { produtos: compras, valorTotal: soma };

		return (
			<TotalStyled>
				<h3>Total: {soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
				<button onClick={() => fecharCompra(comprasCompletas)}>
					Finalizar Compra
				</button>
			</TotalStyled>
		);
	}

	return (
		<>
			<Menu />

			<Centralise>
				{carrinho.length > 0 ? (
					<>
						<h2> Seu Carrinho:</h2>
						<Carrinho />
						<Total />
					</>
				) : (
					<EmptyContainer>
						<img src={empty} />
					</EmptyContainer>
				)}
			</Centralise>
		</>
	);
}
