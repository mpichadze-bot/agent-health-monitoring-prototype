import { Bell, ChevronRight, FileSearch, Hash, Play, Zap, ExternalLink, Filter, BarChart3, MessageSquare } from 'lucide-react'

/**
 * Agent Health Monitoring E2E Journey Diagram
 * Alert → Investigation Page (Incident) → Deep Links
 * Similar style to "Creation to Investigation" diagram
 */
export default function AHMDiagram() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Alert to Investigation (E2E Journey)</h2>
        <p className="text-gray-600 mt-2">Agent Health Monitoring: From alert notification → Incident Page → Deep links for investigation</p>
      </div>

      {/* Top Row: Alert → Investigation Page */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-red-50 to-amber-50 px-6 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">1. Alert Fires</h3>
          <p className="text-sm text-gray-600">Metric threshold breached → Notification sent (Email, Slack, Webhook)</p>
        </div>
        <div className="p-6 flex items-center gap-6 overflow-x-auto">
          {/* Alert Notification Card */}
          <div className="flex-shrink-0 w-72 border-2 border-red-200 rounded-lg bg-white shadow-sm overflow-hidden">
            <div className="bg-red-50 px-4 py-2 border-b border-red-200 flex items-center gap-2">
              <Bell className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-800">Alert: Error Rate Spike</span>
            </div>
            <div className="p-4 text-sm space-y-2">
              <div><span className="text-gray-500">Metric:</span> Agent Error Rate</div>
              <div><span className="text-gray-500">Threshold:</span> Above 5%</div>
              <div><span className="text-gray-500">Time:</span> 10:15 AM</div>
              <button className="w-full mt-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                View Investigation
              </button>
            </div>
          </div>
          <ChevronRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
          {/* Investigation Page Card */}
          <div className="flex-shrink-0 w-96 border-2 border-emerald-300 rounded-lg bg-white shadow-sm overflow-hidden">
            <div className="bg-emerald-50 px-4 py-2 border-b border-emerald-200 flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-emerald-600" />
              <span className="font-semibold text-emerald-800">Investigation Page (Incident)</span>
            </div>
            <div className="p-3 text-xs space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 bg-gray-50 rounded border"><div className="font-medium">Blast Radius</div><div className="text-gray-500">Topics, Agents, Actions</div></div>
                <div className="p-2 bg-gray-50 rounded border"><div className="font-medium">Sessions</div><div className="text-gray-500">Filter by Agent, Channel</div></div>
                <div className="p-2 bg-gray-50 rounded border"><div className="font-medium">Errors by Session</div><div className="text-gray-500">Step-level errors</div></div>
              </div>
              <div className="p-2 bg-blue-50 rounded border border-blue-200">
                <div className="font-medium text-blue-800">Result:</div>
                <div className="text-gray-600">Context for which sessions, topics, steps, actions are affected</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Deep Links from Investigation */}
      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">2. Deep Links from Investigation Page</h3>
          <p className="text-sm text-gray-600">Click any entity to navigate to the right tool for fixing or investigating</p>
        </div>
        <div className="p-6">
          {/* Filter Insights */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Filter Sessions</h4>
            </div>
            <div className="flex gap-3 flex-wrap">
              {['Agent Type', 'Channel', 'Session ID', 'Date Range'].map((f) => (
                <span key={f} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 border border-gray-200">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Deep Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <DeepLinkCard
              icon={Hash}
              from="Topic"
              to="Agent Builder"
              description="Click topic → Opens agent topic config"
              color="emerald"
            />
            <DeepLinkCard
              icon={Play}
              from="Step"
              to="Step within Session View"
              description="Click step → Jumps to step in session"
              color="blue"
            />
            <DeepLinkCard
              icon={Zap}
              from="Action"
              to="Scale Center (Flow/APEX)"
              description="Click action → Opens Flow or APEX"
              color="amber"
            />
            <DeepLinkCard
              icon={MessageSquare}
              from="Session"
              to="Session Page"
              description="Click session → Full session details"
              color="purple"
            />
            <DeepLinkCard
              icon={ExternalLink}
              from="Trace / Moment"
              to="Optimizer"
              description="Deep link to exact moment (P2)"
              color="violet"
            />
          </div>

          {/* Session Details Drill-down */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">3. Drill into Session Details</h4>
            <div className="flex gap-4 overflow-x-auto">
              <div className="flex-shrink-0 w-64 border border-gray-200 rounded-lg bg-white p-3">
                <div className="text-xs font-semibold text-gray-500 mb-2">Session Page</div>
                <div className="space-y-1 text-xs">
                  <div>Chat Session Log</div>
                  <div>Agent Response</div>
                  <div>Actions</div>
                </div>
              </div>
              <div className="flex-shrink-0 w-48 border border-gray-200 rounded-lg bg-white p-3">
                <div className="text-xs font-semibold text-gray-500 mb-2">Session Details</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>Agent ID</div>
                  <div>Session ID</div>
                  <div>Channel</div>
                  <div>Start / End Time</div>
                  <div>Errors</div>
                </div>
              </div>
              <div className="flex-shrink-0 w-56 border border-blue-200 rounded-lg bg-blue-50 p-3">
                <div className="text-xs font-semibold text-blue-800 mb-2">Average Actions Latency</div>
                <div className="text-xs text-gray-600">Identify bottleneck actions (p50, p75, p95, p99)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-200 p-6">
        <h4 className="font-semibold text-emerald-800 mb-2">Result: Confidence in how to enhance the agent</h4>
        <p className="text-sm text-gray-700">
          From alert → Investigation Page (focused on alert time window) → Filter sessions → Drill into Session/Topic/Step/Action → 
          Navigate to Agent Builder, Scale Center, or Optimizer to fix the root cause.
        </p>
      </div>
    </div>
  )
}

function DeepLinkCard({ icon: Icon, from, to, description, color }) {
  const colors = {
    emerald: 'border-emerald-300 bg-emerald-50',
    blue: 'border-blue-300 bg-blue-50',
    amber: 'border-amber-300 bg-amber-50',
    purple: 'border-purple-300 bg-purple-50',
    violet: 'border-violet-300 bg-violet-50',
  }
  const iconColors = {
    emerald: 'text-emerald-600',
    blue: 'text-blue-600',
    amber: 'text-amber-600',
    purple: 'text-purple-600',
    violet: 'text-violet-600',
  }
  return (
    <div className={`p-4 rounded-xl border-2 ${colors[color]} hover:shadow-md transition-shadow`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconColors[color]}`} />
        <span className="font-semibold text-gray-900">{from}</span>
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
        <ChevronRight className="w-4 h-4" />
        <span className="font-medium">{to}</span>
      </div>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  )
}
