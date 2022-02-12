import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/axios-service";
import {
	ConteinerStyled,
	SectionStyled,
	FormStyled,
} from "../../components/formComponents";
import { useAuth } from "../../contexts/AppContext";
import validationDadosLogin from "./validation";

export default function PageLogin() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const { manterLogin } = useAuth();

	const navegate = useNavigate();

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		const user = { ...formData };

		const valid = validationDadosLogin(user);

		if (!valid) {
			alert("erro nos dados de cadastro");
			return;
		}

		try {
			const token = await signIn(user);
			manterLogin(token);
			navegate("/");
		} catch (error) {
			console.log(error);
			alert("Erro, tente novamente");
		}
	}

	return (
		<ConteinerStyled>
			<SectionStyled>
				<h2>Signup From Here</h2>
				<FormStyled onSubmit={hadlerSubmit}>
					<label>Email Address</label>
					<input
						type="email"
						placeholder="Email address..."
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
					/>
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter password"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
					/>
					<button type="submit">Login</button>
					<hr />
					<label>Não possui uma conta?</label>
					<button trpe="text" onClick={() => navegate("/sign-up")}>
						Register Now
					</button>
				</FormStyled>
			</SectionStyled>
		</ConteinerStyled>
	);
}
