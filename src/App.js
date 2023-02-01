import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Services from "./components/Services"
import Innovative from "./components/Innovative"
import Specialist  from './components/Specialist';
import CustomesSay from "./components/CustomesSay"
import NewsLetter from "./components/NewsLetter"
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Services/>
      <Innovative/>
      <Specialist/>
      <CustomesSay/>
      <NewsLetter />
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
