import { useState } from "react";
import { Link } from "react-router";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  let isDisabled =
    username.length > 4 && email.length > 4 && password.length > 4;

  return (
    <>
      <article>
        {/* не будет хедера и футера */}

        <form action="#">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="username:"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email:"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password:"
            required
          />
          {!isClicked && (
            <button disabled={!isDisabled} onClick={() => setIsClicked(true)}>
              Зарегистрироваться
            </button>
          )}

          {isClicked && <Link to={"/"}>Перейти на главную страницу</Link>}
        </form>
      </article>
    </>
  );
};
