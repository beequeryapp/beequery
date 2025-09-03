import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Filter, RefreshCw } from "lucide-react";
import { ContentTab } from "./ContentTab";
import { QueryTab } from "./QueryTab";
import { StructureTab } from "./StructureTab";

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

interface DataRow {
    id: number;
    name: string;
    email: string;
    created_at: string;
    status: string;
}

interface MainContentProps {
    selectedConnection: Connection;
    selectedTable: TableData;
    data: DataRow[];
    query: string;
    onQueryChange: (query: string) => void;
}

export function MainContent({
    selectedConnection,
    selectedTable,
    data,
    query,
    onQueryChange
}: MainContentProps) {
    return (
        <div className="bg-background flex flex-1 flex-col">
            <div className="border-border bg-card border-b">
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-3">
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                            <span className="font-medium">{selectedConnection.name}</span>
                            <span className="text-muted-foreground/50">/</span>
                            <span className="font-medium">{selectedTable.name}</span>
                        </div>
                        <Badge
                            variant="secondary"
                            className="bg-muted text-muted-foreground text-xs"
                        >
                            {selectedTable.rows.toLocaleString()} rows
                        </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="text-xs">
                            <Filter className="mr-1 h-3 w-3" />
                            Filter
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                            <Download className="mr-1 h-3 w-3" />
                            Export
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                            <RefreshCw className="mr-1 h-3 w-3" />
                            Refresh
                        </Button>
                    </div>
                </div>

                <Tabs defaultValue="content" className="w-full items-center justify-center">
                    <TabsList className="w-[98%]">
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="structure">Structure</TabsTrigger>
                        <TabsTrigger value="query">Query</TabsTrigger>
                    </TabsList>

                    <TabsContent value="content" className="m-0 w-full flex-1 p-0">
                        <ContentTab data={data} />
                    </TabsContent>

                    <TabsContent value="structure" className="m-0 w-full flex-1 p-4">
                        <StructureTab />
                    </TabsContent>

                    <TabsContent value="query" className="m-0 w-full flex-1 p-4">
                        <QueryTab query={query} onQueryChange={onQueryChange} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
