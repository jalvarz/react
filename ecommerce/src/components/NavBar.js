import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
   // console.log("se Ejecuta Navbar");
    return (
    <div>

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark navbar-fixed-top ">

    <a className="navbar-brand" href="\">Logo</a>
  

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Productos</a>
        <Link to={'/categoryId/productos}'}>Productos </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Servicios</a>
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
    <CartWidget />
  </form>

    </ul>
  </nav>
    </div>
  );
  }
  
  export default NavBar;
  