import { useState } from 'react'
import MaintenancePage from './MaintenancePage';
import { Header } from './components/Header'
import { Home } from './components/Home'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

function App() {
  const [count, setCount] = useState(0);
  const isUnderMaintenance = true;

  return (
    <>
      <Header />
      {isUnderMaintenance ? <MaintenancePage /> : <Home />}
    </>
  )
}

export default App
