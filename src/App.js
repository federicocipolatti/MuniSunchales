import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './screens/Home/Home';
import { NavbarMuni } from './components/NavbarMuni/NavbarMuni';

function App() {
  return (
    <div className="App">
      <NavbarMuni fixed="top"/>
      <Home/>
    </div>
  );
}

export default App;