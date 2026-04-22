import "./Header.css";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <span className="logo__icon">E</span>
          <span>EstoniaTransfer.ee</span>
        </a>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <a href="#hero" onClick={closeMenu}>
            {t("nav.home")}
          </a>
          <a href="#services" onClick={closeMenu}>
            {t("nav.services")}
          </a>
          <a href="#routes" onClick={closeMenu}>
            {t("nav.routes")}
          </a>
          <a href="#map" onClick={closeMenu}>
            {t("nav.map")}
          </a>
          <a href="#contacts" onClick={closeMenu}>
            {t("nav.contacts")}
          </a>

          <div className="header__mobile-extras">
            <div className="lang-switcher">
              <button
                className={
                  i18n.language === "et" ? "lang-btn active" : "lang-btn"
                }
                onClick={() => changeLanguage("et")}
              >
                🇪🇪 ET
              </button>
              <button
                className={
                  i18n.language === "ru" ? "lang-btn active" : "lang-btn"
                }
                onClick={() => changeLanguage("ru")}
              >
                🇷🇺 RU
              </button>
              <button
                className={
                  i18n.language === "en" ? "lang-btn active" : "lang-btn"
                }
                onClick={() => changeLanguage("en")}
              >
                🇬🇧 EN
              </button>
            </div>

            <a
              href="tel:+37258141777"
              className="header__phone header__phone--mobile"
            >
              <FaPhoneAlt />
              <span>+372 5814 1777</span>
            </a>
          </div>
        </nav>

        <div className="header__right">
          <div className="lang-switcher header__lang-desktop">
            <button
              className={
                i18n.language === "et" ? "lang-btn active" : "lang-btn"
              }
              onClick={() => changeLanguage("et")}
            >
              EE
            </button>
            <button
              className={
                i18n.language === "ru" ? "lang-btn active" : "lang-btn"
              }
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <button
              className={
                i18n.language === "en" ? "lang-btn active" : "lang-btn"
              }
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>

          <a href="tel:+37258141777" className="header__phone">
            <FaPhoneAlt />
            <span>+372 5814 1777</span>
          </a>

          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
