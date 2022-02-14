import styled from "styled-components";

export const Centralise = styled.main`
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

export const Img = styled.img`
	width: 40px;
	height: 80px;
`;

export const Table = styled.table`
	width: 100%;
	margin-bottom: 20px;
	align-self: flex-start;

	td,
	th {
		border: 1px solid gray;
	}

	td {
		text-align: center;
	}

	th {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	border-collapse: collapse;
`;

export const TotalStyled = styled.section`
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

export const Span = styled.div`
	font-size: 14px;
	color: red;
`;

export const EmptyContainer = styled.div`
	background-color: #eeeeee;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;

	img {
		height: 250px;
		width: 250px;s
	}
`;
