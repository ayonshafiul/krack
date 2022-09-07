import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
// Import XTerm
import { XTerm } from 'xterm-for-react';

const Hello = () => {
  const code = 'const a = 0;';
  return (
    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
      <CodeMirror
        height="50vh"
        theme="dark"
        extensions={[python()]}
        indentWithTab={true}
        tabIndex
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
