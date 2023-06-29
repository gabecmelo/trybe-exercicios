import User from "./user";

function Header() {

  return (
    <header className="greeting">
      <h1>
        Olá <User />
      </h1>
      <img src="https://i.imgur.com/rqvLd3q.png" alt="Trevo de quatro folhas" />
    </header>
  );
}

export default Header;
