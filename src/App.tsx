
import { useState } from 'react';
import './App.css'
import Sidebar from './components/sidebar'
import Dashboard from './pages/dashboard'

function App() {
  const [isBackClick, setisBackClick] = useState<boolean>(true);

  return (
    <div className="app">
      <Sidebar isBackClick={isBackClick} setisBackClick={setisBackClick} />
      <div className="mainPage">
        <Dashboard isBackClick={isBackClick} setisBackClick={setisBackClick}/>
      </div>
    </div>
  )
}

export default App
