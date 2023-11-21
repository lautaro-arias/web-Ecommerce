import {  faBagShopping, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {  GoogleLogin  } from'@react-oauth/google' ;
import { GoogleOAuthProvider } from '@react-oauth/google';
import Menu from '../menu-offcanvas/Menu';
import useNavHandler from './handlers/navHandler';
import './styles/navs.css';

const Navs = () => {
const{
    onSuccess,
    showLoginButton,
    handleLoginButtonClick,
    }=useNavHandler()  

return (
    <>
        <nav className="navbar nav-nav navbar-expand-lg p-0">
                <div className="container-fluid">
                        <FontAwesomeIcon type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" 
                        aria-controls="offcanvasScrolling" icon={faBars} /> 
                        <a className=" title navbar-brand text-center fs-1" href="/" >Nous</a>
                            <form className="d-flex" >
                            {showLoginButton && ( 
                                    <div className="dropdown dropstart">
                                        <FontAwesomeIcon
                                            className="dropdown-toggle p-2 me-1 btn btn-outline-dark border border-dark rounded-5"
                                            title="crea tu cuenta"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            icon={faUser}
                                            onClick={handleLoginButtonClick}
                                            />
                                        <ul className="dropdown-menu p-0 border border-dark rounded-0">
                                            <li >
                                            <GoogleOAuthProvider clientId = "102221184199-2r9igs03kv5n4a1mmpbe80li9fdt5j5a.apps.googleusercontent.com" >  
                                                <GoogleLogin
                                                    onSuccess={onSuccess}
                                                    onError={() => {
                                                        console.log("Error al iniciar sesion")
                                                    }}
                                                />
                                            </ GoogleOAuthProvider>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {!showLoginButton&& (
                                <div> 
                                    <GoogleOAuthProvider clientId = "102221184199-2r9igs03kv5n4a1mmpbe80li9fdt5j5a.apps.googleusercontent.com" >  
                                        <GoogleLogin
                                        onSuccess={onSuccess}
                                        onError={() => {
                                        console.log("Error al iniciar sesion")
                                        }}
                                        />
                                    </ GoogleOAuthProvider>
                                </div>
                                )}
                        
                                <FontAwesomeIcon className="p-2 mx-4 btn btn-outline-dark border border-dark rounded-5"
                                    title="compras" type="button" icon={faBagShopping} />
                                     <span className=" top-30 start-10 translate-middle badge rounded-pill bg-danger">
                                        0
                                    </span>
                                 
                                </form>
                    </div>
            </nav>
            <Menu/>
    </>
)
}

export default Navs