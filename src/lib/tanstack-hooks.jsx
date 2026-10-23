import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const WORKSPACE_QUERY_KEY = ['workspace'];
export const CUSTOMERS_QUERY_KEY = ['customers'];
export const DEALS_QUERY_KEY = ['deals'];
export const TASKS_QUERY_KEY = ['tasks'];
export const INVOICES_QUERY_KEY = ['invoices'];
export const PROJECTS_QUERY_KEY = ['projects'];

/**
 * Hook to query the full workspace state via TanStack Query.
 */
export function useWorkspaceQuery(repo) {
  return useQuery({
    queryKey: WORKSPACE_QUERY_KEY,
    queryFn: () => {
      if (!repo) throw new Error('Repository not initialized');
      return repo.snapshot();
    },
    enabled: !!repo
  });
}

/**
 * Hook to query customers list with TanStack Query.
 */
export function useCustomersQuery(repo) {
  return useQuery({
    queryKey: CUSTOMERS_QUERY_KEY,
    queryFn: () => {
      if (!repo) return [];
      return repo.snapshot().customers;
    },
    enabled: !!repo
  });
}

/**
 * Hook to query a single customer by id.
 */
export function useCustomerQuery(repo, customerId) {
  return useQuery({
    queryKey: ['customer', customerId],
    queryFn: () => {
      if (!repo || !customerId) return null;
      const snap = repo.snapshot();
      return snap.customers.find(c => c.id === customerId) || null;
    },
    enabled: !!repo && !!customerId
  });
}

/**
 * Hook to query deals list.
 */
export function useDealsQuery(repo) {
  return useQuery({
    queryKey: DEALS_QUERY_KEY,
    queryFn: () => repo?.snapshot().deals || [],
    enabled: !!repo
  });
}

/**
 * Generic workspace mutation creator with TanStack Query cache invalidation.
 */
export function useWorkspaceMutation(repo, mutationFn) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (variables) => mutationFn(repo, variables),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: WORKSPACE_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: CUSTOMERS_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: DEALS_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: INVOICES_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
    }
  });
}

/**
 * Mutation: Move a deal across Kanban stages.
 */
export function useMoveDealMutation(repo) {
  return useWorkspaceMutation(repo, (r, { dealId, stage, index }) => {
    return r.moveDeal(dealId, stage, index);
  });
}

/**
 * Mutation: Create a new deal.
 */
export function useCreateDealMutation(repo) {
  return useWorkspaceMutation(repo, (r, dealData) => {
    return r.createDeal(dealData);
  });
}

/**
 * Mutation: Create a new customer.
 */
export function useCreateCustomerMutation(repo) {
  return useWorkspaceMutation(repo, (r, customerData) => {
    return r.createCustomer(customerData);
  });
}

/**
 * Mutation: Toggle favorite customer.
 */
export function useToggleFavoriteCustomerMutation(repo) {
  return useWorkspaceMutation(repo, (r, customerId) => {
    return r.toggleFavoriteCustomer(customerId);
  });
}

/**
 * Mutation: Toggle a task completion state.
 */
export function useToggleTaskMutation(repo) {
  return useWorkspaceMutation(repo, (r, taskId) => {
    return r.toggleTask(taskId);
  });
}

/**
 * Mutation: Create a new task.
 */
export function useCreateTaskMutation(repo) {
  return useWorkspaceMutation(repo, (r, taskData) => {
    return r.createTask(taskData);
  });
}

/**
 * Mutation: Mark an invoice paid.
 */
export function useMarkInvoicePaidMutation(repo) {
  return useWorkspaceMutation(repo, (r, invoiceId) => {
    return r.markInvoicePaid(invoiceId);
  });
}

/**
 * Mutation: Create an invoice.
 */
export function useCreateInvoiceMutation(repo) {
  return useWorkspaceMutation(repo, (r, invoiceData) => {
    return r.createInvoice(invoiceData);
  });
}

/**
 * Mutation: Toggle a project checklist step.
 */
export function useToggleProjectStepMutation(repo) {
  return useWorkspaceMutation(repo, (r, { projectId, stepIndex }) => {
    return r.toggleProjectStep(projectId, stepIndex);
  });
}
