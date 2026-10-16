# Policy & Claims Manager

A modern Next.js dashboard for managing insurance policies and claims. Built with the App Router, Tailwind CSS, Recharts, and shadcn-style UI components.

## Features

- **Claims Overview Dashboard** — stats for open claims, SLA breaches, and at-risk items
- **Interactive Charts** — status distribution (pie) and monthly volume (bar)
- **Claims Table** — priority badges, SLA countdown, and assignee
- **QA Debug Overlay** — floating panel (bug icon, bottom-right) showing mount status and known issues
- **Responsive** — clean visual hierarchy with semantic colors for critical items

## Tech Stack

- **Next.js 16** (App Router + React Server Components)
- **React 19** + TypeScript
- **Tailwind CSS 4**
- **Recharts** for visualizations
- **Lucide React** icons
- Mock data layer (ready to swap for real API / Server Actions)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Main dashboard
├── components/
│   ├── ui/               # Card, Badge, Button
│   ├── dashboard-charts.tsx
│   ├── claims-table.tsx
│   └── qa-debug-panel.tsx
└── lib/
    ├── mock-data.ts
    └── utils.ts
```

## Next Steps (Production Readiness)

1. Replace `mock-data.ts` with real data fetching
2. Add authentication (NextAuth.js / Clerk)
3. Add form validation (Zod) and claim flows
4. Introduce unit + e2e tests

## License

Private / educational use.
