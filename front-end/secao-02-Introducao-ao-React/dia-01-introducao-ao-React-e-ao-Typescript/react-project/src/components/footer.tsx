import User from "./user";

function Footer() {
  return (
    <footer className="footer">
      <h3>
        {'Acessando como '}
        <User />
      </h3>
    </footer>
  );
};

export default Footer;