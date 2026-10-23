import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from '@tanstack/react-table';

export function TanStackTable({
  data = [],
  columns = [],
  pageSize = 10,
  searchPlaceholder = 'Search records...',
  onRowClick = null,
  emptyMessage = 'No records found.'
}) {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize
      }
    }
  });

  return (
    <div className="tanstack-table-wrapper" style={{ display: 'grid', gap: 12, width: '100%' }}>
      {/* Search Bar & Table Meta */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ position: 'relative', maxWidth: 320, width: '100%' }}>
          <input
            type="search"
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder={searchPlaceholder}
            className="field__input"
            style={{
              padding: '8px 12px',
              fontSize: 13,
              borderRadius: 8,
              width: '100%'
            }}
          />
        </div>
        <div style={{ fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>
            Showing <b>{table.getRowModel().rows.length}</b> of <b>{data.length}</b>
          </span>
          <span style={{
            background: 'var(--well)',
            padding: '2px 8px',
            borderRadius: 99,
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--accent, #3b82f6)'
          }}>
            TanStack Table v8
          </span>
        </div>
      </div>

      {/* Table Container */}
      <div style={{
        overflowX: 'auto',
        borderRadius: 12,
        border: '1px solid var(--line)',
        background: 'var(--glass)',
        backdropFilter: 'blur(16px)'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: 13.5,
          textAlign: 'left'
        }}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} style={{ borderBottom: '1px solid var(--line)' }}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const sortDir = header.column.getIsSorted();
                  return (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      style={{
                        padding: '10px 14px',
                        fontWeight: 600,
                        color: 'var(--muted)',
                        cursor: canSort ? 'pointer' : 'default',
                        userSelect: 'none',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort && (
                          <span style={{ fontSize: 10, opacity: sortDir ? 1 : 0.35 }}>
                            {sortDir === 'asc' ? '▲' : sortDir === 'desc' ? '▼' : '⇅'}
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick && onRowClick(row.original)}
                  style={{
                    borderBottom: '1px solid var(--line)',
                    cursor: onRowClick ? 'pointer' : 'default',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--well)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} style={{ padding: '10px 14px', verticalAlign: 'middle' }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  style={{
                    padding: '32px 16px',
                    textAlign: 'center',
                    color: 'var(--muted)',
                    fontSize: 13
                  }}
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {table.getPageCount() > 1 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 12.5,
          color: 'var(--muted)',
          paddingTop: 4
        }}>
          <div>
            Page <b>{table.getState().pagination.pageIndex + 1}</b> of <b>{table.getPageCount()}</b>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              style={{ padding: '4px 10px', fontSize: 12, borderRadius: 6 }}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              style={{ padding: '4px 10px', fontSize: 12, borderRadius: 6 }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
