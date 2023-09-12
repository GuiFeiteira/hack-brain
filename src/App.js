import './App.css';
import NavBar from './Componentes/NavBar';
import Home from './Paginas/Home';
import ContactForm from './Paginas/Contacts';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Sobre from './Paginas/Sobre';
import Footer from './Componentes/Footer';
import Mentores from './Paginas/Mentores';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>     
      <Route path="/" element={<Home />} />
      <Route path="/contactos" element={<ContactForm />} />
      <Route path="/sobre"  element={<Sobre/>} />
      <Route path='/mentores' element={<Mentores/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
