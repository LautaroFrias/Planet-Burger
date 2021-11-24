import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">  
      <ItemListContainer greeting="Hola, bienvenidos a Planet Burger"/>
      <img src= "../imagenes/2.jpg" alt="astronauta_jpg" />
      <h2>Sitio en construcción</h2>
      </header>
    </div>
  );
}

export default App;
