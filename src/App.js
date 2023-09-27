import './App.css';
import FormSignUp from './components/FormSignUp';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'



function App() {

  const handleSubmit = (valores) => {
    console.log("AppJs:", valores)
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center' >Formulario Registro</Typography>

      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
