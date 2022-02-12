import styled from "styled-components";

const MenuStyled = styled.nav`
	width: 100%;
	height: 10vh;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;

	background: #bbbbbb;

	svg {
		width: 40px;
		height: 30px;
	}

	h1 {
		font-family: "Tangerine", cursive;
		font-size: 50px;
	}
`;

const CarrinhoContainer = styled.div`
	width: 40px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`

const Badge = styled.div`
	width: 20px;
	height: 20px;
	background-color: #201f1f;
	position: absolute;
	bottom: -5px;
	right: 0px;
	border-radius: 100%;
	font-size: 15px;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { MenuStyled, CarrinhoContainer, Badge }