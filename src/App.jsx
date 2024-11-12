import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header.jsx';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Footer from "./components/footer/Footer.jsx";

import './App.css'

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
