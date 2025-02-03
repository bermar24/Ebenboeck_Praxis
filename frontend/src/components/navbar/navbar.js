import "./navbar.css";


const Navbar = () => {
  return (
      <nav className="navbar">
          <div className="navbar">
              <img className="navbar-logo"
                   src="../../../public/assets/images/Logo%20Physio/icononly_transparent_nobuffer.png" alt="logo"
                   title="Physio logo"/>
              <a href="../../pages/contact.html">Contact</a>
              <a href="../../pages/servicesTreatment.html">Services</a>
              <a href="../../pages/portfolio.html">Portfolio</a>
              <a href="../../pages/homepage.html">Home</a>
          </div>
      </nav>
  );
};
export default Navbar;