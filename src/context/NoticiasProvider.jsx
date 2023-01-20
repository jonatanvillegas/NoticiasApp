import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [eleccion, setEleccion] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalN, setTotalN] = useState(0)

    useEffect(() => {
        const ConsultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${eleccion}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles)
            setTotalN(data.totalResults)
            setPagina(1)

        }

        ConsultarApi()
    }, [eleccion])

    useEffect(() => {
        const ConsultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${eleccion}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles)
            setTotalN(data.totalResults)
        }

        ConsultarApi()
    }, [pagina])

    const handleChangeCategoria = e => {
        setEleccion(e.target.value)
    }

    const handleChange = e => {
        setPagina(e.target.textContent)
    }

    return (
        <NoticiasContext.Provider
            value={{
                eleccion,
                handleChangeCategoria,
                noticias,
                totalN,
                handleChange,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}
export default NoticiasContext