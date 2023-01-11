import './style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
