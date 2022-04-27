
const Footer = ({name, surname}) =>{

    return(
        <footer className="page-footer font-small blue fixed-bottom">
          <div className="footer-copyright text-center py-3">© 2022 Copyright JavaSoft sesion iniciada: {name} {surname} 
          </div>
        </footer>
    )
};

export default Footer;