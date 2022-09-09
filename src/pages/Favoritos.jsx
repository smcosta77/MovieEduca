import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaTrashAlt } from "react-icons/fa";

import "./Favoritos.css";

const Favoritos = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeLista");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeLista", JSON.stringify(filtroFilmes) )
        toast.success("Filme removido com sucesso!")
    }

  return (
    <div className="minha-lista">   
        <h2>Minha Lista</h2>
        {filmes.length === 0 && <span>Você não tem nenhum filme salvo :(</span>}
        <ul>
            {filmes.map((item) => {
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/movie/${item.id}`}>Ver Detalhes</Link>
                            <FaTrashAlt/>
                            <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
  );
}

export default Favoritos;