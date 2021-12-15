import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemCartContainer from "./components/ItemCartContainer/ItemCartContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenidos a Planet Burger!" />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route path="/detail/:paramId">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <ItemCartContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
