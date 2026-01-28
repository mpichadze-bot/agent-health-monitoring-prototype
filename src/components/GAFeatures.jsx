import { useState, useEffect, useRef } from 'react'
import { Search, Bell, Sliders, TrendingUp, MessageSquare, Sparkles, ChevronRight, Clock, AlertTriangle, CheckCircle2, XCircle, Play, FileSearch, Users, Mail, Hash, Zap, ArrowUpRight, Plus, Trash2, ExternalLink, Send, Bot, LineChart, BarChart3, Activity, Layout, RefreshCw, Filter, ChevronDown, Settings, Calendar, Info, Download, Eye, Database, List, ArrowUpCircle, Globe, Server, Edit, MoreVertical, ArrowRight } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts'

export default function GAFeatures() {
  const [activeSection, setActiveSection] = useState('prototype')

  const sections = [
    { id: 'prototype', icon: Layout, label: 'Prototype', priority: 'ALL', release: 'ALL' },
    { id: 'journey', icon: Users, label: 'User Journey', priority: 'ALL', release: 'ALL' },
    { id: 'investigation', icon: FileSearch, label: 'Investigation Page', priority: 'P0', release: '260' },
    { id: 'reroute', icon: ArrowUpRight, label: 'Reroute to Agent Builder', priority: 'P0', release: '260' },
    { id: 'dmo', icon: Database, label: 'Efficiency/Scalability', priority: 'P0', release: '260-262' },
    { id: 'metrics', icon: BarChart3, label: 'OOTB & Custom Metrics', priority: 'P0', release: '260' },
    { id: 'availability', icon: Activity, label: 'Agent Availability', priority: 'P0', release: '260' },
    { id: 'alerting', icon: Bell, label: 'Alerting Improvements', priority: 'P0', release: '260-264' },
    { id: 'events', icon: List, label: 'Events & Rules', priority: 'P0', release: '260' },
    { id: 'setup', icon: Zap, label: 'Setup Flow', priority: 'P0', release: '260' },
    { id: 'exports', icon: Download, label: 'Scalable Exports', priority: 'P0', release: '262' },
    { id: 'upgrade', icon: ArrowUpCircle, label: 'Upgrade Path', priority: 'P2', release: '264' },
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
            if (release === '260-262') return 'bg-emerald-100 text-emerald-700'
            if (release === '262') return 'bg-blue-100 text-blue-700'
            if (release === '264') return 'bg-purple-100 text-purple-700'
            if (release === '266+') return 'bg-violet-100 text-violet-700'
            return 'bg-gray-100 text-gray-600'
          }
          const getBorderColor = (release) => {
            if (release === 'ALL') return 'border-gray-300'
            if (release === '260') return 'border-emerald-300'
            if (release === '260-262') return 'border-emerald-300'
            if (release === '262') return 'border-blue-300'
            if (release === '264') return 'border-purple-300'
            if (release === '266+') return 'border-violet-300'
            return 'border-gray-300'
          }
          const getPriorityColor = (priority) => {
            if (priority === 'P0') return 'bg-red-100 text-red-700'
            if (priority === 'P1') return 'bg-amber-100 text-amber-700'
            if (priority === 'P2') return 'bg-gray-100 text-gray-600'
            if (priority === 'P0-P1') return 'bg-orange-100 text-orange-700'
            return 'bg-gray-100 text-gray-600'
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
      {activeSection === 'journey' && <UserJourney />}
      {activeSection === 'investigation' && <InvestigationPage />}
      {activeSection === 'reroute' && <RerouteToAgentBuilder />}
      {activeSection === 'dmo' && <DMOIntegration />}
      {activeSection === 'metrics' && <OOTBMetrics />}
      {activeSection === 'availability' && <AgentAvailability />}
      {activeSection === 'alerting' && <EnhancedAlerting />}
      {activeSection === 'events' && <EventsDetectors />}
      {activeSection === 'setup' && <SetupOnboarding />}
      {activeSection === 'exports' && <ScalableExports />}
      {activeSection === 'upgrade' && <UpgradePath />}
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
  const [activeTab, setActiveTab] = useState('events')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditSeverityModal, setShowEditSeverityModal] = useState(false)
  const [editingSeverityEvent, setEditingSeverityEvent] = useState(null)
  const [selectedAlert, setSelectedAlert] = useState(null)
  const [selectedSession, setSelectedSession] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)
  
  // Unified filter states for Events
  const [showEventFilters, setShowEventFilters] = useState(false)
  const [eventSearch, setEventSearch] = useState('')
  const [eventStatusFilter, setEventStatusFilter] = useState('All')
  const [eventSeverityFilter, setEventSeverityFilter] = useState('All')
  const [eventAgentApiNameFilter, setEventAgentApiNameFilter] = useState('All')
  const [eventAgentTypeFilter, setEventAgentTypeFilter] = useState('All')
  const [eventThresholdFilter, setEventThresholdFilter] = useState('All')
  const [eventMetricFilter, setEventMetricFilter] = useState('All')
  
  // Unified filter states for Rules
  const [showRuleFilters, setShowRuleFilters] = useState(false)
  const [ruleSearch, setRuleSearch] = useState('')
  const [ruleStatusFilter, setRuleStatusFilter] = useState('All')
  const [ruleSeverityFilter, setRuleSeverityFilter] = useState('All')
  const [ruleAgentApiNameFilter, setRuleAgentApiNameFilter] = useState('All')
  const [ruleAgentTypeFilter, setRuleAgentTypeFilter] = useState('All')
  const [ruleThresholdFilter, setRuleThresholdFilter] = useState('All')
  const [ruleMetricFilter, setRuleMetricFilter] = useState('All')
  
  const filterRef = useRef(null)
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowEventFilters(false)
        setShowRuleFilters(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const agents = [
    { id: 'agent-001', name: 'Service Cloud Agent' },
    { id: 'agent-002', name: 'Sales Assistant' },
    { id: 'agent-003', name: 'IT Support Bot' }
  ]
  
  const events = [
    { alertName: 'Error Rate Spike', timestamp: '10:15:23 AM', status: 'New', metricName: 'Error Rate', severity: 'Critical', agentApiName: 'ServiceCloudAgent', agentType: 'Service', threshold: '5%' },
    { alertName: 'Latency Alert', timestamp: '10:14:18 AM', status: 'Acknowledged', metricName: 'Latency', severity: 'Warning', agentApiName: 'SalesAssistant', agentType: 'Sales', threshold: '2000ms' },
    { alertName: 'Escalation Rate', timestamp: '10:13:12 AM', status: 'New', metricName: 'Escalation Rate', severity: 'Info', agentApiName: 'ITSupportBot', agentType: 'Support', threshold: '10%' },
  ]
  
  const rules = [
    { name: 'Error Rate > 5%', status: 'Active', severity: 'Critical', agentApiName: 'ServiceCloudAgent', agentType: 'Service', threshold: '5%', metric: 'Error Rate' },
    { name: 'Latency > 2000ms', status: 'Active', severity: 'Warning', agentApiName: 'SalesAssistant', agentType: 'Sales', threshold: '2000ms', metric: 'Latency' },
    { name: 'Escalation Rate > 10%', status: 'Active', severity: 'Info', agentApiName: 'ITSupportBot', agentType: 'Support', threshold: '10%', metric: 'Escalation Rate' },
  ]
  
  const getUniqueValues = (data, key) => {
    const values = data.map(item => item[key]).filter(Boolean)
    return ['All', ...Array.from(new Set(values))]
  }
  
  const filteredEvents = events.filter(event => {
    if (eventSearch && !event.alertName.toLowerCase().includes(eventSearch.toLowerCase()) && 
        !event.metricName.toLowerCase().includes(eventSearch.toLowerCase())) return false
    if (eventStatusFilter !== 'All' && event.status !== eventStatusFilter) return false
    if (eventSeverityFilter !== 'All' && event.severity !== eventSeverityFilter) return false
    if (eventAgentApiNameFilter !== 'All' && event.agentApiName !== eventAgentApiNameFilter) return false
    if (eventAgentTypeFilter !== 'All' && event.agentType !== eventAgentTypeFilter) return false
    if (eventThresholdFilter !== 'All' && event.threshold !== eventThresholdFilter) return false
    if (eventMetricFilter !== 'All' && event.metricName !== eventMetricFilter) return false
    return true
  })
  
  const filteredRules = rules.filter(rule => {
    if (ruleSearch && !rule.name.toLowerCase().includes(ruleSearch.toLowerCase()) && 
        !rule.metric.toLowerCase().includes(ruleSearch.toLowerCase())) return false
    if (ruleStatusFilter !== 'All' && rule.status !== ruleStatusFilter) return false
    if (ruleSeverityFilter !== 'All' && rule.severity !== ruleSeverityFilter) return false
    if (ruleAgentApiNameFilter !== 'All' && rule.agentApiName !== ruleAgentApiNameFilter) return false
    if (ruleAgentTypeFilter !== 'All' && rule.agentType !== ruleAgentTypeFilter) return false
    if (ruleThresholdFilter !== 'All' && rule.threshold !== ruleThresholdFilter) return false
    if (ruleMetricFilter !== 'All' && rule.metric !== ruleMetricFilter) return false
    return true
  })
  
  // If viewing Session Page
  if (selectedSession) {
    return <SessionPage session={selectedSession} onBack={() => setSelectedSession(null)} />
  }
  
  // If viewing Agent Builder Page
  if (selectedTopic) {
    return <AgentBuilderPage topic={selectedTopic} onBack={() => setSelectedTopic(null)} />
  }
  
  // If viewing Alert Detail
  if (selectedAlert) {
    return <EventDetailsPage event={selectedAlert} onBack={() => setSelectedAlert(null)} onSessionClick={(session) => setSelectedSession(session)} onTopicClick={(topic) => setSelectedTopic(topic)} />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">GA PROTOTYPE</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">Release 260 - 266+</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Health Monitoring Dashboard</h2>
          <p className="text-gray-500 mt-1">Real-time visibility into your AI agent health</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700">Last refreshed: 10:45:32 AM</span>
            <ReleaseBadge release="262" />
            <PriorityBadge priority="P2" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
            <RefreshCw className="w-4 h-4" />Refresh
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-salesforce-blue text-white rounded-lg hover:bg-salesforce-darkBlue text-sm font-medium"
          >
            <Bell className="w-4 h-4" />Configure Alerts
          </button>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex gap-2 border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'events'
                ? 'border-emerald-500 text-emerald-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Events (Log)
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'rules'
                ? 'border-emerald-500 text-emerald-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Rules (Config)
          </button>
        </div>

        {activeTab === 'events' && (
          <div>
            {/* Unified Filter Bar for Events */}
            <div className="mb-4 flex items-center gap-3" ref={filterRef}>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={eventSearch}
                  onChange={(e) => setEventSearch(e.target.value)}
                  className="w-full pl-9 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowEventFilters(!showEventFilters)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {showEventFilters && <ChevronUp className="w-4 h-4" />}
                  {!showEventFilters && <ChevronDown className="w-4 h-4" />}
                </button>
                {showEventFilters && (
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={eventStatusFilter}
                        onChange={(e) => setEventStatusFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(events, 'status').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Severity</label>
                      <select
                        value={eventSeverityFilter}
                        onChange={(e) => setEventSeverityFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(events, 'severity').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Agent API Name</label>
                      <select
                        value={eventAgentApiNameFilter}
                        onChange={(e) => setEventAgentApiNameFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(events, 'agentApiName').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Agent Type</label>
                      <select
                        value={eventAgentTypeFilter}
                        onChange={(e) => setEventAgentTypeFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(events, 'agentType').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Threshold</label>
                      <select
                        value={eventThresholdFilter}
                        onChange={(e) => setEventThresholdFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(events, 'threshold').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Metric</label>
                      <select
                        value={eventMetricFilter}
                        onChange={(e) => setEventMetricFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(events, 'metricName').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Events Table */}
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0 bg-white border-b border-gray-200">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Alert Name</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Timestamp</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Metric Name</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Severity</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Agent API Name</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Agent Type</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Threshold</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredEvents.map((event, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-3">
                        <button
                          onClick={() => setSelectedAlert(event)}
                          className="text-sm font-medium text-salesforce-blue hover:underline"
                        >
                          {event.alertName}
                        </button>
                      </td>
                      <td className="p-3 text-sm text-gray-600">{event.timestamp}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          event.status === 'New' ? 'bg-blue-100 text-blue-700' :
                          event.status === 'Acknowledged' ? 'bg-amber-100 text-amber-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-600">{event.metricName}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          event.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                          event.severity === 'Warning' ? 'bg-amber-100 text-amber-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {event.severity}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-600">{event.agentApiName}</td>
                      <td className="p-3 text-sm text-gray-600">{event.agentType}</td>
                      <td className="p-3 text-sm text-gray-600">{event.threshold}</td>
                      <td className="p-3">
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setEditingSeverityEvent(event)
                              setShowEditSeverityModal(true)
                            }}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <MoreVertical className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div>
            {/* Unified Filter Bar for Rules */}
            <div className="mb-4 flex items-center gap-3" ref={filterRef}>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search rules..."
                  value={ruleSearch}
                  onChange={(e) => setRuleSearch(e.target.value)}
                  className="w-full pl-9 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowRuleFilters(!showRuleFilters)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {showRuleFilters && <ChevronUp className="w-4 h-4" />}
                  {!showRuleFilters && <ChevronDown className="w-4 h-4" />}
                </button>
                {showRuleFilters && (
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={ruleStatusFilter}
                        onChange={(e) => setRuleStatusFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(rules, 'status').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Severity</label>
                      <select
                        value={ruleSeverityFilter}
                        onChange={(e) => setRuleSeverityFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(rules, 'severity').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Agent API Name</label>
                      <select
                        value={ruleAgentApiNameFilter}
                        onChange={(e) => setRuleAgentApiNameFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(rules, 'agentApiName').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Agent Type</label>
                      <select
                        value={ruleAgentTypeFilter}
                        onChange={(e) => setRuleAgentTypeFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(rules, 'agentType').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Threshold</label>
                      <select
                        value={ruleThresholdFilter}
                        onChange={(e) => setRuleThresholdFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(rules, 'threshold').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Metric</label>
                      <select
                        value={ruleMetricFilter}
                        onChange={(e) => setRuleMetricFilter(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                      >
                        <option value="All">All</option>
                        {getUniqueValues(rules, 'metric').slice(1).map(val => <option key={val} value={val}>{val}</option>)}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Rules Table */}
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0 bg-white border-b border-gray-200">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Rule Name</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Severity</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Agent API Name</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Agent Type</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Threshold</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Metric</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredRules.map((rule, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-3 text-sm font-medium text-gray-900">{rule.name}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          rule.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {rule.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          rule.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                          rule.severity === 'Warning' ? 'bg-amber-100 text-amber-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {rule.severity}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-gray-600">{rule.agentApiName}</td>
                      <td className="p-3 text-sm text-gray-600">{rule.agentType}</td>
                      <td className="p-3 text-sm text-gray-600">{rule.threshold}</td>
                      <td className="p-3 text-sm text-gray-600">{rule.metric}</td>
                      <td className="p-3">
                        <button
                          onClick={() => {
                            setShowCreateModal(true)
                          }}
                          className="text-sm text-salesforce-blue hover:underline"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {showCreateModal && (
        <CreateAlertModal
          onClose={() => setShowCreateModal(false)}
        />
      )}
      
      {showEditSeverityModal && editingSeverityEvent && (
        <EditSeverityModal
          event={editingSeverityEvent}
          onClose={() => {
            setShowEditSeverityModal(false)
            setEditingSeverityEvent(null)
          }}
        />
      )}
    </div>
  )
}

// ... (rest of the component code continues)