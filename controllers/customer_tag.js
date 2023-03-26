// Importar o model correspondente ao controller
const { CustomerTag } = require('../models')

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
    await CustomerTag.create(req.body)
    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
  }
}

controller.retrieve = async (req, res) => {
  try {
    const data = await CustomerTag.findAll()
    
    //HTTP 200: OK (Implicito)
    res.send(data)
  }
  catch {
    console.error(error)
  }
}

controller.retrieveOne = async (req, res) => {
  try {
    const data = await CustomerTag.findByPk(req.params.id)
    
    //HTTP 200: OK (Implicito)
    if(data) res.send(data)

    //HTTP 404 (Not Found)
    else res.status(404).end()
    
  }
  catch(error) {
    console.error(error)
  }
}

module.exports = controller