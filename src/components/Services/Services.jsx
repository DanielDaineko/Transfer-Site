import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>

        <div className="services__grid">
          <div className="service-card">
            <h3>Трансфер по Эстонии</h3>
            <p>Поездки между городами по фиксированной цене.</p>
          </div>

          <div className="service-card">
            <h3>Индивидуальный подход</h3>
            <p>Подберём удобный маршрут и время поездки.</p>
          </div>

          <div className="service-card">
            <h3>Комфортный автомобиль</h3>
            <p>Современный автомобиль для удобных и безопасных поездок.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
