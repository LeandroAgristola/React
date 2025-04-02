import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router';






function App() {
 

  return (
    <>
      <BrowserRouter>
       <NavBar/> 
       <Routes>
          <Route path='/' element ={<ItemListContainer/>} />
          <Route path='/detalle' element={<p> Ruta detalle</p>} />
       </Routes>
      </BrowserRouter> 

    </>
  )
}

export default App
