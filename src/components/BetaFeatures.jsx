import { useState } from 'react'
import { 
  Activity, 
  AlertTriangle, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Filter,
  RefreshCw,
  Download,
  Bell,
  ChevronDown,
  MoreVertical,
  ArrowUpRight,
  Users,
  Zap,
  CheckCircle2,
  XCircle,
  Info,
  Mail
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

// Priority Badge Component
function PriorityBadge({ priority }) {
  const colors = {
    'P0': 'bg-red-100 text-red-700 border-red-200',
    'P1': 'bg-amber-100 text-amber-700 border-amber-200',
    'P2': 'bg-gray-100 text-gray-600 border-gray-200',
  }
  return (
    <span className={`px-1.5 py-0.5 rounded text-xs font-bold border ${colors[priority]}`}>
      {priority}
    </span>
  )
}

// Mock data for metrics
const errorRateData = [
  { time: '10:00', value: 2.1 },
  { time: '10:05', value: 1.8 },
  { time: '10:10', value: 2.4 },
  { time: '10:15', value: 3.2 },
  { time: '10:20', value: 2.9 },
  { time: '10:25', value: 2.1 },
  { time: '10:30', value: 1.5 },
  { time: '10:35', value: 1.8 },
  { time: '10:40', value: 2.2 },
  { time: '10:45', value: 2.0 },
]

const latencyData = [
  { time: '10:00', value: 1250 },
  { time: '10:05', value: 1180 },
  { time: '10:10', value: 1420 },
  { time: '10:15', value: 1890 },
  { time: '10:20', value: 1650 },
  { time: '10:25', value: 1320 },
  { time: '10:30', value: 1180 },
  { time: '10:35', value: 1250 },
  { time: '10:40', value: 1380 },
  { time: '10:45', value: 1290 },
]

const escalationData = [
  { time: '10:00', value: 8.5 },
  { time: '10:05', value: 7.2 },
  { time: '10:10', value: 9.1 },
  { time: '10:15', value: 12.4 },
  { time: '10:20', value: 11.2 },
  { time: '10:25', value: 9.8 },
  { time: '10:30', value: 8.1 },
  { time: '10:35', value: 7.5 },
  { time: '10:40', value: 8.9 },
  { time: '10:45', value: 8.2 },
]

const agents = [
  { id: 'agent-001', name: 'Service Cloud Agent', type: 'Service', status: 'healthy' },
  { id: 'agent-002', name: 'Sales Assistant', type: 'Sales', status: 'warning' },
  { id: 'agent-003', name: 'IT Support Bot', type: 'Employee', status: 'healthy' },
]

export default function BetaFeatures() {
  const [selectedAgent, setSelectedAgent] = useState('all')
  const [timeWindow, setTimeWindow] = useState('24h')
  const [aggregation, setAggregation] = useState('5min')
  const [showAlertModal, setShowAlertModal] = useState(false)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded">BETA</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">Release 258.11 - 260</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Health Monitoring Dashboard</h2>
          <p className="text-gray-500 mt-1">Real-time visibility into your AI agent health and performance</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <PriorityBadge priority="P0" />
          </div>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setShowAlertModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-salesforce-blue text-white rounded-lg hover:bg-salesforce-darkBlue text-sm font-medium"
            >
              <Bell className="w-4 h-4" />
              Configure Alerts
            </button>
            <PriorityBadge priority="P0" />
          </div>
        </div>
      </div>

      {/* Priority Legend */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-amber-800">🧪 Beta Release (258.11 - Dreamforce)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">🎯 Priority:</span>
            <div className="flex gap-2">
              <PriorityBadge priority="P0" />
              <span className="text-xs text-gray-500">Must</span>
              <PriorityBadge priority="P1" />
              <span className="text-xs text-gray-500">Should</span>
              <PriorityBadge priority="P2" />
              <span className="text-xs text-gray-500">Nice</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
            <PriorityBadge priority="P0" />
          </div>
          
          {/* Agent Filter */}
          <div className="relative">
            <select 
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-salesforce-blue"
            >
              <option value="all">All Agents</option>
              {agents.map(agent => (
                <option key={agent.id} value={agent.id}>{agent.name}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          {/* Agent Type Filter */}
          <div className="relative">
            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-salesforce-blue">
              <option>All Types</option>
              <option>Service</option>
              <option>Sales</option>
              <option>Employee</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          {/* Channel Filter */}
          <div className="relative">
            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-salesforce-blue">
              <option>All Channels</option>
              <option>Web Chat</option>
              <option>Email</option>
              <option>SMS</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <div className="h-6 w-px bg-gray-200" />

          {/* Time Window */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <select 
              value={timeWindow}
              onChange={(e) => setTimeWindow(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-salesforce-blue"
            >
              <option value="24h">Last 24 hours</option>
              <option value="1h" disabled className="text-gray-400">Last 1 hour (GA P1)</option>
            </select>
            <PriorityBadge priority="P0" />
          </div>

          {/* Aggregation */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Aggregation:</span>
            <select 
              value={aggregation}
              onChange={(e) => setAggregation(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-salesforce-blue"
            >
              <option value="5min">5 minutes</option>
              <option value="3min" disabled className="text-gray-400">3 min (GA P1)</option>
              <option value="10min" disabled className="text-gray-400">10 min (GA P1)</option>
            </select>
            <PriorityBadge priority="P0" />
          </div>
        </div>
      </div>

      {/* Beta Info Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-amber-800">Beta Release Scope (258.11 - Dreamforce)</h3>
            <div className="mt-2 grid grid-cols-3 gap-4 text-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-medium">3 Key Metrics</span>
                  <PriorityBadge priority="P0" />
                </div>
                <p className="text-amber-600 text-xs">Error Rate, Latency, Escalation</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-medium">Basic Alerting</span>
                  <PriorityBadge priority="P0" />
                </div>
                <p className="text-amber-600 text-xs">Email to self</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-medium">External Export</span>
                  <PriorityBadge priority="P0" />
                </div>
                <p className="text-amber-600 text-xs">Splunk integration</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-medium">5-min Aggregation</span>
                  <PriorityBadge priority="P0" />
                </div>
                <p className="text-amber-600 text-xs">Fixed window</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-medium">24-hr Time Window</span>
                  <PriorityBadge priority="P0" />
                </div>
                <p className="text-amber-600 text-xs">Default view only</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-amber-700 font-medium">Datadog/NR</span>
                  <PriorityBadge priority="P2" />
                </div>
                <p className="text-amber-600 text-xs">Additional exports</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Agent Error Rate */}
        <MetricCard
          title="Agent Error Rate"
          value="2.1%"
          change="-0.3%"
          trend="down"
          status="healthy"
          description="% of agent responses with errors"
          data={errorRateData}
          color="#EA001E"
          unit="%"
          priority="P0"
        />

        {/* Average Interaction Latency */}
        <MetricCard
          title="Avg Interaction Latency"
          value="1,290ms"
          change="+120ms"
          trend="up"
          status="warning"
          description="Time from request to response"
          data={latencyData}
          color="#DD7A01"
          unit="ms"
          priority="P0"
        />

        {/* Escalation Rate */}
        <MetricCard
          title="Escalation Rate"
          value="8.2%"
          change="-1.1%"
          trend="down"
          status="healthy"
          description="% of sessions escalated to humans"
          data={escalationData}
          color="#0176D3"
          unit="%"
          priority="P0"
        />
      </div>

      {/* Export Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">Export to External Monitoring Tools</h3>
            <PriorityBadge priority="P0" />
            <p className="text-sm text-gray-500 mt-1">Configure real-time export to Splunk, Datadog, or New Relic</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <ExportConnector name="Splunk" status="connected" lastSync="2 min ago" priority="P0" />
          <ExportConnector name="Datadog" status="disconnected" lastSync="Never" priority="P2" />
          <ExportConnector name="New Relic" status="disconnected" lastSync="Never" priority="P2" />
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="font-medium">Export fields:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">metric_name <PriorityBadge priority="P0" /></span>
            <span className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">value <PriorityBadge priority="P0" /></span>
            <span className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">timestamp <PriorityBadge priority="P0" /></span>
            <span className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">agent_id <PriorityBadge priority="P0" /></span>
            <span className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">session_id <PriorityBadge priority="P1" /></span>
            <span className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">org_id <PriorityBadge priority="P0" /></span>
            <span className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">channel <PriorityBadge priority="P1" /></span>
            <span className="flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded text-xs">agent_type <PriorityBadge priority="P2" /></span>
          </div>
        </div>
      </div>

      {/* Alert Configuration Modal */}
      {showAlertModal && (
        <AlertConfigModal onClose={() => setShowAlertModal(false)} />
      )}
    </div>
  )
}

function MetricCard({ title, value, change, trend, status, description, data, color, unit, priority = 'P0' }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <PriorityBadge priority={priority} />
          </div>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${
          status === 'healthy' ? 'bg-green-500' : 
          status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
        }`} />
      </div>

      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <div className={`flex items-center gap-1 mt-1 text-sm ${
            trend === 'down' && status === 'healthy' ? 'text-green-600' :
            trend === 'up' && status === 'warning' ? 'text-amber-600' :
            trend === 'up' ? 'text-red-600' : 'text-green-600'
          }`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{change}</span>
            <span className="text-gray-400 ml-1">vs prev 5min</span>
          </div>
        </div>
      </div>

      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2}
              fill={`url(#gradient-${title})`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value) => [`${value}${unit}`, title]}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <button className="w-full mt-4 flex items-center justify-center gap-2 text-sm text-salesforce-blue hover:text-salesforce-darkBlue font-medium">
        <Bell className="w-4 h-4" />
        Set Alert
      </button>
    </div>
  )
}

function ExportConnector({ name, status, lastSync, priority = 'P0' }) {
  return (
    <div className={`p-4 rounded-lg border-2 ${
      status === 'connected' 
        ? 'border-green-200 bg-green-50' 
        : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">{name}</span>
          <PriorityBadge priority={priority} />
        </div>
        <span className={`flex items-center gap-1 text-xs font-medium ${
          status === 'connected' ? 'text-green-600' : 'text-gray-400'
        }`}>
          {status === 'connected' ? (
            <><CheckCircle2 className="w-3 h-3" /> Connected</>
          ) : (
            <><XCircle className="w-3 h-3" /> Not Connected</>
          )}
        </span>
      </div>
      <p className="text-xs text-gray-500">Last sync: {lastSync}</p>
      <button className={`mt-3 w-full py-2 rounded-lg text-sm font-medium ${
        status === 'connected'
          ? 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          : 'bg-salesforce-blue text-white hover:bg-salesforce-darkBlue'
      }`}>
        {status === 'connected' ? 'Configure' : 'Connect'}
      </button>
    </div>
  )
}

function AlertConfigModal({ onClose }) {
  const [metric, setMetric] = useState('error-rate')
  const [condition, setCondition] = useState('above')
  const [threshold, setThreshold] = useState('5')
  const [cooldown, setCooldown] = useState('30')

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">Configure Alert</h2>
              <PriorityBadge priority="P0" />
            </div>
            <p className="text-sm text-gray-500">Set up threshold-based alerts for your metrics</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <XCircle className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Metric Selection */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              Metric <PriorityBadge priority="P0" />
            </label>
            <select 
              value={metric}
              onChange={(e) => setMetric(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-salesforce-blue"
            >
              <option value="error-rate">Agent Error Rate</option>
              <option value="latency">Avg Interaction Latency</option>
              <option value="escalation">Escalation Rate</option>
            </select>
          </div>

          {/* Condition & Threshold */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                Condition <PriorityBadge priority="P0" />
              </label>
              <select 
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-salesforce-blue"
              >
                <option value="above">Above</option>
                <option value="below">Below</option>
              </select>
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                Threshold <PriorityBadge priority="P0" />
              </label>
              <input 
                type="text"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-salesforce-blue"
                placeholder="e.g., 5%"
              />
            </div>
          </div>

          {/* Severity */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              Severity <PriorityBadge priority="P0" />
            </label>
            <div className="flex gap-2">
              {['Low', 'Medium', 'High', 'Critical'].map((sev) => (
                <button 
                  key={sev}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium ${
                    sev === 'High' 
                      ? 'border-red-500 bg-red-50 text-red-700' 
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          {/* Cooldown */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              Cooldown Period <PriorityBadge priority="P1" />
            </label>
            <select 
              value={cooldown}
              onChange={(e) => setCooldown(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-salesforce-blue"
            >
              <option value="30">30 minutes (default)</option>
              <option value="15" disabled>15 minutes (P1)</option>
              <option value="60" disabled>60 minutes (P1)</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">No repeat alerts within this window</p>
          </div>

          {/* Notification Channel */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              Notification Channel <PriorityBadge priority="P0" />
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-sm">Email (me)</span>
                <PriorityBadge priority="P0" />
              </label>
              <label className="flex items-center gap-2 opacity-50">
                <input type="checkbox" disabled className="rounded" />
                <span className="text-sm">Slack</span>
                <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">P1 - GA</span>
              </label>
              <label className="flex items-center gap-2 opacity-50">
                <input type="checkbox" disabled className="rounded" />
                <span className="text-sm">Email DLs</span>
                <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">P2 - GA</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
            Cancel
          </button>
          <button className="flex-1 py-2 bg-salesforce-blue text-white rounded-lg font-medium hover:bg-salesforce-darkBlue">
            Create Alert
          </button>
        </div>
      </div>
    </div>
  )
}
