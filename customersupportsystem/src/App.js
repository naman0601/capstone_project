import './App.css';
import Navbar from './layout/NavbarComponent/Navbar';
import Home from './layout/HomeComponent/Home'
import Login from './components/LoginComponent/Login';  
import Register from './components/RegisterComponent/Register';
import Dashboard from './components/DashboardComponent/Dashboard';
import Card from './components/CardComponent/Card';
import Loan from './components/LoanComponent/Loan';
import Offer from './components/OfferComponent/Offer';
import Footer from './layout/FooterComponent/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
         <Navbar/>      
        </header>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dash" element={<Dashboard />} />
          <Route exact path="/card" element={<Card />} />
          <Route exact path="/loan" element={<Loan />} />
          <Route exact path="/offers" element={<Offer />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
