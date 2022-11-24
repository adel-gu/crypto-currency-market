// Routers
import { Routes, Route } from 'react-router-dom';

// Redux store
import { Provider } from 'react-redux';
import store from './redux/configureStore';

// Components
import NavBar from './components/NavBar';
import Home from './routes/Home';
import CoinDetails from './routes/CoinDetails';

// Bootstrap StyleSheet
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/:coinsCategory" element={<Home />} />
        </Route>
        <Route path="/:coinsCategory/:coinId" element={<CoinDetails />} />
      </Routes>
    </Provider>
  );
}

export default App;
