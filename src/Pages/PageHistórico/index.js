import Menu from "../Menu/Index";

import {
	Centralise,
	//Img,
	Table,
	//TotalStyled,
	//EmptyContainer,
} from "../../components/tableComponents";
import { getCompras } from "../../services/axios-service";
import { useAuth } from "../../contexts/AppContext";
import { useEffect, useState } from "react";

export default function PageHistorioCompras() {
	const { token } = useAuth();
	const [compras, setCompras] = useState(null);

	async function pegar() {
		const promessa = await getCompras(token);
		setCompras(promessa.reverse());
	}

	useEffect(() => {
		pegar();
		console.log(compras);
	}, []);

	return (
		<>
			<Menu />
			<Centralise>
				{compras ? (
					<MinhasCompras compras={compras} />
				) : (
					<h2>Sem compras realizadas</h2>
				)}
			</Centralise>
		</>
	);
}

function MinhasCompras({ compras }) {
	return (
		<>
			<h2>Minhas Compras</h2>
			<Table>
				<thead>
					<tr>
						<td>Day</td>
						<td>Products</td>
						<td>Price por Unidade</td>
						<td>Price Total</td>
					</tr>
				</thead>
				<tbody>
					{compras?.map((compra) => (
						<tr key={compra._id}>
							<td>{compra.data}</td>
							<td>
								{compra.produtos?.map((p) => (
									<p key={p._id}>{p.title}</p>
								))}
							</td>
							<td>
								{compra.produtos?.map((p) => (
									<p key={p._id}>{p.value}</p>
								))}
							</td>
							<td>{compra.valorTotal}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}

function ProdutosComprados({ array }) {
	// const produtos = array.map((p) => p.map((p) => p.title));
	// console.log(produtos);

	return (
		<td>
			{array.map((l) => (
				<p>l</p>
			))}
		</td>
	);
}
