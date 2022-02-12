import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	ConteinerStyled,
	SectionStyled,
	FormStyled,
} from "../../components/formComponents";
import validationDadosCadastrados from "./validation";
import { signUp } from "../../services/axios-service";

export default function PageCadastro() {
	const [formData, setFormData] = useState({
		user: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const navegate = useNavigate();

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		const valid = validationDadosCadastrados(formData);

		if (!valid) {
			alert("erro nos dados de cadastro");
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
			alert(`O usuário foi cadastrado 🥰`);
			navegate("/login");
		} catch (error) {
			console.log(error);
			alert("Erro, tente novamente");
		}
	}

	return (
		<ConteinerStyled>
			<nav>Login</nav>
			<SectionStyled>
				<h2>Signup From Here</h2>
				<FormStyled onSubmit={hadlerSubmit}>
					<label>Username</label>
					<input
						type="text"
						name="user"
						value={formData.user}
						placeholder="Enter Username"
						onChange={(e) => handlerInput(e)}
					></input>
					<label>Email Address</label>
					<input
						type="email"
						placeholder="Email address..."
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
					></input>
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter password"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
					></input>
					<label>Confirm Password</label>
					<input
						type="password"
						placeholder="Confirm password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={(e) => handlerInput(e)}
					></input>
					<button type="submit">Register Now</button>
				</FormStyled>
			</SectionStyled>
		</ConteinerStyled>
	);
}
