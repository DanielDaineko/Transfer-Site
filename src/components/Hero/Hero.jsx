import "./Hero.css";
import { FaWhatsapp, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__subtitle">Трансфер по Эстонии</p>

          <h1 className="hero__title">Трансфер в любую точку Эстонии</h1>

          <p className="hero__text">
            Комфортные автомобили, фиксированные цены и высокий уровень сервиса
            для вашего удобства.
          </p>

          <div className="hero__buttons">
            <a href="#contacts" className="btn btn--primary">
              <FaPhoneAlt />
              <span>Забронировать поездку</span>
            </a>

            <a href="#routes" className="btn btn--secondary">
              Смотреть маршруты
            </a>
          </div>

          <div className="hero__messengers">
            <p className="hero__messengers-text">
              Свяжитесь с нами в мессенджерах
            </p>

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

        <div className="hero__image">
          <img src="/images/car2.png" alt="Toyota Corolla" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
