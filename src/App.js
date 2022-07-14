import logo from './logo.svg';
import './App.css';
import WebBuilder from './components/WebBuilder';
import Navigation from "./routes"; 
import {BrowserRouter} from 'react-router-dom'
 
function App() {
  return (
    // <div className="App">
    //    <WebBuilder/>
    // </div>
    <BrowserRouter>
    <Navigation />
  </BrowserRouter>
  );
}

export default App;
