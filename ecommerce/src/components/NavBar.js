import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


function NavBar() {
   return (
     <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark navbar-fixed-top ">
        <Link className="navbar-brand" to="/">Ecommerce </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/category/productos">Productos</ Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/servicios">Servicios</Link>
          </li>
        
          <form className="form-inline " action="/action_page.php" >
            <CartWidget/>
          </form>
        </ul>
      </nav>
    </div>
  );
  }
  
  export default NavBar;
  