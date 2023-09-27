import './App.css';
import './css/navbar.css'
import './css/card.css'
import './css/login.css'
import './css/about.css'
import './css/payment.css'
import './css/ideasubmit.css'
import './css/profile.css'
import './css/footer.css'
import './css/leaderboard.css'
import './css/ngo.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { About } from './components/About';
import Payment from './components/Payment';
import { NGO } from './components/NGO';
import {IdeaSubmit} from './components/IdeaSubmit';
import {Profile} from './components/Profile';
import { CardList } from './components/CardList';

import {Footer} from './components/Footer';

import {Leaderboard} from './components/Leaderboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/issues" element={<CardList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/ngo" element={<NGO />} />
        <Route path="/ideasubmit" element={<IdeaSubmit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
