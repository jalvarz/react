import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
   return (
     <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark navbar-fixed-top ">
        <Link className="navbar-brand" to="/">Logo</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/category/productos">Productos</ Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/servicios">Servicios</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Dropdown link
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Link 1</a>
              <a className="dropdown-item" href="#">Link 2</a>
              <a className="dropdown-item" href="#">Link 3</a>
            </div>
          </li>
          <form className="form-inline " action="/action_page.php" >
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
            <CartWidget/>
          </form>
        </ul>
      </nav>
    </div>
  );
  }
  
  export default NavBar;
  