import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Reports from './components/Reports'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'reports':
        return <Reports />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className={`app-container theme-${theme}`}>
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  )
}

export default App
