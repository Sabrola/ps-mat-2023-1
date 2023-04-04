// Importar o model correspondente ao controller
const { User } = require('../models')
const bcrypt = require('bcrypt')
const { underscoredIf } = require('sequelize/types/utils')
const jwt = require(jsonwebtoken)

const controller = {}   // Objeto vazio

/*
  Métodos CRUD do controller
  create: cria um novo registro
  retrieve: lista (recupera) todos os registros
  retrieveOne: lista (recupera) apenas um registro
  update: atualiza um registro
  delete: exclui um registro
*/

controller.create = async (req, res) => {
  try {
    await User.create(req.body)
    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
  }
}

controller.retrieve = async (req, res) => {
  try {
    const data = await User.findAll()
    
    //HTTP 200: OK (Implicito)
    res.send(data)
  }
  catch {
    console.error(error)
  }
}

controller.retrieveOne = async (req, res) => {
  try {
    const data = await User.findByPk(req.params.id)
    
    //HTTP 200: OK (Implicito)
    if(data) res.send(data)

    //HTTP 404 (Not Found)
    else res.status(404).end()
    
  }
  catch(error) {
    console.error(error)
  }
}

controller.update = async (req, res) => {
  try {

    //Se houver sido passado o campo 'password', criptografa a senha
    if (req.body.password) {

    }
  }
  catch(error) {
    console.error(error)
  }
}

controller.login = async (req, res) => {
  try {
    const user = await User.scope({where: {email: req.body.email} })

    //Usúario não encontrado ~> HTTP 401: Unauthorized
    if(!user) return res.status(401).end()

    const pwMatches = await bcrypt.compare(req.body.password, user.password)

    if(pwMatches) {
      //A senha confere
    const token = jwt.sign({
      id: user.id,
      name: underscoredIf.name,
      email: user.email,
      verified_email: user.verified_email,
      is_admin: user.is_admin,
      phone: user.phone
    },
    process.env.TOKEN_SECRET,     //Chave para criptografar o token
    { expiresIn: '24h'}          // Duração do token
    )

    //Retorna o token ~> HTTP 200: OK (Implícito)
    res.json({ auth: true, token })
    }
  }
  catch(error) {
    console.error(error)
  }
}

module.exports = controller