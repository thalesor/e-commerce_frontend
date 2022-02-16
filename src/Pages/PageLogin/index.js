import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/axios-service";
import {
	ConteinerStyled,
	SectionStyled,
	FormStyled,
} from "../../components/formComponents";
import Context, { useAuth } from "../../contexts/AppContext";
import validationDadosLogin from "./validation";
import {  FormButton } from '../ShareComponents';

export default function PageLogin() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const { displayMessage, displayToast } = useContext(Context);
	const { manterLogin } = useAuth();

	const navegate = useNavigate();

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		const user = { ...formData };

		const valid = validationDadosLogin(user);

		if (valid.hasErrors) {
			displayMessage("error", "Falha", valid.errors);
			return;
		}

		try {
			const returned = await signIn(user);
			manterLogin(returned.data.token);
			displayToast("success", `Seja bem-vindo ${returned.data.user}`);

			navegate("/");
		} catch (error) {
			displayMessage("error", "Falha", error.response.data);
		}
	}

	return (
		<ConteinerStyled>
			<SectionStyled>
				<h2>Faça o login</h2>
				<FormStyled onSubmit={hadlerSubmit}>
					<label>Endereço de e-mail</label>
					<input
						type="email"
						placeholder="Email address..."
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
					/>
					<label>Senha</label>
					<input
						type="password"
						placeholder="Enter password"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
					/>
					<FormButton type="submit">Login</FormButton>
					<hr />
					<label>Não possui uma conta?</label>
					<FormButton trpe="text" onClick={() => navegate("/registrar-usuario")}>
						registre-se agora
					</FormButton>
				</FormStyled>
			</SectionStyled>
		</ConteinerStyled>
	);
}
