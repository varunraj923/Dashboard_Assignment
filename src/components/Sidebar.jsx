import { Home, ShoppingBag, FolderKanban, User, FileText, Users, Settings, Building2, Newspaper, Share2 } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background flex flex-col fixed h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold">ByeWind</h1>
      </div>
      
      <nav className="flex-1 px-4">
        <div className="mb-6">
          <h2 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">Favorites</h2>
          <ul>
            <SidebarItem icon={Home} text="Overview" active />
            <SidebarItem icon={FolderKanban} text="Projects" />
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">Dashboards</h2>
          <ul>
            <SidebarItem icon={Home} text="Overview" active />
            <SidebarItem icon={ShoppingBag} text="eCommerce" />
            <SidebarItem icon={FolderKanban} text="Projects" />
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">Pages</h2>
          <ul>
            <SidebarItem icon={User} text="User Profile" />
            <SidebarItem icon={Home} text="Overview" />
            <SidebarItem icon={FolderKanban} text="Projects" />
            <SidebarItem icon={FileText} text="Campaigns" />
            <SidebarItem icon={FileText} text="Documents" />
            <SidebarItem icon={Users} text="Followers" />
          </ul>
        </div>

        <div className="mb-6">
          <ul>
            <SidebarItem icon={Settings} text="Account" />
            <SidebarItem icon={Building2} text="Corporate" />
            <SidebarItem icon={Newspaper} text="Blog" />
            <SidebarItem icon={Share2} text="Social" />
          </ul>
        </div>
      </nav>

      <div className="p-6 mt-auto">
        <p className="text-sm text-muted-foreground">snowui</p>
      </div>
    </aside>
  )
}

function SidebarItem({ icon: Icon, text, active }) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm ${
          active
            ? 'bg-secondary text-primary font-medium'
            : 'text-muted-foreground hover:bg-secondary/50'
        }`}
      >
        <Icon className="w-4 h-4" />
        {text}
      </a>
    </li>
  )
}