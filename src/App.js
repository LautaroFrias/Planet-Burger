import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Notification from "./components/Notification/Notification";
import { NotificationContextProvider } from "./components/Context/NotificationContext";
import { CartContextProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className='App'>
      <NotificationContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Notification />
            <Switch>
              <Route exact path='/'>
                <ItemListContainer greeting='Menú' />
              </Route>
              <Route path='/category/:categoryId'>
                <ItemListContainer />
              </Route>
              <Route path='/detail/:paramId'>
                <ItemDetailContainer />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationContextProvider>
    </div>
  );
}

export default App;
