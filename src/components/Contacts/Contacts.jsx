import "./Contacts.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <p className="section-subtitle">
          Свяжитесь с нами удобным способом и забронируйте поездку.
        </p>

        <div className="contacts__card">
          <div className="contacts__item">
            <FaPhoneAlt />
            <a href="tel:+37258141777">+372 5814 1777</a>
          </div>

          <div className="contacts__item">
            <FaEnvelope />
            <a href="mailto:info@estoniatransfer.ee">info@estoniatransfer.ee</a>
          </div>

          <div className="contacts__socials">
            <a
              href="https://wa.me/37258141777"
              target="_blank"
              rel="noreferrer"
              className="contacts__social contacts__social--whatsapp"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://t.me/your_telegram_username"
              target="_blank"
              rel="noreferrer"
              className="contacts__social contacts__social--telegram"
            >
              <FaTelegramPlane />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
