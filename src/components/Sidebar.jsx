import { useState } from 'react'
import phloemLogo from '../assets/phloem_analytics_black.svg'
import '../styles/Sidebar.css'

function Sidebar({ activeSection, onSectionChange, theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (section) => {
    onSectionChange(section)
    setIsOpen(false)
  }

  return (
    <>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="logo-container" onClick={() => handleNavClick('home')}>
          <img src={phloemLogo} className="sidebar-logo" alt="Phloem logo" />
        </button>
        <nav className="nav-menu">
          <button
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            className={`nav-item ${activeSection === 'reports' ? 'active' : ''}`}
            onClick={() => handleNavClick('reports')}
          >
            Reports
          </button>
          <button
            className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </nav>
        <button className="theme-toggle" onClick={onThemeToggle}>
          {theme === 'dark' ? 'Theme -> Light' : 'Theme -> Dark'}
        </button>
      </div>
    </>
  )
}

export default Sidebar
