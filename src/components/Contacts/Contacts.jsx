import "./Contacts.css";

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="section-title">Контакты</h2>

        <div className="contacts__card">
          <p>
            Телефон:{" "}
            <a href="tel:+37253874330" className="contacts__link">
              +372 5387 4330
            </a>
          </p>

          <p>
            Email:{" "}
            <a href="mailto:info@estoniatransfer.ee" className="contacts__link">
              info@estoniatransfer.ee
            </a>
          </p>

          <a href="tel:+37253874330" className="contacts__button">
            Забронировать поездку
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
