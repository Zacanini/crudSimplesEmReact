import React from "react";

import { Outlet, Link } from "react-router-dom";

export const Layout = () => {

    return(

        <>
            <h3>Menu</h3>
            <nav>
                <li><Link to="/alunos">Alunos</Link></li>
            </nav>
            <Outlet/>
        </>
    )
}