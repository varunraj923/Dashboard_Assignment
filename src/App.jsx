import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { Dashboard } from './components/Dashboard'
import { RightSidebar } from './components/RightSidebar'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        <main className="flex-1 p-6 overflow-auto">
          <Dashboard />
        </main>
      </div>
      <RightSidebar />
    </div>
  )
}

export default App