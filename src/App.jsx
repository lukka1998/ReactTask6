import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/molecules/Header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display:"flex" ,justifyContent:"center", alignItems:"center" ,height:"100vh"}}>
      <Header></Header>




    </div>
    </>
  )
}

export default App
