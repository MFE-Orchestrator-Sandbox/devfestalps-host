import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Suspense } from 'react';
const Button = React.lazy(() => import('devfestalpsdesignsystem/Button'));

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Suspense fallback={<div>Loading...</div>}>
          <Button />
        </Suspense>
      </div>
    </div>
  )
}

export default App
