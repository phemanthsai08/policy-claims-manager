export type ClaimStatus = "Pending" | "In Review" | "Approved" | "Denied" | "At Risk" | "SLA Breach"
export type Priority = "Low" | "Medium" | "High" | "Critical"

export interface Claim {
  id: string
  policyNumber: string
  claimant: string
  type: string
  amount: number
  status: ClaimStatus
  priority: Priority
  filedDate: string
  lastUpdated: string
  assignee: string
  slaDaysLeft: number
}

export interface StatCard {
  title: string
  value: string | number
  change: string
  trend: "up" | "down" | "neutral"
  description: string
}

export const claims: Claim[] = [
  {
    id: "CLM-2026-001",
    policyNumber: "POL-88921",
    claimant: "Aarav Sharma",
    type: "Auto Accident",
    amount: 12500,
    status: "SLA Breach",
    priority: "Critical",
    filedDate: "2026-09-12",
    lastUpdated: "2026-10-10",
    assignee: "Priya Patel",
    slaDaysLeft: -3,
  },
  {
    id: "CLM-2026-002",
    policyNumber: "POL-77410",
    claimant: "Neha Reddy",
    type: "Property Damage",
    amount: 42000,
    status: "At Risk",
    priority: "High",
    filedDate: "2026-09-28",
    lastUpdated: "2026-10-14",
    assignee: "Rahul Mehta",
    slaDaysLeft: 1,
  },
  {
    id: "CLM-2026-003",
    policyNumber: "POL-66103",
    claimant: "Vikram Singh",
    type: "Medical",
    amount: 8700,
    status: "In Review",
    priority: "Medium",
    filedDate: "2026-10-01",
    lastUpdated: "2026-10-15",
    assignee: "Ananya Gupta",
    slaDaysLeft: 5,
  },
  {
    id: "CLM-2026-004",
    policyNumber: "POL-55092",
    claimant: "Sanya Kapoor",
    type: "Theft",
    amount: 15600,
    status: "Pending",
    priority: "High",
    filedDate: "2026-10-05",
    lastUpdated: "2026-10-12",
    assignee: "Priya Patel",
    slaDaysLeft: 4,
  },
  {
    id: "CLM-2026-005",
    policyNumber: "POL-44281",
    claimant: "Arjun Nair",
    type: "Liability",
    amount: 31000,
    status: "Approved",
    priority: "Medium",
    filedDate: "2026-09-18",
    lastUpdated: "2026-10-08",
    assignee: "Rahul Mehta",
    slaDaysLeft: 12,
  },
  {
    id: "CLM-2026-006",
    policyNumber: "POL-33170",
    claimant: "Meera Joshi",
    type: "Auto Accident",
    amount: 9800,
    status: "Denied",
    priority: "Low",
    filedDate: "2026-09-22",
    lastUpdated: "2026-10-09",
    assignee: "Ananya Gupta",
    slaDaysLeft: 8,
  },
  {
    id: "CLM-2026-007",
    policyNumber: "POL-22059",
    claimant: "Karan Malhotra",
    type: "Property Damage",
    amount: 67500,
    status: "In Review",
    priority: "Critical",
    filedDate: "2026-10-08",
    lastUpdated: "2026-10-15",
    assignee: "Priya Patel",
    slaDaysLeft: 2,
  },
  {
    id: "CLM-2026-008",
    policyNumber: "POL-11048",
    claimant: "Ishita Bose",
    type: "Medical",
    amount: 5400,
    status: "Pending",
    priority: "Medium",
    filedDate: "2026-10-11",
    lastUpdated: "2026-10-14",
    assignee: "Rahul Mehta",
    slaDaysLeft: 6,
  },
]

export const stats: StatCard[] = [
  {
    title: "Open Claims",
    value: 48,
    change: "+6%",
    trend: "up",
    description: "vs last month",
  },
  {
    title: "SLA Breaches",
    value: 3,
    change: "-1",
    trend: "down",
    description: "needs immediate attention",
  },
  {
    title: "At Risk Claims",
    value: 7,
    change: "+2",
    trend: "up",
    description: "within 48h of SLA",
  },
  {
    title: "Avg. Resolution",
    value: "4.2d",
    change: "-0.8d",
    trend: "down",
    description: "faster than target",
  },
]

export const claimsByStatus = [
  { name: "Pending", value: 12, fill: "var(--color-pending)" },
  { name: "In Review", value: 18, fill: "var(--color-review)" },
  { name: "Approved", value: 9, fill: "var(--color-approved)" },
  { name: "Denied", value: 4, fill: "var(--color-denied)" },
  { name: "At Risk", value: 7, fill: "var(--color-atrisk)" },
  { name: "SLA Breach", value: 3, fill: "var(--color-breach)" },
]

export const claimsByMonth = [
  { month: "May", claims: 32, amount: 420000 },
  { month: "Jun", claims: 41, amount: 510000 },
  { month: "Jul", claims: 38, amount: 475000 },
  { month: "Aug", claims: 45, amount: 590000 },
  { month: "Sep", claims: 52, amount: 680000 },
  { month: "Oct", claims: 48, amount: 620000 },
]

export function getClaimStatusColor(status: ClaimStatus): string {
  switch (status) {
    case "SLA Breach":
      return "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800"
    case "At Risk":
      return "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
    case "Pending":
      return "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
    case "In Review":
      return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
    case "Approved":
      return "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
    case "Denied":
      return "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function getPriorityColor(priority: Priority): string {
  switch (priority) {
    case "Critical":
      return "bg-rose-500 text-white"
    case "High":
      return "bg-orange-500 text-white"
    case "Medium":
      return "bg-yellow-500 text-yellow-950"
    case "Low":
      return "bg-slate-400 text-white"
    default:
      return "bg-gray-400 text-white"
  }
}
