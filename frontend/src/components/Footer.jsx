import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>UrbanMen</h3>
        <p>Moda masculina · Ropa · Zapatillas · Botas</p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} UrbanMen. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
