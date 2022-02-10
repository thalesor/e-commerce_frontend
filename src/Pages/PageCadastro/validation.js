import joi from "joi";

const cadastroSchema = joi.object({
	user: joi.string().required(),
	email: joi.string().required(),
	password: joi.string().required(),
	confirmPassword: joi.string().required(),
});

export default function validationDadosCadastrados(obj) {
	const validation = cadastroSchema.validate(obj, { abortEarly: false });

	if (validation.error) {
		const messageErro = validation.error.details.map((m) => m.message);
		console.log(messageErro);
		return false;
	}

	if (obj.password !== obj.confirmPassword) {
		alert("As senhas devem ser iguais");
		return false;
	}

	return true;
}
