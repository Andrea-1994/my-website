import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left"></div>

        <div className="footer-center">
          <img
            src="/black_logo.svg"
            alt="khiron logo"
            className="footer-logo"
          />
          <div>
            <p>©2026 Khiron Production</p>
            <p>Made with React</p>
          </div>
        </div>

        <div className="footer-right"></div>
      </div>
    </footer>
  );
}
