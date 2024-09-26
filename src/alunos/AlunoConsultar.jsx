import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const AlunoConsultar = () => {
    const [objeto, setObjeto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3005/alunos/${id}`).then(resposta => {
            setObjeto(resposta.data);
        });
    }, []);
    
    if (objeto == null) {
        return (
            <div>
                Carregando...
            </div>
        );
    }

    return (
        <div>
            <div>
                <label>
                    Matrícula:
                    <input type="text" readOnly={true} value={objeto.matricula} />
                </label>
                <label>
                    Nome:
                    <input type="text" readOnly={true} value={objeto.nome} />
                </label>
            </div>
        </div>
    );
};

 