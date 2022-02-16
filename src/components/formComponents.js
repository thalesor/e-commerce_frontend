import styled from "styled-components";

export const ConteinerStyled = styled.main`
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-inline: 16px;
`;

export const SectionStyled = styled.section`
	border: 3px solid #6c757d;
	padding: 22px;

	h2 {
		text-align: center;
		font-weight: 400;
		margin-bottom: 16px;
	}

	hr {
		border-top: medium solid #ccc;
		margin: 40px 0;
		height: 1px;
		overflow: visible;
		padding: 0;
		color: #ccc;
		text-align: center;

		::after {
			content: "ou";
			display: inline-block;
			position: relative;
			top: -0.9em;
			font-size: 1.4em;
			padding: 0 0.3em;
			background: white;
		}
	}
`;

export const FormStyled = styled.form`
	input {
		width: 100%;
		height: 52px;
		padding: 12px;
		border: 1px solid #6c757d;
		border-radius: 5px;
		margin: 16px 0;

		font-size: 16px;
	}

	button {
		width: 100%;
		height: 52px;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		margin-top: 30px;
		border: 1px solid #6c757d;
	}
`;
