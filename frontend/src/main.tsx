import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div style={{fontFamily:'sans-serif', padding:20}}>
      <h1>Vertopal MVP — Frontend</h1>
      <p>Upload demo (uses presigned upload flow).</p>
      <input type="file" id="f" />
      <button id="up">Simulate Upload</button>
      <div id="out"></div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
