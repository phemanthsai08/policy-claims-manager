import {
  AlertTriangle,
  Clock,
  FileText,
  TrendingDown,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardCharts } from "@/components/dashboard-charts"
import { ClaimsTable } from "@/components/claims-table"
import { stats } from "@/lib/mock-data"

function StatIcon({ title }: { title: string }) {
  switch (title) {
    case "Open Claims":
      return <FileText className="size-4 text-muted-foreground" />
    case "SLA Breaches":
      return <AlertTriangle className="size-4 text-rose-500" />
    case "At Risk Claims":
      return <Clock className="size-4 text-amber-500" />
    default:
      return <TrendingDown className="size-4 text-muted-foreground" />
  }
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              PC
            </div>
            <span className="font-semibold tracking-tight">
              Policy & Claims Manager
            </span>
          </div>
          <div className="text-xs text-muted-foreground hidden sm:block">
            Dashboard · Live Mock Data
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Claims Overview</h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Monitor open claims, SLA risk, and resolution performance
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <StatIcon title={stat.title} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1 text-xs">
                  {stat.trend === "up" ? (
                    <TrendingUp className="size-3 text-rose-500" />
                  ) : (
                    <TrendingDown className="size-3 text-emerald-500" />
                  )}
                  <span
                    className={
                      stat.trend === "up" &&
                      (stat.title === "SLA Breaches" ||
                        stat.title === "At Risk Claims" ||
                        stat.title === "Open Claims")
                        ? "text-rose-600"
                        : "text-emerald-600"
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <DashboardCharts />
        <ClaimsTable />
      </main>
    </div>
  )
}
