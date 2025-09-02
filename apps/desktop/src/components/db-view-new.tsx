"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

// Mock data for demonstration
const mockConnections = [
    { id: 1, name: "Production DB", type: "PostgreSQL", status: "connected", host: "prod.db.com" },
    { id: 2, name: "Staging DB", type: "MySQL", status: "connected", host: "staging.db.com" },
    {
        id: 3,
        name: "Analytics DB",
        type: "MongoDB",
        status: "disconnected",
        host: "analytics.db.com"
    }
];

const mockTables = [
    { name: "users", rows: 15420, type: "table" },
    { name: "orders", rows: 8932, type: "table" },
    { name: "products", rows: 2341, type: "table" },
    { name: "categories", rows: 45, type: "table" },
    { name: "user_sessions", rows: 98234, type: "view" }
];

const mockData = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        created_at: "2024-01-15 10:30:00",
        status: "active"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        created_at: "2024-01-14 14:22:15",
        status: "active"
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        created_at: "2024-01-13 09:15:30",
        status: "inactive"
    },
    {
        id: 4,
        name: "Alice Brown",
        email: "alice@example.com",
        created_at: "2024-01-12 16:45:22",
        status: "active"
    },
    {
        id: 5,
        name: "Charlie Wilson",
        email: "charlie@example.com",
        created_at: "2024-01-11 11:20:10",
        status: "pending"
    }
];

export function DatabaseViewer() {
    const [selectedConnection, setSelectedConnection] = useState(mockConnections[0]);
    const [selectedTable, setSelectedTable] = useState(mockTables[0]);
    const [query, setQuery] = useState("SELECT * FROM users LIMIT 100;");

    return (
        <div className="flex h-screen bg-background">
            <Sidebar
                connections={mockConnections}
                tables={mockTables}
                selectedConnection={selectedConnection}
                selectedTable={selectedTable}
                onConnectionSelect={setSelectedConnection}
                onTableSelect={setSelectedTable}
            />
            <MainContent
                selectedConnection={selectedConnection}
                selectedTable={selectedTable}
                data={mockData}
                query={query}
                onQueryChange={setQuery}
            />
        </div>
    );
}
