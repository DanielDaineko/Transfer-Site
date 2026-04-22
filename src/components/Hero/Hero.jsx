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
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__subtitle">{t("hero.subtitle")}</p>

          <h1 className="hero__title">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
            <br />
            {t("hero.title3")}
          </h1>

          <p className="hero__text">{t("hero.text")}</p>

          <div className="hero__buttons">
            <a href="#contacts" className="btn btn--primary">
              <FaPhoneAlt />
              <span>{t("hero.book")}</span>
            </a>

            <a href="#routes" className="btn btn--secondary">
              <span>{t("hero.routes")}</span>
              <FaArrowRight />
            </a>
          </div>

          <div className="hero__messengers">
            <p className="hero__messengers-text">{t("hero.messengers")}</p>

            <div className="hero__messengers-links">
              <a
                href="Https://wa.me/37258141777"
                target="_blank"
                rel="noreferrer"
                className="messenger messenger--whatsapp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://t.me/Semkopli82"
                target="_blank"
                rel="noreferrer"
                className="messenger messenger--telegram"
              >
                <FaTelegramPlane />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow"></div>
          <div className="hero__car-wrap">
            <img
              src="/images/car2.png"
              alt="Toyota Corolla"
              className="hero__car"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
