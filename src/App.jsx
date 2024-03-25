import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

import Last from './components/Last'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Navbar/>
      <div className='min-h-[74vh]'>
      <Manager></Manager>
      </div>
      <Last></Last>
    </>
  )
}

export default App
