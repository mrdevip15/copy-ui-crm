# Sales CRM — Modern TanStack Webapp

A modern recreation of the [crm-salesid.vercel.app](https://crm-salesid.vercel.app) Sales CRM, refactored into a **Modern TanStack Web Application**.

---

## ⚡ Modern TanStack Architecture

This frontend is powered by the **TanStack Ecosystem**:

1. **TanStack Query v5 (`@tanstack/react-query`)**:
   - **Central Query Client**: Configured in [`src/lib/queryClient.js`](src/lib/queryClient.js) with 5-minute stale-time and 30-minute garbage collection.
   - **Query Cache Invalidation & Reactivity**: The workspace state is managed as a reactive TanStack Query entity under `['workspace']`.
   - **Dedicated Hooks**: Exposed in [`src/lib/tanstack-hooks.jsx`](src/lib/tanstack-hooks.jsx):
     - `useWorkspaceQuery()` — Root workspace state.
     - `useCustomersQuery()` & `useCustomerQuery(id)` — Customer records and individual profile detail.
     - `useDealsQuery()` — Active deals.
     - Mutation hooks (`useMoveDealMutation`, `useCreateCustomerMutation`, `useToggleTaskMutation`, etc.) with automatic cache invalidation.
   - **React Query Devtools**: Bundled via `@tanstack/react-query-devtools` for inspecting queries, mutations, cache lifecycles, and network states.

2. **TanStack Table v8 (`@tanstack/react-table`)**:
   - Headless table engine implemented in [`src/components/TanStackTable.jsx`](src/components/TanStackTable.jsx):
     - Interactive multi-column sorting (▲ / ▼ indicators).
     - Live global text search and filtering.
     - Pagination controls with page indicator.
   - Dedicated CRM tables:
     - [`src/components/TanStackCustomersTable.jsx`](src/components/TanStackCustomersTable.jsx) for the customer directory.
     - [`src/components/TanStackInvoicesTable.jsx`](src/components/TanStackInvoicesTable.jsx) for revenue and invoicing.

3. **TanStack Router (`@tanstack/react-router`)**:
   - Type-safe, modular routing defined in [`src/router.jsx`](src/router.jsx) with routes:
     - `/signin` — Auth guard and demo login.
     - `/overview` — Sales overview dashboard, metrics, and charts.
     - `/pipeline` — Kanban deal board with drag-and-drop.
     - `/customers` & `/customers/$id` — Customer directory and interaction timeline.
     - `/schedule` — Team agenda and task checklist.
     - `/finance` — Invoicing and revenue tracking.
     - `/growth` — Growth performance reports.
     - `/projects` — Client onboarding project steps.
     - `/settings` — Workspace preferences and audit logs.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Accessible at [http://localhost:3000](http://localhost:3000).

### 3. Build Production Bundle
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
Accessible at [http://localhost:4173](http://localhost:4173).

### 5. Automated Verification
```bash
node test_routes.js
```

---

## 🔑 Demo Login (Pre-filled)
- **Email**: `sofia@salescrm.app`
- **Password**: `rapport-demo`
