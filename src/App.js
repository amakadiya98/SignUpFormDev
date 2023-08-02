import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Landing} />
          <Route path='/signup' Component={SignupForm} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
