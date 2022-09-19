import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import Editor from '@monaco-editor/react';
import { XTerm } from 'xterm-for-react';

const Hello = () => {
  const code = 'const a = 0;';
  return (
    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
      <XTerm />
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
