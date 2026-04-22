import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="#hero" className="logo">
          <span className="logo__icon">E</span>
          <span>EstoniaTransfer.ee</span>
        </a>

        <nav className="nav">
          <a href="#hero">Главная</a>
          <a href="#services">Услуги</a>
          <a href="#routes">Маршруты</a>
          <a href="#map">Карта</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="header__right">
          <div className="lang">
            <img src="/images/ee.png" alt="EE" />
            <img src="/images/ru.png" alt="RU" />
            <img src="/images/gb.png" alt="EN" />
          </div>

          <a href="tel:+37258141777" className="header__phone">
            <FaPhoneAlt />
            <span>+372 5814 1777</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
