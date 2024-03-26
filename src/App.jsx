// import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

import Last from './components/Last'
// import Manager2 from './components/Manager2'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <Navbar/>
      <div className='min-h-[74vh]'>
      <Manager></Manager>
      {/* <Manager2></Manager2> */}
      </div>
      <Last></Last>
    </>
  )
}

export default App
