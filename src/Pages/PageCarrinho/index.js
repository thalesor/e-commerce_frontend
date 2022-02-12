import React, { useState, useContext } from 'react';
import styled from "styled-components";
import Menu from "../Menu/Index";
import Context from "../../contexts/AppContext";

export default function PageCarrinho() {

	const { carrinho } = useContext(Context);
	console.log(carrinho);
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
								<Img src={b.imageUrl} alt="erro"/>
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

	
	function Total() {
		let soma = 0;
		for (let i = 0; i < carrinho.length; i++) {
			soma += carrinho[i].value;
		}
		return (
			<TotalStyled>
				<h3>Total: {soma}</h3>
				<button>Finalizar Compra</button>
			</TotalStyled>
		);
	}
	

	return (
		<>
			<Menu />
			<Centralise>
				<h2> Seu Carrinho:</h2>
				<Carrinho />
				<Total />
			</Centralise>
		</>
	);
}

const Centralise = styled.main`
	width: 100%;
	height: 90vh;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;

	h2 {
		width: 100%;
		margin: 15px;
		font-family: "Tangerine", cursive;
		font-size: 40px;
		text-align: left;
	}

	section {
		display: flex;
		p {
		}
	}
`;

const Img = styled.img`
	width: 40px;
	height: 80px;
`

const Table = styled.table`
	width: 100%;
	margin-bottom: 20px;

	td,
	th {
		border: 1px solid gray;
	}

	td {
		padding: 12px 0;
		text-align: center;
	}

	th {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	border-collapse: collapse;
`;

const TotalStyled = styled.section`
	width: 100%;
	display: flex;
	font-size: 20px;
	justify-content: space-evenly;

	div {
		display: flex;
	}

	button {
		width: 120px;
		height: 40px;
		background: #fff;
		border: 1px solid black;
	}
`;
