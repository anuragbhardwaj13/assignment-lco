import "./App.css";
import Nav from "./components/nav";
import Masthead from "./components/masthead";
import PortfolioSec from "./components/PortfolioSec";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav></Nav>
      <Masthead />
      <PortfolioSec />\
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
