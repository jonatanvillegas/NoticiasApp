import { Container, Grid, Typography } from "@mui/material"
import Formulario from "./components/Formulario"
import Noticias from "./components/Noticias"
import { NoticiasProvider } from "./context/NoticiasProvider"


function App() {

  
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography textAlign='center' marginY={5} component='h1' variant="h2">
            Buscador de Noticias
          </Typography>

          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'

          >
            <Grid item xs={12} md={6}>
              <Formulario />
            </Grid>
          </Grid>

          <Noticias/>
        </header>
      </Container>
    </NoticiasProvider>
  )
}

export default App
