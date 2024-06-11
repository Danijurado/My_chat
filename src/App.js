import "./App.css";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { LiMessage, UlMessage } from "./ui-components";

const socket = io("http://localhost:3000");

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));

    socket.on("chat_message", (data) => {
      setMessage((message) => [...message, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("chat_message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("chat_message", {
      user: socket.id,
      mensaje: newMessage,
    });
  };

  return (
    <div className="App">
      <h2>{isConnected ? "CONECTADO" : "NO CONECTADO"}</h2>
      <UlMessage>
        {message.map((mensaje) => (
          <LiMessage>
            {mensaje.user}: {mensaje.mensaje}
          </LiMessage>
        ))}
      </UlMessage>
      <input
        type="text"
        onChange={(event) => setNewMessage(event.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default App;
