// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";
// import { Button } from "./components/ui/button";
import { Container } from "./components/Container";
import { DatabaseViewer } from "./components/db-view";

function App() {
    // const [greetMsg, setGreetMsg] = useState("");
    // const [name, setName] = useState("");

    // async function greet() {
    //     // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    //     setGreetMsg(await invoke("greet", { name }));
    // }

    return (
        <Container>
            {/* <h1 className="text-2xl font-bold text-red-500">beequery</h1> */}
            <DatabaseViewer />
        </Container>
    );
}

export default App;
