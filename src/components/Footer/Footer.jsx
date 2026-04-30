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

        <p>© 2026 EuroTransfer. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
