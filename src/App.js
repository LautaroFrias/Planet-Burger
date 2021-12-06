import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos a Planet Burger!" />
        <ItemDetailContainer />
      </header>

      <body>
        <img src="../imagenes/2.jpg" alt="astronauta_jpg" />
      </body>
    </div>
  );
}

export default App;
