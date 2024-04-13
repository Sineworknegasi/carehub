import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    </>
  );
}

export default App;
