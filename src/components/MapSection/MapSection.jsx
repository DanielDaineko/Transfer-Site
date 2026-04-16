import "./MapSection.css";

function MapSection() {
  return (
    <section className="map-section" id="map">
      <div className="container">
        <h2 className="section-title">Карта маршрутов</h2>
        <p className="map-section__text">
          Работаем по всей Эстонии и выполняем трансферы в популярные
          направления.
        </p>

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
    </section>
  );
}

export default MapSection;
