"use client"

import { useEffect, useState } from "react"
import { Bug, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function QADebugPanel() {
  const [open, setOpen] = useState(false)
  const [mountTime, setMountTime] = useState<string>("—")
  const [renderStatus, setRenderStatus] = useState("Initializing…")

  useEffect(() => {
    setMountTime(new Date().toLocaleTimeString())
    setRenderStatus("OK — UI mounted")
  }, [])

  return (
    <>
      <Button
        size="icon"
        variant="outline"
        className="fixed bottom-5 right-5 z-50 size-11 rounded-full shadow-lg border-2"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle QA Debug Panel"
      >
        {open ? <X className="size-5" /> : <Bug className="size-5" />}
      </Button>

      {open && (
        <Card className="fixed bottom-20 right-5 z-50 w-80 shadow-2xl border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Bug className="size-4" />
              QA & Debug Overlay
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">UI Status</span>
              <span className="font-medium text-emerald-600">{renderStatus}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Mount Time</span>
              <span className="font-mono text-xs">{mountTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Env</span>
              <span className="font-mono text-xs">
                {process.env.NODE_ENV ?? "development"}
              </span>
            </div>
            <div className="border-t pt-2 space-y-1">
              <p className="text-xs font-medium text-muted-foreground">Known Issues</p>
              <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                <li>Data is mocked (no live API)</li>
                <li>No authentication layer</li>
                <li>No automated tests yet</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
