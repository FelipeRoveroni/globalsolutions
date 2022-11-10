import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import {FaEdit, FaTrash} from 'react-icons/fa'

export default function ListaLogin(){

    return(
        <div>
            <h1>Lista de Usuarios</h1>
            <Link to="/Incluir">Inserir Novo Usuario</Link>
            <table>
                <thead>
                    <tr>
                        <th>RM</th><th>Nome</th><th>Sobrenome</th><th>Email</th><th>Senha</th><th>Genero</th><th>Meio De Locomocao</th><th></th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}