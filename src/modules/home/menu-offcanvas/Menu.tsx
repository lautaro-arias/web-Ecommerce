import {  faBagShopping, faBars, faChevronDown, faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState}  from 'react'
import dark from '../../assets/logo/dark.png'
import './styles/menu.css'

const Menu = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    };                                              //refactorizar menu y el footer 
return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex-="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header ">
                            <img src={dark} className="logo rounded-4"/>
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
                                                <a className=" ms-4 dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Remeras
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark ">
                                                    <li><a className="dropdown-item text-white" href="#">Manga corta</a></li>
                                                    <li><a className="dropdown-item text-white" href="#">Musculosas</a></li>
                                                </ul>
                                            </div>
                                        </li> 
                                        <li className="nav-item mt-2 mb-2 dropdown">
                                            <div className="dropdown dropend">
                                                <a className="ms-4 dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Pantalones
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark ">
                                                    <li><a className="dropdown-item text-white" href="#">Deportivos</a></li>
                                                    <li><a className="dropdown-item text-white" href="#">Mayas</a></li>
                                                    <li><a className="dropdown-item text-white" href="#">jeans</a></li>
                                                </ul>
                                            </div>
                                        </li> 
                                        <li className="nav-item mt-2 mb-2 dropdown">
                                            <div className="dropdown dropend">
                                                <a className=" ms-4 dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Camperas
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark ">
                                                    <li><a className="dropdown-item text-white" href="#">Inflada</a></li>
                                                    <li><a className="dropdown-item text-white" href="#">Vestir</a></li>
                                                </ul>
                                            </div>
                                        </li> 
                                        <li className="nav-item mt-2 mb-2 dropdown">
                                            <div className="dropdown dropend">
                                                    <a className=" ms-4 dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Busos
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-dark ">
                                                        <li><a className="dropdown-item text-white" href="#">Con capucha</a></li>
                                                        <li><a className="dropdown-item text-white" href="#">Sin capucha</a></li>
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