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
                className={`flex items-center gap-2 p-2 rounded text-sm cursor-pointer transition-colors ${
                    isSelected
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent/50 text-card-foreground"
                }`}
                onClick={() => onSelect(connection)}
            >
                <ChevronDown className="h-3 w-3" />
                <Server className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{connection.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{connection.host}</div>
                </div>
                <div
                    className={`w-2 h-2 rounded-full ${
                        connection.status === "connected" ? "bg-green-500" : "bg-destructive"
                    }`}
                />
            </div>
            {isSelected && children}
        </div>
    );
}
