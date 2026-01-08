import { useState, Fragment } from 'react'
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowRight,
  LayoutDashboard,
  Bell,
  BarChart3,
  Download,
  FileSearch,
  Sliders,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Users,
  Mail,
  Zap,
  ChevronDown,
  ChevronUp,
  X,
  Info,
  Calendar,
  Target,
  AlertCircle
} from 'lucide-react'

function PriorityBadge({ priority, editable, onChange }) {
  const colors = {
    'P0': 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200',
    'P1': 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200',
    'P2': 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200',
  }
  
  if (editable && onChange) {
    return (
      <select 
        value={priority}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        className={`px-1.5 py-0.5 rounded text-xs font-bold border cursor-pointer ${colors[priority]}`}
      >
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
      </select>
    )
  }
  
  return (
    <span className={`px-1.5 py-0.5 rounded text-xs font-bold border ${colors[priority]}`}>
      {priority}
    </span>
  )
}

function ReleaseBadge({ release, editable, onChange }) {
  const colors = {
    '260': 'bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200',
    '262': 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200',
    '264': 'bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200',
    '266+': 'bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-200',
  }
  
  if (editable && onChange) {
    return (
      <select 
        value={release || '260'}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        className={`px-1.5 py-0.5 rounded text-xs font-bold border cursor-pointer ${colors[release] || colors['260']}`}
      >
        <option value="260">260</option>
        <option value="262">262</option>
        <option value="264">264</option>
        <option value="266+">266+</option>
      </select>
    )
  }
  
  if (!release) return null
  
  return (
    <span className={`px-1.5 py-0.5 rounded text-xs font-bold border ${colors[release] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
      {release}
    </span>
  )
}

export default function FeatureComparison() {
  const [selectedRelease, setSelectedRelease] = useState(null)
  const [expandedFeature, setExpandedFeature] = useState(null)
  const [editMode, setEditMode] = useState(false)

  const [features, setFeatures] = useState([
    {
      category: 'Monitoring Dashboard',
      icon: LayoutDashboard,
      items: [
        { id: 'core-metrics', feature: 'Core Metrics (Error Rate, Latency, Escalation)', beta: true, ga: true, priority: 'P0', details: { description: 'Three fundamental metrics that provide real-time visibility into agent health.' } },
        { id: 'time-24h', feature: 'Time Window: Last 24 hours', beta: true, ga: true, priority: 'P0', details: { description: 'Default time window.' } },
        { id: 'time-extended', feature: 'Time Window: Last 1, 3, 12 hours', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { description: 'Extended time options.' } },
        { id: 'agg-5min', feature: 'Aggregation: 5 minutes', beta: true, ga: true, priority: 'P0', details: { description: 'Default aggregation.' } },
        { id: 'agg-extended', feature: 'Aggregation: 10, 15, 30 minutes', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { description: 'Extended options.' } },
        { id: 'filters', feature: 'Filter by Agent ID, Type, Channel', beta: true, ga: true, priority: 'P0', details: { description: 'Dimensional filtering.' } },
        { id: 'manual-refresh', feature: 'Manual Dashboard Refresh', beta: true, ga: true, priority: 'P0', details: { description: 'User-initiated refresh.' } },
        { id: 'auto-refresh', feature: 'Auto Dashboard Refresh', beta: false, ga: true, gaRelease: '260', priority: 'P1', details: { description: 'Automatic refresh.' } },
        { id: 'custom-time', feature: 'Custom Time Range Selection', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { description: 'Custom time range.' } },
      ]
    },
    {
      category: 'Alerting',
      icon: Bell,
      items: [
        { id: 'threshold', feature: 'Threshold-based Alerts', beta: true, ga: true, priority: 'P0', details: { description: 'Configure threshold alerts.' } },
        { id: 'severity', feature: 'Alert Severity Levels', beta: true, ga: true, priority: 'P0', details: { description: 'Low/Medium/High/Critical.' } },
        { id: 'email-self', feature: 'Email Notifications (self)', beta: true, ga: true, priority: 'P0', details: { description: 'Send to self.' } },
        { id: 'cooldown', feature: 'Default Cooldown (30 min)', beta: true, ga: true, priority: 'P1', details: { description: 'Prevent alert fatigue.' } },
        { id: 'email-dl', feature: 'Email Distribution Lists', beta: false, ga: true, gaRelease: '262', priority: 'P0', details: { description: 'Send to teams.' } },
        { id: 'slack', feature: 'Slack Channel Alerts', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { description: 'Slack integration.' } },
        { id: 'cooldown-custom', feature: 'Custom Cooldown Per Alert', beta: false, ga: true, gaRelease: '260', priority: 'P1', details: { description: 'Override cooldown.' } },
        { id: 'anomaly', feature: 'Anomaly Detection Alerts', beta: false, ga: true, gaRelease: '260', priority: 'P1', details: { description: 'ML-based detection.' } },
      ]
    },
    {
      category: 'Investigation & Debugging',
      icon: FileSearch,
      items: [
        { id: 'trace', feature: 'Basic Session Trace View', beta: true, ga: true, priority: 'P0', details: { description: 'View traces.' } },
        { id: 'investigation', feature: 'Alert-Linked Investigation Page', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { description: 'One-click from alert.' } },
        { id: 'auto-focus', feature: 'Auto-Focus on Alert Time Window', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { description: 'Auto-scope to alert.' } },
        { id: 'agentic', feature: 'Agentic Q&A for Debugging', beta: false, ga: true, gaRelease: '266+', priority: 'P1', details: { description: 'AI-powered Q&A.' } },
      ]
    },
    {
      category: 'Export & Integration',
      icon: Download,
      items: [
        { id: 'export', feature: 'Export to Splunk/Datadog/New Relic', beta: true, ga: true, priority: 'P0', details: { description: 'Export to tools.' } },
        { id: 'latency', feature: 'Low-Latency Export (<10s)', beta: true, ga: true, priority: 'P0', details: { description: '<10s delivery.' } },
        { id: 'toggle', feature: 'Pause/Resume Export', beta: true, ga: true, priority: 'P0', details: { description: 'Toggle export.' } },
        { id: 'scale', feature: 'Enterprise-Scale Validation', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { description: 'Large org support.' } },
      ]
    },
    {
      category: 'Customization',
      icon: Sliders,
      items: [
        { id: 'fixed', feature: 'Fixed Dashboard Layout', beta: true, ga: true, priority: 'P0', details: { description: 'Standard layout.' } },
        { id: 'add-metrics', feature: 'Add Metrics from Analytics', beta: false, ga: true, gaRelease: '264', priority: 'P1', details: { description: 'Add custom metrics.' } },
        { id: 'remove-metrics', feature: 'Remove Added Metrics', beta: false, ga: true, gaRelease: '264', priority: 'P1', details: { description: 'Remove metrics.' } },
      ]
    },
    {
      category: 'Setup & Onboarding',
      icon: Zap,
      items: [
        { id: 'setup-toggle', feature: 'Setup Page Toggle', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { description: 'Enable monitoring.' } },
        { id: 'fre', feature: 'First Run Experience', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { description: 'Onboarding UI.' } },
      ]
    },
  ])

  const updateFeaturePriority = (categoryIndex, itemIndex, newPriority) => {
    setFeatures(prev => {
      const updated = [...prev]
      updated[categoryIndex] = {
        ...updated[categoryIndex],
        items: updated[categoryIndex].items.map((item, idx) => 
          idx === itemIndex ? { ...item, priority: newPriority } : item
        )
      }
      return updated
    })
  }

  const updateFeatureRelease = (categoryIndex, itemIndex, newRelease) => {
    setFeatures(prev => {
      const updated = [...prev]
      updated[categoryIndex] = {
        ...updated[categoryIndex],
        items: updated[categoryIndex].items.map((item, idx) => 
          idx === itemIndex ? { ...item, gaRelease: newRelease, ga: true, beta: false } : item
        )
      }
      return updated
    })
  }

  const releases = [
    { id: '258', release: '258.11', label: 'Dreamforce Beta', color: 'amber' },
    { id: '260', release: '260', label: 'GA Launch', color: 'emerald' },
    { id: '262', release: '262', label: 'Enhanced Alerting', color: 'blue' },
    { id: '264', release: '264', label: 'Customization', color: 'purple' },
    { id: '266', release: '266+', label: 'Agentic Monitoring', color: 'violet' },
  ]

  const handleReleaseClick = (releaseId) => {
    setSelectedRelease(selectedRelease === releaseId ? null : releaseId)
  }

  const filterFeaturesByRelease = (items) => {
    if (!selectedRelease) return items
    if (selectedRelease === '258') return items.filter(item => item.beta === true)
    if (selectedRelease === '260') return items.filter(item => item.ga && !item.beta && (!item.gaRelease || item.gaRelease === '260' || item.gaRelease === '260+'))
    if (selectedRelease === '262') return items.filter(item => item.gaRelease === '262')
    if (selectedRelease === '264') return items.filter(item => item.gaRelease === '264')
    if (selectedRelease === '266') return items.filter(item => item.gaRelease === '266+' || item.gaRelease === '266')
    return items
  }

  const getFeatureCounts = () => {
    let beta = 0, ga = 0
    features.forEach(cat => cat.items.forEach(item => { if (item.beta) beta++; if (item.ga) ga++ }))
    return { beta, ga, new: ga - beta }
  }

  const counts = getFeatureCounts()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded">COMPARISON</span>
            {editMode && <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded animate-pulse">EDIT MODE</span>}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Beta vs GA Feature Comparison</h2>
          <p className="text-gray-500 mt-1">{editMode ? 'Click on Priority or Release to change values' : 'Click on rows for details • Click timeline tiles to filter'}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setEditMode(!editMode)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${editMode ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
            {editMode ? '✓ Done Editing' : '✏️ Edit Mode'}
          </button>
          {selectedRelease && <button onClick={() => setSelectedRelease(null)} className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"><X className="w-4 h-4" />Clear</button>}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2"><div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4 text-amber-600" /></div><span className="font-semibold text-amber-800">Beta (258-260)</span></div>
          <p className="text-3xl font-bold text-amber-900">{counts.beta}</p>
          <p className="text-sm text-amber-700">Core Features</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2"><div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center"><Sparkles className="w-4 h-4 text-emerald-600" /></div><span className="font-semibold text-emerald-800">GA (260+)</span></div>
          <p className="text-3xl font-bold text-emerald-900">{counts.ga}</p>
          <p className="text-sm text-emerald-700">Total Features</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2"><div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"><TrendingUp className="w-4 h-4 text-blue-600" /></div><span className="font-semibold text-blue-800">New in GA</span></div>
          <p className="text-3xl font-bold text-blue-900">+{counts.new}</p>
          <p className="text-sm text-blue-700">Additional Features</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-semibold text-gray-900">Release Timeline</h3><p className="text-sm text-gray-500">Click a tile to filter</p></div>
        <div className="flex items-center gap-2">
          {releases.map((rel, index) => (
            <Fragment key={rel.id}>
              <TimelineItem release={rel.release} label={rel.label} color={rel.color} active={selectedRelease === rel.id} onClick={() => handleReleaseClick(rel.id)} />
              {index < releases.length - 1 && <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0" />}
            </Fragment>
          ))}
        </div>
        {selectedRelease && <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"><p className="text-sm text-blue-700"><Info className="w-4 h-4 inline mr-1" />Showing <strong>only new features</strong> in <strong>{releases.find(r => r.id === selectedRelease)?.release}</strong></p></div>}
      </div>

      {features.map((category, categoryIndex) => {
        const filteredItems = filterFeaturesByRelease(category.items)
        if (filteredItems.length === 0) return null
        return (
          <div key={category.category} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-2"><category.icon className="w-5 h-5 text-salesforce-blue" /><h3 className="font-semibold text-gray-900">{category.category}</h3><span className="text-sm text-gray-400">({filteredItems.length})</span></div>
            </div>
            <table className="w-full">
              <thead><tr className="border-b border-gray-200">
                <th className="text-left p-4 text-sm font-medium text-gray-500 w-5/12">Feature</th>
                <th className="text-center p-4 text-sm font-medium w-2/12"><span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded">🎯 Priority</span></th>
                {(!selectedRelease || selectedRelease === '258') && <th className="text-center p-4 text-sm font-medium w-2/12"><span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded">🧪 Beta</span></th>}
                {(!selectedRelease || selectedRelease !== '258') && <th className="text-center p-4 text-sm font-medium w-3/12"><span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded">🚀 GA</span></th>}
              </tr></thead>
              <tbody>
                {filteredItems.map((item) => {
                  const itemIndex = category.items.findIndex(i => i.id === item.id)
                  return (
                    <Fragment key={item.id}>
                      <tr className={`border-b border-gray-100 last:border-0 cursor-pointer transition-colors ${expandedFeature === item.id ? 'bg-blue-50' : editMode ? 'bg-orange-50/30 hover:bg-orange-50' : 'hover:bg-gray-50'}`} onClick={() => !editMode && setExpandedFeature(expandedFeature === item.id ? null : item.id)}>
                        <td className="p-4 text-sm text-gray-700"><div className="flex items-center gap-2">{!editMode && (expandedFeature === item.id ? <ChevronUp className="w-4 h-4 text-blue-500" /> : <ChevronDown className="w-4 h-4 text-gray-400" />)}<span>{item.feature}</span></div></td>
                        <td className="p-4 text-center">{item.priority && <PriorityBadge priority={item.priority} editable={editMode} onChange={(p) => updateFeaturePriority(categoryIndex, itemIndex, p)} />}</td>
                        {(!selectedRelease || selectedRelease === '258') && <td className="p-4 text-center">{item.beta ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}</td>}
                        {(!selectedRelease || selectedRelease !== '258') && <td className="p-4 text-center">{item.ga ? <div className="flex items-center justify-center gap-1"><CheckCircle2 className="w-5 h-5 text-green-500" />{editMode ? <ReleaseBadge release={item.gaRelease || '260'} editable={true} onChange={(r) => updateFeatureRelease(categoryIndex, itemIndex, r)} /> : (item.gaRelease && !item.beta && <span className="text-xs text-gray-400">{item.gaRelease}</span>)}</div> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}</td>}
                      </tr>
                      {!editMode && expandedFeature === item.id && item.details && <tr><td colSpan={4} className="p-0"><div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-200 p-6"><p className="text-sm text-gray-700">{item.details.description}</p></div></td></tr>}
                    </Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      })}

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">GA Success Criteria</h3>
        <div className="grid grid-cols-4 gap-4">
          <MetricGoal label="Adoption Rate" value="≥40%" description="Orgs activated" />
          <MetricGoal label="Alert Engagement" value="≥60%" description="Click-through" />
          <MetricGoal label="Active Usage" value="≥50%" description="Weekly active" />
          <MetricGoal label="Dashboard Freshness" value="≥95%" description="10 min SLA" />
        </div>
      </div>
    </div>
  )
}

function TimelineItem({ release, label, color, active, onClick }) {
  const colorClasses = {
    amber: { base: 'bg-amber-100 text-amber-700 border-amber-300 hover:bg-amber-200', active: 'bg-amber-500 text-white border-amber-600 ring-4 ring-amber-200' },
    emerald: { base: 'bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200', active: 'bg-emerald-500 text-white border-emerald-600 ring-4 ring-emerald-200' },
    blue: { base: 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200', active: 'bg-blue-500 text-white border-blue-600 ring-4 ring-blue-200' },
    purple: { base: 'bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200', active: 'bg-purple-500 text-white border-purple-600 ring-4 ring-purple-200' },
    violet: { base: 'bg-violet-100 text-violet-700 border-violet-300 hover:bg-violet-200', active: 'bg-violet-500 text-white border-violet-600 ring-4 ring-violet-200' },
  }
  return (
    <button onClick={onClick} className={`flex-1 p-3 rounded-lg border-2 cursor-pointer transition-all ${active ? colorClasses[color].active : colorClasses[color].base}`}>
      <p className="font-bold text-lg">{release}</p>
      <p className={`text-xs ${active ? 'opacity-90' : 'opacity-75'}`}>{label}</p>
    </button>
  )
}

function MetricGoal({ label, value, description }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-emerald-400">{value}</p>
      <p className="font-medium mt-1">{label}</p>
      <p className="text-xs text-slate-400 mt-0.5">{description}</p>
    </div>
  )
}
