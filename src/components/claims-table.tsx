import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  claims,
  getClaimStatusColor,
  getPriorityColor,
} from "@/lib/mock-data"
import { formatCurrency } from "@/lib/utils"

export function ClaimsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Claims</CardTitle>
        <CardDescription>
          Latest claims requiring attention — sorted by priority and SLA risk
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-muted-foreground">
              <th className="pb-3 pr-4 font-medium">Claim ID</th>
              <th className="pb-3 pr-4 font-medium">Claimant</th>
              <th className="pb-3 pr-4 font-medium">Type</th>
              <th className="pb-3 pr-4 font-medium">Amount</th>
              <th className="pb-3 pr-4 font-medium">Status</th>
              <th className="pb-3 pr-4 font-medium">Priority</th>
              <th className="pb-3 pr-4 font-medium">SLA</th>
              <th className="pb-3 font-medium">Assignee</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr
                key={claim.id}
                className="border-b last:border-0 hover:bg-muted/40 transition-colors"
              >
                <td className={"py-3 pr-4 font-mono text-xs"}>{claim.id}</td>
                <td className="py-3 pr-4">
                  <div className={"font-medium"}>{claim.claimant}</div>
                  <div className="text-xs text-muted-foreground">
                    {claim.policyNumber}
                  </div>
                </td>
                <td className={"py-3 pr-4"}>{claim.type}</td>
                <td className="py-3 pr-4 font-medium">
                  {formatCurrency(claim.amount)}
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${getClaimStatusColor(
                      claim.status
                    )}`}
                  >
                    {claim.status}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <Badge
                    className={`${getPriorityColor(claim.priority)} border-0`}
                  >
                    {claim.priority}
                  </Badge>
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={
                      claim.slaDaysLeft < 0
                        ? "text-rose-600 font-semibold"
                        : claim.slaDaysLeft <= 2
                          ? "text-amber-600 font-medium"
                          : "text-muted-foreground"
                    }
                  >
                    {claim.slaDaysLeft < 0
                      ? `${Math.abs(claim.slaDaysLeft)}d overdue`
                      : `${claim.slaDaysLeft}d left`}
                  </span>
                </td>
                <td className={"py-3 text-muted-foreground"}>{claim.assignee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
