import { ChevronDown, Server } from "lucide-react";

interface Connection {
    id: number;
    name: string;
    type: string;
    status: string;
    host: string;
}

interface ConnectionItemProps {
    connection: Connection;
    isSelected: boolean;
    onSelect: (connection: Connection) => void;
    children?: React.ReactNode;
}

export function ConnectionItem({
    connection,
    isSelected,
    onSelect,
    children
}: ConnectionItemProps) {
    return (
        <div className="mb-1">
            <div
                className={`flex cursor-pointer items-center gap-2 rounded p-2 text-sm transition-colors ${
                    isSelected
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent/50 text-card-foreground"
                }`}
                onClick={() => onSelect(connection)}
            >
                <ChevronDown className="h-3 w-3" />
                <Server className="text-muted-foreground h-4 w-4" />
                <div className="min-w-0 flex-1">
                    <div className="truncate font-medium">{connection.name}</div>
                    <div className="text-muted-foreground truncate text-xs">{connection.host}</div>
                </div>
                <div
                    className={`h-2 w-2 rounded-full ${
                        connection.status === "connected" ? "bg-green-500" : "bg-destructive"
                    }`}
                />
            </div>
            {isSelected && children}
        </div>
    );
}
