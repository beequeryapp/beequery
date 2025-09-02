import { Filter, Download, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentTab } from "./ContentTab";
import { StructureTab } from "./StructureTab";
import { QueryTab } from "./QueryTab";

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
        <div className="flex-1 flex flex-col bg-background">
            <div className="border-b border-border bg-card">
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-medium">{selectedConnection.name}</span>
                            <span className="text-muted-foreground/50">/</span>
                            <span className="font-medium">{selectedTable.name}</span>
                        </div>
                        <Badge
                            variant="secondary"
                            className="text-xs bg-muted text-muted-foreground"
                        >
                            {selectedTable.rows.toLocaleString()} rows
                        </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="text-xs">
                            <Filter className="h-3 w-3 mr-1" />
                            Filter
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            Export
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                            <RefreshCw className="h-3 w-3 mr-1" />
                            Refresh
                        </Button>
                    </div>
                </div>

                <Tabs defaultValue="content" className="w-full justify-center items-center ">
                    <TabsList className="w-[98%]">
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="structure">Structure</TabsTrigger>
                        <TabsTrigger value="query">Query</TabsTrigger>
                    </TabsList>

                    <TabsContent value="content" className="flex-1 m-0 p-0 w-full">
                        <ContentTab data={data} />
                    </TabsContent>

                    <TabsContent value="structure" className="flex-1 m-0 p-4 w-full">
                        <StructureTab />
                    </TabsContent>

                    <TabsContent value="query" className="flex-1 m-0 p-4 w-full">
                        <QueryTab query={query} onQueryChange={onQueryChange} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
