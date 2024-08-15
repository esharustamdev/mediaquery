import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/Navbar.css'
import './styles/HeroSection.css'
import './styles/Section.css'
import './styles/ForthSec.css'
import './styles/ThirdSec.css'
import './styles/Category.css'
import './styles/Footer.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
