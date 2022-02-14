import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
	ConteinerStyled,
	SectionStyled,
	FormStyled,
} from "../../components/formComponents";
import Context from "../../contexts/AppContext";
import validationDadosCadastrados from "./validation";
import { FormButton } from "../ShareComponents";
import { signUp } from "../../services/axios-service";

export default function PageCadastro() {
	const [formData, setFormData] = useState({
		user: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { displayMessage, displayToast } = useContext(Context);
	const navegate = useNavigate();

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		const valid = validationDadosCadastrados(formData);

		if (valid.hasErrors) {
			displayMessage("error", "Falha", valid.errors);
			return;
		}

		const user = {
			user: formData.user,
			email: formData.email,
			password: formData.password,
		};

		try {
			const promessa = await signUp(user);
			console.log(promessa);
			displayToast("success", `Você foi cadastrado 🥰`);
			navegate("/login");
		} catch (error) {
			displayMessage("error", "Falha", error);
		}
	}

	return (
		<ConteinerStyled>
			<SectionStyled>
				<h2>Registro</h2>
				<FormStyled onSubmit={hadlerSubmit}>
					<label>O seu nome</label>
					<input
						type="text"
						name="user"
						value={formData.user}
						placeholder="Enter Username"
						onChange={(e) => handlerInput(e)}
					></input>
					<label>Seu endereço de e-mail</label>
					<input
						type="email"
						placeholder="Email address..."
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
					></input>
					<label>Sua senha</label>
					<input
						type="password"
						placeholder="Enter password"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
					></input>
					<label>Repita a sua senha</label>
					<input
						type="password"
						placeholder="Confirm password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={(e) => handlerInput(e)}
					></input>
					<FormButton type="submit">Registre-se agora</FormButton>
				</FormStyled>
			</SectionStyled>
		</ConteinerStyled>
	);
}
