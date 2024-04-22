import './output.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from "./Views/Home.js"
import About from "./Views/About.js"

function App() {
  return (
    <div> 
      <Router>

        <Header />

        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>

        <Footer />

      </Router>  
    </div>
  );
}

export default App;
