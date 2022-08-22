import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");

  const { createChannel } = useChannelContext();

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
