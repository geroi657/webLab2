import { useState } from 'react'
import Button from '@mui/material/Button';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>Это я!</ Header>
      <h1>Лучшая кнопка, которую вы когда-либо увидите</h1>
      <div className="card">
        <Button variant="contained">Кнопка</Button>
        <p>
          И не наврал же!
        </p>
      </div>
      <p className="read-the-docs">
        Продолжение следует...
      </p>
      <Footer>А это я!</ Footer>
    </>
  )
}

export default App