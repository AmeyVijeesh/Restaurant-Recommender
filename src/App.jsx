import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './Components/results';
import Home from './Components/home';
import Navbar from './Components/navbar';
import Recommendations from './Components/recommends';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
