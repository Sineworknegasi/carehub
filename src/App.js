import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Statstics from './components/Statstics/Statstics';
import Cause from './components/Cause/Cause';
import Qoute from './components/Qoute/Qoute';
import Voluteer from './components/Voluteer/Voluteer';
import Testimonal from './components/Testimonal/Testimonal';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Statstics/>
    <Cause/>
    <Qoute/>
    <Voluteer/>
    <Testimonal/>
    </>
  );
}

export default App;
