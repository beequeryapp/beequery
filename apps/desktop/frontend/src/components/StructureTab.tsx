import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StructureTab() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Table Structure</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="rounded-md border">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="p-3 text-left font-medium">Column</th>
                                    <th className="p-3 text-left font-medium">Type</th>
                                    <th className="p-3 text-left font-medium">Null</th>
                                    <th className="p-3 text-left font-medium">Key</th>
                                    <th className="p-3 text-left font-medium">Default</th>
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
                                    <td className="text-muted-foreground p-3">AUTO_INCREMENT</td>
                                </tr>
                                <tr className="bg-muted/30 border-t">
                                    <td className="p-3 font-mono">name</td>
                                    <td className="p-3">VARCHAR(255)</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">-</td>
                                    <td className="text-muted-foreground p-3">NULL</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-mono">email</td>
                                    <td className="p-3">VARCHAR(255)</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">
                                        <Badge variant="outline">UNI</Badge>
                                    </td>
                                    <td className="text-muted-foreground p-3">NULL</td>
                                </tr>
                                <tr className="bg-muted/30 border-t">
                                    <td className="p-3 font-mono">created_at</td>
                                    <td className="p-3">TIMESTAMP</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">-</td>
                                    <td className="text-muted-foreground p-3">CURRENT_TIMESTAMP</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3 font-mono">status</td>
                                    <td className="p-3">ENUM</td>
                                    <td className="p-3">NO</td>
                                    <td className="p-3">-</td>
                                    <td className="text-muted-foreground p-3">'active'</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
