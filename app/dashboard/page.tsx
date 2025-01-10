import { AppSidebar } from "@/components/blocks/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-screen">
          <aside className="sidebar-width border-r border-gray-200 bg-gray-50 p-4 flex flex-col h-screen">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                  <i className="fas fa-link"></i>
                </div>
                <span className="font-semibold">Ugcs.io</span>
              </div>
              <button className="create-button w-full py-2 px-4 rounded-lg font-medium">
                Quick Create
              </button>
            </div>
            <nav className="space-y-1">
              <a href="#" className="nav-item active">
                <i className="fas fa-home"></i>
                Home
              </a>
              <a href="#" className="nav-item">
                <i className="fas fa-video"></i>
                Videos
              </a>
              <a href="#" className="nav-item">
                <i className="fas fa-link"></i>
                Hooks
              </a>
              <a href="#" className="nav-item">
                <i className="fas fa-chart-line"></i>
                Campaigns
              </a>
            </nav>
            <div className="space-y-6 mt-auto">
              <div className="credits-card px-4 py-3 mx-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Video Credits</span>
                  <a href="#" className="text-xs text-blue-500">Upgrade</a>
                </div>
                <div className="text-base font-semibold text-blue-500">0</div>
              </div>
              <nav className="space-y-1">
                <a href="#" className="nav-item">
                  <i className="fas fa-gear"></i>
                  Settings
                </a>
                <a href="#" className="nav-item">
                  <i className="fas fa-life-ring"></i>
                  Support
                </a>
              </nav>
              <div className="border-t border-gray-200 pt-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-900">julius.</p>
                    <p className="text-xs text-gray-500">schm3rzfrei@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-1 bg-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <h2 className="text-base font-medium">Videos</h2>
              <span className="text-xs text-gray-500">(0)</span>
              <i className="fas fa-chevron-down text-xs text-gray-500"></i>
            </div>
            <div className="video-container flex gap-4">
              {/* Video cards will be injected here */}
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
