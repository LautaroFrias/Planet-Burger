import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Notification from "./components/Notification/Notification";
import { NotificationContextProvider } from "./components/Context/NotificationContext";
import { CarritoContexto } from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";
import BuyOrders from "./components/BuyOrders/BuyOrders";

function App() {
  return (
    <div className='App'>
      <CarritoContexto>
        <NotificationContextProvider>
          <BrowserRouter>
            <NavBar />
            <Notification />
            <Routes>
              <Route exact path='/' element={<ItemListContainer greeting='Menú' />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:paramId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/buyOrders' element={<BuyOrders />} />
            </Routes>
          </BrowserRouter>
        </NotificationContextProvider>
      </CarritoContexto>
    </div>
  );
}

export default App;
