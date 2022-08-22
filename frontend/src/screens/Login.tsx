import { useState } from "react";

export const Login = () => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h1>Login</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <p>Nome de usuário</p>
        <input
          type="text"
          placeholder="Seu usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
