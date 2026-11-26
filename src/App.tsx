import { useEffect, useState } from 'react'
import { BrowserRouter,  Route, Routes } from "react-router-dom"


import './App.css'

import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import JobPage from './pages/JobPage'
import SchoolPage from './pages/SchoolPage'
import Header from './components/Header'

type Theme = "light" | "dark"

function App() {
  
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme")

    return savedTheme === "dark" ? "dark" : "light"
  })
 
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    )
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
	}, [theme])

  return (
    <>
  	<BrowserRouter>
    <div data-theme={theme} data-bs-theme={theme} className="app">
    <Header theme={theme} toggleTheme={toggleTheme} />
	<Routes>
      <Route path="/" element={<HomePage />}></Route>
       <Route path="/experience" element={<JobPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/education" element={<SchoolPage />}></Route>

        
      </Routes>
      </div>
	</BrowserRouter>


   
    </>
  )
}

export default App
