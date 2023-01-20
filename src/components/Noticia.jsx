import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import  Link  from '@mui/material/Link'
import Typography from "@mui/material/Typography"
import  Grid  from "@mui/material/Grid"

export default function Noticia({noticia}) {

    const {urlToImage,title,content,url,description,source} = noticia

  return (
      <Grid
          item
          md={6}
          lg={4}
      >
          <Card>

              <CardMedia
                  component={'img'}
                  alt={`imagen de la noticia ${title}`}
                  image={urlToImage}
                  height='220'
              />

              <CardContent>
                  <Typography variant='body1' color='error'> {source.name}</Typography>
                  <Typography variant='h5' color='primary' component={'div'}> {title}</Typography>
                  <Typography variant='body2' > {description}</Typography>
              </CardContent>
                <CardActions>
                    <Link
                        href={url}
                        target='_blank'
                        variant='button'
                        width={'100%'}
                        textAlign='center'
                        sx={{
                            textDecoration: 'none'
                        }}
                    >Leer Noticia</Link>
                </CardActions>
          </Card>
      </Grid>
  )
}
