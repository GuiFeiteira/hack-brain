import './App.css';
import NavBar from './Componentes/NavBar';
import Home from './Paginas/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/home" element={<Home />} />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
