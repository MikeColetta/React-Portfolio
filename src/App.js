import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About/About"
import Portfolio from './pages/Portfolio/Portfolio';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <Router>
      <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
