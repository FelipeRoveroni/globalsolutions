import { BrowserRouter, Routes, Route} from 'react-router-dom'
import FormLogin from './Components/login/FormLogin'
import ListaLogin from './Components/login/ListaLogin'
import ListaCarro from './Components/carro/ListaCarro'
import ListaEmpresa from './Components/empresa/ListaEmpresa'
import FormCarro from './Components/carro/FormCarro'
import FormEmpresa from './Components/empresa/FormEmpresa'


export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListaLogin/>}/>
                <Route path='/incluir_Login' element={<FormLogin/>}/>
                <Route path='/editar_Login/:id' element={<FormLogin/>}/>
                <Route path='/incluir_Carro' element={<ListaCarro/>}/>
                <Route path='/editar_Carro/:id' element={<FormCarro/>}/>
                <Route path='/incluir_Empresa' element={<ListaEmpresa/>}/>
                <Route path='/editar_Empresa/:id' element={<FormEmpresa/>}/>
            </Routes>
        </BrowserRouter>
    )
}