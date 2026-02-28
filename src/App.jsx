// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookDemoPage from './components/BookDemoPage';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    // Yahan BrowserRouter (Router) rehna chahiye
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;