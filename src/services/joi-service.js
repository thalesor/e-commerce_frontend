import Joi from 'joi';
import pkg from 'joi-translation-pt-br';

const {messages} = pkg;

const bookSchema = Joi.object({
  title: Joi.string().trim().min(5).required().label("Título"),
  category: Joi.string().valid('Terror', 'Mistério', 'Culinária').required().label("Categoria"),
  imageUrl: Joi.string().uri().trim().required().label("URL da imagem"),
  description: Joi.string().min(15).required().label("Descrição"),
  value: Joi.number().positive().required().label("Valor"),
  in_stock: Joi.number().positive().required().label("Estoque")
});

function validateBook(data) 
{
    const validation = bookSchema.validate(data, { messages, abortEarly: false });
    if(validation.error)
    {
        return {
            hasErrors: true,
            errors: validation.error.details.map(err => `*${err.message} 
            
            `)
        }
    }
    else
    {
        return {
            hasErrors: false
        }
    }
}

export {
    validateBook
}