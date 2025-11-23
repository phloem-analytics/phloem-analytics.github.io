import phloemLogo from '../assets/phloem_analytics_black.svg'

function About() {
  return (
    <div className="content-section">
      <img src={phloemLogo} className="home-logo" alt="Phloem Analytics" />
      <h1>About</h1>
      <p>Looking at how energy moves through networks. Kinda like in trees.</p>
      <p>An adventure in power flow analysis, javascript, and hubris.</p>
    </div>
  )
}

export default About
