import React from 'react';
import { TanStackTable } from './TanStackTable';

export function TanStackInvoicesTable({ invoices = [], customers = [], onMarkPaid }) {
  const customerMap = React.useMemo(() => {
    const map = new Map();
    customers.forEach(c => map.set(c.id, c));
    return map;
  }, [customers]);

  const columns = React.useMemo(() => [
    {
      accessorKey: 'number',
      header: 'Invoice #',
      cell: ({ getValue }) => (
        <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{getValue()}</span>
      )
    },
    {
      id: 'customer',
      header: 'Customer / Company',
      accessorFn: (row) => {
        const c = customerMap.get(row.customerId);
        return c ? `${c.name} (${c.company})` : '—';
      },
      cell: ({ row }) => {
        const c = customerMap.get(row.original.customerId);
        return c ? (
          <div style={{ display: 'grid' }}>
            <span style={{ fontWeight: 600, color: 'var(--text)' }}>{c.name}</span>
            <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>{c.company}</span>
          </div>
        ) : (
          <span style={{ color: 'var(--muted)' }}>—</span>
        );
      }
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ getValue }) => (
        <span style={{ fontWeight: 700, color: 'var(--text)' }}>
          ${Number(getValue() || 0).toLocaleString()}
        </span>
      )
    },
    {
      accessorKey: 'issuedAt',
      header: 'Issued',
      cell: ({ getValue }) => {
        const val = getValue();
        return <span style={{ color: 'var(--muted)', fontSize: 12.5 }}>{val ? new Date(val).toLocaleDateString() : '—'}</span>;
      }
    },
    {
      accessorKey: 'dueAt',
      header: 'Due',
      cell: ({ getValue }) => {
        const val = getValue();
        return <span style={{ color: 'var(--muted)', fontSize: 12.5 }}>{val ? new Date(val).toLocaleDateString() : '—'}</span>;
      }
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ getValue }) => {
        const status = getValue();
        const isPaid = status === 'paid';
        const isPending = status === 'pending';
        return (
          <span style={{
            padding: '3px 8px',
            borderRadius: 6,
            fontSize: 11.5,
            fontWeight: 600,
            background: isPaid ? 'rgba(16, 185, 129, 0.15)' : isPending ? 'rgba(245, 158, 11, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            color: isPaid ? '#10b981' : isPending ? '#f59e0b' : '#ef4444',
            textTransform: 'uppercase'
          }}>
            {status}
          </span>
        );
      }
    },
    {
      id: 'actions',
      header: '',
      enableSorting: false,
      cell: ({ row }) => {
        const inv = row.original;
        if (inv.status === 'paid') {
          return <span style={{ fontSize: 12, color: 'var(--muted)' }}>Settled ✓</span>;
        }
        return (
          <button
            type="button"
            className="btn btn--ghost"
            style={{ padding: '3px 8px', fontSize: 11.5 }}
            onClick={(e) => {
              e.stopPropagation();
              onMarkPaid && onMarkPaid(inv.id);
            }}
          >
            Mark Paid
          </button>
        );
      }
    }
  ], [customerMap, onMarkPaid]);

  return (
    <TanStackTable
      data={invoices}
      columns={columns}
      pageSize={8}
      searchPlaceholder="Filter invoices by number, customer, status..."
    />
  );
}
