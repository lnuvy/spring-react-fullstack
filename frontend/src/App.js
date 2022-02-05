import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("/hello")
            .then((res) => {
                console.log(res)
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setMessages(data)
            })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {messages.map((message, index) => <li key={index}>{message}</li>)}
                </ul>
            </header>
        </div>
    );
}

export default App;
