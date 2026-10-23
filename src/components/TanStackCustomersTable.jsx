import React from 'react';
import { TanStackTable } from './TanStackTable';

export function TanStackCustomersTable({ customers = [], onSelectCustomer }) {
  const columns = React.useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Customer',
      cell: ({ row }) => {
        const c = row.original;
        const initials = `${c.first?.[0] || ''}${c.last?.[0] || ''}`.toUpperCase() || 'U';
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'var(--well)',
              border: '1px solid var(--line)',
              display: 'inline-grid',
              placeItems: 'center',
              fontWeight: 700,
              fontSize: 12,
              color: 'var(--text)'
            }}>
              {initials}
            </span>
            <div style={{ display: 'grid' }}>
              <span style={{ fontWeight: 600, color: 'var(--text)' }}>{c.name}</span>
              <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>{c.email}</span>
            </div>
          </div>
        );
      }
    },
    {
      accessorKey: 'company',
      header: 'Company',
      cell: ({ getValue }) => (
        <span style={{ fontWeight: 500, color: 'var(--text)' }}>{getValue() || '—'}</span>
      )
    },
    {
      accessorKey: 'jobRole',
      header: 'Role',
      cell: ({ getValue }) => (
        <span style={{ color: 'var(--muted)', fontSize: 12.5 }}>{getValue() || '—'}</span>
      )
    },
    {
      accessorKey: 'city',
      header: 'Location',
      cell: ({ getValue }) => (
        <span style={{ color: 'var(--muted)', fontSize: 12.5 }}>{getValue() || '—'}</span>
      )
    },
    {
      accessorKey: 'health',
      header: 'Health',
      cell: ({ getValue }) => {
        const h = getValue();
        const color = h === 'green' ? '#10b981' : h === 'amber' ? '#f59e0b' : '#ef4444';
        return (
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            textTransform: 'capitalize'
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
            {h || 'Active'}
          </span>
        );
      }
    },
    {
      id: 'actions',
      header: '',
      enableSorting: false,
      cell: ({ row }) => (
        <button
          type="button"
          className="btn btn--ghost"
          style={{ padding: '4px 10px', fontSize: 12 }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectCustomer(row.original.id);
          }}
        >
          View Profile →
        </button>
      )
    }
  ], [onSelectCustomer]);

  return (
    <TanStackTable
      data={customers}
      columns={columns}
      pageSize={8}
      searchPlaceholder="Filter customers by name, company, role..."
      onRowClick={(row) => onSelectCustomer(row.id)}
    />
  );
}
