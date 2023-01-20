import { FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import useNoticia from '../Hooks/useNoticia'

export default function Formulario() {

  const {eleccion, handleChangeCategoria} = useNoticia()

    const CATEGORIAS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

  return (
      <form>
          <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select 
                label='categoria'
                value={eleccion}
                onChange={handleChangeCategoria}
              >
                {CATEGORIAS?.map(categoria => (
                  <MenuItem
                      key={categoria.value}
                      value={categoria.value}
                  >
                      {categoria.label}
                  </MenuItem>
              ))}</Select>
          </FormControl>
      </form>
  )
}
