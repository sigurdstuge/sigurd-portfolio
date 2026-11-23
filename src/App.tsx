import { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import JobPage from './pages/JobPage'
import SchoolPage from './pages/SchoolPage'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  	<BrowserRouter>
    <Header/>
	<Routes>
      <Route path="/" element={<HomePage />}></Route>
       <Route path="/experience" element={<JobPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/education" element={<SchoolPage />}></Route>

        
      </Routes>
	</BrowserRouter>


   
    </>
  )
}

export default App
