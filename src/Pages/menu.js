import styled from "styled-components";
import {
	AiOutlineShoppingCart as Carinho,
	AiOutlineMenu as Barras,
} from "react-icons/ai";

export default function Menu() {
	return (
		<MenuStyled>
			<Barras />
			<h1>Minha loja</h1>
			<Carinho />
		</MenuStyled>
	);
}

const MenuStyled = styled.nav`
	width: 100%;
	height: 10vh;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;

	background: rgb(159, 178, 221);

	svg {
		width: 40px;
		height: 30px;
	}

	h1 {
		font-family: "Tangerine", cursive;
		font-size: 50px;
	}
`;
