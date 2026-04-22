import "./MapSection.css";
import { FaMapMarkedAlt, FaLocationArrow } from "react-icons/fa";

function MapSection() {
  return (
    <section className="map-section" id="map">
      <div className="container">
        <h2 className="section-title">Карта поездок</h2>
        <p className="section-subtitle">
          Выполняем трансферы по всей Эстонии и в популярные направления.
        </p>

        <div className="map-section__grid">
          <div className="map-section__info">
            <div className="map-info-card">
              <FaMapMarkedAlt />
              <div>
                <h3>Работаем по всей Эстонии</h3>
                <p>Таллин, Нарва, Койдула, Лухамаа и другие направления.</p>
              </div>
            </div>

            <div className="map-info-card">
              <FaLocationArrow />
              <div>
                <h3>Индивидуальные маршруты</h3>
                <p>
                  Можно согласовать трансфер под нужную вам точку назначения.
                </p>
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
