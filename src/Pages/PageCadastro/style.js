import styled from "styled-components";

export const ConteinerStyled = styled.main`
	height: 100%;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 16px;
`;

export const SectionStyled = styled.section`
	border: 3px solid #6c757d;
	width: 420px;
	padding: 22px;

	h2 {
		text-align: center;
		font-weight: 400;
		margin-bottom: 16px;
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
		color: black;
		font-weight: 700;

		margin-top: 30px;
		background: none;
		border: 1px solid #6c757d;
	}
`;
