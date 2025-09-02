import { Database, Plus, Settings, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ConnectionItem } from "./ConnectionItem";
import { TableItem } from "./TableItem";

interface Connection {
    id: number;
    name: string;
    type: string;
    status: string;
    host: string;
}

interface TableData {
    name: string;
    rows: number;
    type: string;
}

interface SidebarProps {
    connections: Connection[];
    tables: TableData[];
    selectedConnection: Connection;
    selectedTable: TableData;
    onConnectionSelect: (connection: Connection) => void;
    onTableSelect: (table: TableData) => void;
}

export function Sidebar({
    connections,
    tables,
    selectedConnection,
    selectedTable,
    onConnectionSelect,
    onTableSelect
}: SidebarProps) {
    return (
        <div className="w-64 border-r border-border bg-card flex flex-col">
            <ScrollArea className="flex-1">
                <div className="p-2">
                    {connections.map((conn) => (
                        <ConnectionItem
                            key={conn.id}
                            connection={conn}
                            isSelected={selectedConnection.id === conn.id}
                            onSelect={onConnectionSelect}
                        >
                            <div className="ml-6 mt-1 space-y-1">
                                <div className="flex items-center gap-2 p-1 text-xs text-muted-foreground">
                                    <FolderOpen className="h-3 w-3" />
                                    <span>Tables ({tables.length})</span>
                                </div>
                                {tables.map((table) => (
                                    <TableItem
                                        key={table.name}
                                        table={table}
                                        isSelected={selectedTable.name === table.name}
                                        onSelect={onTableSelect}
                                    />
                                ))}
                            </div>
                        </ConnectionItem>
                    ))}
                </div>
            </ScrollArea>

            <div className="p-2 border-t border-border">
                <Button className="w-full" variant="secondary">
                    <Plus className="h-4 w-4 mr-2" />
                    New Connection
                </Button>
            </div>
        </div>
    );
}
