import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { AlunoListar } from "./alunos/AlunoListar";
import { AlunoConsultar } from "./alunos/AlunoConsultar";

export const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<div>Página inicial aqui</div>} />
            <Route path='alunos' element={<AlunoListar />} />
            <Route path='alunos/:id' element={<AlunoConsultar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}