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
    <div className="text-gray-100 antialiased bg-gray-900 bg-opacity-90"> 
    {/* bg-custom-greyblue 
      bg-gray-900 bg-opacity-90*/}
      <Router>

        <Header />

        <div>
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
