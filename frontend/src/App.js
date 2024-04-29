import './output.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Home from "./Views/Home.js"
import About from "./Views/About.js"
import Average from "./Views/Average.js"

function App() {
  
  return (
    <div className="bg-custom-greyblue text-gray-100"> 
      <Router>

        <Header />

        <div className="m-3">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/average" element={<Average />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>

        <Footer />

      </Router>  
    </div>
  );
}

export default App;
