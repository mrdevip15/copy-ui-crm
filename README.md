# Sales CRM — Recreated from crm-salesid.vercel.app

A faithful recreation of the **Sales CRM** web application from [crm-salesid.vercel.app](https://crm-salesid.vercel.app).

## 🚀 Key Features & Modules

- **Authentication / Demo Session**: Pre-configured demo login (`sofia@salescrm.app` / `rapport-demo`) with automatic fallback when Supabase is not configured, plus full session persistence via `localStorage`.
- **Sales Overview**: Live revenue metrics, quarterly quota progress ring, win rate, 6M/12M range toggles, team member breakdown, and recent tasks.
- **Deal Pipeline**: Drag-and-drop Kanban pipeline tracking deals across *Lead*, *Contacted*, *Demo*, *Proposal*, *Negotiation*, *Won*, and *Lost*.
- **Customer Directory & Profiles**: Complete customer directory with detailed interaction timelines, meeting notes, deals, and contact details.
- **Team Schedule**: Calendar scheduler, activity checklist, and follow-up tracking.
- **Finance & Invoicing**: Revenue reporting, invoice status tags, and CSV export capabilities.
- **Growth Reports**: Sales performance charts, conversion rates, and quota attainment reports.
- **Onboarding Projects**: Multi-stage client onboarding trackers with task checklists and completion percentages.
- **Global Finder & Command Palette**: Press `Ctrl+K` or `Cmd+K` anywhere to search contacts, deals, navigation routes, and actions.
- **Interactive Call Logger**: Live phone call timer with log note generation and toast alerts.
- **Dark & Light Themes**: Zero-flash theme system with persistent theme preference in `localStorage`.

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Pure CSS design tokens (`Urbanist` typography, glassmorphism, fluid responsive layouts, micro-animations)
- **Routing**: Client-side hash/history routing with protected route guards
- **Data Architecture**: Self-contained in-memory & `localStorage` synchronized CRM repository

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
The preview will run at `http://localhost:4173`.

---

## 🧪 Automated Route Verification

You can run the end-to-end automated verification script (Puppeteer) with:
```bash
node test_routes.js
```
