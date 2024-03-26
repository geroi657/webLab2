import { useState } from 'react'
import './App.css'
import MyButton from './components/button/button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Лучшая кнопка, которую вы когда-либо увидите</h1>
      <div className="card">
        <MyButton onclick={() => alert("Не трогай кнопку, э.")} />
        <p>
          И не наврал же!
        </p>
      </div>
      <p className="read-the-docs">
        Продолжение следует...
      </p>
    </>
  )
}

export default App