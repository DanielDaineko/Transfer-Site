import "./Hero.css";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="hero__bg"></div>
      <div className="hero__overlay"></div>

      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__subtitle">{t("hero.subtitle")}</p>

          <h1>
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
            <br />
            <span>{t("hero.title3")}</span>
          </h1>

          <p className="hero__text">{t("hero.text")}</p>

          <div className="hero__buttons">
            <a href="#contacts" className="btn btn--gold">
              <FaPhoneAlt />
              {t("hero.book")}
            </a>

            <a href="#routes" className="btn btn--dark">
              {t("hero.routes")}
              <FaArrowRight />
            </a>
          </div>

          <p className="hero__messenger-title">{t("hero.messengers")}</p>

          <div className="hero__messengers">
            <a
              href="Https://wa.me/37258141777"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a href="https://t.me/Semkopli82" target="_blank" rel="noreferrer">
              <FaTelegramPlane />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
