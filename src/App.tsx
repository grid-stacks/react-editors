import {useRef, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Editor from "@monaco-editor/react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from 'ckeditor5-classic-with-mathtype';

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
        <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            config={{
              toolbar: {
                items: [
                  'heading', 'MathType', 'ChemType',
                  '|',
                  'bold',
                  'italic',
                  'link',
                  'bulletedList',
                  'numberedList',
                  'imageUpload',
                  'mediaEmbed',
                  'insertTable',
                  'blockQuote',
                  'undo',
                  'redo'
                ]
              },
            }}
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({event, editor, data});
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
        />

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
