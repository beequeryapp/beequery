import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StructureTab() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Table Structure</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="border rounded-md">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="text-left p-3 font-medium">Column</th>
                                    <th className="text-left p-3 font-medium">Type</th>
                                    <th className="text-left p-3 font-medium">Null</th>
                                    <th className="text-left p-3 font-medium">Key</th>
                                    <th className="text-left p-3 font-medium">Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-3 font-mono">id</td>
                                    <td className="p-3">INTEGER</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">
                                        <Badge variant="outline">PRI</Badge>
                                    </td>
                                    <td className="p-3 text-muted-foreground">AUTO_INCREMENT</td>
                                </tr>
                                <tr className="border-t bg-muted/30">
                                    <td className="p-3 font-mono">name</td>
                                    <td className="p-3">VARCHAR(255)</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">-</td>
                                    <td className="p-3 text-muted-foreground">NULL</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-mono">email</td>
                                    <td className="p-3">VARCHAR(255)</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">
                                        <Badge variant="outline">UNI</Badge>
                                    </td>
                                    <td className="p-3 text-muted-foreground">NULL</td>
                                </tr>
                                <tr className="border-t bg-muted/30">
                                    <td className="p-3 font-mono">created_at</td>
                                    <td className="p-3">TIMESTAMP</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">-</td>
                                    <td className="p-3 text-muted-foreground">CURRENT_TIMESTAMP</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-mono">status</td>
                                    <td className="p-3">ENUM</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">-</td>
                                    <td className="p-3 text-muted-foreground">'active'</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
