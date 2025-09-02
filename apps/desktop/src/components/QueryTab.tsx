import { Play, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QueryTabProps {
    query: string;
    onQueryChange: (query: string) => void;
}

export function QueryTab({ query, onQueryChange }: QueryTabProps) {
    return (
        <div className="h-full flex flex-col gap-4">
            <Card className="flex-1">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle>SQL Query Editor</CardTitle>
                        <Button>
                            <Play className="h-4 w-4 mr-2" />
                            Execute Query
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <textarea
                        value={query}
                        onChange={(e) => onQueryChange(e.target.value)}
                        className="w-full h-32 p-3 border rounded-md font-mono text-sm bg-input resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Enter your SQL query here..."
                    />
                </CardContent>
            </Card>

            <Card className="flex-1">
                <CardHeader>
                    <CardTitle>Query Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-muted-foreground py-8">
                        <Database className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Execute a query to see results here</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
