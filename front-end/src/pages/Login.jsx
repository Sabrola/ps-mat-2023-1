import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export default function Login() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showWaiting, setShowWaiting] = React.useState(false)
  const [snack, setSnack] = React.useState({
    show: false,
    message: '',
    severity: 'success' // 'error'
  })

  function handleChange(event) {
    if (event.target.name === 'email') setEmail(event.target.value)
    else setPassword(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()      // Impede o recarregamento da página
    setShowWaiting(true)        //Mostra o spinner de espera
    try {
      let response = await fetch('http://localhost:3000/users/login', {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      const result = response.json()
      console.log({result})

      //Grava o token recebido no localStorage
      //Isso é um SERIO PROBLEMA DE SEGUNRANÇA, temos que concentar depois
      window.localStorage.setItem('token', result.token)

      //Exibe o snackBar de sucesso
      setSnack({
        show: true,
        message: 'Autenticação reealizada com sucesso!',
        severity: 'success'
      })

    }
    catch(error) {
      console.error(error)

      //Exibe o snackBar de erro
      setSnack({
        show: true,
        message: error.message,
        severity: 'error'
      })
    }
    finally{
      setShowWaiting(false)   //Esconde o spinner de espera novamente
    }
  }

  function handleSnackClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    
      setSnack({ show: false })
    }
  }

  return (
    <>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showWaiting}
          >
      <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={snack.show} autoHideDuration={4000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>

      <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
        Autentique-se
      </Typography>

      <Paper sx={{
        width: '512px',
        maxWidth: '90%',
        margin: '25px auto 0 auto',
        p: '12px'
      }}>
        <Typography variant="h5" component="div">
          <form onSubmit={handleSubmit}>
            <TextField 
              id="email"
              className="form-field"
              name="email" 
              label="E-mail" 
              variant="filled"
              fullWidth
              onChange={handleChange}
              value={email}
            />
            <TextField 
              id="password"
              className="form-field"
              name="password" 
              label="Senha" 
              variant="filled"
              type="password"
              fullWidth
              onChange={handleChange}
              value={password}
            />
            <Button variant="contained" type="submit" color="secondary" fullWidth>
              Enviar
            </Button>            
          </form>
        </Typography>
      </Paper>
    </>
  )
}