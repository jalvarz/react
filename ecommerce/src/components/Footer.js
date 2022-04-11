
const Footer = ({nombre, apellido}) =>{
//  console.log("se ejecuta footer");
    return(
        <footer className="page-footer font-small blue fixed-bottom">
          <div className="footer-copyright text-center py-3">© 2022 Copyright JavaSoft sesion iniciada: {nombre} {apellido} 
          </div>
        </footer>
    )
};

export default Footer;