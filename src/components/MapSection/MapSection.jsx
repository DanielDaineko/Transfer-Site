import "./MapSection.css";
import {
  FaCheck,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="map" className="map-section">
      <div className="container map-section__grid">
        <div className="map-info">
          <h2>{t("mapSection.title")}</h2>
          <p>{t("mapSection.subtitle")}</p>

          <div className="map-info__item">
            <FaCheck />
            <span>{t("mapSection.card1Title")}</span>
          </div>

          <div className="map-info__item">
            <FaCheck />
            <span>{t("mapSection.card2Title")}</span>
          </div>
        </div>

        <div className="map-visual">
          <iframe
            title="Estonia map"
            src="https://www.google.com/maps?q=Estonia&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        <div id="contacts" className="contact-card">
          <h2>{t("contacts.title")}</h2>

          <a href="tel:+37258141777">
            <FaPhoneAlt />
            +372 5814 1777
          </a>

          <a href="mailto:info@estoniatransfer.ee">
            <FaEnvelope />
            info@estoniatransfer.ee
          </a>

          <div className="contact-card__buttons">
            <a
              href="https://wa.me/37258141777"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="https://t.me/your_telegram_username"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
