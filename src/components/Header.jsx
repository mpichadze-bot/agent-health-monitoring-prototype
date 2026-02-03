import { Activity, Cloud, HelpCircle, User } from 'lucide-react'

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'beta', label: 'Beta (258-260)', color: 'bg-amber-500' },
    { id: 'ga', label: 'GA Features (260-266+)', color: 'bg-emerald-500' },
    { id: 'comparison', label: 'Feature Comparison', color: 'bg-purple-500' },
  ]

  return (
    <header className="bg-gradient-to-r from-salesforce-darkBlue to-salesforce-navy text-white shadow-lg sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-salesforce-lightBlue" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Agent Health Monitoring</h1>
                <p className="text-xs text-blue-200">Agentforce Observability</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-salesforce-darkBlue shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${tab.color}`}></span>
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-lg">
              <HelpCircle className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
              <div className="w-8 h-8 bg-salesforce-lightBlue rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Admin User</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
