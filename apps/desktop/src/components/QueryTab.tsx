import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Play } from "lucide-react";

interface QueryTabProps {
    query: string;
    onQueryChange: (query: string) => void;
}

export function QueryTab({ query, onQueryChange }: QueryTabProps) {
    return (
        <div className="flex h-full flex-col gap-4">
            <Card className="flex-1">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle>SQL Query Editor</CardTitle>
                        <Button>
                            <Play className="mr-2 h-4 w-4" />
                            Execute Query
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <textarea
                        value={query}
                        onChange={(e) => onQueryChange(e.target.value)}
                        className="bg-input focus:ring-ring h-32 w-full resize-none rounded-md border p-3 font-mono text-sm focus:ring-2 focus:outline-none"
                        placeholder="Enter your SQL query here..."
                    />
                </CardContent>
            </Card>

            <Card className="flex-1">
                <CardHeader>
                    <CardTitle>Query Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-muted-foreground py-8 text-center">
                        <Database className="mx-auto mb-4 h-12 w-12 opacity-50" />
                        <p>Execute a query to see results here</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
