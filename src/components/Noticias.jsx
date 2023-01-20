import  Grid  from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from '../Hooks/useNoticia'
import Noticia from "./Noticia"
import Stack  from "@mui/material/Stack"
import Pagination from "@mui/material/Pagination"

export default function Noticias() {

  const {noticias,totalN,handleChange,pagina} = useNoticias()

  const TotalPage = Math.ceil(totalN / 20) 
  return (
    <>
        <Typography
         textAlign='center'
         marginY={5}
         variant='h3'
         component='h2'
        >
          Ultimas Noticias
          </Typography>

          <Grid
            container
            spacing={2}
          >
            {noticias?.map(noticia => (
              <Noticia
              key={noticia.url}
              noticia={noticia}
              />

            ))}
          </Grid>
      <Stack
        spacing={5}
        direction='row'
        alignItems='center'
        justifyContent={'center'}
        sx={{
          marginY: 5
        }}
      >
        <Pagination 
        count={TotalPage} 
          color="primary"
         onChange={handleChange}
         page={pagina}
        
         />
      </Stack>
    </>
  )
}
