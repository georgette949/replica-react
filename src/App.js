import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import NavBar from "./components/NavBar";
import "./App.css";
import SoundWave from "./pages/SoundWave";
import Join from "./pages/Join";
import Discovery from "./pages/Discovery";



function App() {
  return (
    
    <div className = "App">
    
    <Router>
      <header className="App-header">
    <NavBar/> 
    </header>
    <main>
   
    <Routes>
     <Route path="/" element={<SoundWave />} />
     <Route path="join" element={<Join />} />
     <Route path="discovery" element={<Discovery />} />
    </Routes>
   
    </main>
    </Router>
    </div>
  
  );
  }

export default App;
