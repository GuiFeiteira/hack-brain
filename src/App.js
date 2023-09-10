import './App.css';
import NavBar from './Componentes/NavBar';
import Home from './Paginas/Home';
import ContactForm from './Paginas/Contacts';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './Componentes/Footer';



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>     
      <Route path="/" element={<Home />} />
      <Route path="/contactos" element={<ContactForm />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
