import "./Services.css";
import { FaCarSide, FaShieldAlt, FaClock } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCarSide />,
      title: "Комфортные автомобили",
      text: "Современные и чистые автомобили для максимально комфортной поездки.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Фиксированные цены",
      text: "Вы заранее знаете стоимость поездки, никаких скрытых доплат.",
    },
    {
      icon: <FaClock />,
      title: "Точно в срок",
      text: "Мы ценим ваше время и гарантируем подачу автомобиля вовремя.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <p className="section-subtitle">
          Комфорт и надёжность в каждой поездке. Мы делаем трансфер простым,
          понятным и удобным.
        </p>

        <div className="services__grid">
          {services.map((item, index) => (
            <article className="service-card" key={index}>
              <div className="service-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
