import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './Components/results';
import Landing from './Components/landing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
