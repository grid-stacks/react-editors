import {useRef, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Editor from "@monaco-editor/react";

function App() {
  const [count, setCount] = useState(0)

  const editorRef = useRef(null);

  function handleEditorChange(value, event) {
    // here is the current value
    // console.log("value", value)
  }

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco)

    editorRef.current = editor;
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    console.log("markers", markers)
    markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Hello Vite + React!</p>
          <p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>

        <button onClick={showValue}>Show value</button>

        <Editor
            height="90vh"
            defaultLanguage="typescript"
            defaultValue="// some comment"
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            beforeMount={handleEditorWillMount}
            onValidate={handleEditorValidation}
        />
      </div>
  )
}

export default App
