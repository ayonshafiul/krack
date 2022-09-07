import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="m-2 p-2 text-sky-500">Hello from krack</div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
