// import { useState } from "react";
// import { Greet } from "../wailsjs/go/main/App";
import "./App.css";
// import { Button } from "./components/ui/button";
import { Container } from "./components/Container";
import { DatabaseViewer } from "./components/db-view";

function App() {
    // const [greetMsg, setGreetMsg] = useState("");
    // const [name, setName] = useState("");

    // async function greet() {
    //     // Learn more about Wails commands at https://wails.io/docs/reference/runtime/intro
    //     setGreetMsg(await Greet(name));
    // }

    return (
        <Container>
            {/* <h1 className="text-2xl font-bold text-red-500">beequery</h1> */}
            <DatabaseViewer />
        </Container>
    );
}

export default App;
