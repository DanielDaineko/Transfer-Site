import "./MapSection.css";
import { FaMapMarkedAlt, FaLocationArrow } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function MapSection() {
  const { t } = useTranslation();

  return (
    <section className="map-section" id="map">
      <div className="container">
        <h2 className="section-title">{t("mapSection.title")}</h2>
        <p className="section-subtitle">{t("mapSection.subtitle")}</p>

        <div className="map-section__grid">
          <div className="map-section__info">
            <div className="map-info-card">
              <FaMapMarkedAlt />
              <div>
                <h3>{t("mapSection.card1Title")}</h3>
                <p>{t("mapSection.card1Text")}</p>
              </div>
            </div>

            <div className="map-info-card">
              <FaLocationArrow />
              <div>
                <h3>{t("mapSection.card2Title")}</h3>
                <p>{t("mapSection.card2Text")}</p>
              </div>
            </div>
          </div>

          <div className="map-section__wrapper">
            <iframe
              title="Карта Эстонии"
              src="https://www.google.com/maps?q=Estonia&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
