import './App.css';
import { Navbar } from "./components/navbar";
import { Footer } from './components/footer';
import { Route, Routes } from 'react-router-dom';
import { Legal } from './Pages/LegalsMentions.js';
import { Privacy } from './Pages/Privacy.js';
import { Home } from './Pages/Home.js';


function App() {
  return (
    <div className="App bg-body">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/politiques-confidentialite" element={<Privacy />} />
        </Routes>
      <footer className="App-footer mx-auto w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
