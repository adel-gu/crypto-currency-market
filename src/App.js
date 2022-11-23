// Routers
import { Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Home from './routes/Home';
import CoinDetails from './routes/CoinDetails';

// Bootstrap StyleSheet
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coindetails" element={<CoinDetails />} />
      </Routes>
    </>
  );
}

export default App;
