import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");

  const { createChannel, userName } = useChannelContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        createChannel(channelName);
        setChannelName("");
      }}
    >
      <p>Nome do Canal</p>
      <input
        type="text"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
      />

      <button type="submit">Criar</button>
    </form>
  );
};
