// Importar o model correspondente ao controller
const { PaymentMethod } = require('../models')

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
    await PaymentMethod.create(req.body)
    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
  }
}

controller.retrieve = async (req, res) => {
  try {
    const data = await PaymentMethod.findAll()
<<<<<<< HEAD
    
    //HTTP 200: OK (Implicito)
    res.send(data)
  }
  catch {
=======
    // HTTP 200: OK (implícito)
    res.send(data)
  }
  catch(error) {
>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae
    console.error(error)
  }
}

controller.retrieveOne = async (req, res) => {
  try {
    const data = await PaymentMethod.findByPk(req.params.id)
    
<<<<<<< HEAD
    //HTTP 200: OK (Implicito)
    if(data) res.send(data)

    //HTTP 404 (Not Found)
=======
    // HTTP 200: OK (implícito)
    if(data) res.send(data)
    
    // HTTP 404: Not Found
>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae
    else res.status(404).end()
    
  }
  catch(error) {
    console.error(error)
  }
}

<<<<<<< HEAD
=======
controller.update = async (req, res) => {
  try {
    const response = await PaymentMethod.update(
      req.body,
      { where: { id: req.params.id }}
    )

    // response retorna um vetor. O primeiro elemento
    // do vetor indica quantos registros foram afetados
    // pelo update
    if(response[0] > 0) {
      // HTTP 204: No content
      res.status(204).end()
    }
    else {  // Não encontrou o registro para atualizar
      // HTTP 404: Not found
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
  }
}

controller.delete = async (req, res) => {
  try {
    const response = await PaymentMethod.destroy(
      { where: { id: req.params.id } }
    )

    if(response) {  // Encontrou e excluiu
      // HTTP 204: No content
      res.status(204).end()
    }
    else {          // Não encontrou e não excluiu
      // HTTP 404: Not found
      res.status(404).end()
    }
  }
  catch(error) {
    console.error(error)
  }
}

>>>>>>> c331981c84dd89cf802584b4f8cb394db1ab5fae
module.exports = controller