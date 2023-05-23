import Joi from 'joi'

const PaymentMethod = Joi.object({

  description: Joi.string()
    .min(2)
    .max(30)
    .required()
    .message({'*': 'A descrição é obrigatória (entre 2 e 30 caracteres)'}),

  operator_fee: Joi.number()
    .min(0)   // Não aceita negativo
    .max(100)
    .required()
    .message({'*': 'A taxa de operação deve ser informada (entre 0 e 100)'})

})

//Permite campos não validados, como id, createdEt e uptadedAt
.options({allowUnknown: true})
export default PaymentMethod