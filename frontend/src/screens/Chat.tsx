import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export const Chat = () => {
  const [message, setMessage] = useState("");
  const { channel, joinChannel, createMessage, userName } = useChannelContext();
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();

  const divRef = useRef<HTMLDivElement>(null);

  const goToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current?.scrollHeight;
    }
  };

  useEffect(() => {
    goToBottom();
  }, [channel?.messages]);

  useEffect(() => {
    if (!channelId) {
      navigate("/channels");
      return;
    }

    if (!userName) {
      navigate("/");
      return;
    }

    joinChannel(channelId);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5># {channel?.name}</h5>
        <Link to="/channels">Voltar</Link>
      </div>

      <div
        ref={divRef}
        style={{
          maxHeight: "300px",
          overflowY: "scroll",
        }}
      >
        {channel?.messages.map((message, index) => {
          return (
            <div key={index}>
              <strong>{message.userName}</strong>: {message.message}
            </div>
          );
        })}
      </div>

      <form
        style={{
          padding: "16px",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          createMessage(message);
          setMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Escreva sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
