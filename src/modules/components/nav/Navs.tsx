import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {  GoogleLogin  } from'@react-oauth/google' ;
import { GoogleOAuthProvider } from '@react-oauth/google';
import Menu from '../menu-offcanvas/Menu';
import IconCart from '../shopping-cart/IconCart';
import useNavHandler from './handlers/navHandler';
import './styles/navs.css';

const Navs = () => {
    
const{ onSuccess,showLoginButton,handleLoginButtonClick }=useNavHandler()  

return (
    <>
        <nav className="navbar nav-nav navbar-expand-lg p-0">
                <div className="container-fluid">
                        <FontAwesomeIcon type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" 
                        aria-controls="offcanvasScrolling" icon={faBars} title="Menu"/> 
                        <a className=" title navbar-brand text-center fs-1" href="/" >Nous</a>
                            <form className="d-flex" >
                                {showLoginButton && ( 
                                        <div className="dropdown dropstart">
                                            <FontAwesomeIcon
                                                className="dropdown-toggle p-2 me-3 btn btn-outline-dark border border-dark rounded-5"
                                                title="Crea tu cuenta"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                icon={faUser}
                                                onClick={handleLoginButtonClick}
                                                />
                                                <ul className="dropdown-menu p-0 border border-dark rounded-0">
                                                    <li >
                                                        <GoogleOAuthProvider clientId ="102221184199-2r9igs03kv5n4a1mmpbe80li9fdt5j5a.apps.googleusercontent.com" >  
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
                                        <div className=" me-2"> 
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
                                    <IconCart />
                                </form>
                        </div>
                </nav>
            <Menu/>
    </>
)
}

export default Navs