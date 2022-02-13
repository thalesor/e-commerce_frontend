import joi from "joi";
import {messages} from 'joi-translation-pt-br';

const cadastroSchema = joi.object({
	email: joi.string().required().label('e-mail'),
	password: joi.string().required().label('senha'),
});

export default function validationDadosLogin(obj) {
	const validation = cadastroSchema.validate(obj,  { messages, abortEarly: false });

	if (validation.error) {
		return {
            hasErrors: true,
            errors: validation.error.details.map(err => `*${err.message} 
            `)
        }
	}

	return {
		hasErrors: false
	}
}
