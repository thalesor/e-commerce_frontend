import React, { useState, useContext } from "react";
import Menu from "../Menu/Index";
import Context from "../../contexts/AppContext";
import { Centralise, Img, Table, TotalStyled, EmptyContainer } from "./styles.js";
import { finalizarCompra } from "../../services/axios-service";
import { useNavigate } from "react-router-dom";
import  empty from './cart-empty.png';
export default function PageCarrinho() {
	const { token, carrinho, setCarrinho } = useContext(Context);
	const navegate = useNavigate();

	function Carrinho() {
		return (
			<Table>
				<thead>
					<tr>
						<td>Images</td>
						<td>Product</td>
						<td>description</td>
						<td>Price</td>
					</tr>
				</thead>
				<tbody>
					{carrinho.map((b) => (
						<tr key={b._id}>
							<td>
								<Img src={b.imageUrl} alt="erro" />
							</td>
							<td>{b.title}</td>
							<td>{b.description}</td>
							<td>{b.value}</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}

	async function fecharCompra(dado) {
		await finalizarCompra(token, dado);
		setCarrinho([]);
		navegate("/");
	}

	function Total() {
		let soma = 0;
		const compras = { ...carrinho };
		for (let i = 0; i < carrinho.length; i++) {
			soma += carrinho[i].value;
			delete compras[i].category;
			delete compras[i].views;
			delete compras[i].in_stock;
		}

		const somaFinal = soma.toFixed(2);
		const comprasCompletas = { ...compras, valorTotal: somaFinal };

		return (
			<TotalStyled>
				<h3>Total: {somaFinal}</h3>
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
				{carrinho.length > 0 ?
				<>
				<h2> Seu Carrinho:</h2>
				<Carrinho />
				<Total />
				</>
				:
				<EmptyContainer>
					<img src={empty}/>
				</EmptyContainer>
			}
			</Centralise>
			
		</>
	);
}
