import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar nombreDeEmpresa="Activá Studio"/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
