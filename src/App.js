import { Route, Routes } from 'react-router-dom';
import './App.css';
import { categories } from './data/data';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/*' element={<MainPage categories={categories} />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
