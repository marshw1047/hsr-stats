import './App.css';
import HelloWorld from './Components/HelloWorld.js'
import Header from './Components/Header.js'

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name = "Pooks"/>
    </div>
  );
}

export default App;
