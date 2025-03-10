import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarProvider } from './contexts/SidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SidebarProvider>
)
