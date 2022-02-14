import joi from "joi";
import {messages} from 'joi-translation-pt-br';

const cadastroSchema = joi.object({
	user: joi.string().required().label("nome"),
	email: joi.string().required().label("e-mail"),
	password: joi.string().required().label("senha"),
	confirmPassword: joi.string().required().label("confirmação da senha"),
});

export default function validationDadosCadastrados(obj) {
	const validation = cadastroSchema.validate(obj,  { messages, abortEarly: false });

	if (validation.error) {
		return {
            hasErrors: true,
            errors: validation.error.details.map(err => `
			
			\n*${err.message} 
            `)
        }
	}

	if (obj.password !== obj.confirmPassword) {
		return {
            hasErrors: true,
            errors: "As senhas devem ser iguais"
        }
	}

	return true;
}
