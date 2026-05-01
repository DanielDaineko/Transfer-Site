import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a href="#hero" className="footer__logo">
          <span>ET</span>
          <small>
            EURO
            <br />
            TRANSFER
          </small>
        </a>

        <div className="footer__info">
          <p>© 2026 EuroTransfer</p>
          <p>Все права защищены</p>
          <p className="footer__company">Aletakso OÜ | Рег. код: 12345678</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
