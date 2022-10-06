import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import HomeContainer from "./components/HomeContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <NavBar nombreDeEmpresa="Activá Studio"/>
      <Routes>
        <Route path={"/"} element={<HomeContainer/>} />
        <Route path={"/category/:id"} element={<ItemListContainer/>} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path={ "*" } element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
