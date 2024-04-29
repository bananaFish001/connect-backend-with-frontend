import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>coffee and train</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((jokes, index) => {
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
