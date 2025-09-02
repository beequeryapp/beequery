import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState
} from "@tanstack/react-table";
import { Search, ChevronUp, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

interface ContentTabProps {
    data: Record<string, any>[];
}

// Helper function to create columns dynamically from data
function createColumnsFromData(data: Record<string, any>[]): ColumnDef<Record<string, any>>[] {
    if (!data || data.length === 0) return [];

    const sampleRow = data[0];
    const keys = Object.keys(sampleRow);

    return keys.map((key) => ({
        accessorKey: key,
        header: ({ column, table }) => {
            const handleSort = () => {
                const currentSort = column.getIsSorted();

                if (currentSort === false) {
                    // Currently unsorted -> sort ascending (clear all other sorts first)
                    table.resetSorting();
                    column.toggleSorting(false);
                } else if (currentSort === "asc") {
                    // Currently ascending -> sort descending
                    column.toggleSorting(true);
                } else {
                    // Currently descending -> clear sort
                    column.clearSorting();
                }
            };

            const sortState = column.getIsSorted();

            return (
                <Button
                    variant="ghost"
                    onClick={handleSort}
                    className="h-auto p-0 font-medium hover:bg-transparent flex items-center gap-1"
                >
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}
                    {sortState === "asc" && <ChevronUp className="h-3 w-3" />}
                    {sortState === "desc" && <ChevronDown className="h-3 w-3" />}
                </Button>
            );
        },
        cell: ({ row }) => {
            const value = row.getValue(key);

            // Handle different data types
            if (value === null || value === undefined) {
                return <div className="text-muted-foreground">—</div>;
            }

            if (typeof value === "boolean") {
                return (
                    <span
                        className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                            value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                    >
                        {value ? "Yes" : "No"}
                    </span>
                );
            }

            if (typeof value === "number") {
                return <div className="font-mono">{value.toLocaleString()}</div>;
            }

            if (typeof value === "string") {
                // Check if it looks like a date
                if (value.match(/^\d{4}-\d{2}-\d{2}/) || value.match(/^\d{2}\/\d{2}\/\d{4}/)) {
                    return <div className="font-mono text-muted-foreground">{value}</div>;
                }

                // Check if it looks like an email
                if (value.includes("@") && value.includes(".")) {
                    return <div className="text-muted-foreground">{value}</div>;
                }

                // Check for common status-like values
                if (
                    ["active", "inactive", "pending", "success", "failed", "processing"].includes(
                        value.toLowerCase()
                    )
                ) {
                    return (
                        <span
                            className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                                value.toLowerCase() === "active" ||
                                value.toLowerCase() === "success"
                                    ? "bg-green-100 text-green-800"
                                    : value.toLowerCase() === "inactive" ||
                                      value.toLowerCase() === "failed"
                                    ? "bg-destructive/20 text-destructive"
                                    : "bg-secondary text-secondary-foreground"
                            }`}
                        >
                            {value}
                        </span>
                    );
                }

                return <div>{value}</div>;
            }

            // Fallback for other types
            return <div>{String(value)}</div>;
        }
    }));
}

export function ContentTab({ data }: ContentTabProps) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [globalFilter, setGlobalFilter] = React.useState("");
    const [selectedRowData, setSelectedRowData] = React.useState<Record<string, any> | null>(null);

    // Generate columns dynamically from data
    const columns = React.useMemo(() => createColumnsFromData(data), [data]);

    const handleRowClick = (rowData: Record<string, any>) => {
        setSelectedRowData(rowData);
    };

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: "includesString",
        enableMultiSort: false, // Only allow sorting one column at a time
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter
        }
    });

    return (
        <div className="h-screen flex">
            {/* Main Content */}
            <div
                className={`flex flex-col ${
                    selectedRowData ? "flex-1" : "w-full"
                } transition-all duration-200`}
            >
                <div className="border-b border-border p-2 bg-muted flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <Search className="h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search all columns..."
                            value={globalFilter ?? ""}
                            onChange={(event) => setGlobalFilter(event.target.value)}
                            className="flex-1 h-7 text-xs border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-auto min-h-0">
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column.columnDef.header,
                                                              header.getContext()
                                                          )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                            className={`cursor-pointer transition-colors ${
                                                selectedRowData &&
                                                JSON.stringify(selectedRowData) ===
                                                    JSON.stringify(row.original)
                                                    ? "bg-accent/50"
                                                    : ""
                                            }`}
                                            onClick={() => handleRowClick(row.original)}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div className="flex items-center justify-end space-x-2 p-4 border-t border-border flex-shrink-0">
                    <div className="flex-1 text-sm text-muted-foreground">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) total.
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            {selectedRowData && (
                <div className="w-80 border-l border-border bg-card flex flex-col h-full">
                    <div className="p-4 border-b border-border flex-shrink-0">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Row Details</h3>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedRowData(null)}
                                className="h-6 w-6 p-0"
                            >
                                ×
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                            Detailed view of the selected row data
                        </p>
                    </div>

                    <ScrollArea className="flex-1 p-4 min-h-0">
                        <div className="space-y-4">
                            {Object.entries(selectedRowData).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="grid grid-cols-3 gap-4 py-2 border-b border-border last:border-b-0"
                                >
                                    <div className="font-medium text-sm text-muted-foreground">
                                        {key.charAt(0).toUpperCase() +
                                            key.slice(1).replace(/_/g, " ")}
                                    </div>
                                    <div className="col-span-2 text-sm">
                                        {value === null || value === undefined ? (
                                            <span className="text-muted-foreground italic">—</span>
                                        ) : typeof value === "boolean" ? (
                                            <span
                                                className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                                                    value
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                            >
                                                {value ? "Yes" : "No"}
                                            </span>
                                        ) : typeof value === "number" ? (
                                            <span className="font-mono">
                                                {value.toLocaleString()}
                                            </span>
                                        ) : typeof value === "string" &&
                                          [
                                              "active",
                                              "inactive",
                                              "pending",
                                              "success",
                                              "failed",
                                              "processing"
                                          ].includes(value.toLowerCase()) ? (
                                            <span
                                                className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                                                    value.toLowerCase() === "active" ||
                                                    value.toLowerCase() === "success"
                                                        ? "bg-green-100 text-green-800"
                                                        : value.toLowerCase() === "inactive" ||
                                                          value.toLowerCase() === "failed"
                                                        ? "bg-destructive/20 text-destructive"
                                                        : "bg-secondary text-secondary-foreground"
                                                }`}
                                            >
                                                {value}
                                            </span>
                                        ) : (
                                            <span
                                                className={
                                                    typeof value === "string" &&
                                                    value.match(/^\d{4}-\d{2}-\d{2}/)
                                                        ? "font-mono"
                                                        : typeof value === "string" &&
                                                          value.includes("@") &&
                                                          value.includes(".")
                                                        ? "text-muted-foreground"
                                                        : ""
                                                }
                                            >
                                                {String(value)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            )}
        </div>
    );
}
