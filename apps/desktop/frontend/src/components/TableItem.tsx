import { Table } from "lucide-react";

interface TableData {
    name: string;
    rows: number;
    type: string;
}

interface TableItemProps {
    table: TableData;
    isSelected: boolean;
    onSelect: (table: TableData) => void;
}

export function TableItem({ table, isSelected, onSelect }: TableItemProps) {
    return (
        <div
            className={`flex cursor-pointer items-center gap-2 rounded p-1 pl-6 text-xs transition-colors ${
                isSelected
                    ? "bg-accent/50 text-accent-foreground"
                    : "hover:bg-accent/20 text-muted-foreground"
            }`}
            onClick={() => onSelect(table)}
        >
            <Table className="h-3 w-3" />
            <span className="flex-1 truncate">{table.name}</span>
            <span className="text-muted-foreground/70">{table.rows.toLocaleString()}</span>
        </div>
    );
}
