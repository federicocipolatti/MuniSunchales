import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './screens/Home/Home';
import { NavbarMuni } from './components/NavbarMuni/NavbarMuni';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarMuni/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;