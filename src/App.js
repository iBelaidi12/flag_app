import './styles/App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createContext, useContext, useState, useEffect} from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

export const ThemeContext = createContext();

function App() {
  let [darkTheme, updateTheme] = useState(false);
  
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{darkTheme, updateTheme}}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>


  );
}

export default App;
