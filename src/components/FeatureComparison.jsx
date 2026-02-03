import { useState, Fragment } from 'react'
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Bell,
  BarChart3,
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
      category: 'Monitoring Dashboard',
      icon: BarChart3,
      items: [
        { id: 'monitoring-tab', feature: 'Health Monitoring Tab in Agentforce Observability', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'User sees a Monitoring tab under Agentforce Observability titled "Health Monitoring". Dashboard embedded via Tableau Next.',
          jtbd: 'A Salesforce admin can view agent metrics in the Agentforce Observability dashboard.',
          acceptanceCriteria: ['User sees a Monitoring tab under Agentforce Observability titled "Health Monitoring"', 'The dashboard loads without delay and displays three metrics: Agent Error Rate, Turn Latency, and Escalation Rate', 'The dashboard is embedded via Tableau Next and follows the Figma prototype provided'],
          userPersona: 'Admin'
        } },
        { id: 'manual-refresh', feature: 'Manual Refresh', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Dashboard supports manual user-initiated refresh. Shows timestamp for last refresh.',
          acceptanceCriteria: ['User can manually refresh the dashboard', 'Timestamp of last refresh displayed']
        } },
        { id: 'time-window-24h', feature: 'Last 24 Hour Default View', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Default view selected on the dashboard is the last 24 hours for all metrics.',
          acceptanceCriteria: ['Default view is last 24 hours for all metrics']
        } },
        { id: 'filter-dimensions', feature: 'Filter by Agent ID, Agent Type, Channel', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'User sees a filter panel with the ability to filter by Agent ID (typeahead search), Agent Type (dropdown), and Channel.',
          acceptanceCriteria: ['Filter panel with Agent ID (typeahead search)', 'Filter by Agent Type (dropdown)', 'Filter by Channel', 'Filters update the dashboard without needing a full refresh']
        } },
        { id: 'aggregation-5min', feature: '5 Minute Aggregation Window', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Aggregation is over 5 minutes for all metrics on the dashboard. This is a fixated selection for GA launch.',
          acceptanceCriteria: ['Aggregation is over 5 minutes for all metrics']
        } },
        { id: 'drilldown-scale-center', feature: 'Drilldown to Scale Center', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Support drilldown from metric to Scale Center report page.',
          acceptanceCriteria: ['User can drilldown from metric to Scale Center report page']
        } },
      ]
    },
    {
      category: 'Alert Configuration (Native UI)',
      icon: Bell,
      items: [
        { id: 'alert-config-ui', feature: 'Native UI to Configure Alerts in Agentforce Observability', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Admins can set alerts for any of the metrics in the monitoring dashboard. Configured alerts use Tableau next\'s notification service under the hood.',
          jtbd: 'A Salesforce admin can configure alerts directly within Agentforce Observability (native UI).',
          acceptanceCriteria: ['User sees a "Configure Alerts" button or tab directly inside the Agentforce Observability', 'Configured alerts are using Tableau next\'s notification service under the hood', 'UI allows selecting Metric, Condition (Above, Below), Threshold, Severity (optional), Enable/Disable alert'],
          userPersona: 'Admin'
        } },
        { id: 'alert-cooldown-default', feature: 'Cooldown Period (Default 30 minutes)', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P1', details: {
          description: 'Set a cooldown for Alerts (default 30 minutes) when creating alerts. When an alert is triggered, a second one is not triggered again for the same reason for the next 30 minutes.',
          acceptanceCriteria: ['When setting up an alert, system applies a default cooldown of 30 minutes', 'If multiple breaches occur during cooldown, no additional alert is sent', 'After cooldown, alerts can fire again if threshold is still breached']
        } },
        { id: 'alert-email', feature: 'Email Alert Channel', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'When the alert condition is met, an email is sent to the user if they have enabled alerts for themselves. This goes only to the specific user who has enabled the alert.',
          jtbd: 'A Salesforce admin can receive alerts via email.',
          acceptanceCriteria: ['When alert condition is met, email is sent to the user if they have enabled alerts for themselves', 'SLA: when the alert threshold is breached, the alert is delivered within 30 seconds at most'],
          sla: 'Alert delivered within 30 seconds'
        } },
      ]
    },
    {
      category: 'Core Metrics (P0)',
      icon: Activity,
      items: [
        { id: 'metric-error-rate', feature: 'Agent Error Rate', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: '% of agent responses that failed (e.g., Action and LLM errors as well as any other errors in planner). Default: 5 min aggregation window.',
          jtbd: 'A Salesforce admin can view the three metrics on the dashboard: Agent Error Rate, Average Turn Latency, Escalation Rate.',
          acceptanceCriteria: ['Dashboard displays the % of agent interactions with an error per selected time window', 'User can filter error rate by agent ID, type, session ID, and channel', 'Metrics update every minute on a rolling window assuming the user is on the real time pipeline'],
          calculation: 'Total error_interactions / total_interactions'
        } },
        { id: 'metric-latency', feature: 'Average Interaction Latency', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Avg. time (ms) from request to response per interaction. Default: 5 min aggregation window.',
          acceptanceCriteria: ['Dashboard displays average latency (in ms or seconds) from agent invocation to reply for the selected time window'],
          calculation: 'totalLatency / total_Interactions'
        } },
        { id: 'metric-escalation', feature: 'Escalation Rate', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: '% of sessions escalated to human agents. Default: 5 min aggregation window.',
          acceptanceCriteria: ['Dashboard displays % of sessions that were escalated to human agents'],
          calculation: 'escalated_sessions / total_sessions'
        } },
      ]
    },
    {
      category: 'Raw Metrics & Signals Export',
      icon: ExternalLink,
      items: [
        { id: 'export-config', feature: 'Export Configuration to External Tools', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Admin can configure export to their own monitoring tools (i.e. Splunk, Datadog, New Relic) via a basic connector UI. Export includes low-latency delivery (<10s delay) for supported metrics.',
          jtbd: 'A Salesforce admin can export raw metric data in real time to external observability tools.',
          acceptanceCriteria: ['Admin can configure export to their own monitoring tools (i.e. Splunk, Datadog, New Relic) via a basic connector UI', 'Export includes low-latency delivery (<10s delay) for supported metrics', 'Exported payload includes metric name, value, timestamp, session ID, agent ID, org ID, and all relevant metadata'],
          userPersona: 'Admin'
        } },
        { id: 'export-metric-selection', feature: 'Select Metrics to Export', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Admin can select one or more metrics (e.g., Turn Latency, Escalation Rate) to be exported. Export settings persist across sessions.',
          jtbd: 'A Salesforce admin can configure which metrics are exported.',
          acceptanceCriteria: ['Admin can select one or more metrics to be exported', 'Export settings persist across sessions']
        } },
        { id: 'export-toggle', feature: 'Enable/Disable Export', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Admin can disable exports temporarily via UI toggle or API. The system stops sending new events. Admin can re-enable without reconfiguration.',
          jtbd: 'A Salesforce admin can pause or disable metric export without data loss.',
          acceptanceCriteria: ['Admin can disable exports temporarily via UI toggle or API', 'The system stops sending new events', 'Admin can re-enable without reconfiguration']
        } },
        { id: 'export-status', feature: 'Export Connection Status Indicator', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Admin sees a basic status indicator showing connection health to external monitoring tool. If an error occurs (e.g., failed auth, dropped payload), admin receives a UI warning or log message.',
          jtbd: 'A Salesforce admin can view status of export connections.',
          acceptanceCriteria: ['Admin sees a basic status indicator showing connection health to external monitoring tool', 'If an error occurs, admin receives a UI warning or log message']
        } },
        { id: 'export-schema', feature: 'Export Schema with Full Context', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'Each event contains: metric_name, value, timestamp, agent_id, session_id, org_id, channel, agent_type. Schema is consistent across tools and supports validation/testing in pre-prod environments.',
          jtbd: 'Exported data conforms to schema with full context for downstream processing.',
          acceptanceCriteria: ['Each event contains: metric_name, value, timestamp, agent_id, session_id, org_id, channel, agent_type', 'Schema is consistent across tools and supports validation/testing in pre-prod environments']
        } },
      ]
    },
    {
      category: 'Investigation Page (STDM)',
      icon: FileSearch,
      items: [
        { id: 'investigation', feature: 'Investigation Page for Health Monitoring Alerts (STDM)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Clicking on the notification to visit the investigation page for AHM showing detailed Session trace data. List of Topics (by Agent), Agents, Actions, Sessions and Steps.',
          jtbd: 'Right after an alert fires, I want a single click from the notification to an investigation view with detailed session traces so I can triage the alert.',
          acceptanceCriteria: ['Clicking any alert notification opens the Investigation Page for that alert', 'Page loads relevant STDM session traces and metadata (agent, metric, alert time)', 'If traces are unavailable, clear empty-state and retry action are shown'],
          userPersona: 'Admin / Agent Builder'
        } },
        { id: 'investigation-stdm', feature: 'STDM Structure (Topics, Agents, Actions, Sessions, Steps)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Comprehensive STDM data structure showing Topics by Agent, Agents, Actions, Sessions, and Steps with Blast Radius analysis, Version Impact, and Errors by Step/Topic tables.',
          jtbd: 'I need to quickly understand which topics, agents, and steps are affected by an alert so I can prioritize my investigation.',
          benefits: ['Blast Radius visualization showing affected channels, agent types, and agents', 'Version Impact analysis to identify problematic releases', 'Detailed error breakdowns by Step and Topic for root cause analysis']
        } },
        { id: 'auto-focus', feature: 'Page Focused on Alert Time Window (5 min)', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'The page should be focused on the specific time window within which the alert was fired (e.g., 5 minute window).',
          jtbd: 'I want the investigation scoped to the exact alert window so I don\'t waste time hunting for the failure.',
          acceptanceCriteria: ['The default time window focuses on the alert\'s window (e.g., 5 minutes around the fire time)']
        } },
        { id: 'deep-links-optimizer', feature: 'Deep Links to Optimizer', beta: false, ga: true, gaRelease: '262', priority: 'P2', details: { 
          description: 'Each trace row provides "Open in Optimizer" deep link landing on that exact moment.',
          jtbd: 'When I spot a suspect step, I want a one-click deep link to the Optimizer at that exact moment.',
          acceptanceCriteria: ['Each trace row provides an "Open in Optimizer" deep link landing precisely on that Moment'],
          dependency: 'Optimizer'
        } },
      ]
    },
    {
      category: 'Reroute to Agent Builder & Tools',
      icon: ArrowUpRight,
      items: [
        { id: 'reroute-topic', feature: 'Topic → Agent Builder', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Clicking on a Topic navigates directly to that specific agent topic in Agent Builder.',
          jtbd: 'When I find a failure, I want to immediately jump to the configuration source to fix it.',
          acceptanceCriteria: ['Clicking on a Topic navigates to the agent in Agent Builder'],
          benefit: 'Accelerates investigation workflow by eliminating manual navigation'
        } },
        { id: 'reroute-step', feature: 'Step → Step within Session View', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Clicking on a Step navigates to the specific step within the session view.',
          jtbd: 'When I identify a problematic step, I want to jump directly to that step\'s details within the session.',
          acceptanceCriteria: ['Clicking on a Step navigates to the specific step within the session view']
        } },
        { id: 'reroute-action', feature: 'Action → Scale Center (Flow or APEX)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Clicking on an Action navigates to Scale Center based on the action type (Flow or APEX).',
          jtbd: 'When I identify a problematic action, I want to jump directly to Scale Center to inspect Flow or APEX.',
          acceptanceCriteria: ['Clicking on an Action navigates to Scale Center based on action type (Flow or APEX)']
        } },
        { id: 'reroute-optimizer', feature: 'Deep Links to Optimizer', beta: false, ga: true, gaRelease: '262', priority: 'P2', details: { 
          description: 'Provide deep links into specific moments within the Optimizer tool.',
          jtbd: 'I want to inspect the detailed logic execution of a specific step.',
          acceptanceCriteria: ['Each trace row provides deep link landing precisely on that Moment in Optimizer'],
          dependency: 'Optimizer'
        } },
      ]
    },
    {
      category: 'Efficiency/Scalability',
      icon: Database,
      items: [
        { id: 'no-recalculation', feature: 'Efficient Metric Calculation/Storage (No Recalculation)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'More efficient metric calculation/storage so we don\'t recalculate metrics. Metrics are calculated once and stored for efficient access.',
          jtbd: 'I need metrics to be available quickly without system overhead from recalculation.',
          benefits: ['Reduced system load and improved performance', 'Faster dashboard load times', 'More scalable for high-volume orgs'],
          technicalDetails: 'Metrics stored once, accessed efficiently without re-computation'
        } },
        { id: 'dc1-support', feature: 'DC1 Support', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
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
        { id: 'ootb-metrics', feature: 'OOTB Metrics from Analytics (STDM/SDM) for Alerting', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Users can add/select any OOTB metrics from STDM/SDM (same data available in Analytics) to trigger Alerts. Ensures consistency between monitoring and reporting.',
          jtbd: 'I want to trigger alerts based on the same standard metrics (STDM/SDM) available in Analytics so my monitoring is consistent with my reporting.',
          acceptanceCriteria: ['Users can add/select any OOTB metrics from the STDM/SDM to trigger an Alert', 'Metrics match exactly what exists in Analytics'],
          userPersona: 'Admin / Agent Builder',
          examples: ['Error Rate', 'Latency', 'Escalation Rate', 'Context Precision', 'Answer Relevancy']
        } },
        { id: 'custom-metrics', feature: 'Custom Metrics for Alerting', beta: false, ga: true, gaRelease: '260', priority: 'P1', details: { 
          description: 'Allow users to add custom metrics for creating alerts tailored to unique business KPIs beyond standard OOTB metrics.',
          jtbd: 'I want to define custom metrics for unique business KPIs and set alerts on them.',
          acceptanceCriteria: ['Allow users to add custom metrics for creating an alert'],
          userPersona: 'Admin / Agent Builder',
          useCase: 'Track business-specific success criteria like First Contact Resolution or Custom Satisfaction Scores'
        } },
      ]
    },
    {
      category: 'Agent & Channel Availability',
      icon: Activity,
      items: [
        { id: 'agent-availability', feature: 'Agent Availability (STDM)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Add Agent Availability metric based on STDM records (e.g., distinguishing between "no traffic" and "unresponsive").',
          jtbd: 'I need to know if my agent is actually up and running.',
          acceptanceCriteria: ['Agent Availability metric based on STDM records'],
          userPersona: 'Admin'
        } },
        { id: 'channel-availability', feature: 'Channel Availability', beta: false, ga: true, gaRelease: '262', priority: 'P0', details: { 
          description: 'Add Channel Availability metrics. See "Agent Availability Metric & Alerting" PRD.',
          jtbd: 'I need to know if specific channels (Voice/Chat) are down.',
          acceptanceCriteria: ['Channel Availability metrics added'],
          userPersona: 'Admin'
        } },
        { id: 'heartbeat', feature: 'Heartbeat Metric (0 Sessions vs System Unresponsive)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'System distinguishes between "0 sessions" (no traffic) and "System Unresponsive" (requests sent but not acknowledged).',
          jtbd: 'I need to know immediately if my agent is completely unresponsive (down) versus just having low traffic, so I can initiate a P0 incident response.',
          acceptanceCriteria: ['Heartbeat Metric distinguishes between "0 sessions" and "System Unresponsive"', 'System tracks handshake responses vs silence'],
          userPersona: 'Admin',
          criticalityReason: 'Prevents false positives during low-traffic periods and ensures real outages are identified immediately'
        } },
        { id: 'downtime-alert', feature: 'Downtime Alert (Agent Unresponsive)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Trigger an alert if agent fails to initiate a session or respond to handshake within x minutes.',
          jtbd: 'I need to be notified immediately when my agent stops responding so I can take action before customers are impacted.',
          acceptanceCriteria: ['Trigger an alert if the agent fails to initiate a session or respond to a handshake within x minutes'],
          sla: 'Alert fires within configured threshold (e.g., 5 minutes of unresponsiveness)'
        } },
        { id: 'status-indicator', feature: 'Dashboard Status Indicator (Online/Offline/Degraded)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
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
        { id: 'email-dl', feature: 'Email Distribution Lists', beta: false, ga: true, gaRelease: '262', priority: 'P0', details: { 
          description: 'Enable an Admin to set up alerts for others via email distribution lists. Option in alert creation flow to send to admin-provided email lists or send to self. P95 delivery < 5 minutes.',
          jtbd: 'When I\'m creating an alert and monitoring agent health, I want to designate a shared email distribution list as the recipient so the whole on-call team is alerted simultaneously without me becoming a bottleneck.',
          acceptanceCriteria: ['Add one or more emails/DLs during alert creation/edit with format validation', 'Users can uncheck self-email to avoid duplicate notifications', 'Email includes metric, agent, threshold vs. observed value, time window, and link to Investigation Page', 'P95 delivery < 5 minutes; failures logged and surfaced to Admin'],
          userPersona: 'Admin / Agent Builder',
          sla: 'P95 < 5 minutes from event detection to email delivery'
        } },
        { id: 'anomaly', feature: 'Anomaly Detection (Unusual Change Detection)', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'ML-based anomaly detection using baseline vs. recent window to detect significant deviations. Catch regressions without hand-tuning thresholds.',
          jtbd: 'I want anomaly-based alerts so I catch regressions without hand-tuning thresholds. I want to know if a spike in latency is normal for my org or if this specific agent is underperforming compared to the average.',
          acceptanceCriteria: ['Users can select anomaly detection alerting instead of custom thresholds', 'Uses baseline vs. recent window to detect significant deviations', 'All other alert features work like threshold alerts (email/slack, cooldown)', 'Visual overlay on charts showing "Org Average" vs "This Agent"', 'Trend indicators showing Week-over-Week (WoW) changes'],
          userPersona: 'Admin / Agent Builder',
          benefits: ['Reduces manual threshold tuning', 'Adapts to seasonal patterns', 'Provides org-wide benchmarking context']
        } },
        { id: 'severity', feature: 'Alert Severity Levels (Critical/Warning/Info)', beta: false, ga: true, gaRelease: '262', priority: 'P2', details: { 
          description: 'Users can assign severity levels to distinguish critical outages from minor warnings and prevent inbox flooding.',
          jtbd: 'I want to distinguish between critical outages and minor warnings, and prevent my inbox from being flooded by the same error across multiple agents.',
          acceptanceCriteria: ['Users can assign "Critical," "Warning," or "Info" levels to alerts'],
          userPersona: 'Admin',
          useCase: 'Prioritize P0 incidents while tracking lower-severity trends'
        } },
        { id: 'slack', feature: 'Slack Channel Alerts', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'Slack message posted to designated channel; P95 delivery < 5 minutes. Integrates into existing team workflow.',
          jtbd: 'When incidents occur, I want alerts posted to a designated Slack channel so we triage in our existing workflow.',
          acceptanceCriteria: ['Users can specify a Slack channel in alert setup', 'Users can still use email if they want', 'Slack message mirrors email fields + deep link', 'P95 delivery < 5 minutes; delivery errors logged with remediation tips'],
          userPersona: 'Admin / Agent Builder',
          benefit: 'Enables real-time collaboration and faster incident response'
        } },
        { id: 'webhook', feature: 'Webhook/API Delivery (PagerDuty, ServiceNow)', beta: false, ga: true, gaRelease: '262', priority: 'P1', details: { 
          description: 'Send POST request with JSON payload (Metric, Agent ID, Threshold, Timestamp, Severity) to incident management systems with retry logic.',
          jtbd: 'I want alerts sent to my incident management system (PagerDuty, ServiceNow) via webhook so we can automate our response workflows.',
          acceptanceCriteria: ['Input field for "Webhook URL" in alert setup', 'System sends POST request with standard JSON payload', 'Includes retry logic (linear or exponential backoff) for failed deliveries'],
          userPersona: 'DevOps / SRE',
          integration: 'PagerDuty, ServiceNow, or any webhook-compatible incident management system'
        } },
        { id: 'cooldown-org', feature: 'Admin Org-level Cooldown Customization', beta: false, ga: true, gaRelease: '264', priority: 'P1', details: { 
          description: 'Allow admin-level cooldown customization for the org. Admin sets global cooldown (15-180 min); identical alerts within cooldown are suppressed but occurrences are recorded.',
          jtbd: 'I want org-wide cooldowns so teams aren\'t spammed by repeat alerts.',
          acceptanceCriteria: ['Admin sets a global cooldown (e.g., 15–180 min)', 'Identical alerts within cooldown are suppressed but occurrences are recorded', 'UI shows active cooldown status and next eligible send time'],
          userPersona: 'Admin',
          benefit: 'Prevents alert fatigue while maintaining visibility into ongoing issues'
        } },
      ]
    },
    {
      category: 'Enhanced Experience',
      icon: List,
      items: [
        { id: 'alerts-section', feature: 'Alerts Section in Sidebar (Detectors/Events Tabs)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Display "Alerts" section in left sidebar with two tabs: Detectors (Config) and Events (Log). Default view is Detectors unless navigating via deep link.',
          jtbd: 'As an Agent Builder, I want a dedicated place to see a history of all alerts.',
          acceptanceCriteria: ['Display "Alerts" section in the left sidebar', 'Structure section with two tabs: Detectors (Config) and Events (Log)', 'Default view is Detectors (unless navigating via deep link)'],
          userPersona: 'Admin / Agent Builder',
          structure: 'Two-tab design separating configuration (Detectors) from execution history (Events)'
        } },
        { id: 'events-tab', feature: 'Events Tab (Alert Log)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Table displaying all alert instances with columns: Alert Name, Timestamp, Status, Metric Name, Severity. Provides complete alert history for investigation.',
          jtbd: 'As an Agent Builder, I want to scan my alerts and understand their status.',
          acceptanceCriteria: ['Display table of alert instances with columns: Alert Name, Timestamp, Status, Metric Name, Severity', 'Default sort is "Most Recent First"/Critical', 'Alert Name is a clickable link triggering Smart Routing'],
          userPersona: 'Admin / Agent Builder'
        } },
        { id: 'events-sort', feature: 'Default Sort: Most Recent First/Critical', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Default sort prioritizes latest and critical alerts for immediate attention.',
          benefit: 'Ensures most urgent alerts are always visible first',
          sortLogic: 'Primary: Severity (Critical > Warning > Info), Secondary: Timestamp (Most Recent First)'
        } },
        { id: 'smart-routing', feature: 'Alert Name Clickable Link (Smart Routing)', beta: false, ga: true, gaRelease: '260', priority: 'P0', details: { 
          description: 'Alert Name is a clickable link that intelligently routes users directly to the relevant Session or Investigation View, bypassing the general dashboard.',
          jtbd: 'I want email notification links and Alert Name clicks to take me directly to the relevant data so I can investigate faster.',
          acceptanceCriteria: ['Alert Name is a clickable link triggering the Smart Routing logic'],
          northStar: 'Time to Investigate (TTI) < 10 seconds from clicking alert to viewing relevant Session Page',
          flow: 'Email Alert → Investigation Page → Session Page (bypasses dashboard)'
        } },
        { id: 'lifecycle', feature: 'Alert Lifecycle Management (New → Acknowledged → Closed)', beta: false, ga: true, gaRelease: '260', priority: 'P2', details: { 
          description: 'Alerts support status states (New → Acknowledged → Closed); users can manually update status in Events table.',
          jtbd: 'As an Agent Builder, I want to track the status of an alert so my team knows what is being investigated.',
          acceptanceCriteria: ['Alerts support status states: "New" → "Acknowledged" → "Closed"', 'Users can manually update the status of an alert in the Events table'],
          userPersona: 'Admin / Agent Builder',
          successMetric: 'Lifecycle Usage: % of alerts that move from "New" → "Acknowledged" (proving teams are using the workflow)'
        } },
        { id: 'metric-bell', feature: 'Metric Page Integration (Red Bell Icon)', beta: false, ga: true, gaRelease: '260', priority: 'P2', details: { 
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
        { id: 'setup-toggle', feature: 'Enablement Toggle in Setup Page', beta: false, ga: true, gaRelease: '262', priority: 'P0', details: { 
          description: 'Include a toggle in the setup page for users to enable health monitoring. (TBD whether we reuse STDM toggle or make a new one).',
          jtbd: 'I want a simple control to turn on Agent Health Monitoring for my organization.',
          acceptanceCriteria: ['Include a toggle in the setup page for users to enable health monitoring (reusing STDM toggle or new one)'],
          userPersona: 'Admin',
          implementation: 'Single toggle control in Setup > Observability section'
        } },
        { id: 'fre', feature: 'First Run Experience (FRE)', beta: true, betaRelease: '258', ga: true, gaRelease: '260', priority: 'P0', details: {
          description: 'In the first run experience (FRE), when a user has not yet enabled the Agent Monitoring toggle, the admin is given instructions on how to enable this, and a link to the Setup page where they can toggle this on.',
          jtbd: 'A Salesforce admin can see instructions on how to enable Monitoring in the FRE.',
          acceptanceCriteria: ['In the first run experience (FRE), when a user has not yet enabled the Agent Monitoring toggle, the admin is given instructions on how to enable this', 'Link to the Setup page where they can toggle this on'],
          userPersona: 'Admin',
          flow: 'Empty State UI → "Enable Health Monitoring" CTA → Setup Page → Toggle Activation'
        } },
      ]
    },
    {
      category: 'Upgrade Path (Tableau Plus)',
      icon: ArrowUpCircle,
      items: [
        { id: 'upgrade-experience', feature: 'In-Product Upgrade Experience', beta: false, ga: true, gaRelease: '264', priority: 'P2', details: { 
          description: 'Product experience for users to upgrade and get Tableau Plus for features such as dashboard customization (adding/removing metrics).',
          jtbd: 'When I need advanced capabilities, I want a clear, in-product path to upgrade so I can unlock them without friction.',
          acceptanceCriteria: ['Gated capabilities (e.g., customization) show inline upgrade prompts'],
          userPersona: 'Admin / Agent Builder',
          gatedFeatures: ['Dashboard customization (add/remove metrics)', 'Advanced analytics', 'Custom visualizations'],
          dependency: 'Tableau Plus license'
        } },
        { id: 'gating', feature: 'Gating for Advanced Capabilities', beta: false, ga: true, gaRelease: '264', priority: 'P2', details: { 
          description: 'All surfaces for these features should highlight an upgrade is required if the user does not have the right license.',
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
        { id: 'agentic-qa', feature: 'Agentic Health Monitoring via Obs Agent', beta: false, ga: true, gaRelease: '266+', priority: 'P1', details: { 
          description: 'Support agentic health monitoring experience where users can ask/debug alerts to understand their monitoring dashboard better. Via Obs Agent. (Tableau)',
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
    let beta = 0
    let ga = 0
    features.forEach(cat => cat.items.forEach(item => {
      if (item.beta) beta++
      if (item.ga) ga++
    }))
    return { beta, ga }
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

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <span className="text-amber-600 font-bold text-sm">β</span>
            </div>
            <span className="font-semibold text-amber-800">Beta (258-260)</span>
          </div>
          <p className="text-3xl font-bold text-amber-900">{counts.beta}</p>
          <p className="text-sm text-amber-700">Features</p>
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
                <th className="text-center p-4 text-sm font-medium w-2/12"><span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded">β Beta</span></th>
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
                        <td className="p-4 text-center">{item.beta ? <div className="flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-amber-500" /><span className="text-xs text-amber-600 ml-1">{item.betaRelease || '258'}</span></div> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}</td>
                        <td className="p-4 text-center">{item.priority && <PriorityBadge priority={item.priority} editable={editMode} onChange={(p) => updateFeaturePriority(categoryIndex, itemIndex, p)} />}</td>
                        <td className="p-4 text-center">{item.ga ? <div className="flex items-center justify-center gap-1"><CheckCircle2 className="w-5 h-5 text-green-500" />{editMode ? <ReleaseBadge release={item.gaRelease || '260'} editable={true} onChange={(r) => updateFeatureRelease(categoryIndex, itemIndex, r)} /> : (item.gaRelease && <span className="text-xs text-gray-400">{item.gaRelease}</span>)}</div> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}</td>
                      </tr>
                      {!editMode && expandedFeature === item.id && item.details && (
                        <tr>
                          <td colSpan={4} className="p-0">
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
