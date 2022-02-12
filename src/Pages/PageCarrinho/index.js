import styled from "styled-components";
import Menu from "../menu";

export default function PageCarrinho() {
	const books = [
		{
			title: "Dracula",
			category: "terror",
			imageUrl:
				"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSONYlW_s79OoJmFtW6AE9ArJBgp-hgYbk9_H6xoGDK-oxDvKIJdrL3Jrmt7T3NJaES81PqP2UD8cyFPxZnpsfd4h9yb1fhoLK8RtPtw0on&usqp=CAc",
			description: "não brilha",
			value: 40,
		},
		{
			title: "Dracula",
			category: "terror",
			imageUrl:
				"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSONYlW_s79OoJmFtW6AE9ArJBgp-hgYbk9_H6xoGDK-oxDvKIJdrL3Jrmt7T3NJaES81PqP2UD8cyFPxZnpsfd4h9yb1fhoLK8RtPtw0on&usqp=CAc",
			description: "não brilha",
			value: 40,
		},
		{
			title: "Dracula",
			category: "terror",
			imageUrl:
				"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSONYlW_s79OoJmFtW6AE9ArJBgp-hgYbk9_H6xoGDK-oxDvKIJdrL3Jrmt7T3NJaES81PqP2UD8cyFPxZnpsfd4h9yb1fhoLK8RtPtw0on&usqp=CAc",
			description: "não brilha",
			value: 40,
		},
	];

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
					{books.map((b) => (
						<tr key={b.id}>
							<td>
								<img src={b.imageUrl} alt="erro"></img>
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
		for (let i = 0; i < books.length; i++) {
			soma += books[i].value;
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
