import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__subtitle">Трансфер по Эстонии</p>
          <h1>Комфортные поездки по Эстонии и за её пределами</h1>
          <p className="hero__text">
            Удобный автомобиль, прозрачные цены, быстрая связь и комфортная
            поездка для каждого клиента.
          </p>

          <div className="hero__buttons">
            <a href="#routes" className="btn btn--primary">
              Смотреть маршруты
            </a>
            <a href="#contacts" className="btn btn--secondary">
              Связаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
