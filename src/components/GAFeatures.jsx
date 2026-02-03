import { useState, useEffect, useRef } from 'react'
import { Search, Bell, Sliders, TrendingUp, MessageSquare, Sparkles, ChevronRight, Clock, AlertTriangle, CheckCircle2, XCircle, Play, FileSearch, Users, Mail, Hash, Zap, ArrowUpRight, Plus, Trash2, ExternalLink, Send, Bot, LineChart as LineChartIcon, BarChart3, Activity, Layout, RefreshCw, Filter, ChevronDown, Settings, Calendar, Info, Download, Eye, Database, List, ArrowUpCircle, Globe, Server, Edit, MoreVertical, ArrowRight } from 'lucide-react'
import AHMDiagram from './AHMDiagram'
import { AreaChart, Area, ResponsiveContainer, Tooltip, PieChart, Pie, Cell, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

export default function GAFeatures() {
  const [activeSection, setActiveSection] = useState('prototype')

  const sections = [
    { id: 'prototype', icon: Layout, label: 'Prototype', priority: 'ALL', release: 'ALL' },
    { id: 'diagram', icon: BarChart3, label: 'Alert to Investigation', priority: 'ALL', release: 'ALL' },
    { id: 'journey', icon: Users, label: 'User Journey', priority: 'ALL', release: 'ALL' },
    { id: 'investigation', icon: FileSearch, label: 'Investigation Page', priority: 'P0', release: '260' },
    { id: 'reroute', icon: ArrowUpRight, label: 'Reroute to Agent Builder & Tools', priority: 'P0', release: '260' },
    { id: 'dmo', icon: Database, label: 'Efficiency/Scalability', priority: 'P0', release: '260' },
    { id: 'metrics', icon: BarChart3, label: 'OOTB & Custom Metrics', priority: 'P0', release: '260' },
    { id: 'availability', icon: Activity, label: 'Agent & Channel Availability', priority: 'P0', release: '260' },
    { id: 'enhance', icon: List, label: 'Enhanced Experience', priority: 'P0', release: '260' },
    { id: 'alerting', icon: Bell, label: 'Alerting Improvements', priority: 'P0-P2', release: '262' },
    { id: 'setup', icon: Zap, label: 'Setup Flow', priority: 'P0', release: '262' },
    { id: 'upgrade', icon: ArrowUpCircle, label: 'Upgrade Path', priority: 'P2', release: '264' },
    { id: 'agentic', icon: Sparkles, label: 'Agentic Health Monitoring', priority: 'P1', release: '266+' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">GA</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">Release 260 - 266+</span>
            <span className="text-gray-400">•</span>
            <span className="text-xs text-gray-500">Author: Maor Pichadze | Last Update: Jan 26, 2025 | Status: Draft</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">GA Feature Showcase</h2>
          <p className="text-gray-500 mt-1">Native, scalable solution embedded in Agentforce Observability — P0 (Must), P1 (Should), P2 (Nice to Have)</p>
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
            if (priority === 'P0-P1' || priority === 'P0-P2') return 'bg-orange-100 text-orange-700'
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
      {activeSection === 'diagram' && <AHMDiagram />}
      {activeSection === 'journey' && <UserJourney />}
      {activeSection === 'investigation' && <InvestigationPage />}
      {activeSection === 'reroute' && <RerouteToAgentBuilder />}
      {activeSection === 'dmo' && <DMOIntegration />}
      {activeSection === 'metrics' && <OOTBMetrics />}
      {activeSection === 'availability' && <AgentAvailability />}
      {activeSection === 'alerting' && <EnhancedAlerting />}
      {activeSection === 'enhance' && <EventsDetectors />}
      {activeSection === 'setup' && <SetupOnboarding />}
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
  const [activeTab, setActiveTab] = useState('Events')
  const [selectedAlert, setSelectedAlert] = useState(null)
  const [selectedSession, setSelectedSession] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [activeSidebarTab, setActiveSidebarTab] = useState('Topics')
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeStatusFilter, setActiveStatusFilter] = useState('All')
  const [showAlertModal, setShowAlertModal] = useState(false)
  const [editingEvent, setEditingEvent] = useState(null)
  const [editingEventSeverity, setEditingEventSeverity] = useState(null)
  const [editingRule, setEditingRule] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [ruleDropdownOpen, setRuleDropdownOpen] = useState(null)
  
  // Column filters for Events
  const [eventFilters, setEventFilters] = useState({
    status: 'All',
    severity: 'All',
    agentApiName: 'All',
    agentType: 'All',
    threshold: 'All',
    search: ''
  })
  
  // Column filters for Rules
  const [ruleFilters, setRuleFilters] = useState({
    metric: 'All',
    agentApiName: 'All',
    agentType: 'All',
    threshold: 'All',
    status: 'All',
    search: ''
  })
  
  // Unified filter dropdowns
  const [openEventFilter, setOpenEventFilter] = useState(false)
  const [openRuleFilter, setOpenRuleFilter] = useState(false)

  const events = [
    { id: 1, name: 'Error Rate Above 3%', agentApiName: 'Service_Cloud_Agent', agentType: 'Service Agent', agentName: 'Agent 1', threshold: 'Above 3%', lastOccurrence: '2026-01-15 14:30:00', status: 'New', severity: 'Critical' },
    { id: 2, name: 'Escalation Rate', agentApiName: 'Sales_Assistant', agentType: 'Service Agent', agentName: 'Sales Bot', threshold: 'Above 15%', lastOccurrence: '2026-01-15 13:20:00', status: 'Acknowledged', severity: 'High' },
    { id: 3, name: 'Latency Rate', agentApiName: 'IT_Support_Bot', agentType: 'Support Agent', agentName: 'IT Helper', threshold: 'Above 2000ms', lastOccurrence: '2026-01-15 12:19:00', status: 'Closed', severity: 'Medium' },
  ]

  const rules = [
    { id: 1, name: 'All agent Error Alert', metric: 'Agent Error Rate', agentApiName: 'All_Agents', agentType: 'Service Agent', threshold: 'Above 3%', last24Hours: 187, status: 'Active' },
    { id: 2, name: 'Error Alert - Agent 1', metric: 'Agent Error Rate', agentApiName: 'Service_Cloud_Agent', agentType: 'Service Agent', threshold: 'Above 3%', last24Hours: 443, status: 'Active' },
    { id: 3, name: 'Latency Monitor', metric: 'Avg Latency', agentApiName: 'IT_Support_Bot', agentType: 'Support Agent', threshold: 'Above 2000ms', last24Hours: 2, status: 'Inactive' },
    { id: 4, name: 'Escalation Alert', metric: 'Escalation Rate', agentApiName: 'Sales_Assistant', agentType: 'Sales Agent', threshold: 'Above 15%', last24Hours: 12, status: 'Active' },
  ]

  const topicsData = [{ name: 'Topic A', value: 35, color: '#0176D3' }, { name: 'Topic BBBBB', value: 25, color: '#2E844A' }, { name: 'Topic CC', value: 40, color: '#DD7A01' }]
  const actionsData = [{ name: 'Nadia Warren', value: 15, color: '#0176D3' }, { name: 'Savannah Nguyen', value: 20, color: '#2E844A' }, { name: 'Ronald Richards', value: 10, color: '#DD7A01' }, { name: 'Jane Cooper', value: 15, color: '#9F1AB1' }, { name: 'Leslie Alexander', value: 12, color: '#0B827C' }, { name: 'Courtney Henry', value: 18, color: '#AA2E25' }, { name: 'Bessie Cooper', value: 10, color: '#5C6BC0' }]
  const channelsData = [{ name: 'Web Chat', value: 45, color: '#0176D3' }, { name: 'Email', value: 30, color: '#2E844A' }, { name: 'SMS', value: 25, color: '#DD7A01' }]
  
  // Metric trend data for line chart (based on alert type)
  const metricTrendData = [
    { date: 'Jan 26', value: 9.60, p50: 8.2, p75: 9.1, p95: 10.5, p99: 11.2 },
    { date: 'Jan 27', value: 10.91, p50: 9.5, p75: 10.2, p95: 11.8, p99: 12.5 },
    { date: 'Jan 28', value: 10.45, p50: 9.1, p75: 10.0, p95: 11.2, p99: 11.9 },
    { date: 'Jan 29', value: 11.20, p50: 9.8, p75: 10.6, p95: 12.1, p99: 12.8 },
    { date: 'Jan 30', value: 10.85, p50: 9.4, p75: 10.3, p95: 11.7, p99: 12.4 },
    { date: 'Jan 31', value: 10.50, p50: 9.2, p75: 10.1, p95: 11.4, p99: 12.1 },
    { date: 'Feb 1', value: 10.75, p50: 9.6, p75: 10.4, p95: 11.9, p99: 12.6 },
    { date: 'Feb 2', value: 10.28, p50: 9.0, p75: 9.8, p95: 11.0, p99: 11.7 }
  ]
  
  // Calculate 7-day average
  const avg7Days = (metricTrendData.reduce((sum, d) => sum + d.value, 0) / metricTrendData.length).toFixed(2)
  
  // Data for tables (like Investigation Page)
  const errorsByTopic = [
    { topicName: 'Billing Inquiry', error: 'LLM Error', count: 12, timestamp: '10:15:23 AM' },
    { topicName: 'Product Support', error: 'RAG Timeout', count: 8, timestamp: '10:15:18 AM' },
    { topicName: 'Account Access', error: 'Action Failed', count: 5, timestamp: '10:15:12 AM' },
  ]
  const errorsByStep = [
    { stepName: 'GetCustomerInfo', stepType: 'LLM Call', error: 'Rate Limit Exceeded', count: 15, timestamp: '10:15:23 AM' },
    { stepName: 'SearchKnowledge', stepType: 'RAG Retrieval', error: 'Timeout', count: 10, timestamp: '10:15:18 AM' },
    { stepName: 'UpdateCase', stepType: 'Action Execution', error: 'Permission Denied', count: 8, timestamp: '10:15:12 AM' },
    { stepName: 'SendNotification', stepType: 'Action Execution', error: 'Missing Input', count: 5, timestamp: '10:15:05 AM' },
  ]

  // Filter events based on all column filters
  const filteredEvents = events.filter(event => {
    if (eventFilters.status !== 'All' && event.status !== eventFilters.status) return false
    if (eventFilters.severity !== 'All' && event.severity !== eventFilters.severity) return false
    if (eventFilters.agentApiName !== 'All' && event.agentApiName !== eventFilters.agentApiName) return false
    if (eventFilters.agentType !== 'All' && event.agentType !== eventFilters.agentType) return false
    if (eventFilters.threshold !== 'All' && event.threshold !== eventFilters.threshold) return false
    if (eventFilters.search && !event.name.toLowerCase().includes(eventFilters.search.toLowerCase()) && 
        !event.agentApiName.toLowerCase().includes(eventFilters.search.toLowerCase())) return false
    return true
  })
  
  // Filter rules based on all column filters
  const filteredRules = rules.filter(rule => {
    if (ruleFilters.metric !== 'All' && rule.metric !== ruleFilters.metric) return false
    if (ruleFilters.agentApiName !== 'All' && rule.agentApiName !== ruleFilters.agentApiName) return false
    if (ruleFilters.agentType !== 'All' && rule.agentType !== ruleFilters.agentType) return false
    if (ruleFilters.threshold !== 'All' && rule.threshold !== ruleFilters.threshold) return false
    if (ruleFilters.status !== 'All' && rule.status !== ruleFilters.status) return false
    if (ruleFilters.search && !rule.name.toLowerCase().includes(ruleFilters.search.toLowerCase()) && 
        !rule.agentApiName.toLowerCase().includes(ruleFilters.search.toLowerCase())) return false
    return true
  })
  
  // Get unique values for filter dropdowns
  const getUniqueValues = (data, key) => {
    const values = [...new Set(data.map(item => item[key]))]
    return values.sort()
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-container')) {
        setDropdownOpen(null)
      }
      if (ruleDropdownOpen && !event.target.closest('.dropdown-container')) {
        setRuleDropdownOpen(null)
      }
      if (openEventFilter && !event.target.closest('.dropdown-container')) {
        setOpenEventFilter(false)
      }
      if (openRuleFilter && !event.target.closest('.dropdown-container')) {
        setOpenRuleFilter(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen, ruleDropdownOpen, openEventFilter, openRuleFilter])

  const getStatusBadgeColors = (status) => {
    if (status === 'New') return 'bg-red-100 text-red-800'
    if (status === 'Acknowledged') return 'bg-orange-100 text-orange-800'
    if (status === 'Closed') return 'bg-green-100 text-green-800'
    return 'bg-gray-100 text-gray-800'
  }

  // Agent Builder View (for topic navigation)
  if (selectedTopic) {
    const sidebarTabs = [
      { id: 'Topics', icon: Hash },
      { id: 'Connections', icon: Zap },
      { id: 'Data', icon: Database },
      { id: 'Context', icon: Settings },
      { id: 'Language', icon: Globe },
      { id: 'Events', icon: Bell },
      { id: 'Checklist', icon: CheckCircle2 },
    ]
    
    const topics = [
      { name: 'General CRM', selected: selectedTopic.name === 'General CRM' },
      { name: 'Single Record Summary', selected: selectedTopic.name === 'Single Record Summary' },
      { name: 'Billing Inquiry', selected: selectedTopic.name === 'Billing Inquiry' },
      { name: 'Product Support', selected: selectedTopic.name === 'Product Support' },
      { name: 'Account Access', selected: selectedTopic.name === 'Account Access' },
    ]

  return (
      <div className="flex h-[calc(100vh-200px)] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
        {/* Left Sidebar */}
        <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
          {sidebarTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSidebarTab(tab.id)}
              className={`w-12 h-12 flex flex-col items-center justify-center rounded-lg mb-1 ${activeSidebarTab === tab.id ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-[9px] mt-0.5">{tab.id}</span>
            </button>
          ))}
        </div>

        {/* Topics Panel */}
        <div className="w-80 bg-white border-r border-gray-200">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
            <button onClick={() => setSelectedTopic(null)} className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4 text-gray-500 rotate-180" />
            </button>
            <span className="text-sm text-gray-600">Back to Alert</span>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Topics</h2>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded"><ArrowRight className="w-4 h-4 text-gray-400" /></button>
                <button className="p-1 hover:bg-gray-100 rounded"><XCircle className="w-4 h-4 text-gray-400" /></button>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">Manage the topics assigned to your agent. To make changes, your agent must be deactivated.</p>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 text-sm font-medium hover:bg-gray-50 mb-4">
              New <ChevronDown className="w-4 h-4" />
            </button>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Search topics..." className="w-full pl-9 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2"><RefreshCw className="w-4 h-4 text-gray-400" /></button>
            </div>

            <p className="text-xs text-gray-500 mb-2">{topics.length} items • Sorted by Topic Label(asc)</p>

            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-t-lg border border-gray-200">
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-gray-700">Topic Label</span>
                <ChevronDown className="w-3 h-3 text-gray-500 rotate-180" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            <div className="border-x border-b border-gray-200 rounded-b-lg">
              {topics.map((topic, i) => (
                <div key={i} className={`flex items-center justify-between py-3 px-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer ${topic.selected ? 'bg-blue-50' : ''}`}>
                  <span className={`text-sm ${topic.selected ? 'text-blue-600 font-medium' : 'text-blue-600'}`}>{topic.name}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 flex flex-col">
          <div className="bg-[#032D60] text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setSelectedTopic(null)} className="p-1 hover:bg-white/10 rounded">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <span className="font-medium">Agentforce Builder</span>
              <span className="text-white/80 text-sm">Agentforce Employee Agent(Default)</span>
              <span className="text-white/60 text-sm">Version 1</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm text-white/80 hover:text-white">Settings</button>
              <button className="text-sm text-white/80 hover:text-white">Help</button>
              <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">Activate</button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-4">
                <List className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Put your topics to the test</h3>
              <p className="text-gray-600 max-w-md">Start a conversation to preview how your agent builds a plan and executes actions based on user interactions.</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-80 bg-white border-l border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Conversation Preview</h3>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded"><Eye className="w-4 h-4 text-gray-400" /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><RefreshCw className="w-4 h-4 text-gray-400" /></button>
            </div>
          </div>
          <div className="p-4 text-center text-gray-500 text-sm">
            <p>No conversation started yet.</p>
            <p className="mt-2">Select a topic and start testing.</p>
          </div>
        </div>
      </div>
    )
  }

  // Session Page View
  if (selectedSession) {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Breadcrumb */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center text-sm">
            <span className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => { setSelectedSession(null); }}>Alerts</span>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => setSelectedSession(null)}>{selectedAlert?.name || 'Alert'}</span>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="font-medium text-gray-800">Session: {selectedSession.id}</span>
          </div>
          
          {/* Session Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </div>
        <div>
                <h2 className="text-xl font-bold text-gray-900">Session: January 27, 2026, 4:00:00 PM</h2>
                <p className="text-sm text-gray-500">Session ID: 24927f36-a077-415d-9aa6-8cc8fa49ee7b</p>
        </div>
            </div>
          </div>

          {/* Session Content - Two Columns */}
          <div className="flex">
            {/* Left Column - Chat Session Log */}
            <div className="w-1/2 border-r border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Chat Session Log</h3>
                  <span className="text-sm text-gray-500">(4 min, 47 sec)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded"><Download className="w-4 h-4 text-gray-500" /></button>
                  <button className="p-1 hover:bg-gray-100 rounded"><ChevronDown className="w-4 h-4 text-gray-500 rotate-180" /></button>
                  <button className="p-1 hover:bg-gray-100 rounded"><ChevronDown className="w-4 h-4 text-gray-500" /></button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {/* First interaction */}
                <div className="border-l-2 border-dashed border-gray-300 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">(1 min, 32 sec)</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">Quality: High</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-2">
                    <div className="flex items-start gap-2">
                      <Bot className="w-5 h-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-700">Hello! Thank you for reaching out to Pronto Food Delivery support. I'd be happy to assist you with insights into your restaurant's performance. Could you let me know what specific information you're looking for?</p>
                        <p className="text-xs text-gray-400 mt-1">Agent (Complete: 5 sec)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg p-3 ml-8 mb-1">
                    <p className="text-sm">What are the top-performing menu items at my restaurant, and how can I leverage this information?</p>
                  </div>
                  <p className="text-xs text-gray-500 text-right">User • 4:01:30 PM</p>
                </div>

                {/* Second interaction */}
                <div className="border-l-2 border-dashed border-gray-300 pl-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-2">
                    <div className="flex items-start gap-2">
                      <Bot className="w-5 h-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-700">Great question! Your top-performing menu items are determined based on metrics like total orders, customer ratings, and revenue generation. You can leverage this information by promoting these items in your campaigns, offering discounts, or featuring them in loyalty programs. If you're using our Restaurant Performance Analytics tool, you can access detailed insights for these items. Would you like me to guide you on how to access this data?</p>
                        <p className="text-xs text-gray-400 mt-1">Agent (Complete: 2 sec)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third interaction */}
                <div className="border-l-2 border-dashed border-gray-300 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">Commission Rates and Penalties</span>
                    <span className="text-xs text-gray-500">(1 min, 37 sec)</span>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">Quality: Medium</span>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg p-3 ml-8 mb-1">
                    <p className="text-sm">What is the commission percentage that Pronto takes from each order, and how is it calculated?</p>
                  </div>
                  <p className="text-xs text-gray-500 text-right">User • 4:03:10 PM</p>
                </div>

                {/* Fourth response */}
                <div className="border-l-2 border-dashed border-gray-300 pl-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Bot className="w-5 h-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-700">The commission percentage Pronto takes varies based on your partnership agreement, but it typically ranges between 15% and 30% per order. It is calculated based on the total order value before taxes and delivery fees. For a detailed breakdown of your specific commission rate and calculations, you can refer to your...</p>
                        <p className="text-xs text-gray-400 mt-1">Agent (Complete: 3 sec)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interaction Summary */}
            <div className="w-1/2 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <button className="text-blue-600 font-semibold text-sm border-b-2 border-blue-600 pb-1">Interaction Summary</button>
                  <button className="text-gray-500 text-sm pb-1">Trace</button>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <XCircle className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Interaction Steps */}
              <div className="space-y-3">
        <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Input:</span>
                  <span className="flex items-center gap-1 text-sm text-blue-600">
                    <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">🎤</span>
                    Input
                  </span>
        </div>
                <div className="flex items-center gap-3 ml-2 border-l-2 border-dotted border-gray-300 pl-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Reasoning:</span>
                  <span className="flex items-center gap-1 text-sm text-blue-600">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    Action Selection
                  </span>
      </div>
                <div className="flex items-center gap-3 ml-2 border-l-2 border-dotted border-gray-300 pl-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Reasoning:</span>
                  <span className="flex items-center gap-1 text-sm text-blue-600">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    Topic Selection
                  </span>
                </div>
                <div className="flex items-center gap-3 ml-2 border-l-2 border-dotted border-gray-300 pl-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Topic:</span>
                  <span className="flex items-center gap-1 text-sm text-blue-600">
                    <Hash className="w-4 h-4 text-gray-500" />
                    Performance_Insights_Request
                  </span>
                </div>
                <div className="flex items-center gap-3 ml-2 border-l-2 border-dotted border-gray-300 pl-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Reasoning:</span>
                  <span className="flex items-center gap-1 text-sm text-blue-600">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    Action Selection
                  </span>
                </div>
                <div className="flex items-center gap-3 ml-2 border-l-2 border-dotted border-gray-300 pl-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Output Evaluation:</span>
                  <span className="flex items-center gap-1 text-sm text-blue-600">
                    <Search className="w-4 h-4 text-gray-500" />
                    Output Evaluation
                  </span>
                </div>
                <div className="flex items-center gap-3 ml-2 border-l-2 border-dotted border-gray-300 pl-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Reasoning:</span>
                  <span className="flex items-center gap-1 text-sm text-blue-600">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    Reasoning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedAlert) {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Breadcrumb */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center text-sm">
            <span className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => setSelectedAlert(null)}>Alerts</span>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="font-medium text-gray-800">{selectedAlert.name}</span>
          </div>
          
          {/* Alert Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-red-50 to-orange-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Bell className="w-5 h-5 text-red-600" />
              </div>
        <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-gray-900">{selectedAlert.name}</h2>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColors(selectedAlert.status)}`}>{selectedAlert.status}</span>
                  <ReleaseBadge release="260" />
                  <PriorityBadge priority="P0" />
                </div>
                <p className="text-sm text-gray-600">Above 3% in the last 5 minutes • {selectedAlert.agentName} • {selectedAlert.agentType}</p>
              </div>
            </div>
          </div>

          {/* Blast Radius */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Blast Radius</h3>
              <ReleaseBadge release="260" />
              <PriorityBadge priority="P0" />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Topics</h4>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={topicsData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value" label={false}>
                        {topicsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Legend layout="vertical" align="right" verticalAlign="middle" iconSize={8} formatter={(value) => <span className="text-xs text-gray-600">{value}</span>} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-2"><span className="text-2xl font-bold text-gray-900">3</span></div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Actions</h4>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={actionsData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value" label={false}>
                        {actionsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Legend layout="vertical" align="right" verticalAlign="middle" iconSize={8} formatter={(value) => <span className="text-xs text-gray-600">{value}</span>} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-2"><span className="text-2xl font-bold text-gray-900">7</span></div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">{selectedAlert.metric}</h4>
                <div className="text-center mb-2">
                  <span className="text-2xl font-bold text-gray-900">{avg7Days}%</span>
                  <div className="text-xs text-gray-500">7-day average</div>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metricTrendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="date" 
                        tick={{ fontSize: 10 }} 
                        tickLine={false}
                        axisLine={{ stroke: '#e5e7eb' }}
                      />
                      <YAxis 
                        tick={{ fontSize: 10 }} 
                        tickLine={false}
                        axisLine={{ stroke: '#e5e7eb' }}
                        domain={['dataMin - 1', 'dataMax + 1']}
                      />
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload
                            return (
                              <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-lg">
                                <div className="font-semibold text-gray-900 mb-1">{selectedAlert.metric}</div>
                                <div className="text-sm text-gray-700 mb-2">{data.value}%</div>
                                <div className="text-xs text-gray-600 mb-1">Day: {data.date}</div>
                                <div className="border-t border-gray-200 pt-2 mt-2 space-y-1">
                                  <div className="flex justify-between text-xs">
                                    <span className="text-gray-500">p50:</span>
                                    <span className="font-medium text-gray-700">{data.p50}%</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span className="text-gray-500">p75:</span>
                                    <span className="font-medium text-gray-700">{data.p75}%</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span className="text-gray-500">p95:</span>
                                    <span className="font-medium text-gray-700">{data.p95}%</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span className="text-gray-500">p99:</span>
                                    <span className="font-medium text-gray-700">{data.p99}%</span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#4F46E5" 
                        strokeWidth={2}
                        dot={{ fill: '#4F46E5', r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Errors by Topic Table */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900">Errors by Topic</h3>
                <ReleaseBadge release="260" />
                <PriorityBadge priority="P0" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500" 
                  />
                </div>
                <button className="p-1.5 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-600">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Topic Name</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Error</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Count</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {errorsByTopic.map((error, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-blue-600 cursor-pointer hover:underline" onClick={() => setSelectedTopic({ name: error.topicName })}>{error.topicName}</td>
                      <td className="py-3 px-4 text-sm text-red-600">{error.error}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{error.count}</td>
                      <td className="py-3 px-4 text-sm text-gray-500">{error.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Errors by Session Table */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900">Errors by Session</h3>
                <ReleaseBadge release="260" />
                <PriorityBadge priority="P0" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 flex items-center gap-1">Deep links to Optimizer <PriorityBadge priority="P2" /></span>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                  <button className="p-1.5 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-600">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Step Name</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Step Type</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Error</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Count</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600">Timestamp</th>
                    <th className="py-3 px-4 text-right text-xs font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {errorsByStep.map((error, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-blue-600 cursor-pointer hover:underline" onClick={() => setSelectedSession({ id: `24927f36-a077-415d-9aa6-${error.stepName}`, type: 'step', name: error.stepName })}>{error.stepName}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{error.stepType}</td>
                      <td className="py-3 px-4 text-sm text-red-600">{error.error}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{error.count}</td>
                      <td className="py-3 px-4 text-sm text-gray-500">{error.timestamp}</td>
                      <td className="py-3 px-4 text-right">
                        <button className="text-salesforce-blue text-sm hover:underline" onClick={() => setSelectedSession({ id: `24927f36-a077-415d-9aa6-${error.stepName}`, type: 'step', name: error.stepName })}>View in Optimizer</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <Bell className="w-6 h-6 text-red-600" />
          </div>
        <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="text-xs text-gray-500 font-medium">Metric</div>
              <ReleaseBadge release="260" />
              <PriorityBadge priority="P0" />
        </div>
            <h1 className="text-2xl font-bold text-gray-800">Alerts</h1>
        </div>
        </div>
        <button 
          onClick={() => { setShowAlertModal(true); setEditingEvent(null) }}
          className="bg-white border border-gray-300 hover:bg-gray-50 text-blue-600 font-medium py-2 px-6 rounded-full shadow-sm text-sm"
        >
          Create Alert
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {[
            { name: 'Events', priority: 'P0', release: '260' },
            { name: 'Rules', priority: 'P0', release: '260' }
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === tab.name
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.name}
              <ReleaseBadge release={tab.release} />
              <PriorityBadge priority={tab.priority} />
            </button>
          ))}
        </div>
      </div>

      {/* Events Tab */}
      {activeTab === 'Events' && (
        <div>
          <div className="flex justify-between items-end mb-4">
            <div className="text-sm text-gray-600">{filteredEvents.length} items • Sorted by Last Occurrence</div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={eventFilters.search}
                  onChange={(e) => setEventFilters({...eventFilters, search: e.target.value})}
                  className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500" 
                />
              </div>
              <div className="relative dropdown-container">
                <button
                  onClick={() => setOpenEventFilter(!openEventFilter)}
                  className={`p-1.5 border rounded-full ${Object.values(eventFilters).some(v => v !== 'All' && v !== '') ? 'bg-blue-50 border-blue-300 text-blue-600' : 'border-gray-300 hover:bg-gray-50 text-gray-600'}`}
                >
                  <Filter className="w-4 h-4" />
                </button>
                {openEventFilter && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg z-50 p-4 dropdown-container">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                        <select 
                          value={eventFilters.status}
                          onChange={(e) => setEventFilters({...eventFilters, status: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(events, 'status').map(val => <option key={val} value={val}>{val}</option>)}
          </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Severity</label>
                        <select 
                          value={eventFilters.severity}
                          onChange={(e) => setEventFilters({...eventFilters, severity: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(events, 'severity').map(val => <option key={val} value={val}>{val}</option>)}
            </select>
          </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Agent API Name</label>
                        <select 
                          value={eventFilters.agentApiName}
                          onChange={(e) => setEventFilters({...eventFilters, agentApiName: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(events, 'agentApiName').map(val => <option key={val} value={val}>{val}</option>)}
          </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Agent Type</label>
                        <select 
                          value={eventFilters.agentType}
                          onChange={(e) => setEventFilters({...eventFilters, agentType: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(events, 'agentType').map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Threshold</label>
                        <select 
                          value={eventFilters.threshold}
                          onChange={(e) => setEventFilters({...eventFilters, threshold: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(events, 'threshold').map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
        </div>
      </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Alert Name<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Status<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P2" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Severity<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="262" /><PriorityBadge priority="P1" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Agent API Name<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Agent Type<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Threshold<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Last Occurrence<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-sm font-medium text-blue-600 cursor-pointer hover:underline" onClick={(e) => { if (!e.target.closest('.dropdown-container')) setSelectedAlert(event) }}>{event.name}</td>
                      <td className="py-4 px-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColors(event.status)}`}>{event.status}</span></td>
                      <td className="py-4 px-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                        event.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>{event.severity}</span></td>
                      <td className="py-4 px-4 text-sm text-gray-700">{event.agentApiName}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{event.agentType}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{event.threshold}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{event.lastOccurrence}</td>
                    <td className="py-4 px-4 relative dropdown-container">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setDropdownOpen(dropdownOpen === event.id ? null : event.id)
                        }}
                        className="text-gray-400 hover:text-blue-600 border border-gray-200 rounded-full p-1"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      {dropdownOpen === event.id && (
                        <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50 py-1 dropdown-container">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setEditingEventSeverity(event)
                              setDropdownOpen(null)
                            }}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                          >
                            <Edit className="w-4 h-4" />
                            Edit Incident
                          </button>
          </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
        </div>
      )}

      {/* Rules Tab */}
      {activeTab === 'Rules' && (
        <div>
          <div className="flex justify-between items-end mb-4">
            <div className="text-sm text-gray-600">{filteredRules.length} items</div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={ruleFilters.search}
                  onChange={(e) => setRuleFilters({...ruleFilters, search: e.target.value})}
                  className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500" 
                />
              </div>
              <div className="relative dropdown-container">
                <button
                  onClick={() => setOpenRuleFilter(!openRuleFilter)}
                  className={`p-1.5 border rounded-full ${Object.values(ruleFilters).some(v => v !== 'All' && v !== '') ? 'bg-blue-50 border-blue-300 text-blue-600' : 'border-gray-300 hover:bg-gray-50 text-gray-600'}`}
                >
                  <Filter className="w-4 h-4" />
                </button>
                {openRuleFilter && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg z-50 p-4 dropdown-container">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Metric</label>
                        <select 
                          value={ruleFilters.metric}
                          onChange={(e) => setRuleFilters({...ruleFilters, metric: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(rules, 'metric').map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Agent API Name</label>
                        <select 
                          value={ruleFilters.agentApiName}
                          onChange={(e) => setRuleFilters({...ruleFilters, agentApiName: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(rules, 'agentApiName').map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Agent Type</label>
                        <select 
                          value={ruleFilters.agentType}
                          onChange={(e) => setRuleFilters({...ruleFilters, agentType: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(rules, 'agentType').map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Threshold</label>
                        <select 
                          value={ruleFilters.threshold}
                          onChange={(e) => setRuleFilters({...ruleFilters, threshold: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(rules, 'threshold').map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                        <select 
                          value={ruleFilters.status}
                          onChange={(e) => setRuleFilters({...ruleFilters, status: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
                        >
                          <option value="All">All</option>
                          {getUniqueValues(rules, 'status').map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
      </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Alert Name<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Metric<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Agent API Name<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Agent Type<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Threshold<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Last 24 Hours<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-600 whitespace-nowrap">
                      <div className="flex items-center gap-1">Status<ChevronDown className="w-3 h-3 text-blue-600" /><ReleaseBadge release="260" /><PriorityBadge priority="P0" /></div>
                    </th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredRules.map((d) => (
                    <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-sm font-medium text-blue-600 cursor-pointer hover:underline">{d.name}</td>
                      <td className="py-4 px-4 text-sm text-gray-700">{d.metric}</td>
                      <td className="py-4 px-4 text-sm text-gray-700">{d.agentApiName}</td>
                      <td className="py-4 px-4 text-sm text-gray-700">{d.agentType}</td>
                      <td className="py-4 px-4 text-sm text-gray-700">{d.threshold}</td>
                      <td className="py-4 px-4 text-sm text-gray-700">{d.last24Hours}</td>
                      <td className="py-4 px-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${d.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                          {d.status}
                        </div>
                      </td>
                      <td className="py-4 px-4 relative dropdown-container">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            setRuleDropdownOpen(ruleDropdownOpen === d.id ? null : d.id)
                          }}
                          className="text-gray-400 hover:text-blue-600 border border-gray-200 rounded-full p-1"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                        {ruleDropdownOpen === d.id && (
                          <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50 py-1 dropdown-container">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setEditingRule(d)
                                setShowAlertModal(true)
                                setRuleDropdownOpen(null)
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                            >
                              <Edit className="w-4 h-4" />
                              Edit Rule
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Edit Incident Modal (for Events only - Status and Severity) */}
      {editingEventSeverity && <EditSeverityModal event={editingEventSeverity} onClose={() => { setEditingEventSeverity(null) }} />}
      
      {/* Create/Edit Alert Modal (for Rules) */}
      {showAlertModal && <CreateAlertModal event={editingEvent} rule={editingRule} onClose={() => { setShowAlertModal(false); setEditingEvent(null); setEditingRule(null) }} />}
    </div>
  )
}

function UserJourney() {
  const [selectedJourney, setSelectedJourney] = useState('day1')

  const journeyStyles = {
    emerald: {
      activeBorder: 'border-emerald-500',
      activeBg: 'bg-emerald-50',
      activeIcon: 'text-emerald-600',
      activeText: 'text-emerald-800',
    },
    red: {
      activeBorder: 'border-red-500',
      activeBg: 'bg-red-50',
      activeIcon: 'text-red-600',
      activeText: 'text-red-800',
    },
    blue: {
      activeBorder: 'border-blue-500',
      activeBg: 'bg-blue-50',
      activeIcon: 'text-blue-600',
      activeText: 'text-blue-800',
    },
    slate: {
      activeBorder: 'border-slate-500',
      activeBg: 'bg-slate-50',
      activeIcon: 'text-slate-700',
      activeText: 'text-slate-800',
    },
  }

  const journeys = [
    { id: 'day1', label: 'Day 1: First Setup', icon: Zap, color: 'emerald' },
    { id: 'alert-response', label: 'Alert Response', icon: Bell, color: 'red' },
    { id: 'adjustment', label: 'Alert Adjustment', icon: Settings, color: 'blue' },
    { id: 'architecture', label: 'Alerting Architecture', icon: Database, color: 'slate' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-purple-800">User Journey Maps</h3>
            <p className="text-purple-700 mt-2">Explore the key user journeys for Agent Health Monitoring</p>
          </div>
        </div>
      </div>

      {/* Journey Selector */}
      <div className="flex gap-3">
        {journeys.map((journey) => (
          <button
            key={journey.id}
            onClick={() => setSelectedJourney(journey.id)}
            className={`flex-1 p-4 rounded-lg border-2 transition-all ${
              selectedJourney === journey.id
                ? `${journeyStyles[journey.color].activeBorder} ${journeyStyles[journey.color].activeBg}`
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2 justify-center">
              <journey.icon
                className={`w-5 h-5 ${
                  selectedJourney === journey.id ? journeyStyles[journey.color].activeIcon : 'text-gray-600'
                }`}
              />
              <span
                className={`font-semibold ${
                  selectedJourney === journey.id ? journeyStyles[journey.color].activeText : 'text-gray-700'
                }`}
              >
                {journey.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Alerting Architecture Journey */}
      {selectedJourney === 'architecture' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border-2 border-slate-300 p-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-bold text-gray-900">The Architecture of Uncertainty</h3>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">Principles Overlay</span>
            </div>
            <p className="text-sm text-gray-600">
              This view reframes AHM from <strong>deterministic uptime</strong> to <strong>probabilistic correctness & usefulness</strong>. It explains how teams
              choose alert logic for different AI failure modes (silent failures, drift, loops, hallucinations).
            </p>
          </div>

          {/* 4 Layers */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-900">Four Layers of Agent Observability</h4>
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">Framework</span>
        </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Pick alert logic by layer</span>
                <ChevronRight className="w-4 h-4" />
                <span>Reduce noise</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-lg border-2 border-slate-200 bg-slate-50">
      <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-800 text-white">Layer 1</span>
                    <span className="font-semibold text-gray-900">Infrastructure & Resource Telemetry</span>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">Best fit: Static thresholds</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  CPU/memory saturation, provider reachability, vector DB availability. Binary limits → alert when violated.
                </p>
              </div>

              <div className="p-4 rounded-lg border-2 border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-800 text-white">Layer 2</span>
                    <span className="font-semibold text-gray-900">Operational Execution</span>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">Best fit: Trend + composite</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Interaction latency, tool invocation success rate, session duration. Normalize by complexity (e.g., latency + token count).
                </p>
              </div>

              <div className="p-4 rounded-lg border-2 border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-800 text-white">Layer 3</span>
                    <span className="font-semibold text-gray-900">Cognitive & Semantic Integrity</span>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-800 border border-violet-200">Best fit: Semantic judge + trend</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Hallucination, faithfulness/groundedness, toxicity, semantic drift. Requires model-as-a-judge or embedding monitoring.
                </p>
                <p className="text-[11px] text-violet-700 mt-2">
                  Note: These are strategic principles (not all are in GA PRD scope today).
                </p>
              </div>

              <div className="p-4 rounded-lg border-2 border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-800 text-white">Layer 4</span>
                    <span className="font-semibold text-gray-900">Outcome & Experience</span>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">Best fit: Symptom-based trend</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Escalation rate, goal completion, CSAT/sentiment slope. “Telemetry green, outcome red” lives here.
                </p>
              </div>
            </div>
          </div>

          {/* Decision matrix */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-semibold text-gray-900">Decision Matrix: Choose the Right Alert Method</h4>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">Playbook</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-3 text-xs font-semibold text-gray-600">Metric / Scenario</th>
                    <th className="text-left p-3 text-xs font-semibold text-gray-600">Recommended Method</th>
                    <th className="text-left p-3 text-xs font-semibold text-gray-600">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 text-gray-800">PII / Toxicity guardrails</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-red-100 text-red-800 text-xs font-semibold">Static threshold (zero tolerance)</span></td>
                    <td className="p-3 text-gray-600">Hard boundary — any violation is an incident.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-800">Cost per session / token caps</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-red-100 text-red-800 text-xs font-semibold">Static threshold (circuit breaker)</span></td>
                    <td className="p-3 text-gray-600">Prevents runaway spend / loops.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-800">Escalation rate / sentiment trends</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-semibold">Trend / anomaly detection</span></td>
                    <td className="p-3 text-gray-600">“Normal” is contextual & seasonal; detect drift early.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-800">Latency health</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-amber-100 text-amber-800 text-xs font-semibold">Composite (latency + complexity)</span></td>
                    <td className="p-3 text-gray-600">Avoid false positives on complex prompts.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-800">Logic loops / stuck agents</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-amber-100 text-amber-800 text-xs font-semibold">Composite (repetition logic)</span></td>
                    <td className="p-3 text-gray-600">Single-metric thresholds are noisy; patterns matter.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-800">Hallucination / groundedness</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-violet-100 text-violet-800 text-xs font-semibold">Semantic judge + trend</span></td>
                    <td className="p-3 text-gray-600">Quality is semantic; evaluate content, then alert on rate.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-800">Overall reliability (SLO)</td>
                    <td className="p-3"><span className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-xs font-semibold">Error budget burn-rate</span></td>
                    <td className="p-3 text-gray-600">Reduces alert fatigue; pages only when budget is at risk.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
              <strong>How this changes the UX:</strong> “Create Alert” becomes less about picking a metric and more about choosing the <em>right alert method</em>
              for the metric’s layer (threshold vs trend vs composite vs semantic).
            </div>
          </div>
        </div>
      )}

      {/* Day 1 Journey */}
      {selectedJourney === 'day1' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-300 p-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-bold text-gray-900">Day 1: First Time Setup</h3>
              <ReleaseBadge release="260" />
              <PriorityBadge priority="P0" />
            </div>
            <p className="text-sm text-gray-600 mb-6">Admin or Agent Builder's journey when first accessing Agent Health Monitoring</p>

            {/* Flow Steps */}
            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="w-0.5 h-full bg-emerald-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">Entry Point</h4>
                      <ReleaseBadge release="260" />
                      <PriorityBadge priority="P0" />
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Admin/Agent Builder lands in <strong>Agentforce Observability → Alerts</strong> (left nav)</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                      <ArrowRight className="w-3 h-3" />
                      <span>First navigation to Alerts section</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="w-0.5 h-full bg-emerald-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">First Run Experience (If Not Enabled)</h4>
                      <ReleaseBadge release="260" />
                      <PriorityBadge priority="P0" />
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Sees <strong>FRE UI</strong> explaining AHM value + CTA</p>
                    <div className="bg-white border border-emerald-300 rounded p-3 mt-2">
                      <p className="text-xs text-gray-600 mb-2"><strong>CTA:</strong> "Enable Health Monitoring"</p>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <ArrowRight className="w-3 h-3" />
                        <span>Takes them to <strong>Setup → Enablement Toggle</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="w-0.5 h-full bg-emerald-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">First Visit (Enabled)</h4>
                      <ReleaseBadge release="260" />
                      <PriorityBadge priority="P0" />
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Lands on <strong>Rules (Config)</strong> tab by default</p>
                    <div className="flex items-center gap-2 text-xs text-emerald-700 bg-white border border-emerald-300 rounded px-3 py-2 mt-2">
                      <Info className="w-4 h-4" />
                      <span>Empty state with guidance: "Create your first alert detector"</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div className="w-0.5 h-full bg-emerald-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">Create First Detector</h4>
                      <ReleaseBadge release="260" />
                      <PriorityBadge priority="P0" />
                    </div>
                    <p className="text-sm text-gray-700 mb-3">Clicks <strong>Create Alert</strong> button → Modal opens</p>
                    <div className="space-y-2">
                      <div className="bg-white border border-emerald-300 rounded p-2 text-xs">
                        <span className="font-semibold text-gray-700">1. Attributes:</span> Metric, Name, Description, Agent Selection
                      </div>
                      <div className="bg-white border border-emerald-300 rounded p-2 text-xs">
                        <span className="font-semibold text-gray-700">2. Parameters:</span> Condition, Threshold, Time Frame (with metric context: 7-day avg, p50, p95, p99)
                      </div>
                      <div className="bg-white border border-amber-300 rounded p-2 text-xs">
                        <span className="font-semibold text-gray-700">3. Severity:</span> Critical / High / Medium <ReleaseBadge release="262" /><PriorityBadge priority="P1" />
                      </div>
                      <div className="bg-white border border-blue-300 rounded p-2 text-xs">
                        <span className="font-semibold text-gray-700">4. Messaging:</span> Email (me), DL, Slack, Webhook <ReleaseBadge release="262" /><PriorityBadge priority="P0" />
                      </div>
                      <div className="bg-white border border-purple-300 rounded p-2 text-xs">
                        <span className="font-semibold text-gray-700">5. Cooldown:</span> 15-180 min <ReleaseBadge release="264" /><PriorityBadge priority="P1" />
                      </div>
                      <div className="bg-white border border-emerald-300 rounded p-2 text-xs">
                        <span className="font-semibold text-gray-700">6. Status:</span> Enable Alert toggle
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                </div>
                <div className="flex-1">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">Outcome</h4>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-700">Rule appears in <strong>Rules</strong> list</p>
                    <p className="text-xs text-gray-600 mt-2">User understands: "what will fire" and "who gets notified"</p>
                    <div className="mt-3 p-2 bg-emerald-100 rounded text-xs text-emerald-800">
                      <strong>Success Metric:</strong> Alert configuration activity: ≥50% of orgs have ≥1 alert setup
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alert Response Journey */}
      {selectedJourney === 'alert-response' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border-2 border-red-300 p-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-bold text-gray-900">Alert Response: From Notification to Resolution</h3>
              <ReleaseBadge release="260" />
              <PriorityBadge priority="P0" />
            </div>
            <p className="text-sm text-gray-600 mb-6">User journey when an alert fires and notification is received</p>

            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="w-0.5 h-full bg-red-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">Alert Fires</h4>
                      <ReleaseBadge release="260" />
                      <PriorityBadge priority="P0" />
                    </div>
                    <p className="text-sm text-gray-700 mb-3">Alert condition met → System sends notification</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="bg-white border border-red-300 rounded p-2 text-xs">
                        <Mail className="w-4 h-4 text-red-600 mb-1" />
                        <strong>Email/DL</strong>
                        <p className="text-gray-600 mt-1">P95 &lt; 5 min delivery</p>
                      </div>
                      <div className="bg-white border border-red-300 rounded p-2 text-xs">
                        <Hash className="w-4 h-4 text-red-600 mb-1" />
                        <strong>Slack Channel</strong>
                        <p className="text-gray-600 mt-1"><ReleaseBadge release="262" /><PriorityBadge priority="P1" /></p>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-white border border-red-300 rounded text-xs">
                      <strong>Payload includes:</strong> Metric, Agent, Threshold vs Observed, Time Window, Severity, Link to Investigation Page
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="w-0.5 h-full bg-red-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">One-Click Triage (Smart Routing)</h4>
                      <ReleaseBadge release="260" />
                      <PriorityBadge priority="P0" />
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Click notification → <strong>Smart Routing</strong> bypasses dashboard</p>
                    <div className="flex items-center gap-2 mt-3 bg-white border border-red-300 rounded px-3 py-2 text-xs">
                      <span className="font-semibold text-gray-700">Email Alert</span>
                      <ChevronRight className="w-3 h-3 text-gray-400" />
                      <span className="font-semibold text-blue-700">Investigation Page</span>
                      <ChevronRight className="w-3 h-3 text-gray-400" />
                      <span className="font-semibold text-blue-700">Session Page</span>
                    </div>
                    <div className="mt-2 p-2 bg-blue-100 border border-blue-300 rounded text-xs text-blue-800">
                      <Clock className="w-3 h-3 inline mr-1" />
                      <strong>North Star:</strong> Time to Investigate (TTI) &lt; 10 seconds
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="w-0.5 h-full bg-red-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">Investigation Page (Auto-Focused)</h4>
                      <ReleaseBadge release="262" />
                      <PriorityBadge priority="P1" />
                    </div>
                    <p className="text-sm text-gray-700 mb-3">Page scoped to <strong>alert window</strong> (5 min focus)</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white border border-gray-300 rounded p-2 text-xs">
                        <strong>Topics by Agent</strong> (errors by topic table)
                      </div>
                      <div className="bg-white border border-gray-300 rounded p-2 text-xs">
                        <strong>Errors by Session</strong> (with Optimizer deep links <PriorityBadge priority="P2" />)
                      </div>
                      <div className="bg-white border border-gray-300 rounded p-2 text-xs">
                        <strong>Blast Radius</strong> (Channel, Agent Type, Agents)
                      </div>
                      <div className="bg-white border border-gray-300 rounded p-2 text-xs">
                        <strong>Version Impact</strong> (Agent API Name, Version)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div className="w-0.5 h-full bg-red-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">Assess & Decide</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">User reviews blast radius + incidence rows</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-50 border border-green-300 rounded p-3">
                        <p className="text-xs font-semibold text-green-800 mb-1">Real Incident</p>
                        <p className="text-xs text-gray-600">Proceed to debug/fix</p>
                      </div>
                      <div className="bg-amber-50 border border-amber-300 rounded p-3">
                        <p className="text-xs font-semibold text-amber-800 mb-1">False Positive / Noise</p>
                        <p className="text-xs text-gray-600">Go to Rules to tune</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                </div>
                <div className="flex-1">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">Take Action (Reroute)</h4>
                      <ReleaseBadge release="260" />
                      <PriorityBadge priority="P0" />
                    </div>
                    <p className="text-sm text-gray-700 mb-3">Deep links to fix/debug:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs bg-white border border-gray-300 rounded px-3 py-2">
                        <strong>Topic/Action click</strong>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-blue-600">Agent Builder</span>
                        <PriorityBadge priority="P0" />
                      </div>
                      <div className="flex items-center gap-2 text-xs bg-white border border-gray-300 rounded px-3 py-2">
                        <strong>Session click</strong>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-blue-600">Session Page</span>
                        <PriorityBadge priority="P0" />
                      </div>
                      <div className="flex items-center gap-2 text-xs bg-white border border-gray-300 rounded px-3 py-2">
                        <strong>Step click</strong>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-blue-600">Step within Session</span>
                        <PriorityBadge priority="P1" />
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-emerald-100 rounded text-xs text-emerald-800">
                      <strong>Success Metric:</strong> Investigation engagement ≥60% CTR on alerts within 24h
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alert Adjustment Journey */}
      {selectedJourney === 'adjustment' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border-2 border-blue-300 p-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-bold text-gray-900">Alert Adjustment: Update, Delete, Tune</h3>
              <ReleaseBadge release="260" />
              <PriorityBadge priority="P0" />
            </div>
            <p className="text-sm text-gray-600 mb-6">How users adjust detector rules based on alert performance</p>

            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="w-0.5 h-full bg-blue-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Review Alert Performance</h4>
                    <p className="text-sm text-gray-700 mb-3">User navigates to <strong>Events (Log)</strong> or <strong>Rules (Config)</strong></p>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white border border-gray-300 rounded p-2">
                        <strong>From Events:</strong> Reviews metric trend, alert frequency, impacted agents/topics
                      </div>
                      <div className="bg-white border border-gray-300 rounded p-2">
                        <strong>From Rules:</strong> Reviews rule list with Last 24 Hours counts
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="w-0.5 h-full bg-blue-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Open Edit Modal</h4>
                    <p className="text-sm text-gray-700 mb-2">Clicks <strong>Edit Alert</strong> from event row dropdown (⋮) → Modal opens <strong>pre-populated</strong></p>
                    <div className="mt-2 p-2 bg-white border border-blue-300 rounded text-xs text-blue-800">
                      <strong>Same UI as Create</strong> but with current values filled in
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Decision Framework */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="w-0.5 h-full bg-blue-300 mt-2"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Decision Framework</h4>
                    <div className="space-y-2">
                      {/* Too Noisy */}
                      <div className="bg-amber-50 border border-amber-300 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                          <strong className="text-sm text-amber-900">Too Noisy (High Volume, Low Actionability)</strong>
                        </div>
                        <ul className="text-xs text-gray-700 space-y-1 ml-6">
                          <li>• <strong>Raise threshold</strong> or widen timeframe</li>
                          <li>• <strong>Reduce severity</strong> (Critical → High → Medium)</li>
                          <li>• <strong>Add scope</strong> (specific agent/type/channel instead of "All")</li>
                        </ul>
                      </div>

                      {/* Missed Incidents */}
                      <div className="bg-red-50 border border-red-300 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-4 h-4 text-red-600" />
                          <strong className="text-sm text-red-900">Missed Incidents (Alert Didn't Fire)</strong>
                        </div>
                        <ul className="text-xs text-gray-700 space-y-1 ml-6">
                          <li>• <strong>Lower threshold</strong> or shorten timeframe</li>
                          <li>• <strong>Increase severity</strong></li>
                          <li>• <strong>Add secondary detector</strong> for correlated metric</li>
                        </ul>
                      </div>

                      {/* Wrong Routing */}
                      <div className="bg-purple-50 border border-purple-300 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="w-4 h-4 text-purple-600" />
                          <strong className="text-sm text-purple-900">Correct Signal, Wrong Routing</strong>
                        </div>
                        <ul className="text-xs text-gray-700 space-y-1 ml-6">
                          <li>• Keep rule, <strong>change recipients/channels</strong> (DL/Slack/webhook)</li>
                          <li>• Adjust to match ownership (e.g., platform-team DL instead of individuals)</li>
                        </ul>
                      </div>

                      {/* Non-Actionable */}
                      <div className="bg-gray-100 border border-gray-300 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Trash2 className="w-4 h-4 text-gray-600" />
                          <strong className="text-sm text-gray-900">Non-Actionable / Duplicate</strong>
                        </div>
                        <ul className="text-xs text-gray-700 space-y-1 ml-6">
                          <li>• <strong>Delete detector</strong> if metric is no longer meaningful</li>
                          <li>• <strong>Consolidate</strong> if redundant with another rule</li>
                        </ul>
                      </div>

                      {/* Spam During Incident */}
                      <div className="bg-indigo-50 border border-indigo-300 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-indigo-600" />
                          <strong className="text-sm text-indigo-900">Spam During Ongoing Incident</strong>
                        </div>
                        <ul className="text-xs text-gray-700 space-y-1 ml-6">
                          <li>• Use <strong>cooldown behavior</strong> (org-wide <ReleaseBadge release="264" /><PriorityBadge priority="P1" />)</li>
                          <li>• <strong>Acknowledge/Close</strong> event (lifecycle mgmt <PriorityBadge priority="P2" />)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">Save Changes</h4>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Detector updated → Future events reflect new rules</p>
                    <div className="mt-3 p-2 bg-emerald-100 rounded text-xs text-emerald-800">
                      <strong>Success Metric:</strong> Alert Resolution Rate &gt; 70% within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Where Adjustments Happen */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Where Adjustments Happen</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 border-2 border-gray-300 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <List className="w-5 h-5 text-gray-600" />
                  <h5 className="font-semibold text-gray-900">Events (Log)</h5>
                </div>
                <p className="text-xs text-gray-600 mb-2">Used to understand <strong>what fired</strong></p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Frequency analysis</li>
                  <li>• Severity distribution</li>
                  <li>• Edit event → opens modal</li>
                  <li>• Jump to related detector</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-gray-900">Rules (Config)</h5>
                </div>
                <p className="text-xs text-gray-600 mb-2">Primary place to <strong>update/delete</strong> alert rules</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• View all configured detectors</li>
                  <li>• See Last 24 Hours firing counts</li>
                  <li>• Edit parameters directly</li>
                  <li>• Delete non-performing detectors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function EditSeverityModal({ event, onClose }) {
  const [severity, setSeverity] = useState(event?.severity || 'High')
  const [status, setStatus] = useState(event?.status || 'New')

  const handleSave = () => {
    // Update the event severity and status (in a real app, this would call an API)
    console.log(`Updating event ${event.id} severity to ${severity} and status to ${status}`)
    onClose()
  }

  const severityOptions = ['Critical', 'High', 'Medium', 'Low']
  const statusOptions = ['New', 'Acknowledged', 'Closed']

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Edit Incident</h2>
          <button onClick={onClose} className="p-1 rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <XCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alert Name</label>
            <p className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">{event?.name}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500 mr-1">*</span>Status
            </label>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500 mr-1">*</span>Severity Level
            </label>
            <select 
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {severityOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CreateAlertModal({ event, rule, onClose }) {
  // Parse event data if editing
  const getMetricFromName = (name) => {
    if (name?.includes('Error Rate')) return 'error-rate'
    if (name?.includes('Latency')) return 'latency'
    if (name?.includes('Escalation')) return 'escalation'
    return 'error-rate'
  }
  
  const getThresholdFromName = (name) => {
    const match = name?.match(/(\d+)%/)
    return match ? match[1] : '5'
  }

  // Parse rule data if editing
  const getMetricFromRule = (ruleMetric) => {
    if (!ruleMetric) return 'error-rate'
    if (ruleMetric.includes('Error Rate')) return 'error-rate'
    if (ruleMetric.includes('Latency') || ruleMetric.includes('Avg Latency')) return 'latency'
    if (ruleMetric.includes('Escalation')) return 'escalation'
    if (ruleMetric.includes('Deflection')) return 'deflection'
    if (ruleMetric.includes('Abandonment')) return 'abandonment'
    return 'error-rate'
  }

  const getThresholdFromRule = (ruleThreshold) => {
    if (!ruleThreshold) return '5'
    const match = ruleThreshold.match(/(\d+)/)
    return match ? match[1] : '5'
  }

  const getConditionFromRule = (ruleThreshold) => {
    if (!ruleThreshold) return 'above'
    if (ruleThreshold.includes('Above')) return 'above'
    if (ruleThreshold.includes('Below')) return 'below'
    return 'above'
  }

  const getAgentSelectionFromRule = (agentApiName) => {
    if (agentApiName === 'All_Agents' || agentApiName === 'All') return 'all'
    return 'service'
  }
  
  // Determine if we're editing (rule takes precedence over event)
  const isEditing = rule || event
  
  const [metric, setMetric] = useState(
    rule ? getMetricFromRule(rule.metric) : 
    event ? getMetricFromName(event.name) : 'error-rate'
  )
  const [condition, setCondition] = useState(
    rule ? getConditionFromRule(rule.threshold) : 'above'
  )
  const [threshold, setThreshold] = useState(
    rule ? getThresholdFromRule(rule.threshold) : 
    event ? getThresholdFromName(event.name) : '5'
  )
  const [cooldown, setCooldown] = useState('30')
  const [severity, setSeverity] = useState(event?.severity || 'High')
  const [agentSelection, setAgentSelection] = useState(
    rule ? getAgentSelectionFromRule(rule.agentApiName) :
    event?.agentName === 'All' ? 'all' : 'service'
  )
  const [description, setDescription] = useState(event?.reason || '')
  const [alertName, setAlertName] = useState(rule?.name || event?.name || '')
  const [agentApiName, setAgentApiName] = useState(rule?.agentApiName || '')
  const [agentType, setAgentType] = useState(rule?.agentType || '')
  const [alertMethod, setAlertMethod] = useState(event?.alertMethod || 'threshold')
  const [notificationChannel, setNotificationChannel] = useState('email-me')
  const [recipientValue, setRecipientValue] = useState('')

  // Recommend alert method based on metric selection
  const getRecommendedMethod = (selectedMetric) => {
    switch (selectedMetric) {
      case 'error-rate': return 'threshold'
      case 'latency': return 'composite'
      case 'escalation': return 'trend'
      case 'deflection': return 'trend'
      case 'abandonment': return 'trend'
      default: return 'threshold'
    }
  }

  const alertMethods = [
    { id: 'threshold', label: 'Static Threshold', description: 'Hard limits (safety, cost caps, infra)', color: 'red', icon: '⚡' },
    { id: 'trend', label: 'Trend / Anomaly', description: 'Detect drift vs historical baseline', color: 'blue', icon: '📈' },
    { id: 'composite', label: 'Composite Logic', description: 'Combine metrics (latency+complexity)', color: 'amber', icon: '🔗' },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-start">
          <div className="text-center flex-1">
            <h2 className="text-xl font-medium text-gray-800">{isEditing ? 'Edit Monitoring Alert Rule' : 'Create New Monitoring Alert Rule'}</h2>
            <p className="text-sm text-gray-500 mt-1">{isEditing ? 'Update alert conditions and notifications settings' : 'Configure alert conditions and notifications settings'}</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <XCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Attributes Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-gray-700">Attributes</h3>
              <ReleaseBadge release="260" />
              <PriorityBadge priority="P0" />
            </div>
            
        <div>
              <label className="block text-sm font-normal text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>Metric
              </label>
              <select 
                value={metric}
                onChange={(e) => setMetric(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="error-rate">Agent Error Rate</option>
                <option value="latency">Avg Interaction Latency</option>
                <option value="escalation">Escalation Rate</option>
                <option value="deflection">Deflection Rate</option>
                <option value="abandonment">Abandonment Rate</option>
              </select>
        </div>

            <div>
              <label className="block text-sm font-normal text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>Name
              </label>
              <input 
                type="text"
                value={alertName}
                onChange={(e) => setAlertName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter alert name..."
              />
        </div>

            <div>
              <label className="block text-sm font-normal text-gray-700 mb-1">Description</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the alert purpose..."
              />
      </div>

            <div>
              <label className="block text-sm font-normal text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>Agent Selection
              </label>
              <div className="flex gap-3">
                <select 
                  value={agentSelection}
                  onChange={(e) => setAgentSelection(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
            <option value="all">All Agents</option>
                  <option value="service">Service Agents</option>
                  <option value="sales">Sales Agents</option>
          </select>
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text"
                    className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search agent(s)"
                  />
                </div>
              </div>
            </div>

            {rule && (
              <>
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-1">
                    <span className="text-red-500 mr-1">*</span>Agent API Name
                  </label>
                  <input 
                    type="text"
                    value={agentApiName}
                    onChange={(e) => setAgentApiName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter agent API name..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-1">
                    <span className="text-red-500 mr-1">*</span>Agent Type
                  </label>
                  <input 
                    type="text"
                    value={agentType}
                    onChange={(e) => setAgentType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter agent type..."
                  />
                </div>
              </>
            )}
          </div>

          {/* Alert Method Section - NEW */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-gray-700">Alert Method</h3>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">Architecture of Uncertainty</span>
            </div>
            <p className="text-xs text-gray-500">
              Choose the right alert logic for this metric. <strong>Recommended:</strong>{' '}
              <span className="text-blue-600">{alertMethods.find(m => m.id === getRecommendedMethod(metric))?.label}</span> for {metric === 'error-rate' ? 'Error Rate' : metric === 'latency' ? 'Latency' : metric === 'escalation' ? 'Escalation Rate' : metric}.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {alertMethods.map((method) => {
                const isRecommended = method.id === getRecommendedMethod(metric)
                const colorMap = {
                  red: { border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-700' },
                  blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-700' },
                  amber: { border: 'border-amber-500', bg: 'bg-amber-50', text: 'text-amber-700' },
                }
                const colors = colorMap[method.color]
                return (
                  <button
                    key={method.id}
                    onClick={() => setAlertMethod(method.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 text-left transition-all ${
                      alertMethod === method.id
                        ? `${colors.border} ${colors.bg}`
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{method.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold text-sm ${alertMethod === method.id ? colors.text : 'text-gray-800'}`}>
                          {method.label}
                        </span>
                        {isRecommended && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                            RECOMMENDED
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{method.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      alertMethod === method.id ? colors.border : 'border-gray-300'
                    }`}>
                      {alertMethod === method.id && (
                        <div className={`w-2 h-2 rounded-full ${colors.border.replace('border-', 'bg-')}`} />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Parameters Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-gray-700">Parameters</h3>
              <ReleaseBadge release="260" />
              <PriorityBadge priority="P0" />
            </div>

            {/* Dynamic parameters based on alert method */}
            {alertMethod === 'threshold' && (
        <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-1">
                    <span className="text-red-500 mr-1">*</span>Condition
                  </label>
                  <select 
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="above">Above</option>
                    <option value="below">Below</option>
                    <option value="equals">Equals</option>
            </select>
        </div>
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-1">
                    <span className="text-red-500 mr-1">*</span>Threshold
                  </label>
                  <input 
                    type="text"
                    value={threshold}
                    onChange={(e) => setThreshold(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 5%"
                  />
      </div>
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-1">
                    <span className="text-red-500 mr-1">*</span>Time Frame
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="5min">Last 5 minutes</option>
                    <option value="15min">Last 15 minutes</option>
                    <option value="30min">Last 30 minutes</option>
                    <option value="1h">Last 1 hour</option>
          </select>
        </div>
      </div>
            )}

            {alertMethod === 'trend' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-1">
                      <span className="text-red-500 mr-1">*</span>Baseline Window
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="7d">Last 7 days</option>
                      <option value="14d">Last 14 days</option>
                      <option value="30d">Last 30 days</option>
                    </select>
          </div>
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-1">
                      <span className="text-red-500 mr-1">*</span>Deviation Threshold
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="2std">2 Std Deviations</option>
                      <option value="3std">3 Std Deviations</option>
                      <option value="15pct">15% Change</option>
                      <option value="25pct">25% Change</option>
                    </select>
        </div>
      </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-800">
                  Trend alerts use adaptive baselines (Holt-Winters / Prophet) to detect anomalies relative to historical patterns — accounting for seasonality and variance.
                </div>
              </div>
            )}

            {alertMethod === 'composite' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-1">
                      <span className="text-red-500 mr-1">*</span>Primary Metric
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="latency">Latency &gt; 10s</option>
                      <option value="tool-calls">Tool Calls &gt; 10</option>
                      <option value="repetition">Semantic Repetition &gt; 0.95</option>
                    </select>
      </div>
                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-1">
                      <span className="text-red-500 mr-1">*</span>AND Condition
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="low-tokens">Token Count &lt; 50</option>
                      <option value="single-tool">Unique Tools == 1</option>
                      <option value="pii-detected">PII Score &gt; 0.8</option>
                    </select>
                  </div>
                </div>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                  <strong>Example:</strong> IF (Latency &gt; 10s) AND (Token Count &lt; 50) → Alert. This catches slow simple queries, filtering out legitimately complex reasoning tasks.
                </div>
              </div>
            )}

            {/* Metric Context — helps users set informed thresholds */}
            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-semibold text-slate-700">Your metric data</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">7-day avg</div>
                  <div className="text-lg font-semibold text-slate-900">
                    {metric === 'error-rate' && '2.1%'}
                    {metric === 'latency' && '1.2s'}
                    {metric === 'escalation' && '10.5%'}
                    {metric === 'deflection' && '8.3%'}
                    {metric === 'abandonment' && '4.2%'}
                    {!['error-rate','latency','escalation','deflection','abandonment'].includes(metric) && '—'}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">p50</div>
                  <div className="text-sm font-medium text-slate-700">
                    {metric === 'error-rate' && '1.8%'}
                    {metric === 'latency' && '0.9s'}
                    {metric === 'escalation' && '9.2%'}
                    {metric === 'deflection' && '7.1%'}
                    {metric === 'abandonment' && '3.5%'}
                    {!['error-rate','latency','escalation','deflection','abandonment'].includes(metric) && '—'}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">p95</div>
                  <div className="text-sm font-medium text-slate-700">
                    {metric === 'error-rate' && '3.8%'}
                    {metric === 'latency' && '2.1s'}
                    {metric === 'escalation' && '12.4%'}
                    {metric === 'deflection' && '10.2%'}
                    {metric === 'abandonment' && '6.1%'}
                    {!['error-rate','latency','escalation','deflection','abandonment'].includes(metric) && '—'}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">p99</div>
                  <div className="text-sm font-medium text-slate-700">
                    {metric === 'error-rate' && '5.2%'}
                    {metric === 'latency' && '3.4s'}
                    {metric === 'escalation' && '14.1%'}
                    {metric === 'deflection' && '11.8%'}
                    {metric === 'abandonment' && '7.5%'}
                    {!['error-rate','latency','escalation','deflection','abandonment'].includes(metric) && '—'}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
                <strong>Typical use:</strong> We usually alert on <strong>p95</strong> for tail behavior; use <strong>p99</strong> for stricter, fewer alerts.
              </p>
            </div>
        </div>

          {/* Severity Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-gray-700">Severity</h3>
              <ReleaseBadge release="262" />
              <PriorityBadge priority="P1" />
          </div>
            <div className="flex gap-2">
              {['Critical', 'High', 'Medium'].map((sev) => (
                <button 
                  key={sev}
                  onClick={() => setSeverity(sev)}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    severity === sev 
                      ? sev === 'Critical' ? 'border-red-500 bg-red-50 text-red-700' 
                        : sev === 'High' ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {sev}
                </button>
              ))}
        </div>
      </div>

          {/* Messaging Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-gray-700">Messaging</h3>
              <ReleaseBadge release="262" />
              <PriorityBadge priority="P0" />
            </div>
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">
                <span className="text-red-500 mr-1">*</span>Notification Channel
              </label>
              <div className="space-y-2" role="radiogroup" aria-label="Notification channel">
                {[
                  { id: 'email-me', label: 'Email (me)', badge: null },
                  { id: 'email-dl', label: 'Email Distribution List', badge: 'P0 - 262' },
                  { id: 'slack', label: 'Slack Channel', badge: 'P1 - 262' },
                  { id: 'webhook', label: 'Webhook/API', badge: 'P1 - 262' },
                ].map((ch) => (
                  <label
                    key={ch.id}
                    className={`flex items-center gap-3 cursor-pointer p-2.5 rounded-lg border transition-all ${
                      notificationChannel === ch.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-transparent hover:bg-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="notificationChannel"
                      value={ch.id}
                      checked={notificationChannel === ch.id}
                      onChange={() => {
                        setNotificationChannel(ch.id)
                        setRecipientValue('')
                      }}
                      className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
                    />
                    <span className="text-sm font-medium text-gray-700">{ch.label}</span>
                    {ch.badge && (
                      <span className={`px-1.5 py-0.5 text-xs rounded ${ch.id === 'email-dl' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {ch.badge}
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {notificationChannel !== 'email-me' && (
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-1">
                  <span className="text-red-500 mr-1">*</span>Recipients
                </label>
                <input 
                  type="text"
                  value={recipientValue}
                  onChange={(e) => setRecipientValue(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={
                    notificationChannel === 'email-dl' ? 'e.g., team-alerts@company.com, oncall@company.com' :
                    notificationChannel === 'slack' ? 'e.g., #agent-alerts or channel ID' :
                    'e.g., https://hooks.slack.com/... or PagerDuty/ServiceNow URL'
                  }
                />
                {notificationChannel === 'email-dl' && (
                  <p className="text-xs text-gray-500 mt-1">Comma-separated email addresses or distribution list</p>
                )}
                {notificationChannel === 'slack' && (
                  <p className="text-xs text-gray-500 mt-1">Channel name (e.g., #alerts) or Slack channel ID</p>
                )}
                {notificationChannel === 'webhook' && (
                  <p className="text-xs text-gray-500 mt-1">URL for PagerDuty, ServiceNow, or custom webhook</p>
                )}
              </div>
            )}
          </div>

          {/* Cooldown Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-gray-700">Cooldown</h3>
              <ReleaseBadge release="264" />
              <PriorityBadge priority="P1" />
            </div>
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-1">Cooldown Period</label>
              <select 
                value={cooldown}
                onChange={(e) => setCooldown(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes (default)</option>
                <option value="60">60 minutes</option>
                <option value="180">180 minutes</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">No repeat alerts within this window</p>
        </div>
      </div>

          {/* Status Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-gray-700">Status</h3>
              <ReleaseBadge release="260" />
              <PriorityBadge priority="P0" />
        </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-900">Enable Alert</span>
              <div className="relative inline-block w-10 align-middle select-none">
                <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300" style={{ top: '-4px' }} />
                <label className="toggle-label block overflow-hidden h-4 rounded-full bg-blue-500 cursor-pointer"></label>
              </div>
              <span className="text-xs text-gray-500">Active</span>
            </div>
        </div>
      </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
            {event ? 'Save Changes' : 'Create Alert'}
          </button>
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
  const [timeWindow, setTimeWindow] = useState('5min')
  const [selectedSession, setSelectedSession] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [activeSidebarTab, setActiveSidebarTab] = useState('Topics')
  const [selectedChartPoint, setSelectedChartPoint] = useState(null)
  const [showAgentBreakdown, setShowAgentBreakdown] = useState(false)
  const [sessionFilters, setSessionFilters] = useState({
    agent: 'All',
    channel: 'All',
    error: 'All',
    search: ''
  })
  const [showSessionFilters, setShowSessionFilters] = useState(false)
  
  // Same pie chart data as GAPrototype
  const topicsData = [{ name: 'Topic A', value: 35, color: '#0176D3' }, { name: 'Topic BBBBB', value: 25, color: '#2E844A' }, { name: 'Topic CC', value: 40, color: '#DD7A01' }]
  const actionsData = [{ name: 'Nadia Warren', value: 15, color: '#0176D3' }, { name: 'Savannah Nguyen', value: 20, color: '#2E844A' }, { name: 'Ronald Richards', value: 10, color: '#DD7A01' }, { name: 'Jane Cooper', value: 15, color: '#9F1AB1' }, { name: 'Leslie Alexander', value: 12, color: '#0B827C' }, { name: 'Courtney Henry', value: 18, color: '#AA2E25' }, { name: 'Bessie Cooper', value: 10, color: '#5C6BC0' }]
  const channelsData = [{ name: 'Web Chat', value: 45, color: '#0176D3' }, { name: 'Email', value: 30, color: '#2E844A' }, { name: 'SMS', value: 25, color: '#DD7A01' }]
  
  // Metric trend data for line chart (replaces Channels in Blast Radius)
  const metricTrendDataInv = [
    { date: 'Jan 26', value: 9.60, p50: 8.2, p75: 9.1, p95: 10.5, p99: 11.2 },
    { date: 'Jan 27', value: 10.91, p50: 9.5, p75: 10.2, p95: 11.8, p99: 12.5 },
    { date: 'Jan 28', value: 10.45, p50: 9.1, p75: 10.0, p95: 11.2, p99: 11.9 },
    { date: 'Jan 29', value: 11.20, p50: 9.8, p75: 10.6, p95: 12.1, p99: 12.8 },
    { date: 'Jan 30', value: 10.85, p50: 9.4, p75: 10.3, p95: 11.7, p99: 12.4 },
    { date: 'Jan 31', value: 10.50, p50: 9.2, p75: 10.1, p95: 11.4, p99: 12.1 },
    { date: 'Feb 1', value: 10.75, p50: 9.6, p75: 10.4, p95: 11.9, p99: 12.6 },
    { date: 'Feb 2', value: 10.28, p50: 9.0, p75: 9.8, p95: 11.0, p99: 11.7 }
  ]
  const avg7DaysInv = (metricTrendDataInv.reduce((sum, d) => sum + d.value, 0) / metricTrendDataInv.length).toFixed(2)
  
  // Agent breakdown data for clicked chart point
  const agentBreakdownData = selectedChartPoint ? [
    { agentName: 'Service Cloud Agent', p50: 8.1, p75: 9.0, p95: 10.2, p99: 11.0, value: 9.5 },
    { agentName: 'Sales Assistant', p50: 9.2, p75: 10.1, p95: 11.5, p99: 12.3, value: 10.8 },
    { agentName: 'IT Support Bot', p50: 7.8, p75: 8.7, p95: 9.9, p99: 10.7, value: 9.1 },
  ] : []
  
  // Same table data as GAPrototype
  const errorsByTopic = [
    { topicName: 'Billing Inquiry', error: 'LLM Error', count: 12, timestamp: '10:15:23 AM' },
    { topicName: 'Product Support', error: 'RAG Timeout', count: 8, timestamp: '10:15:18 AM' },
    { topicName: 'Account Access', error: 'Action Failed', count: 5, timestamp: '10:15:12 AM' },
  ]
  const errorsByStep = [
    { stepName: 'GetCustomerInfo', stepType: 'LLM Call', error: 'Rate Limit Exceeded', count: 15, timestamp: '10:15:23 AM' },
    { stepName: 'SearchKnowledge', stepType: 'RAG Retrieval', error: 'Timeout', count: 10, timestamp: '10:15:18 AM' },
    { stepName: 'UpdateCase', stepType: 'Action Execution', error: 'Permission Denied', count: 8, timestamp: '10:15:12 AM' },
    { stepName: 'SendNotification', stepType: 'Action Execution', error: 'Missing Input', count: 5, timestamp: '10:15:05 AM' },
  ]
  
  // Sessions data
  const allSessions = [
    { sessionId: 'sess-001', agentName: 'Service Cloud Agent', agentType: 'Service Agent', channel: 'Web Chat', error: 'LLM Error', timestamp: '10:15:23 AM', duration: '4m 32s', status: 'Failed' },
    { sessionId: 'sess-002', agentName: 'Service Cloud Agent', agentType: 'Service Agent', channel: 'Web Chat', error: 'RAG Timeout', timestamp: '10:15:18 AM', duration: '2m 15s', status: 'Failed' },
    { sessionId: 'sess-003', agentName: 'Sales Assistant', agentType: 'Sales Agent', channel: 'Email', error: 'Action Failed', timestamp: '10:15:12 AM', duration: '1m 48s', status: 'Failed' },
    { sessionId: 'sess-004', agentName: 'Service Cloud Agent', agentType: 'Service Agent', channel: 'SMS', error: 'LLM Error', timestamp: '10:15:05 AM', duration: '3m 22s', status: 'Failed' },
    { sessionId: 'sess-005', agentName: 'IT Support Bot', agentType: 'Support Agent', channel: 'Web Chat', error: 'Rate Limit Exceeded', timestamp: '10:14:58 AM', duration: '5m 10s', status: 'Failed' },
    { sessionId: 'sess-006', agentName: 'Service Cloud Agent', agentType: 'Service Agent', channel: 'Web Chat', error: 'LLM Error', timestamp: '10:14:45 AM', duration: '2m 55s', status: 'Failed' },
  ]
  
  // Filter sessions based on filters
  const filteredSessions = allSessions.filter(session => {
    if (sessionFilters.agent !== 'All' && session.agentName !== sessionFilters.agent) return false
    if (sessionFilters.channel !== 'All' && session.channel !== sessionFilters.channel) return false
    if (sessionFilters.error !== 'All' && session.error !== sessionFilters.error) return false
    if (sessionFilters.search && !session.sessionId.toLowerCase().includes(sessionFilters.search.toLowerCase()) && 
        !session.agentName.toLowerCase().includes(sessionFilters.search.toLowerCase())) return false
    return true
  })
  
  // Get unique values for filter dropdowns
  const uniqueAgents = [...new Set(allSessions.map(s => s.agentName))]
  const uniqueChannels = [...new Set(allSessions.map(s => s.channel))]
  const uniqueErrors = [...new Set(allSessions.map(s => s.error))]

  // Agent Builder View for Investigation Page
  if (selectedTopic) {
    const sidebarTabs = [
      { id: 'Topics', icon: Hash },
      { id: 'Connections', icon: Zap },
      { id: 'Data', icon: Database },
      { id: 'Context', icon: Settings },
      { id: 'Language', icon: Globe },
      { id: 'Events', icon: Bell },
      { id: 'Checklist', icon: CheckCircle2 },
    ]
    
    const topics = [
      { name: 'General CRM', selected: selectedTopic.name === 'General CRM' },
      { name: 'Single Record Summary', selected: selectedTopic.name === 'Single Record Summary' },
      { name: 'Billing Inquiry', selected: selectedTopic.name === 'Billing Inquiry' },
      { name: 'Product Support', selected: selectedTopic.name === 'Product Support' },
      { name: 'Account Access', selected: selectedTopic.name === 'Account Access' },
    ]

    return (
      <div className="flex h-[calc(100vh-200px)] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
        <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
          {sidebarTabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveSidebarTab(tab.id)} className={`w-12 h-12 flex flex-col items-center justify-center rounded-lg mb-1 ${activeSidebarTab === tab.id ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}>
              <tab.icon className="w-5 h-5" />
              <span className="text-[9px] mt-0.5">{tab.id}</span>
            </button>
          ))}
        </div>
        <div className="w-80 bg-white border-r border-gray-200">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
            <button onClick={() => setSelectedTopic(null)} className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-4 h-4 text-gray-500 rotate-180" /></button>
            <span className="text-sm text-gray-600">Back to Investigation</span>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Topics</h2>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded"><ArrowRight className="w-4 h-4 text-gray-400" /></button>
                <button className="p-1 hover:bg-gray-100 rounded"><XCircle className="w-4 h-4 text-gray-400" /></button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Manage the topics assigned to your agent. To make changes, your agent must be deactivated.</p>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-blue-600 text-sm font-medium hover:bg-gray-50 mb-4">New <ChevronDown className="w-4 h-4" /></button>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Search topics..." className="w-full pl-9 pr-10 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2"><RefreshCw className="w-4 h-4 text-gray-400" /></button>
            </div>
            <p className="text-xs text-gray-500 mb-2">{topics.length} items • Sorted by Topic Label(asc)</p>
            <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-t-lg border border-gray-200">
              <div className="flex items-center gap-1"><span className="text-xs font-medium text-gray-700">Topic Label</span><ChevronDown className="w-3 h-3 text-gray-500 rotate-180" /></div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="border-x border-b border-gray-200 rounded-b-lg">
              {topics.map((topic, i) => (
                <div key={i} className={`flex items-center justify-between py-3 px-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer ${topic.selected ? 'bg-blue-50' : ''}`}>
                  <span className={`text-sm ${topic.selected ? 'text-blue-600 font-medium' : 'text-blue-600'}`}>{topic.name}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-50 flex flex-col">
          <div className="bg-[#032D60] text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setSelectedTopic(null)} className="p-1 hover:bg-white/10 rounded"><ChevronRight className="w-5 h-5 rotate-180" /></button>
              <span className="font-medium">Agentforce Builder</span>
              <span className="text-white/80 text-sm">Agentforce Employee Agent(Default)</span>
              <span className="text-white/60 text-sm">Version 1</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm text-white/80 hover:text-white">Settings</button>
              <button className="text-sm text-white/80 hover:text-white">Help</button>
              <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">Activate</button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-4"><List className="w-8 h-8 text-gray-400" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Put your topics to the test</h3>
              <p className="text-gray-600 max-w-md">Start a conversation to preview how your agent builds a plan and executes actions based on user interactions.</p>
            </div>
          </div>
        </div>
        <div className="w-80 bg-white border-l border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Conversation Preview</h3>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded"><Eye className="w-4 h-4 text-gray-400" /></button>
              <button className="p-1 hover:bg-gray-100 rounded"><RefreshCw className="w-4 h-4 text-gray-400" /></button>
            </div>
          </div>
          <div className="p-4 text-center text-gray-500 text-sm">
            <p>No conversation started yet.</p>
            <p className="mt-2">Select a topic and start testing.</p>
          </div>
        </div>
      </div>
    )
  }
  
  // Session detail view (when user clicks a session from the table)
  if (selectedSession) {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center text-sm">
            <span className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => setSelectedSession(null)}>Investigation</span>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="font-medium text-gray-800">Session: {selectedSession.id}</span>
          </div>
          <div className="px-6 py-8 text-center">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Session Details</h3>
            <p className="text-sm text-gray-600 mb-4">Session ID: {selectedSession.id}</p>
            <button onClick={() => setSelectedSession(null)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
              Back to Investigation
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 min-h-[400px]">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-300 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Investigation Page for Health Monitoring Alerts (STDM)</h2>
              <p className="text-sm text-gray-500">Agent Error Rate exceeded 5% threshold at 10:15 AM — Topics, Agents, Actions, Sessions, Steps</p>
            </div>
            <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
          </div>
          <div className="flex items-center gap-2">
            <select value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option value="5min">5 minutes (Alert Window)</option>
              <option value="15min">15 minutes</option>
              <option value="1h">1 hour</option>
            </select>
            <span className="text-xs text-gray-500">Page focused on specific time window (5 min) within which alert fired</span>
            <ReleaseBadge release="262" /><PriorityBadge priority="P1" />
          </div>
        </div>
      </div>

      {/* Blast Radius - Pie Charts (same as GAPrototype) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Blast Radius</h3>
          <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Topics</h4>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={topicsData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value" label={false}>
                    {topicsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Legend layout="vertical" align="right" verticalAlign="middle" iconSize={8} formatter={(value) => <span className="text-xs text-gray-600">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2"><span className="text-2xl font-bold text-gray-900">3</span></div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Actions</h4>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={actionsData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value" label={false}>
                    {actionsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Legend layout="vertical" align="right" verticalAlign="middle" iconSize={8} formatter={(value) => <span className="text-xs text-gray-600">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-2"><span className="text-2xl font-bold text-gray-900">7</span></div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Escalation Rate</h4>
            <div className="text-center mb-2">
              <span className="text-2xl font-bold text-gray-900">{avg7DaysInv}%</span>
              <div className="text-xs text-gray-500">7-day average</div>
            </div>
            <div className="h-40 cursor-pointer">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={metricTrendDataInv}
                  onClick={(e) => {
                    try {
                      if (e?.activePayload?.[0]?.payload) {
                        setSelectedChartPoint(e.activePayload[0].payload)
                        setShowAgentBreakdown(true)
                      }
                    } catch (_) {}
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 10 }} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} domain={['dataMin - 1', 'dataMax + 1']} />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-lg cursor-pointer" onClick={() => {
                            setSelectedChartPoint(data)
                            setShowAgentBreakdown(true)
                          }}>
                            <div className="font-semibold text-gray-900 mb-1">Escalation Rate</div>
                            <div className="text-sm text-gray-700 mb-2">{data.value}%</div>
                            <div className="text-xs text-gray-600 mb-1">Day: {data.date}</div>
                            <div className="border-t border-gray-200 pt-2 mt-2 space-y-1">
                              <div className="flex justify-between text-xs"><span className="text-gray-500">p50:</span><span className="font-medium text-gray-700">{data.p50}%</span></div>
                              <div className="flex justify-between text-xs"><span className="text-gray-500">p75:</span><span className="font-medium text-gray-700">{data.p75}%</span></div>
                              <div className="flex justify-between text-xs"><span className="text-gray-500">p95:</span><span className="font-medium text-gray-700">{data.p95}%</span></div>
                              <div className="flex justify-between text-xs"><span className="text-gray-500">p99:</span><span className="font-medium text-gray-700">{data.p99}%</span></div>
                            </div>
                            <div className="text-xs text-blue-600 mt-2 pt-2 border-t border-gray-200 font-medium">Click to view breakdown by Agent</div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#4F46E5" 
                    strokeWidth={2} 
                    dot={{ fill: '#4F46E5', r: 4, cursor: 'pointer' }} 
                    activeDot={{ r: 6, cursor: 'pointer' }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs text-gray-500 text-center mt-1">Click chart point or tooltip to view breakdown by Agent</div>
          </div>
        </div>
      </div>

      {/* Errors by Topic Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">Errors by Topic</h3>
            <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500" 
              />
            </div>
            <button className="p-1.5 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-600">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Topic Name</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Error</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Count</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {errorsByTopic.map((error, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-blue-600 cursor-pointer hover:underline" onClick={() => setSelectedTopic({ name: error.topicName })}>{error.topicName}</td>
                  <td className="p-3 text-sm text-red-600">{error.error}</td>
                  <td className="p-3 text-sm text-gray-700">{error.count}</td>
                  <td className="p-3 text-sm text-gray-500">{error.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sessions Table with Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">Sessions</h3>
            <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search sessions..." 
                value={sessionFilters.search}
                onChange={(e) => setSessionFilters({...sessionFilters, search: e.target.value})}
                className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500" 
              />
            </div>
            <button 
              onClick={() => setShowSessionFilters(!showSessionFilters)}
              className={`p-1.5 border rounded-lg hover:bg-gray-50 text-gray-600 flex items-center gap-2 ${showSessionFilters ? 'bg-blue-50 border-blue-300' : 'border-gray-300'}`}
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filters</span>
              {(sessionFilters.agent !== 'All' || sessionFilters.channel !== 'All' || sessionFilters.error !== 'All') && (
                <span className="px-1.5 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                  {[sessionFilters.agent !== 'All', sessionFilters.channel !== 'All', sessionFilters.error !== 'All'].filter(Boolean).length}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Filter Panel */}
        {showSessionFilters && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Agent</label>
                <select 
                  value={sessionFilters.agent}
                  onChange={(e) => setSessionFilters({...sessionFilters, agent: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Agents</option>
                  {uniqueAgents.map(agent => (
                    <option key={agent} value={agent}>{agent}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Channel</label>
                <select 
                  value={sessionFilters.channel}
                  onChange={(e) => setSessionFilters({...sessionFilters, channel: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Channels</option>
                  {uniqueChannels.map(channel => (
                    <option key={channel} value={channel}>{channel}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Error Type</label>
                <select 
                  value={sessionFilters.error}
                  onChange={(e) => setSessionFilters({...sessionFilters, error: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Errors</option>
                  {uniqueErrors.map(error => (
                    <option key={error} value={error}>{error}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-3 pt-3 border-t border-gray-200">
              <button 
                onClick={() => setSessionFilters({ agent: 'All', channel: 'All', error: 'All', search: '' })}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
              >
                Clear All
              </button>
              <button 
                onClick={() => setShowSessionFilters(false)}
                className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Session ID</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Agent</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Channel</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Error</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Duration</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Timestamp</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Status</th>
                <th className="text-right p-3 text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSessions.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-sm text-gray-500">
                    No sessions found matching the current filters
                  </td>
                </tr>
              ) : (
                filteredSessions.map((session, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3 text-sm text-blue-600 cursor-pointer hover:underline font-medium" onClick={() => setSelectedSession({ id: session.sessionId })}>
                      {session.sessionId}
                    </td>
                    <td className="p-3 text-sm text-gray-900">{session.agentName}</td>
                    <td className="p-3 text-sm text-gray-600">{session.channel}</td>
                    <td className="p-3 text-sm text-red-600">{session.error}</td>
                    <td className="p-3 text-sm text-gray-600">{session.duration}</td>
                    <td className="p-3 text-sm text-gray-500">{session.timestamp}</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-700">
                        {session.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button 
                        onClick={() => setSelectedSession({ id: session.sessionId })}
                        className="text-salesforce-blue text-sm hover:underline"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {filteredSessions.length > 0 && (
          <div className="mt-3 text-xs text-gray-500">
            Showing {filteredSessions.length} of {allSessions.length} sessions
          </div>
        )}
      </div>

      {/* Errors by Session Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">Errors by Session</h3>
            <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 flex items-center gap-1">Deep links to Optimizer <PriorityBadge priority="P2" /></span>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-9 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:border-blue-500" 
                />
              </div>
              <button className="p-1.5 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-600">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Step Name</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Step Type</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Error</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Count</th>
                <th className="text-left p-3 text-sm font-medium text-gray-700">Timestamp</th>
                <th className="text-right p-3 text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {errorsByStep.map((error, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-blue-600 cursor-pointer hover:underline">{error.stepName}</td>
                  <td className="p-3 text-sm text-gray-600">{error.stepType}</td>
                  <td className="p-3 text-sm text-red-600">{error.error}</td>
                  <td className="p-3 text-sm text-gray-700">{error.count}</td>
                  <td className="p-3 text-sm text-gray-500">{error.timestamp}</td>
                  <td className="p-3 text-right">
                    <button className="text-salesforce-blue text-sm hover:underline">View in Optimizer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Agent Breakdown Modal */}
      {showAgentBreakdown && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => { setShowAgentBreakdown(false); setSelectedChartPoint(null) }}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Percentile Breakdown by Agent</h2>
                {selectedChartPoint && (
                  <p className="text-sm text-gray-500 mt-1">
                    Escalation Rate: {selectedChartPoint.value}% on {selectedChartPoint.date}
                  </p>
                )}
              </div>
              <button onClick={() => { setShowAgentBreakdown(false); setSelectedChartPoint(null) }} className="p-1 rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 text-sm font-medium text-gray-700">Agent Name</th>
                      <th className="text-right p-3 text-sm font-medium text-gray-700">Value</th>
                      <th className="text-right p-3 text-sm font-medium text-gray-700">p50</th>
                      <th className="text-right p-3 text-sm font-medium text-gray-700">p75</th>
                      <th className="text-right p-3 text-sm font-medium text-gray-700">p95</th>
                      <th className="text-right p-3 text-sm font-medium text-gray-700">p99</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {agentBreakdownData.map((agent, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="p-3 text-sm font-medium text-gray-900">{agent.agentName}</td>
                        <td className="p-3 text-right text-sm text-gray-700 font-semibold">{agent.value}%</td>
                        <td className="p-3 text-right text-sm text-gray-600">{agent.p50}%</td>
                        <td className="p-3 text-right text-sm text-gray-600">{agent.p75}%</td>
                        <td className="p-3 text-right text-sm text-gray-600">{agent.p95}%</td>
                        <td className="p-3 text-right text-sm text-gray-600">{agent.p99}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function RerouteToAgentBuilder() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <ArrowUpRight className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-emerald-800">Reroute User to Agent Builder & Tools</h3>
              <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
            </div>
            <p className="text-emerald-700 mt-2">When you find a failure, jump immediately to the configuration source to fix it.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">P0 Navigation Paths</h4>
          <div className="space-y-3">
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Topic</span>
                <PriorityBadge priority="P0" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>→</span>
                <span className="font-medium">Agent Builder</span>
              </div>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Step</span>
                <PriorityBadge priority="P0" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>→</span>
                <span className="font-medium">Step within Session View</span>
              </div>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Action</span>
                <PriorityBadge priority="P0" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>→</span>
                <span className="font-medium">Scale Center (Flow or APEX)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-4">P2 - Optimizer Deep Links</h4>
          <ReleaseBadge release="262" />
          <div className="space-y-3 mt-3">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Trace Row / Moment</span>
                <PriorityBadge priority="P2" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>→</span>
                <span className="font-medium">Deep link to specific moment in Optimizer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Example Navigation Flow</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <FileSearch className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Click on Topic "Billing Inquiry"</p>
              <p className="text-xs text-gray-500">From Investigation Page</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded text-sm font-medium">
              Opens Agent Builder
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Click on Session "sess-001"</p>
              <p className="text-xs text-gray-500">From Investigation Page</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded text-sm font-medium">
              Opens Session Page
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DMOIntegration() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Database className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-emerald-800">Efficiency/Scalability - DMO Integration</h3>
              <ReleaseBadge release="260" />
            </div>
            <p className="text-emerald-700 mt-2">More efficient metric calculation/storage (P0, 260).</p>
          </div>
        </div>
      </div>

      {/* P0 - More Efficient Calculation/Storage */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg font-semibold text-gray-900">P0: More Efficient Metric Calculation/Storage</h4>
          <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
        </div>
        <p className="text-sm text-gray-600 mb-4">More efficient metric calculation/storage so we don't recalculate metrics.</p>
        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
          <p className="text-sm font-medium text-gray-900">No Recalculation</p>
          <p className="text-xs text-gray-600 mt-1">Metrics stored once, accessed efficiently</p>
        </div>
      </div>

      {/* P0 - DC1 Support */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg font-semibold text-gray-900">P0: DC1 Support</h4>
          <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
        </div>
        <p className="text-sm text-gray-600 mb-4">Data Cloud 1 support for metric storage and processing.</p>
        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
          <Server className="w-5 h-5 text-emerald-600 mb-2" />
          <p className="text-sm font-medium text-gray-900">Data Cloud Integration</p>
          <p className="text-xs text-gray-600 mt-1">Seamless integration with Data Cloud infrastructure</p>
        </div>
      </div>

    </div>
  )
}

function OOTBMetrics() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-emerald-800">OOTB & Custom Metrics</h3>
              <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
            </div>
            <p className="text-emerald-700 mt-2">Add more OOTB metrics that exist in Analytics for triggering alerts. Support custom metrics and alert severity grouping.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg font-semibold text-gray-900">P0: OOTB Metrics from Analytics</h4>
          <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
        </div>
        <p className="text-sm text-gray-600 mb-4">Allow users to add/select any OOTB metrics from the STDM/SDM (same data that exists in Analytics) to trigger an Alert.</p>
        <div className="grid grid-cols-3 gap-4">
          {['Error Rate', 'Latency', 'Escalation Rate', 'Context Precision', 'Answer Relevancy', 'Faithfulness'].map((metric, i) => (
            <div key={i} className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{metric}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border-2 border-amber-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg font-semibold text-gray-900">P1: Custom Metrics</h4>
          <ReleaseBadge release="260" /><PriorityBadge priority="P1" />
        </div>
        <p className="text-sm text-gray-600 mb-4">Allow users to add custom metrics for creating an alert.</p>
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
          <div className="flex items-center gap-2 mb-2">
            <Plus className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-gray-900">Create Custom Metric</span>
          </div>
          <input type="text" placeholder="e.g., Custom Business KPI" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mt-2" />
        </div>
      </div>

    </div>
  )
}

function AgentAvailability() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Activity className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-emerald-800">Agent & Channel Availability</h3>
              <ReleaseBadge release="260" /><ReleaseBadge release="262" /><PriorityBadge priority="P0" />
            </div>
            <p className="text-emerald-700 mt-2">Agent Availability (260 P0) based on STDM records. Channel Availability (262 P0) — see "Agent Availability Metric & Alerting" PRD. Detect silent failures when agents stop responding.</p>
            <div className="mt-4 p-4 bg-white rounded-lg border border-emerald-200">
              <div className="text-xs font-semibold text-emerald-800 mb-2">Agent Response Coverage Formula</div>
              <code className="text-sm text-gray-700 block">
                (User turns with [agent response OR session end] / User turns in agent-eligible sessions) × 100
              </code>
            </div>
          </div>
        </div>
      </div>

        <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-gray-900">Channel Availability</h4>
            <ReleaseBadge release="262" /><PriorityBadge priority="P0" />
          </div>
          <p className="text-sm text-gray-600">Add Channel Availability metrics. See "Agent Availability Metric & Alerting" PRD.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-emerald-600" />
            <h4 className="font-semibold text-gray-900">Heartbeat Metric</h4>
            <PriorityBadge priority="P0" />
          </div>
          <div className="space-y-2">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">0 Sessions</span>
                <span className="text-xs text-green-600">No Traffic</span>
              </div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">System Unresponsive</span>
                <span className="text-xs text-red-600">Down</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-emerald-600" />
            <h4 className="font-semibold text-gray-900">Downtime Alert</h4>
            <PriorityBadge priority="P0" />
          </div>
          <p className="text-sm text-gray-600 mb-3">Trigger an alert if the agent fails to initiate a session or respond to a handshake within x minutes.</p>
          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-xs text-gray-600">Alert fires when agent doesn't respond to heartbeat</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <Server className="w-5 h-5 text-emerald-600" />
            <h4 className="font-semibold text-gray-900">Status Indicator</h4>
            <PriorityBadge priority="P0" />
          </div>
          <div className="space-y-2">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">Online</span>
              </div>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">Offline</span>
              </div>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">Degraded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EnhancedAlerting() {
  const [showSlackSetup, setShowSlackSetup] = useState(false)
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Bell className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-emerald-800">Alerting Improvements</h3>
              <ReleaseBadge release="262" />
            </div>
            <p className="text-emerald-700 mt-2">Comprehensive alerting capabilities including distribution lists, Slack, webhooks, anomaly detection, and severity levels.</p>
          </div>
        </div>
      </div>

      {/* Alert Severity and Grouping - P2 Release 262 */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Alert Severity and Grouping</h3>
          <ReleaseBadge release="262" /><PriorityBadge priority="P2" />
        </div>
        <p className="text-sm text-gray-600 mb-4">Users can assign "Critical," "Warning," or "Info" levels to alerts.</p>
        <div className="flex gap-3">
          {['Critical', 'Warning', 'Info'].map((severity, i) => (
            <div key={i} className={`flex-1 p-4 rounded-lg border-2 ${severity === 'Critical' ? 'bg-red-50 border-red-200' : severity === 'Warning' ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-gray-900">{severity}</span>
                <PriorityBadge priority="P2" />
              </div>
              <p className="text-xs text-gray-600">Alerts grouped by severity level</p>
            </div>
          ))}
        </div>
      </div>

      {/* Email Distribution Lists - P0 Release 262 */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Email Distribution Lists</h3>
              <ReleaseBadge release="262" /><PriorityBadge priority="P0" />
      </div>
            <p className="text-sm text-gray-500 mt-1">Enable Admins to set up alerts for others via email distribution lists. Option in alert creation flow to send to admin-provided email lists or send to self.</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm font-medium">on-call-team@company.com</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm font-medium">platform-alerts@company.com</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <input type="checkbox" className="rounded" />
            <span className="text-sm font-medium">Send to self (uncheck to avoid duplicate)</span>
          </div>
          <button className="flex items-center gap-2 text-salesforce-blue text-sm font-medium hover:text-salesforce-darkBlue">
            <Plus className="w-4 h-4" /> Add Email Distribution List
          </button>
        </div>
      </div>

      {/* Slack Channel Alerts - P1 Release 262 */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Hash className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Slack Channel Alerts</h3>
          <ReleaseBadge release="262" /><PriorityBadge priority="P1" />
      </div>
        {!showSlackSetup ? (
          <button onClick={() => setShowSlackSetup(true)} className="flex items-center gap-2 px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg text-purple-700 font-medium hover:bg-purple-100 w-full justify-center">
            <MessageSquare className="w-5 h-5" />Connect Slack Workspace
          </button>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <CheckCircle2 className="w-4 h-4" /> Connected to: Acme Corp Workspace
            </div>
            <select className="w-full border border-gray-200 rounded-lg px-3 py-2">
              <option>#agent-alerts</option>
              <option>#platform-monitoring</option>
            </select>
            <p className="text-xs text-gray-500">P95 delivery &lt; 5 minutes</p>
          </div>
        )}
      </div>

      {/* Webhook/API Delivery - P1 Release 262 */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Webhook/API Delivery</h3>
          <ReleaseBadge release="262" /><PriorityBadge priority="P1" />
        </div>
        <p className="text-sm text-gray-600 mb-4">Send alerts to incident management systems (PagerDuty, ServiceNow) via webhook.</p>
        <div className="space-y-3">
          <input type="text" placeholder="https://hooks.pagerduty.com/..." className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-gray-600">POST request with JSON payload: Metric, Agent ID, Threshold, Timestamp, Severity</p>
            <p className="text-xs text-gray-500 mt-1">Includes retry logic for failed deliveries</p>
          </div>
        </div>
      </div>

      {/* Anomaly Detection - P1 Release 262 */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Anomaly Detection (Unusual Change Detection)</h3>
          <ReleaseBadge release="262" /><PriorityBadge priority="P1" />
        </div>
        <p className="text-sm text-gray-600 mb-4">Automatically detect unusual changes without manually setting thresholds.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Traditional Threshold</h4>
            <p className="text-xs text-gray-600">Fixed threshold (e.g., Error Rate &gt; 5%)</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h4 className="font-semibold text-emerald-800 mb-2 text-sm">Anomaly Detection</h4>
            <p className="text-xs text-emerald-700">System learns patterns, detects deviations, adapts to seasonal patterns</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs text-blue-700">Visual overlay showing "Org Average" vs "This Agent" with Week-over-Week trends</p>
        </div>
      </div>

      {/* Admin Org-wide Cooldown - P1 Release 264 */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-purple-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">Admin Org-level Cooldown Customization</h3>
          <ReleaseBadge release="264" /><PriorityBadge priority="P1" />
        </div>
        <p className="text-sm text-gray-600 mb-4">Allow admin-level cooldown customization for the org.</p>
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">Global Cooldown Setting</span>
            <select className="border border-gray-200 rounded-lg px-3 py-1 text-sm">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>60 minutes</option>
              <option>120 minutes</option>
              <option>180 minutes</option>
            </select>
          </div>
          <p className="text-xs text-gray-600">Identical alerts within cooldown are suppressed but occurrences are recorded</p>
        </div>
      </div>
    </div>
  )
}

function EventsDetectors() {
  const [activeTab, setActiveTab] = useState('detectors')
  const events = [
    { alertName: 'Error Rate Spike', timestamp: '10:15 AM', status: 'New', metricName: 'Agent Error Rate', severity: 'Critical' },
    { alertName: 'Latency Increase', timestamp: '09:45 AM', status: 'Acknowledged', metricName: 'Avg Interaction Latency', severity: 'Warning' },
    { alertName: 'Escalation Spike', timestamp: '09:30 AM', status: 'Closed', metricName: 'Escalation Rate', severity: 'Info' },
  ]
  
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <List className="w-6 h-6 text-emerald-600" />
      </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-emerald-800">Enhanced Experience</h3>
              <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
            </div>
            <p className="text-emerald-700 mt-2">Seamless workflow for managing alerts. See "Agent Health Monitoring Enhanced Experience" tab — Events Tab, Smart Routing, Lifecycle.</p>
          </div>
        </div>
      </div>

      {/* Problem Statement & Opportunity */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border-2 border-red-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h4 className="text-lg font-semibold text-gray-900">Problem Statement</h4>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Agent Builders currently suffer from a disconnected workflow. While they can configure "Rules," they lack a centralized "Events" view to monitor what has been triggered. There is no clear lifecycle management (tracking what is new vs. being investigated), and no direct path from an alert to the specific session(s) that caused it, leading to slow reaction times.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h4 className="text-lg font-semibold text-gray-900">Opportunity</h4>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Gain visibility into alert patterns and trends</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Quickly identify which metrics require attention through visual indicators</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Accelerate Investigation via intelligent Smart Routing</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Manage Lifecycle: Differentiate between "New," "Acknowledged," and "Closed" alerts</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Entry Points */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <ArrowUpRight className="w-5 h-5 text-blue-600" />
          <h4 className="text-lg font-semibold text-gray-900">Entry Points</h4>
          <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <List className="w-5 h-5 text-blue-600" />
              <h5 className="font-semibold text-gray-900">Sidebar</h5>
              <PriorityBadge priority="P0" />
            </div>
            <p className="text-xs text-gray-600">Direct access to the Events list</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <h5 className="font-semibold text-gray-900">Email</h5>
              <PriorityBadge priority="P0" />
            </div>
            <p className="text-xs text-gray-600">Deep links that respect Smart Routing logic</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-5 h-5 text-blue-600" />
              <h5 className="font-semibold text-gray-900">Metric Page</h5>
              <PriorityBadge priority="P2" />
            </div>
            <p className="text-xs text-gray-600">Contextual entry point via red bell indicator on metric cards</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg font-semibold text-gray-900">Alerts Section</h4>
          <ReleaseBadge release="260" /><PriorityBadge priority="P0" />
        </div>
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('detectors')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'detectors'
                ? 'border-emerald-500 text-emerald-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Rules (Config)
          </button>
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
        </div>

        {activeTab === 'detectors' && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-4">Configure alert detectors (thresholds, anomaly detection, etc.)</p>
          <div className="space-y-2">
              {['Error Rate > 5%', 'Latency > 2000ms', 'Escalation Rate > 10%'].map((detector, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{detector}</span>
                    <button className="text-salesforce-blue text-sm hover:underline">Edit</button>
          </div>
        </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Historical view of all alert instances</p>
              <span className="text-xs text-gray-500">Sorted: Most Recent First / Critical (FR-006)</span>
            </div>

            {/* Smart Routing Explanation */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">Smart Routing <PriorityBadge priority="P0" /></h5>
                  <p className="text-sm text-gray-700 mb-3">
                    Email notification links and Alert Name clicks take users directly to the relevant Session or Tabular View, bypassing the general dashboard to accelerate investigation.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="px-2 py-1 bg-white rounded border border-blue-200">Email Alert</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="px-2 py-1 bg-white rounded border border-blue-200">Investigation Page</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="px-2 py-1 bg-white rounded border border-blue-200">Session Page</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lifecycle Management Explanation */}
            <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-amber-600 mt-0.5" />
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">Alert Lifecycle Management <PriorityBadge priority="P2" /></h5>
                  <p className="text-sm text-gray-700 mb-3">
                    Track alert status through lifecycle: Users can manually update status in the Events table.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">New</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">Acknowledged</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-gray-700"><span className="flex items-center gap-1">Alert Name <PriorityBadge priority="P0" /></span></th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700"><span className="flex items-center gap-1">Timestamp <PriorityBadge priority="P0" /></span></th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700"><span className="flex items-center gap-1">Status <PriorityBadge priority="P2" /></span></th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700"><span className="flex items-center gap-1">Metric Name <PriorityBadge priority="P0" /></span></th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700"><span className="flex items-center gap-1">Severity <PriorityBadge priority="P0" /></span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {events.map((event, i) => (
                    <tr key={i} className="hover:bg-gray-50 cursor-pointer">
                      <td className="p-3">
                        <a href="#" className="text-sm font-medium text-salesforce-blue hover:underline">
                          {event.alertName}
                        </a>
                        <span className="text-xs text-gray-400 ml-2 block mt-1">Click triggers Smart Routing</span>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Metric Page Integration - P2 */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-gray-600" />
          <h4 className="text-lg font-semibold text-gray-900">Metric Page Integration</h4>
          <ReleaseBadge release="260" /><PriorityBadge priority="P2" />
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Visual indicators on Metric Page for metrics with active alerts. Create alerts directly from metric context.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* Red Bell Indicator */}
          <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-red-600" />
              <h5 className="font-semibold text-gray-900">Red Bell Icon (FR-012)</h5>
              <PriorityBadge priority="P2" />
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Display red bell icon on metric cards that have alerts with "New" or "Acknowledged" status.
            </p>
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900">Agent Error Rate</h6>
                    <p className="text-xs text-gray-500">5.2% (↑ 2.1%)</p>
                  </div>
                </div>
                <div className="relative">
                  <Bell className="w-5 h-5 text-red-600" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
              </div>
              <p className="text-xs text-gray-500">Click bell to view alerts for this metric (FR-013)</p>
            </div>
          </div>

          {/* Create Alert from Metric */}
          <div className="bg-gray-50 rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Plus className="w-5 h-5 text-gray-600" />
              <h5 className="font-semibold text-gray-900">Create Alert (FR-015)</h5>
              <PriorityBadge priority="P2" />
            </div>
            <p className="text-sm text-gray-700 mb-4">
              "Create Alert" button visible on Metric detail page. Opens Alert Configuration modal with current Metric pre-selected and default thresholds pre-filled.
            </p>
            <div className="bg-white rounded-lg border border-gray-300 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Metric Detail Page</span>
                <button className="px-3 py-1.5 bg-salesforce-blue text-white text-xs rounded hover:bg-blue-700">
                  Create Alert
                </button>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Alert Configuration Modal:</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span className="text-gray-700">Metric: <strong>Agent Error Rate</strong> (pre-selected)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span className="text-gray-700">Threshold: <strong>5%</strong> (pre-filled based on context)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Stories Reference */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-emerald-600" />
          <h4 className="text-lg font-semibold text-gray-900">User Stories</h4>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Core User Stories (P0)</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Centralized Event Log:</strong> View all alert instances in dedicated "Events" tab</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Prioritization:</strong> Alerts sorted by most recent first</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Email Investigation:</strong> Email links take directly to Session/Tabular View</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Future User Stories (P1-P2)</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0">•</span>
                <span><strong>Lifecycle Management:</strong> Track status (New → Acknowledged → Closed)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0">•</span>
                <span><strong>Metric Context:</strong> Red bell indicator on Metric Page</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0">•</span>
                <span><strong>Filtering:</strong> Filter by status, metric, or time range</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0">•</span>
                <span><strong>Bulk Actions:</strong> Bulk acknowledge or resolve multiple alerts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Functional Requirements Summary */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileSearch className="w-5 h-5 text-blue-600" />
          <h4 className="text-lg font-semibold text-gray-900">Functional Requirements</h4>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">P0 Requirements</h5>
            <ul className="space-y-1 text-gray-700">
              <li>• FR-001: Display "Alerts" section in left sidebar</li>
              <li>• FR-002: Structure with Rules/Events tabs</li>
              <li>• FR-003: Default view: Rules</li>
              <li>• FR-004: Events table with columns (Alert Name, Timestamp, Status, Metric Name, Severity)</li>
              <li>• FR-006: Sort: Most Recent First</li>
              <li>• FR-007: Alert Name clickable link (Smart Routing)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">P2 Requirements</h5>
            <ul className="space-y-1 text-gray-700">
              <li>• FR-012: Red bell icon on metric cards</li>
              <li>• FR-013: Click bell to show alerts for metric</li>
              <li>• FR-015: Create alert in specific Metric</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function UpgradePath() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
            <ArrowUpCircle className="w-6 h-6 text-purple-600" />
      </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-purple-800">Upgrade Path (Tableau Plus)</h3>
              <ReleaseBadge release="264" /><PriorityBadge priority="P2" />
            </div>
            <p className="text-purple-700 mt-2">Product experience for users to upgrade and get Tableau Plus for features such as dashboard customization (adding/removing metrics). All surfaces for these features should highlight an upgrade is required if the user does not have the right license.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border-2 border-purple-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg font-semibold text-gray-900">Gated Capabilities</h4>
          <ReleaseBadge release="264" /><PriorityBadge priority="P2" />
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">Dashboard Customization</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Requires Upgrade</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">Add/remove metrics from Analytics</p>
            <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700">
              Upgrade to Tableau Plus
            </button>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-600">
              All surfaces for gated features consistently display upgrade messaging if user doesn't have the right license.
            </p>
          </div>
        </div>
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
        <div className="flex items-start gap-4"><div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center"><Sparkles className="w-6 h-6 text-violet-600" /></div><div className="flex-1"><div className="flex items-center gap-2"><h3 className="text-xl font-bold text-violet-800">Agentic Health Monitoring</h3><ReleaseBadge release="266+" /><PriorityBadge priority="P1" /></div><p className="text-violet-700 mt-2">Support agentic health monitoring experience where users can ask/debug alerts to understand their monitoring dashboard better. Via Obs Agent. (Tableau)</p></div></div>
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

function MonitoringDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-blue-800">Monitoring Dashboard</h3>
              <ReleaseBadge release="262" /><PriorityBadge priority="P1" />
            </div>
            <p className="text-blue-700 mt-2">Time range views and aggregation options for monitoring agent health metrics.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Last 1 Hour View</h4>
          <PriorityBadge priority="P1" />
          <p className="text-sm text-gray-600 mt-2">Support last 1 hour view for real-time monitoring.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Extended Views</h4>
          <PriorityBadge priority="P2" />
          <p className="text-sm text-gray-600 mt-2">Support last 3 hours, last 12 hours. Show timestamp of last dashboard update.</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border-2 border-blue-200 p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Aggregations</h4>
        <PriorityBadge priority="P1" />
        <p className="text-sm text-gray-600 mt-2">Support 10 min, 15 min, 30 min aggregations.</p>
      </div>
      <div className="bg-amber-50 rounded-xl border-2 border-amber-200 p-6">
        <h4 className="font-semibold text-gray-900 mb-2">Real-Time Pipeline</h4>
        <PriorityBadge priority="P1" />
        <p className="text-sm text-gray-600">If org has not opted in for "real time" pipeline, show message notification at top with link to documentation or setup page.</p>
      </div>
    </div>
  )
}

function DashboardCustomization() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
            <Sliders className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-purple-800">Dashboard Customization</h3>
              <ReleaseBadge release="264" /><PriorityBadge priority="P1" />
            </div>
            <p className="text-purple-700 mt-2">Add or remove metrics from the monitoring tab. Requires Tableau Plus.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border-2 border-purple-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Add/Remove Metrics</h4>
          <PriorityBadge priority="P1" />
          <p className="text-sm text-gray-600 mt-2">Add any metric from Agentforce Analytics. Remove added metrics from monitoring tab.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border-2 border-purple-200 p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
          <PriorityBadge priority="P1" />
          <p className="text-sm text-gray-600 mt-2">Support addition of Tags to be monitored on the health monitoring dashboard.</p>
        </div>
      </div>
    </div>
  )
}

function SetupOnboarding() {
  const [toggleEnabled, setToggleEnabled] = useState(true)
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-300 rounded-xl p-6">
        <div className="flex items-start gap-4"><div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><Zap className="w-6 h-6 text-emerald-600" /></div><div className="flex-1"><div className="flex items-center gap-2"><h3 className="text-xl font-bold text-emerald-800">Setup Flow</h3><ReleaseBadge release="262" /><PriorityBadge priority="P0" /></div><p className="text-emerald-700 mt-2">P0: Include a toggle in the setup page for users to enable health monitoring. (TBD whether we reuse STDM toggle or make a new one). P1: Beta FRE experience — users who don't have the toggle enabled see a UI that guides them on enabling it.</p></div></div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
        <div className="flex items-center gap-2 mb-4"><Settings className="w-5 h-5 text-emerald-600" /><h3 className="text-lg font-semibold text-gray-900">Enablement Toggle</h3><ReleaseBadge release="262" /><PriorityBadge priority="P0" /></div>
        <div className="bg-gray-50 rounded-lg p-4"><div className="flex items-center justify-between">
          <div className="flex items-center gap-3"><div className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${toggleEnabled ? 'bg-emerald-500' : 'bg-gray-300'}`} onClick={() => setToggleEnabled(!toggleEnabled)}><div className={`w-5 h-5 rounded-full bg-white shadow mt-0.5 transition-transform ${toggleEnabled ? 'translate-x-6.5 ml-6' : 'translate-x-0.5 ml-0.5'}`} /></div><div><p className="font-medium text-gray-900">Agent Health Monitoring</p><p className="text-xs text-gray-500">Toggle in Setup page to enable</p></div></div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${toggleEnabled ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>{toggleEnabled ? 'Enabled' : 'Disabled'}</span>
        </div></div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border-2 border-emerald-200 p-6">
        <div className="flex items-center gap-2 mb-4"><Sparkles className="w-5 h-5 text-emerald-600" /><h3 className="text-lg font-semibold text-gray-900">First Run Experience (FRE)</h3><ReleaseBadge release="262" /><PriorityBadge priority="P1" /></div>
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
