import { useState, Fragment } from 'react'
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Bell,
  BarChart3,
  Download,
  FileSearch,
  Sparkles,
  Zap,
  ChevronDown,
  ChevronUp,
  X,
  Info,
  ArrowUpRight,
  Database,
  Activity,
  List,
  ArrowUpCircle,
  Users,
  Clock,
  ExternalLink
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
      category: 'Investigation Page (STDM)',
      icon: FileSearch,
      items: [
        { id: 'investigation', feature: 'Open Investigation from Alert', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Clicking any alert notification opens the Investigation Page with STDM session traces and metadata.',
          jtbd: 'Right after an alert fires, I want a single click from the notification to an investigation view with detailed session traces so I can triage the alert.',
          acceptanceCriteria: ['Clicking any alert notification opens the Investigation Page for that alert', 'Page loads relevant STDM session traces and metadata (agent, metric, alert time)', 'If traces are unavailable, clear empty-state and retry action are shown'],
          userPersona: 'Admin / Agent Builder'
        } },
        { id: 'investigation-stdm', feature: 'STDM Structure (Topics, Agents, Actions, Sessions, Steps)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Comprehensive STDM data structure showing Topics by Agent, Agents, Actions, Sessions, and Steps with Blast Radius analysis, Version Impact, and Errors by Step/Topic tables.',
          jtbd: 'I need to quickly understand which topics, agents, and steps are affected by an alert so I can prioritize my investigation.',
          benefits: ['Blast Radius visualization showing affected channels, agent types, and agents', 'Version Impact analysis to identify problematic releases', 'Detailed error breakdowns by Step and Topic for root cause analysis']
        } },
        { id: 'auto-focus', feature: 'Auto-Focus on Alert Time Window (5 min)', ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'Default time window focuses on the alert window (e.g., 5 minutes around fire time).',
          jtbd: 'I want the investigation scoped to the exact alert window so I don\'t waste time hunting for the failure.',
          acceptanceCriteria: ['The default time window focuses on the alert\'s window (e.g., 5 minutes around the fire time)']
        } },
        { id: 'deep-links-optimizer', feature: 'Deep Links to Optimizer', ga: true, gaRelease: '262', priority: 'P2', details: { 
          description: 'Each trace row provides "Open in Optimizer" deep link landing on that exact moment.',
          jtbd: 'When I spot a suspect step, I want a one-click deep link to the Optimizer at that exact moment.',
          acceptanceCriteria: ['Each trace row provides an "Open in Optimizer" deep link landing precisely on that Moment'],
          dependency: 'Optimizer'
        } },
      ]
    },
    {
      category: 'Reroute to Agent Builder',
      icon: ArrowUpRight,
      items: [
        { id: 'reroute-topic', feature: 'Topic → Agent Builder', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Clicking on a Topic navigates directly to the agent configuration in Agent Builder.',
          jtbd: 'When analyzing a specific topic in the monitoring view, I want to navigate directly to its configuration to fix issues or inspect context.',
          acceptanceCriteria: ['Clicking on a Topic navigates to the agent in Agent Builder'],
          benefit: 'Accelerates investigation workflow by eliminating manual navigation'
        } },
        { id: 'reroute-action', feature: 'Action → Agent Builder', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Clicking on an Action navigates directly to the agent configuration in Agent Builder.',
          jtbd: 'When I identify a problematic action, I want to jump directly to its configuration to make corrections.',
          acceptanceCriteria: ['Clicking on an Action navigates to the agent in Agent Builder']
        } },
        { id: 'reroute-session', feature: 'Session → Session Page', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Clicking on a Session navigates to the specific session detail in Session Page.',
          jtbd: 'When I see a failed session, I want to view its full trace and execution details immediately.',
          acceptanceCriteria: ['Clicking on a Session navigates to the specific session in the Session Page'],
          benefit: 'Enables deep investigation into individual session failures'
        } },
        { id: 'reroute-agent', feature: 'Agent → Agent Builder', ga: true, gaRelease: '260', priority: 'P1', details: { 
          description: 'Clicking on an Agent name navigates to the high-level agent view in Agent Builder.',
          jtbd: 'I want to easily jump to the high-level agent view without manually searching.',
          acceptanceCriteria: ['Clicking on an Agent name navigates to the agent in Agent Builder']
        } },
        { id: 'reroute-step', feature: 'Step → Step within Session View', ga: true, gaRelease: '260', priority: 'P1', details: { 
          description: 'Clicking on a Step navigates to the specific step within the session view.',
          jtbd: 'When I identify a problematic step, I want to jump directly to that step\'s details within the session.',
          acceptanceCriteria: ['Clicking on a Step navigates to the specific step within the session view']
        } },
      ]
    },
    {
      category: 'Efficiency/Scalability',
      icon: Database,
      items: [
        { id: 'no-recalculation', feature: 'Efficient Metric Calculation/Storage (No Recalculation)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'More efficient metric calculation/storage so we don\'t recalculate metrics. Metrics are calculated once and stored for efficient access.',
          jtbd: 'I need metrics to be available quickly without system overhead from recalculation.',
          benefits: ['Reduced system load and improved performance', 'Faster dashboard load times', 'More scalable for high-volume orgs'],
          technicalDetails: 'Metrics stored once, accessed efficiently without re-computation'
        } },
        { id: 'dc1-support', feature: 'DC1 Support', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Data Cloud 1 support for metric storage and processing infrastructure.',
          technicalDetails: 'Seamless integration with Data Cloud infrastructure for reliable metric persistence',
          benefits: ['Enterprise-grade reliability', 'Scalable storage layer', 'Consistent with Salesforce data architecture']
        } },
      ]
    },
    {
      category: 'OOTB & Custom Metrics',
      icon: BarChart3,
      items: [
        { id: 'ootb-metrics', feature: 'OOTB Metrics from Analytics (STDM/SDM) for Alerting', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Users can add/select any OOTB metrics from STDM/SDM (same data available in Analytics) to trigger Alerts. Ensures consistency between monitoring and reporting.',
          jtbd: 'I want to trigger alerts based on the same standard metrics (STDM/SDM) available in Analytics so my monitoring is consistent with my reporting.',
          acceptanceCriteria: ['Users can add/select any OOTB metrics from the STDM/SDM to trigger an Alert', 'Metrics match exactly what exists in Analytics'],
          userPersona: 'Admin / Agent Builder',
          examples: ['Error Rate', 'Latency', 'Escalation Rate', 'Context Precision', 'Answer Relevancy']
        } },
        { id: 'custom-metrics', feature: 'Custom Metrics for Alerting', ga: true, gaRelease: '260', priority: 'P1', details: { 
          description: 'Allow users to add custom metrics for creating alerts tailored to unique business KPIs beyond standard OOTB metrics.',
          jtbd: 'I want to define custom metrics for unique business KPIs and set alerts on them.',
          acceptanceCriteria: ['Allow users to add custom metrics for creating an alert'],
          userPersona: 'Admin / Agent Builder',
          useCase: 'Track business-specific success criteria like First Contact Resolution or Custom Satisfaction Scores'
        } },
        { id: 'severity-grouping', feature: 'Alert Severity and Grouping (Critical/Warning/Info)', ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'Users can assign "Critical," "Warning," or "Info" levels to alerts for better prioritization and filtering.',
          jtbd: 'I want to distinguish between critical outages and minor warnings, and prevent my inbox from being flooded by the same error across multiple agents.',
          acceptanceCriteria: ['Users can assign "Critical," "Warning," or "Info" levels to alerts', 'Alerts can be filtered and sorted by severity'],
          benefits: ['Better alert triage', 'Reduced alert fatigue', 'Clearer incident prioritization']
        } },
      ]
    },
    {
      category: 'Agent Availability & Reliability',
      icon: Activity,
      items: [
        { id: 'heartbeat', feature: 'Heartbeat Metric (0 Sessions vs System Unresponsive)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'System distinguishes between "0 sessions" (no traffic) and "System Unresponsive" (requests sent but not acknowledged).',
          jtbd: 'I need to know immediately if my agent is completely unresponsive (down) versus just having low traffic, so I can initiate a P0 incident response.',
          acceptanceCriteria: ['Heartbeat Metric distinguishes between "0 sessions" and "System Unresponsive"', 'System tracks handshake responses vs silence'],
          userPersona: 'Admin',
          criticalityReason: 'Prevents false positives during low-traffic periods and ensures real outages are identified immediately'
        } },
        { id: 'downtime-alert', feature: 'Downtime Alert (Agent Unresponsive)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Trigger an alert if agent fails to initiate a session or respond to handshake within x minutes.',
          jtbd: 'I need to be notified immediately when my agent stops responding so I can take action before customers are impacted.',
          acceptanceCriteria: ['Trigger an alert if the agent fails to initiate a session or respond to a handshake within x minutes'],
          sla: 'Alert fires within configured threshold (e.g., 5 minutes of unresponsiveness)'
        } },
        { id: 'status-indicator', feature: 'Dashboard Status Indicator (Online/Offline/Degraded)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Visual status indicator showing Online, Offline, or Degraded state on the dashboard.',
          jtbd: 'I want an at-a-glance view of my agent health status without diving into metrics.',
          acceptanceCriteria: ['Dashboard status indicator displays: Online, Offline, or Degraded'],
          states: ['Online: Agent responding normally', 'Offline: Agent completely unresponsive', 'Degraded: Agent responding but with elevated errors/latency']
        } },
      ]
    },
    {
      category: 'Alerting Improvements',
      icon: Bell,
      items: [
        { id: 'email-dl', feature: 'Email Distribution Lists', ga: true, gaRelease: '262', priority: 'P0', details: { 
          description: 'Enable Admins to set up alerts for entire teams via email distribution lists. Add one or more emails/DLs during alert creation with P95 delivery < 5 minutes.',
          jtbd: 'When I\'m creating an alert and monitoring agent health, I want to designate a shared email distribution list as the recipient so the whole on-call team is alerted simultaneously without me becoming a bottleneck.',
          acceptanceCriteria: ['Add one or more emails/DLs during alert creation/edit with format validation', 'Users can uncheck self-email to avoid duplicate notifications', 'Email includes metric, agent, threshold vs. observed value, time window, and link to Investigation Page', 'P95 delivery < 5 minutes; failures logged and surfaced to Admin'],
          userPersona: 'Admin / Agent Builder',
          sla: 'P95 < 5 minutes from event detection to email delivery'
        } },
        { id: 'anomaly', feature: 'Anomaly Detection (Unusual Change Detection)', ga: true, gaRelease: '260', priority: 'P1', details: { 
          description: 'ML-based anomaly detection using baseline vs. recent window to detect significant deviations. Catch regressions without hand-tuning thresholds.',
          jtbd: 'I want anomaly-based alerts so I catch regressions without hand-tuning thresholds. I want to know if a spike in latency is normal for my org or if this specific agent is underperforming compared to the average.',
          acceptanceCriteria: ['Users can select anomaly detection alerting instead of custom thresholds', 'Uses baseline vs. recent window to detect significant deviations', 'All other alert features work like threshold alerts (email/slack, cooldown)', 'Visual overlay on charts showing "Org Average" vs "This Agent"', 'Trend indicators showing Week-over-Week (WoW) changes'],
          userPersona: 'Admin / Agent Builder',
          benefits: ['Reduces manual threshold tuning', 'Adapts to seasonal patterns', 'Provides org-wide benchmarking context']
        } },
        { id: 'severity', feature: 'Alert Severity Levels (Critical/Warning/Info)', ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'Users can assign severity levels to distinguish critical outages from minor warnings and prevent inbox flooding.',
          jtbd: 'I want to distinguish between critical outages and minor warnings, and prevent my inbox from being flooded by the same error across multiple agents.',
          acceptanceCriteria: ['Users can assign "Critical," "Warning," or "Info" levels to alerts'],
          userPersona: 'Admin',
          useCase: 'Prioritize P0 incidents while tracking lower-severity trends'
        } },
        { id: 'slack', feature: 'Slack Channel Alerts', ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'Slack message posted to designated channel; P95 delivery < 5 minutes. Integrates into existing team workflow.',
          jtbd: 'When incidents occur, I want alerts posted to a designated Slack channel so we triage in our existing workflow.',
          acceptanceCriteria: ['Users can specify a Slack channel in alert setup', 'Users can still use email if they want', 'Slack message mirrors email fields + deep link', 'P95 delivery < 5 minutes; delivery errors logged with remediation tips'],
          userPersona: 'Admin / Agent Builder',
          benefit: 'Enables real-time collaboration and faster incident response'
        } },
        { id: 'webhook', feature: 'Webhook/API Delivery (PagerDuty, ServiceNow)', ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'Send POST request with JSON payload (Metric, Agent ID, Threshold, Timestamp, Severity) to incident management systems with retry logic.',
          jtbd: 'I want alerts sent to my incident management system (PagerDuty, ServiceNow) via webhook so we can automate our response workflows.',
          acceptanceCriteria: ['Input field for "Webhook URL" in alert setup', 'System sends POST request with standard JSON payload', 'Includes retry logic (linear or exponential backoff) for failed deliveries'],
          userPersona: 'DevOps / SRE',
          integration: 'PagerDuty, ServiceNow, or any webhook-compatible incident management system'
        } },
        { id: 'cooldown-org', feature: 'Admin Org-wide Cooldown Customization', ga: true, gaRelease: '264', priority: 'P1', details: { 
          description: 'Admin sets global cooldown (15-180 min); identical alerts within cooldown are suppressed but occurrences are recorded.',
          jtbd: 'I want org-wide cooldowns so teams aren\'t spammed by repeat alerts.',
          acceptanceCriteria: ['Admin sets a global cooldown (e.g., 15–180 min)', 'Identical alerts within cooldown are suppressed but occurrences are recorded', 'UI shows active cooldown status and next eligible send time'],
          userPersona: 'Admin',
          benefit: 'Prevents alert fatigue while maintaining visibility into ongoing issues'
        } },
      ]
    },
    {
      category: 'Events & Detectors UI',
      icon: List,
      items: [
        { id: 'alerts-section', feature: 'Alerts Section in Sidebar (Detectors/Events Tabs)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Display "Alerts" section in left sidebar with two tabs: Detectors (Config) and Events (Log). Default view is Detectors unless navigating via deep link.',
          jtbd: 'As an Agent Builder, I want a dedicated place to see a history of all alerts.',
          acceptanceCriteria: ['Display "Alerts" section in the left sidebar', 'Structure section with two tabs: Detectors (Config) and Events (Log)', 'Default view is Detectors (unless navigating via deep link)'],
          userPersona: 'Admin / Agent Builder',
          structure: 'Two-tab design separating configuration (Detectors) from execution history (Events)'
        } },
        { id: 'events-tab', feature: 'Events Tab (Alert Log)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Table displaying all alert instances with columns: Alert Name, Timestamp, Status, Metric Name, Severity. Provides complete alert history for investigation.',
          jtbd: 'As an Agent Builder, I want to scan my alerts and understand their status.',
          acceptanceCriteria: ['Display table of alert instances with columns: Alert Name, Timestamp, Status, Metric Name, Severity', 'Default sort is "Most Recent First"/Critical', 'Alert Name is a clickable link triggering Smart Routing'],
          userPersona: 'Admin / Agent Builder'
        } },
        { id: 'events-sort', feature: 'Default Sort: Most Recent First/Critical', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Default sort prioritizes latest and critical alerts for immediate attention.',
          benefit: 'Ensures most urgent alerts are always visible first',
          sortLogic: 'Primary: Severity (Critical > Warning > Info), Secondary: Timestamp (Most Recent First)'
        } },
        { id: 'smart-routing', feature: 'Alert Name Clickable Link (Smart Routing)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Alert Name is a clickable link that intelligently routes users directly to the relevant Session or Investigation View, bypassing the general dashboard.',
          jtbd: 'I want email notification links and Alert Name clicks to take me directly to the relevant data so I can investigate faster.',
          acceptanceCriteria: ['Alert Name is a clickable link triggering the Smart Routing logic'],
          northStar: 'Time to Investigate (TTI) < 10 seconds from clicking alert to viewing relevant Session Page',
          flow: 'Email Alert → Investigation Page → Session Page (bypasses dashboard)'
        } },
        { id: 'lifecycle', feature: 'Alert Lifecycle Management (New → Acknowledged → Closed)', ga: true, gaRelease: '260', priority: 'P2', details: { 
          description: 'Alerts support status states (New → Acknowledged → Closed); users can manually update status in Events table.',
          jtbd: 'As an Agent Builder, I want to track the status of an alert so my team knows what is being investigated.',
          acceptanceCriteria: ['Alerts support status states: "New" → "Acknowledged" → "Closed"', 'Users can manually update the status of an alert in the Events table'],
          userPersona: 'Admin / Agent Builder',
          successMetric: 'Lifecycle Usage: % of alerts that move from "New" → "Acknowledged" (proving teams are using the workflow)'
        } },
        { id: 'metric-bell', feature: 'Metric Page Integration (Red Bell Icon)', ga: true, gaRelease: '260', priority: 'P2', details: { 
          description: 'Red bell icon on metric cards that have alerts with "New" or "Acknowledged" status. Create Alert button on Metric detail page opens modal with current metric pre-selected.',
          jtbd: 'As an Agent Builder, I want to see visual indicators on the Metric Page for metrics with active alerts and create an alert directly from this context so I don\'t have to navigate to settings manually.',
          acceptanceCriteria: ['Display red bell icon on metric cards with alerts in "New" or "Acknowledged" status', 'Clicking bell opens view showing only alerts for that metric', '"Create Alert" button visible on Metric detail page', 'Modal opens with current Metric pre-selected and default thresholds pre-filled'],
          userPersona: 'Admin / Agent Builder',
          benefit: 'Contextual alert creation reduces navigation friction'
        } },
      ]
    },
    {
      category: 'Setup Flow',
      icon: Zap,
      items: [
        { id: 'setup-toggle', feature: 'Enablement Toggle in Setup Page', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Toggle in setup page for users to enable health monitoring (reusing STDM toggle or creating a new one).',
          jtbd: 'I want a simple control to turn on Agent Health Monitoring for my organization.',
          acceptanceCriteria: ['Include a toggle in the setup page for users to enable health monitoring (reusing STDM toggle or new one)'],
          userPersona: 'Admin',
          implementation: 'Single toggle control in Setup > Observability section'
        } },
        { id: 'fre', feature: 'First Run Experience (FRE)', ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Users without toggle enabled see onboarding UI guiding them on how to enable Agent Health Monitoring.',
          jtbd: 'If I haven\'t enabled monitoring, I want to be guided to the setup page so I don\'t miss out on these capabilities.',
          acceptanceCriteria: ['Users who do not have the toggle enabled see a UI (Beta FRE experience) guiding them on how to enable it'],
          userPersona: 'Admin',
          flow: 'Empty State UI → "Enable Health Monitoring" CTA → Setup Page → Toggle Activation'
        } },
      ]
    },
    {
      category: 'Scalable Exports',
      icon: Download,
      items: [
        { id: 'scalable-exports', feature: 'Enterprise-grade Export (Splunk/DataDog)', ga: true, gaRelease: '262', priority: 'P0', details: { 
          description: 'Export within 5 minutes of data landing into Data Cloud. Handles large enterprise volumes without timeouts, validated in pre-GA large orgs.',
          jtbd: 'I need a reliable method to export all agent health monitoring metrics to my external monitoring solution such as Splunk/DataDog.',
          acceptanceCriteria: ['Data can be exported within 5 minutes of landing into Data Cloud', 'Export functionality handles large enterprise data volumes without timeouts; validated in pre-GA large org', 'Completion provides downloadable artifact and audit log entry', 'Failures show actionable errors and retry option'],
          userPersona: 'Admin',
          sla: '5 minutes from Data Cloud ingestion to export availability',
          capabilities: ['Large volume handling', 'Audit trail', 'Error recovery with retry', 'Downloadable artifacts']
        } },
      ]
    },
    {
      category: 'Upgrade Path (Tableau Plus)',
      icon: ArrowUpCircle,
      items: [
        { id: 'upgrade-experience', feature: 'In-Product Upgrade Experience', ga: true, gaRelease: '264', priority: 'P2', details: { 
          description: 'Product experience for users to upgrade to Tableau Plus for advanced capabilities like dashboard customization (adding/removing metrics).',
          jtbd: 'When I need advanced capabilities, I want a clear, in-product path to upgrade so I can unlock them without friction.',
          acceptanceCriteria: ['Gated capabilities (e.g., customization) show inline upgrade prompts'],
          userPersona: 'Admin / Agent Builder',
          gatedFeatures: ['Dashboard customization (add/remove metrics)', 'Advanced analytics', 'Custom visualizations'],
          dependency: 'Tableau Plus license'
        } },
        { id: 'gating', feature: 'Gating for Advanced Capabilities', ga: true, gaRelease: '264', priority: 'P2', details: { 
          description: 'All surfaces for gated features consistently display upgrade messaging if user lacks the required license.',
          acceptanceCriteria: ['If license is missing, all relevant surfaces consistently display upgrade messaging'],
          consistency: 'Uniform upgrade messaging across all gated feature touchpoints',
          examples: ['Dashboard customization page', 'Advanced metric configuration', 'Custom report builder']
        } },
      ]
    },
    {
      category: 'Agentic Health Monitoring',
      icon: Sparkles,
      items: [
        { id: 'agentic-qa', feature: 'Ask/Debug Experience via Obs Agent', ga: true, gaRelease: '266+', priority: 'P1', details: { 
          description: 'Users can ask questions about alerts and dashboard in natural language and receive AI-powered contextual answers with suggested drill-downs.',
          jtbd: 'I want to ask questions about my alerts and dashboard and get guided debugging assistance.',
          acceptanceCriteria: ['Users can pose questions (e.g., "Why did latency spike at 14:05?")', 'Receive contextual answers referencing current metrics and STDM logs', 'Provides suggested drill-downs (related metrics, time ranges)', 'Quick links to the Investigation Page'],
          userPersona: 'Admin / Agent Builder',
          examples: ['"Why did error rate increase?"', '"What caused the latency spike at 2:15 PM?"', '"Show me sessions affected by this alert"'],
          dependency: 'Observability Agent (Tableau)',
          aiCapabilities: ['Natural language query understanding', 'Contextual metric analysis', 'Intelligent suggestion engine']
        } },
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
    { id: '260', release: '260', label: 'GA Launch', color: 'emerald' },
    { id: '262', release: '262', label: 'Enhanced Alerting', color: 'blue' },
    { id: '264', release: '264', label: 'Customization', color: 'purple' },
    { id: '266', release: '266+', label: 'Agentic Monitoring', color: 'violet' },
  ]

  const handleReleaseClick = (releaseId) => {
    setSelectedRelease(selectedRelease === releaseId ? null : releaseId)
  }

  const filterFeaturesByRelease = (items) => {
    if (!selectedRelease) return items.filter(item => item.ga)
    if (selectedRelease === '260') return items.filter(item => item.ga && (!item.gaRelease || item.gaRelease === '260' || item.gaRelease === '260+'))
    if (selectedRelease === '262') return items.filter(item => item.gaRelease === '262')
    if (selectedRelease === '264') return items.filter(item => item.gaRelease === '264')
    if (selectedRelease === '266') return items.filter(item => item.gaRelease === '266+' || item.gaRelease === '266')
    return items.filter(item => item.ga)
  }

  const getFeatureCounts = () => {
    let ga = 0
    features.forEach(cat => cat.items.forEach(item => { if (item.ga) ga++ }))
    return { ga }
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
          <h2 className="text-2xl font-bold text-gray-900">GA Feature Comparison</h2>
          <p className="text-gray-500 mt-1">{editMode ? 'Click on Priority or Release to change values' : 'Click on rows for details • Click timeline tiles to filter'}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setEditMode(!editMode)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${editMode ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
            {editMode ? '✓ Done Editing' : '✏️ Edit Mode'}
          </button>
          {selectedRelease && <button onClick={() => setSelectedRelease(null)} className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"><X className="w-4 h-4" />Clear</button>}
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="font-semibold text-emerald-800">GA Features (260+)</span>
        </div>
          <p className="text-3xl font-bold text-emerald-900">{counts.ga}</p>
          <p className="text-sm text-emerald-700">Total Features</p>
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
                <th className="text-center p-4 text-sm font-medium w-3/12"><span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded">🚀 GA Release</span></th>
              </tr></thead>
              <tbody>
                {filteredItems.map((item) => {
                  const itemIndex = category.items.findIndex(i => i.id === item.id)
                  return (
                    <Fragment key={item.id}>
                      <tr className={`border-b border-gray-100 last:border-0 cursor-pointer transition-colors ${expandedFeature === item.id ? 'bg-blue-50' : editMode ? 'bg-orange-50/30 hover:bg-orange-50' : 'hover:bg-gray-50'}`} onClick={() => !editMode && setExpandedFeature(expandedFeature === item.id ? null : item.id)}>
                        <td className="p-4 text-sm text-gray-700"><div className="flex items-center gap-2">{!editMode && (expandedFeature === item.id ? <ChevronUp className="w-4 h-4 text-blue-500" /> : <ChevronDown className="w-4 h-4 text-gray-400" />)}<span>{item.feature}</span></div></td>
                        <td className="p-4 text-center">{item.priority && <PriorityBadge priority={item.priority} editable={editMode} onChange={(p) => updateFeaturePriority(categoryIndex, itemIndex, p)} />}</td>
                        <td className="p-4 text-center">{item.ga ? <div className="flex items-center justify-center gap-1"><CheckCircle2 className="w-5 h-5 text-green-500" />{editMode ? <ReleaseBadge release={item.gaRelease || '260'} editable={true} onChange={(r) => updateFeatureRelease(categoryIndex, itemIndex, r)} /> : (item.gaRelease && <span className="text-xs text-gray-400">{item.gaRelease}</span>)}</div> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}</td>
                      </tr>
                      {!editMode && expandedFeature === item.id && item.details && (
                        <tr>
                          <td colSpan={3} className="p-0">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-200 p-6 space-y-4">
                              {/* Description */}
                              <div>
                                <p className="text-sm font-semibold text-gray-900 mb-2">Description</p>
                                <p className="text-sm text-gray-700">{item.details.description}</p>
                              </div>
                              
                              {/* JTBD */}
                              {item.details.jtbd && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-900 mb-2">Job to be Done</p>
                                  <p className="text-sm text-blue-800 italic">"{item.details.jtbd}"</p>
                                </div>
                              )}
                              
                              {/* User Persona */}
                              {item.details.userPersona && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-900 mb-1">User</p>
                                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                                    <Users className="w-3 h-3" />{item.details.userPersona}
                                  </span>
                                </div>
                              )}
                              
                              {/* Acceptance Criteria */}
                              {item.details.acceptanceCriteria && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-900 mb-2">Acceptance Criteria</p>
                                  <ul className="space-y-1">
                                    {item.details.acceptanceCriteria.map((criteria, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>{criteria}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Benefits */}
                              {item.details.benefits && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-900 mb-2">Key Benefits</p>
                                  <ul className="space-y-1">
                                    {item.details.benefits.map((benefit, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                        <Sparkles className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                        <span>{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {/* Technical Details */}
                              {item.details.technicalDetails && (
                                <div className="p-3 bg-gray-100 rounded-lg border border-gray-300">
                                  <p className="text-xs font-semibold text-gray-700 mb-1">Technical Details</p>
                                  <p className="text-xs text-gray-600">{item.details.technicalDetails}</p>
                                </div>
                              )}
                              
                              {/* SLA */}
                              {item.details.sla && (
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-emerald-600" />
                                  <span className="text-xs font-semibold text-gray-700">SLA:</span>
                                  <span className="text-xs text-emerald-700 font-medium">{item.details.sla}</span>
                                </div>
                              )}
                              
                              {/* Dependency */}
                              {item.details.dependency && (
                                <div className="flex items-center gap-2">
                                  <ExternalLink className="w-4 h-4 text-amber-600" />
                                  <span className="text-xs font-semibold text-gray-700">Dependency:</span>
                                  <span className="text-xs text-amber-700">{item.details.dependency}</span>
                                </div>
                              )}
                              
                              {/* Examples */}
                              {item.details.examples && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-900 mb-2">Examples</p>
                                  <div className="flex flex-wrap gap-2">
                                    {item.details.examples.map((example, i) => (
                                      <span key={i} className="px-2 py-1 bg-white border border-gray-300 rounded text-xs text-gray-700">
                                        {example}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {/* Capabilities */}
                              {item.details.capabilities && (
                                <div>
                                  <p className="text-sm font-semibold text-gray-900 mb-2">Capabilities</p>
                                  <div className="flex flex-wrap gap-2">
                                    {item.details.capabilities.map((capability, i) => (
                                      <span key={i} className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                                        {capability}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
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
          <MetricGoal label="Adoption Rate" value="≥40%" description="Orgs with STDM & Optimization enabled" />
          <MetricGoal label="Investigation Engagement" value="≥60%" description="CTR on alerts within 24h" />
          <MetricGoal label="Active Usage" value="≥50%" description="Weekly active users" />
          <MetricGoal label="Alert Configuration" value="≥50%" description="Orgs with ≥1 alert" />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <MetricGoal label="Upgrade Conversion" value="≥5%" description="To Tableau Plus" />
          <MetricGoal label="Dashboard Freshness" value="≥95%" description="Within 10 min SLA" />
          <MetricGoal label="Alert Delivery" value="P95 &lt; 5min" description="Email/Slack" />
          <MetricGoal label="System Reliability" value="≥99.999%" description="Uptime" />
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
