import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './Components/results';
import Landing from './Components/landing';
import Navbar from './Components/navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
