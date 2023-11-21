import {  faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMenuHandler from './handlers/menuHandler'
import dark from '../../assets/logo/dark.png'
import './styles/menu.css'

const Menu = () => {

const{toggleCollapse,isCollapsed}=useMenuHandler()

return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex-="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header ">
                            <img src={dark} className="logo rounded-4" alt="logo" title="Logo Nous"/>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                            <div className="offcanvas-body text-start">
                                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                                    Ver todos los productos
                                    <FontAwesomeIcon
                                        type="button"
                                        className={`ms-4 ${isCollapsed ? 'd-none' : ''}`}
                                        icon={faChevronDown}
                                        onClick={toggleCollapse}
                                    />
                                    <FontAwesomeIcon
                                        type="button"
                                        className={`ms-4 ${isCollapsed ? '' : 'd-none'}`}
                                        icon={faChevronUp}
                                        onClick={toggleCollapse}
                                    />
                                    </h5>
                                
                            <div className={`collapse ${isCollapsed ? 'show' : ''}`}>
                                <ul className="nav flex-column mt-4">
                                    <li className="nav-item mt-2 mb-2 dropdown">
                                        <div className="dropdown dropend">
                                                <a href='0' className=" ms-4 dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Remeras
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark ">
                                                    <li><a className="dropdown-item text-white" href='0'  >Manga corta</a></li>
                                                    <li><a className="dropdown-item text-white" href='0' >Musculosas</a></li>
                                                </ul>
                                            </div>
                                        </li> 
                                        <li className="nav-item mt-2 mb-2 dropdown">
                                            <div className="dropdown dropend">
                                                <a href="1" className="ms-4 dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Pantalones
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark ">
                                                    <li><a className="dropdown-item text-white" href="1">Deportivos</a></li>
                                                    <li><a className="dropdown-item text-white" href="1">Mayas</a></li>
                                                    <li><a className="dropdown-item text-white" href="1">jeans</a></li>
                                                </ul>
                                            </div>
                                        </li> 
                                        <li className="nav-item mt-2 mb-2 dropdown">
                                            <div className="dropdown dropend">
                                                <a href="1" className=" ms-4 dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Camperas
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark ">
                                                    <li><a className="dropdown-item text-white" href="1">Inflada</a></li>
                                                    <li><a className="dropdown-item text-white" href="1">Vestir</a></li>
                                                </ul>
                                            </div>
                                        </li> 
                                        <li className="nav-item mt-2 mb-2 dropdown">
                                            <div className="dropdown dropend">
                                                    <a href="1" className=" ms-4 dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Busos
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-dark ">
                                                        <li><a className="dropdown-item text-white" href="1">Con capucha</a></li>
                                                        <li><a className="dropdown-item text-white" href="1">Sin capucha</a></li>
                                                    </ul>
                                                </div>
                                        </li>
                                </ul>
                            </div>
                            <ul className="  flex-column mt-4">
                                <li className="mb-2 "><a href="1" className="nav-link p-0 text-dark fs-5 fw-bold">Guia de talles</a></li>
                                <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark fs-5 fw-bold">Contacto</a></li>
                                <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark fs-5 fw-bold">Preguntas frecuentes</a></li>
                                <li className="nav-item mb-2"><a href="1" className="nav-link p-0 text-dark fs-5 fw-bold">Politicas</a></li>
                            </ul>
                    </div>
            </div>
)
}

export default Menu