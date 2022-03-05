import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import react from 'react';
import ComponenteMostrarPelicula from './peliculas/MostrarPelicula';

function App() {
  return (
    <div className="App">
    <div className='container'>
      <h1>Tabla de peliculas</h1>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<ComponenteMostrarPelicula/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;