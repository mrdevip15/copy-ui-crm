import React from 'react';
import {
  createRouter,
  createRoute,
  createRootRoute,
  createHashHistory,
  Outlet
} from '@tanstack/react-router';

/**
 * Modern TanStack Router configuration.
 * Maps all Sales CRM routes to their corresponding views.
 */

// Root layout route
export const rootRoute = createRootRoute({
  component: () => <Outlet />
});

// Route: /
export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => null // Redirects to /overview
});

// Route: /signin
export const signinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signin',
  component: () => null
});

// Route: /overview
export const overviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/overview',
  component: () => null
});

// Route: /pipeline
export const pipelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pipeline',
  component: () => null
});

// Route: /customers
export const customersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/customers',
  component: () => null
});

// Route: /customers/$id
export const customerDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/customers/$id',
  component: () => null
});

// Route: /schedule
export const scheduleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/schedule',
  component: () => null
});

// Route: /finance
export const financeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/finance',
  component: () => null
});

// Route: /growth
export const growthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/growth',
  component: () => null
});

// Route: /projects
export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: () => null
});

// Route: /settings
export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: () => null
});

// Build Route Tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  signinRoute,
  overviewRoute,
  pipelineRoute,
  customersRoute,
  customerDetailRoute,
  scheduleRoute,
  financeRoute,
  growthRoute,
  projectsRoute,
  settingsRoute
]);

// Factory to initialize TanStack Router instance
export function createTanStackRouter() {
  return createRouter({
    routeTree,
    history: typeof window !== 'undefined' ? createHashHistory() : undefined,
    defaultPreload: 'intent'
  });
}
