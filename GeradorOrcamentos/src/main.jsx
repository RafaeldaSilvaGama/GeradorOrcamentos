import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home'
import globalStyles from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <globalStyles/>
    <Home />
  </React.StrictMode>,
)
