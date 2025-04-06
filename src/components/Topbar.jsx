import { Search, Sun, Moon, Bell } from 'lucide-react'

export function Topbar({ isDarkMode, onToggleDarkMode }) {
  return (
    <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Dashboards</span>
          <span>/</span>
          <span>Default</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search"
              className="h-9 w-64 rounded-md border bg-transparent pl-9 pr-3 text-sm"
            />
          </div>

          <button
            onClick={onToggleDarkMode}
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-secondary"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-secondary">
            <Bell className="w-4 h-4" />
          </button>

          <button className="w-8 h-8 rounded-full bg-secondary">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="User avatar"
              className="w-full h-full rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  )
}