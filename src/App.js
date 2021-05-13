import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About/About"
import Portfolio from './pages/Portfolio/Portfolio';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact basename={process.env.PUBLIC_URL} path="/" component={About} />
        <Route exact basename={process.env.PUBLIC_URL} path="/React-Portfolio/about" component={About} />
        <Route exact basename={process.env.PUBLIC_URL} path="/React-Portfolio/portfolio" component={Portfolio} />
        <Route exact basename={process.env.PUBLIC_URL} path="/React-Portfolio/experience" component={Experience} />
        <Route exact basename={process.env.PUBLIC_URL} path="/React-Portfolio/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
