import {Routes, Route} from 'react-router-dom'

//importar páginas 
import Principal from '../pages/principal';
import Sobre from '../pages/sobre';
import Galeriadefotos from '../pages/galeriadefotos';
import Maisdetalhes from '../pages/maisdetalhes';
export default function Rotas(){
    return(
        <Routes>
    <Route path='/' element={<Principal/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/galeriadefotos' element={<Galeriadefotos/>}/>
    <Route path='/maisdetalhes' element={<Maisdetalhes/>}/>
</Routes>
    )
}
