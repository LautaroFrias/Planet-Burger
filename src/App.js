import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos a Planet Burger!" />
      </header>

      <body>
        <img src="../imagenes/2.jpg" alt="astronauta_jpg" />
      </body>
    </div>
  );
}

export default App;
