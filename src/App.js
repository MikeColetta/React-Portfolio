import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Portfolio from './pages/Portfolio';

function App() {
  return (

    <Router>
    <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />

    <Footer />
    </Router>
  );
}

export default App;
