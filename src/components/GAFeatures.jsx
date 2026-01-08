import { useState } from 'react'
import { Search, Bell, Sliders, TrendingUp, MessageSquare, Sparkles, ChevronRight, Clock, AlertTriangle, CheckCircle2, XCircle, Play, FileSearch, Users, Mail, Hash, Zap, ArrowUpRight, Plus, Trash2, ExternalLink, Send, Bot, LineChart, BarChart3, Activity, Layout, RefreshCw, Filter, ChevronDown, Settings, Calendar, Info, Download, Eye } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'

export default function GAFeatures() {
  const [activeSection, setActiveSection] = useState('prototype')

  const sections = [
    { id: 'prototype', icon: Layout, label: 'Prototype', priority: 'ALL', release: 'ALL' },
    { id: 'setup', icon: Zap, label: 'Setup & Onboarding', priority: 'P0', release: '260' },
    { id: 'investigation', icon: FileSearch, label: 'Investigation Page', priority: 'P0', release: '260' },
    { id: 'alerting', icon: Bell, label: 'Enhanced Alerting', priority: 'P0', release: '262' },
    { id: 'customization', icon: Sliders, label: 'Dashboard Customization', priority: 'P1', release: '264' },
    { id: 'anomaly', icon: TrendingUp, label: 'Anomaly Detection', priority: 'P1', release: '260' },
    { id: 'agentic', icon: Sparkles, label: 'Agentic Monitoring', priority: 'P1', release: '266+' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">GA</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">Release 260 - 266+</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">GA Feature Showcase</h2>
          <p className="text-gray-500 mt-1">Enhanced capabilities for production-ready agent monitoring</p>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {sections.map((section) => {
          const getReleaseColor = (release) => {
            if (release === 'ALL') return 'bg-gray-100 text-gray-700'
            if (release === '260') return 'bg-emerald-100 text-emerald-700'
            if (release === '262') return 'bg-blue-100 text-blue-700'
            if (release === '264') return 'bg-purple-100 text-purple-700'
            if (release === '266+') return 'bg-violet-100 text-violet-700'
            return 'bg-gray-100 text-gray-600'
          }
          const getBorderColor = (release) => {
            if (release === 'ALL') return 'border-gray-300'
            if (release === '260') return 'border-emerald-300'
            if (release === '262') return 'border-blue-300'
            if (release === '264') return 'border-purple-300'
            if (release === '266+') return 'border-violet-300'
            return 'border-gray-300'
          }
          return (
            <button key={section.id} onClick={() => setActiveSection(section.id)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap transition-all border-2 ${activeSection === section.id ? 'bg-salesforce-blue text-white shadow-lg border-salesforce-blue' : `bg-white ${getBorderColor(section.release)} text-gray-700 hover:bg-gray-50`}`}>
              <section.icon className="w-4 h-4" />
              <span className="font-medium">{section.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded ${activeSection === section.id ? 'bg-white/20' : getReleaseColor(section.release)}`}>{section.release}</span>
            </button>
          )
        })}
      </div>

      {activeSection === 'prototype' && <GAPrototype />}
      {activeSection === 'setup' && <SetupOnboarding />}
      {activeSection === 'investigation' && <InvestigationPage />}
      {activeSection === 'alerting' && <EnhancedAlerting />}
      {activeSection === 'customization' && <DashboardCustomization />}
      {activeSection === 'anomaly' && <AnomalyDetection />}
      {activeSection === 'agentic' && <AgenticMonitoring />}
    </div>
  )
}

const releaseColors = {
  '260': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300', accent: 'bg-emerald-500' },
  '262': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', accent: 'bg-blue-500' },
  '264': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300', accent: 'bg-purple-500' },
  '266+': { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-300', accent: 'bg-violet-500' },
}

const errorRateData = [{ time: '10:00', value: 2.1 }, { time: '10:05', value: 1.8 }, { time: '10:10', value: 2.4 }, { time: '10:15', value: 3.2 }, { time: '10:20', value: 2.9 }, { time: '10:25', value: 2.1 }, { time: '10:30', value: 1.5 }]
const latencyData = [{ time: '10:00', value: 1250 }, { time: '10:05', value: 1180 }, { time: '10:10', value: 1420 }, { time: '10:15', value: 1890 }, { time: '10:20', value: 1650 }]
const escalationData = [{ time: '10:00', value: 8.5 }, { time: '10:05', value: 7.2 }, { time: '10:10', value: 9.1 }, { time: '10:15', value: 12.4 }, { time: '10:20', value: 11.2 }]

function ReleaseBadge({ release }) {
  const colors = releaseColors[release] || releaseColors['260']
  return <span className={`px-2 py-0.5 rounded text-xs font-semibold ${colors.bg} ${colors.text}`}>{release}</span>
}

function PriorityBadge({ priority }) {
  const colors = { 'P0': 'bg-red-100 text-red-700 border-red-200', 'P1': 'bg-amber-100 text-amber-700 border-amber-200', 'P2': 'bg-gray-100 text-gray-600 border-gray-200' }
  return <span className={`px-1.5 py-0.5 rounded text-xs font-bold border ${colors[priority]}`}>{priority}</span>
}

function GAPrototype() {
  const [selectedAgent, setSelectedAgent] = useState('all')
  const [timeWindow, setTimeWindow] = useState('1h')
  const [aggregation, setAggregation] = useState('10min')
  const agents = [{ id: 'agent-001', name: 'Service Cloud Agent' }, { id: 'agent-002', name: 'Sales Assistant' }, { id: 'agent-003', name: 'IT Support Bot' }]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">GA PROTOTYPE</span><span className="text-gray-400">•</span><span className="text-sm text-gray-500">Release 260 - 266+</span></div>
          <h2 className="text-2xl font-bold text-gray-900">Health Monitoring Dashboard</h2>
          <p className="text-gray-500 mt-1">Real-time visibility into your AI agent health</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 border-2 border-blue-200 rounded-lg"><Clock className="w-4 h-4 text-blue-600" /><span className="text-sm text-blue-700">Last refreshed: 10:45:32 AM</span><ReleaseBadge release="262" /><PriorityBadge priority="P2" /></div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700"><RefreshCw className="w-4 h-4" />Refresh</button>
          <button className="flex items-center gap-2 px-4 py-2 bg-salesforce-blue text-white rounded-lg hover:bg-salesforce-darkBlue text-sm font-medium"><Bell className="w-4 h-4" />Configure Alerts</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2"><Filter className="w-4 h-4 text-gray-400" /><span className="text-sm font-medium text-gray-700">Filters:</span><PriorityBadge priority="P0" /></div>
          <select value={selectedAgent} onChange={(e) => setSelectedAgent(e.target.value)} className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm">
            <option value="all">All Agents</option>
            {agents.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
          <div className="h-6 w-px bg-gray-200" />
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" />
            <select value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)} className="appearance-none bg-blue-50 border-2 border-blue-300 rounded-lg px-3 py-2 pr-8 text-sm">
              <option value="24h">Last 24 hours</option><option value="12h">Last 12 hours</option><option value="3h">Last 3 hours</option><option value="1h">Last 1 hour</option>
            </select>
            <ReleaseBadge release="262" /><PriorityBadge priority="P1" />
          </div>
          <button className="flex items-center gap-1 px-3 py-2 bg-blue-50 border-2 border-blue-300 rounded-lg text-sm text-blue-700 hover:bg-blue-100"><Calendar className="w-4 h-4" />Custom Range<ReleaseBadge release="262" /></button>
          <select value={aggregation} onChange={(e) => setAggregation(e.target.value)} className="appearance-none bg-blue-50 border-2 border-blue-300 rounded-lg px-3 py-2 pr-8 text-sm">
            <option value="5min">5 minutes</option><option value="10min">10 minutes</option><option value="15min">15 minutes</option>
          </select>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4 text-blue-600" /></div>
            <div><div className="flex items-center gap-2"><span className="font-medium text-blue-800">Real-time Monitoring Available</span><ReleaseBadge release="262" /><PriorityBadge priority="P1" /></div><p className="text-sm text-blue-600">Enable real-time pipeline for more accurate metrics.</p></div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">Enable Now</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <MetricCardGA title="Agent Error Rate" value="2.1%" change="-0.3%" trend="down" data={errorRateData} color="#EA001E" />
        <MetricCardGA title="Avg Interaction Latency" value="1,290ms" change="+120ms" trend="up" data={latencyData} color="#DD7A01" />
        <MetricCardGA title="Escalation Rate" value="8.2%" change="-1.1%" trend="down" data={escalationData} color="#0176D3" />
      </div>

      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-300 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3"><h3 className="text-lg font-semibold text-gray-900">RAG Quality Metrics</h3><ReleaseBadge release="260" /><PriorityBadge priority="P1" /><span className="text-xs text-emerald-600 font-medium">✨ NEW IN GA</span></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200"><p className="text-sm text-gray-600 mb-1">Context Precision</p><p className="text-2xl font-bold text-gray-900">87%</p></div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200"><p className="text-sm text-gray-600 mb-1">Answer Relevancy</p><p className="text-2xl font-bold text-gray-900">92%</p></div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200"><p className="text-sm text-gray-600 mb-1">Faithfulness</p><p className="text-2xl font-bold text-gray-900">89%</p></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border-2 border-violet-300 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-violet-500"></div>
        <div className="flex items-center gap-3 mb-4"><Sparkles className="w-5 h-5 text-violet-600" /><h3 className="text-lg font-semibold text-gray-900">Agentic Health Monitoring</h3><ReleaseBadge release="266+" /><PriorityBadge priority="P1" /><span className="text-xs text-violet-600 font-medium">✨ NEW IN GA</span></div>
        <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
          <div className="flex items-start gap-3"><div className="w-8 h-8 bg-violet-200 rounded-full flex items-center justify-center"><Bot className="w-4 h-4 text-violet-600" /></div><div className="flex-1"><p className="text-sm text-violet-800 font-medium">AI Assistant</p><p className="text-sm text-violet-700 mt-1">I analyzed the latency spike at 10:15 AM. It correlates with a surge in concurrent sessions.</p></div></div>
          <div className="mt-3 flex gap-2"><input type="text" placeholder="Ask about your alerts..." className="flex-1 border border-violet-300 rounded-lg px-3 py-2 text-sm" /><button className="px-4 py-2 bg-violet-600 text-white text-sm rounded-lg hover:bg-violet-700">Ask</button></div>
        </div>
      </div>
    </div>
  )
}

function MetricCardGA({ title, value, change, trend, data, color, priority = 'P0' }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2"><div className="flex items-center gap-2"><span className="text-sm font-medium text-gray-700">{title}</span><PriorityBadge priority={priority} /></div><div className={`w-2 h-2 rounded-full ${trend === 'up' ? 'bg-amber-500' : 'bg-green-500'}`} /></div>
      <div className="flex items-end justify-between"><div><span className="text-2xl font-bold text-gray-900">{value}</span><span className={`text-xs ml-2 ${trend === 'up' ? 'text-amber-600' : 'text-green-600'}`}>{change}</span></div></div>
      <div className="h-16 mt-2"><ResponsiveContainer width="100%" height="100%"><AreaChart data={data}><defs><linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={color} stopOpacity={0.2}/><stop offset="95%" stopColor={color} stopOpacity={0}/></linearGradient></defs><Area type="monotone" dataKey="value" stroke={color} strokeWidth={2} fill={`url(#gradient-${title})`} /><Tooltip /></AreaChart></ResponsiveContainer></div>
    </div>
  )
}

function InvestigationPage() {
  const sessions = [{ id: 'sess-001', agent: 'Service Cloud Agent', time: '10:15:32 AM', status: 'error', errorType: 'LLM Error', user: 'John Smith' }, { id: 'sess-002', agent: 'Service Cloud Agent', time: '10:16:45 AM', status: 'escalated', errorType: 'Escalated', user: 'Jane Doe' }]
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
        <div className="flex items-start gap-4"><div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
          <div className="flex-1"><div className="flex items-center gap-2"><h3 className="font-semibold text-red-800">Alert: Error Rate Spike</h3><span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">HIGH</span><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div><p className="text-sm text-red-700 mt-1">Agent Error Rate exceeded 5% threshold at 10:15 AM. Current value: 8.2%</p></div>
          <button className="px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700">Dismiss</button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200"><div className="flex items-center justify-between"><div><h3 className="text-lg font-semibold text-gray-900">Session Traces</h3><p className="text-sm text-gray-500">Sessions from alert window (10:10 - 10:15 AM)</p></div><div className="flex items-center gap-2"><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div></div></div>
        <div className="divide-y divide-gray-100">
          {sessions.map(s => (
            <div key={s.id} className="p-4 hover:bg-gray-50 cursor-pointer group">
              <div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.status === 'error' ? 'bg-red-100' : 'bg-amber-100'}`}>{s.status === 'error' ? <XCircle className="w-5 h-5 text-red-600" /> : <Users className="w-5 h-5 text-amber-600" />}</div>
                <div className="flex-1"><div className="flex items-center gap-2"><span className="font-medium text-gray-900">{s.id}</span><span className={`px-2 py-0.5 rounded text-xs font-medium ${s.status === 'error' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>{s.errorType}</span></div><div className="flex items-center gap-4 text-sm text-gray-500 mt-1"><span>{s.agent}</span><span>•</span><span>{s.user}</span><span>•</span><span>{s.time}</span></div></div>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-salesforce-blue text-white text-sm font-medium rounded-lg hover:bg-salesforce-darkBlue opacity-0 group-hover:opacity-100"><Play className="w-3 h-3" /> View Trace</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EnhancedAlerting() {
  const [showSlackSetup, setShowSlackSetup] = useState(false)
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <div className="flex items-center justify-between mb-4"><div><div className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-600" /><h3 className="text-lg font-semibold text-gray-900">Email Distribution Lists</h3><ReleaseBadge release="262" /><PriorityBadge priority="P0" /></div><p className="text-sm text-gray-500 mt-1">Send alerts to multiple team members</p></div></div>
        <div className="space-y-3"><div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><input type="checkbox" defaultChecked className="rounded" /><span className="text-sm font-medium">on-call-team@company.com</span></div><div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><input type="checkbox" defaultChecked className="rounded" /><span className="text-sm font-medium">platform-alerts@company.com</span></div><button className="flex items-center gap-2 text-salesforce-blue text-sm font-medium hover:text-salesforce-darkBlue"><Plus className="w-4 h-4" /> Add Email</button></div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <div className="flex items-center gap-2 mb-4"><Hash className="w-5 h-5 text-blue-600" /><h3 className="text-lg font-semibold text-gray-900">Slack Channel Alerts</h3><ReleaseBadge release="262" /><PriorityBadge priority="P1" /></div>
        {!showSlackSetup ? <button onClick={() => setShowSlackSetup(true)} className="flex items-center gap-2 px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg text-purple-700 font-medium hover:bg-purple-100 w-full justify-center"><MessageSquare className="w-5 h-5" />Connect Slack Workspace</button> : <div className="space-y-4"><div className="flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="w-4 h-4" /> Connected to: Acme Corp Workspace</div><select className="w-full border border-gray-200 rounded-lg px-3 py-2"><option>#agent-alerts</option><option>#platform-monitoring</option></select></div>}
      </div>
      <div className="bg-white rounded-xl shadow-sm border-2 border-purple-200 p-6">
        <div className="flex items-center gap-2 mb-4"><Clock className="w-5 h-5 text-purple-600" /><h3 className="text-lg font-semibold text-gray-900">Cooldown Status</h3><ReleaseBadge release="264" /><PriorityBadge priority="P1" /></div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg"><div><p className="font-medium text-gray-900">Error Rate &gt; 5%</p><p className="text-xs text-gray-500">Triggered 12 min ago</p></div><div className="text-right"><span className="text-sm font-medium text-purple-700">Cooldown Active</span><p className="text-xs text-gray-500">Next eligible: 18 min</p></div></div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><div><p className="font-medium text-gray-900">Latency &gt; 2000ms</p><p className="text-xs text-gray-500">Last triggered 45 min ago</p></div><span className="text-sm font-medium text-green-600">Ready to fire</span></div>
        </div>
      </div>
    </div>
  )
}

function DashboardCustomization() {
  const availableMetrics = [{ name: 'Context Precision', source: 'RAG', priority: 'P1' }, { name: 'Answer Relevancy', source: 'RAG', priority: 'P1' }, { name: 'Faithfulness', source: 'RAG', priority: 'P2' }]
  const dashboardMetrics = [{ name: 'Agent Error Rate', pinned: true }, { name: 'Avg Interaction Latency', pinned: true }, { name: 'Escalation Rate', pinned: true }]
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-4">
        <div className="flex items-center gap-3"><Sliders className="w-5 h-5 text-purple-600" /><div><h3 className="font-semibold text-purple-800">Dashboard Customization</h3><p className="text-sm text-purple-700">Add metrics from Analytics to your Monitoring dashboard.</p></div><div className="ml-auto flex items-center gap-2"><ReleaseBadge release="264" /><PriorityBadge priority="P1" /></div></div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Dashboard Metrics</h3>
          <div className="space-y-2">
            {dashboardMetrics.map((m, i) => <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${m.pinned ? 'bg-salesforce-blue/10 border border-salesforce-blue/20' : 'bg-gray-50'}`}><div className="flex items-center gap-2"><BarChart3 className={`w-4 h-4 ${m.pinned ? 'text-salesforce-blue' : 'text-gray-500'}`} /><span className="font-medium text-gray-900">{m.name}</span>{m.pinned && <span className="px-1.5 py-0.5 bg-salesforce-blue/20 text-salesforce-blue text-xs rounded">Core</span>}</div>{!m.pinned && <button className="p-1 hover:bg-red-100 rounded text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>}</div>)}
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg"><div className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" /><div><div className="flex items-center gap-2"><p className="text-sm font-medium text-amber-800">Alert Disabled Warning</p><ReleaseBadge release="264" /><PriorityBadge priority="P1" /></div><p className="text-xs text-amber-700 mt-1">Removing a metric will disable any active alerts for that metric.</p></div></div></div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available from Analytics</h3>
          <div className="space-y-2">
            {availableMetrics.map((m, i) => <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100"><div className="flex items-center gap-2"><LineChart className="w-4 h-4 text-gray-500" /><span className="font-medium text-gray-900">{m.name}</span><span className="px-1.5 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">{m.source}</span></div><button className="flex items-center gap-1 px-2 py-1 bg-salesforce-blue text-white text-xs font-medium rounded hover:bg-salesforce-darkBlue"><Plus className="w-3 h-3" /> Add</button></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

function AnomalyDetection() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4"><div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><TrendingUp className="w-6 h-6 text-emerald-600" /></div><div className="flex-1"><div className="flex items-center gap-2"><h3 className="text-xl font-bold text-emerald-800">Anomaly Detection Alerts</h3><ReleaseBadge release="260" /><PriorityBadge priority="P1" /></div><p className="text-emerald-700 mt-2">Automatically detect unusual changes without manually setting thresholds.</p></div></div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"><h4 className="font-semibold text-gray-900 mb-3">Traditional Threshold Alerts</h4><div className="space-y-2 text-sm text-gray-600"><p>• You set a fixed threshold (e.g., Error Rate &gt; 5%)</p><p>• Alert fires when value crosses threshold</p><p>• Requires manual tuning</p></div></div>
        <div className="bg-white rounded-xl shadow-sm border border-cyan-200 p-6"><h4 className="font-semibold text-cyan-800 mb-3">✨ Anomaly Detection</h4><div className="space-y-2 text-sm text-cyan-700"><p>• System learns your normal patterns</p><p>• Detects significant deviations from baseline</p><p>• Adapts to seasonal patterns</p></div></div>
      </div>
    </div>
  )
}

function AgenticMonitoring() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: "Hello! I'm your Agent Health Assistant. What would you like to know?" }])
  const [input, setInput] = useState('')
  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: input.toLowerCase().includes('latency') ? "I analyzed the latency spike at 10:15 AM. It correlates with concurrent sessions (42 vs typical 15). I recommend reviewing capacity planning." : "I can help you investigate that. Ask me about latency spikes or error rates." }])
    setInput('')
  }
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-300 rounded-xl p-6">
        <div className="flex items-start gap-4"><div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center"><Sparkles className="w-6 h-6 text-violet-600" /></div><div className="flex-1"><div className="flex items-center gap-2"><h3 className="text-xl font-bold text-violet-800">Agentic Health Monitoring</h3><ReleaseBadge release="266+" /><PriorityBadge priority="P1" /></div><p className="text-violet-700 mt-2">Ask questions about your alerts in natural language. Get AI-powered insights.</p></div></div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border-2 border-violet-200 overflow-hidden">
        <div className="p-4 border-b border-violet-200 bg-violet-50"><div className="flex items-center gap-2"><Bot className="w-5 h-5 text-violet-600" /><span className="font-semibold text-gray-900">Health Monitoring Assistant</span><span className="px-2 py-0.5 bg-violet-100 text-violet-700 text-xs rounded">AI-Powered</span></div></div>
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-salesforce-blue text-white' : 'bg-gray-100 text-gray-800'}`}>{msg.role === 'assistant' && <div className="flex items-center gap-1 mb-1"><Sparkles className="w-3 h-3 text-violet-500" /><span className="text-xs font-medium text-violet-600">AI Assistant</span></div>}<p className="text-sm">{msg.content}</p></div></div>)}
        </div>
        <div className="p-4 border-t border-gray-200"><div className="flex gap-2"><input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about your alerts..." className="flex-1 border border-gray-200 rounded-lg px-4 py-2" /><button onClick={handleSend} className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 flex items-center gap-2"><Send className="w-4 h-4" />Ask</button></div></div>
      </div>
    </div>
  )
}

function SetupOnboarding() {
  const [toggleEnabled, setToggleEnabled] = useState(true)
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4"><div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><Zap className="w-6 h-6 text-emerald-600" /></div><div className="flex-1"><div className="flex items-center gap-2"><h3 className="text-xl font-bold text-emerald-800">Setup & Onboarding</h3><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div><p className="text-emerald-700 mt-2">Enable Health Monitoring for your org and guide new users through setup.</p></div></div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
        <div className="flex items-center gap-2 mb-4"><Settings className="w-5 h-5 text-emerald-600" /><h3 className="text-lg font-semibold text-gray-900">Health Monitoring Toggle</h3><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
        <div className="bg-gray-50 rounded-lg p-4"><div className="flex items-center justify-between">
          <div className="flex items-center gap-3"><div className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${toggleEnabled ? 'bg-emerald-500' : 'bg-gray-300'}`} onClick={() => setToggleEnabled(!toggleEnabled)}><div className={`w-5 h-5 rounded-full bg-white shadow mt-0.5 transition-transform ${toggleEnabled ? 'translate-x-6.5 ml-6' : 'translate-x-0.5 ml-0.5'}`} /></div><div><p className="font-medium text-gray-900">Agent Health Monitoring</p><p className="text-xs text-gray-500">Toggle in Setup page to enable</p></div></div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${toggleEnabled ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>{toggleEnabled ? 'Enabled' : 'Disabled'}</span>
        </div></div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
        <div className="flex items-center gap-2 mb-4"><Sparkles className="w-5 h-5 text-emerald-600" /><h3 className="text-lg font-semibold text-gray-900">First Run Experience (FRE)</h3><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Activity className="w-8 h-8 text-emerald-600" /></div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Welcome to Agent Health Monitoring</h4>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Monitor your AI agents in real-time. Get alerts when things go wrong.</p>
          <div className="flex items-center justify-center gap-4"><button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700">Enable Health Monitoring</button><button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50">Learn More</button></div>
          <p className="text-xs text-gray-400 mt-4">This is a preview of the First Run Experience UI</p>
        </div>
      </div>
    </div>
  )
}
