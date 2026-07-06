import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Sidebar from './components/sidebar/Sidebar'
import Stories from './components/stories/Stories'
import Suggestions from './suggestions/Suggestions'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path= '/sidebars' element= {<Sidebar />} />
      <Route path= '/stories' element= {<Stories />} />
      <Route path= '/suggestions' element= {<Suggestions />} />
     </Routes>
    </div>
  )
}

export default App
