import './App.css';
import NavBar from './Componentes/NavBar';
import Home from './Paginas/Home';
import ContactForm from './Paginas/Contacts';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>     
      <Route path="/" element={<Home />} />
      <Route path="/contactos" element={<ContactForm />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
