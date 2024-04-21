import './output.css';
import HelloWorld from './Components/HelloWorld.js'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name = "Pooks"/>

      <Footer />
    </div>
  );
}

export default App;
