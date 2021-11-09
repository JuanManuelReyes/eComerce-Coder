import './App.css';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
          
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </ Router>
    </CartProvider>
  );
}

export default App;
