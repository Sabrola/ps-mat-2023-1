import React from 'react'
import PageTitle from '../../components/ui/PageTitle'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import Fab from '@mui/material/Fab'
import myfetch from '../../utils/myfetch'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Notification from '../../components/ui/Notification'
import { useNavigate, useParams } from 'react-router-dom'
import PaymentMethod from '../../models/paymentMethod'
import getValidationMessages from '../../utils/getValidationsMessages'

export default function PaymentMethodForm() {
  const API_PATH = '/payment_methods'

  const navigate = useNavigate()
  const params = useParams()

  const [state, setState] = React.useState({
    paymentMethod: {
        description: '',
        operartor_fee:'',
    }, // Objeto vazio
    errors: {},
    showWaiting: false,
    notif: {
      show: false,
      severity: 'success',
      message: ''
    }
  })
  const {
    paymentMethod,
    errors,
    showWaiting,
    notif
  } = state

  function handleFormFieldChange(event) {
    const paymentMethodCopy = {...paymentMethod}
    paymentMethodCopy[event.target.name] = event.target.value
    setState({...state, paymentMethod: paymentMethodCopy})
  }

  function handleFormSubmit(event) {
    event.preventDefault()    // Evita que a página seja recarregada
    // Envia os dados para o back-end
    sendData()
  }

    //Esse useEffect será executado  apenas durante o carregamento inicial da página
  react.useEffect(() => {
    //Se houver parâmetro id na rota, devemos carregar um registroexsitente para edição
    if(params.id) fetchData()
  }, [])

  async function fetchData() {
    setState({...state, showWaiting: true, errors:{}})
    try {
      const result = myfetch.get(`${API_PATH}/${params.id}`)
      setState({
        ...state,
        showWaiting: false
      })
    }
    catch(error) {      
        console.error(error)
        setState({
        ...state, 
            showWaiting: false,
            notif: {
            severity: 'error',
            show: true,
            message: 'ERRO: ' + error.message
            }
        })
      }
  }

  async function sendData() {
    setState({...state, showWaiting: true})
    try {
      
      // Chama a validação da biblioteca Joi
      await PaymentMethod.validateAsync(paymentMethod)

      if (params.id) await myfetch.post(API_PATH, paymentMethod)

      else if (params.id) await myfetch.post(API_PATH, )

      await myfetch.post(API_PATH, paymentMethod)
      setState({
        ...state, 
        showWaiting: false,
        notif: {
          severity: 'success',
          show: true,
          message: 'Novo item salvo com sucesso'
        }
      })
    }
    catch(error) {
      const { validationError, errorMessages } = getValidationMessages(error)
        
        console.error(error)
        setState({
        ...state, 
            showWaiting: false,
            notif: {
            severity: 'error',
            show: true,
            message: 'ERRO: ' + error.message
            }
        })
    }
  }

  function handleNotifClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    
    // Se o item foi salvo com sucesso, retorna à página de listagem
    if(notif.severity === 'success') navigate(-1)

    setState({ ...state, notif: { ...notif, show: false } })
  }

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showWaiting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Notification 
        show={notif.show}
        severity={notif.severity}
        onClose={handleNotifClose}
      >
        {notif.message}
      </Notification>
      
      <PageTitle 
        title={params.id ? "Editar método de pagamento" : "Cadastrar novo método de pagamento"}
       />

      <div>{notif.severity}</div>

      <form onSubmit={handleFormSubmit}>
        <TextField 
          label="Descrição" 
          variant="filled"
          fullWidth
          required
          name="description"  // Nome do campo na tabela
          value={paymentMethod.description}   // Nome do campo na tabela
          onChange={handleFormFieldChange}
          error={errors?.operartor_fee}
          helperTex={errors?.operartor_fee}
        />

        <TextField 
          label="Taxa de operação" 
          variant="filled"
          type="number"
          fullWidth
          required
          name="operator_fee"  // Nome do campo na tabela
          value={paymentMethod.operator_fee}   // Nome do campo na tabela
          onChange={handleFormFieldChange}
        />

        <Fab 
          variant="extended" 
          color="secondary"
          type="submit"
        >
          <SendIcon sx={{ mr: 1 }} />
          Enviar
        </Fab>

      </form>
    </>
  )
}