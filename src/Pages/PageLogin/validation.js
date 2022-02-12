import joi from "joi";

const cadastroSchema = joi.object({
	email: joi.string().required(),
	password: joi.string().required(),
});

export default function validationDadosLogin(obj) {
	const validation = cadastroSchema.validate(obj, { abortEarly: false });

	if (validation.error) {
		const messageErro = validation.error.details.map((m) => m.message);
		console.log(messageErro);
		return false;
	}

	return true;
}
