import { useContext } from "react";
import NoticiasContext from "../context/NoticiasProvider";

 const useNoticia = () =>{
    return useContext(NoticiasContext)
}

export default useNoticia