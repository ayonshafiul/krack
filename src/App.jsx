import Editor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";

// // you can change the source of the monaco files
// loader.config({
//   paths: { vs: "../node_modules/monaco-editor/min/vs" },
// });
function App() {
  return (
    <div className="App">
      <Editor height="90vh" defaultLanguage="python" theme="vs-dark" defaultValue="//" />
    </div>
  );
}

export default App;
