import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="#hero" className="logo">
          EstoniaTransfer
        </a>

        <nav className="nav">
          <a href="#services">Услуги</a>
          <a href="#routes">Маршруты</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <a href="tel:+37253874330" className="header__phone">
          +372 5387 4330
        </a>
      </div>
    </header>
  );
}

export default Header;
