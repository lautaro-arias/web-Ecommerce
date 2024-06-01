import React from "react";
import './styles/categorias.css';

const Categories = ({ handleFilter }: any) => {
      return (
            <div className="container mt-4 ">
                  <div className="card border-0">
                        <div className="card-body">
                              <h5 className="card-title quever">Que te gustaria ver hoy ?</h5>
                              <div className="row justify-content-center pt-5">
                                    <div className="col-md-4 col-lg-2">
                                          <div className="btn-group">
                                                <button className=" categorias dropdown-toggle me-2 rounded-3 mb-2 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                      Productos
                                                </button>
                                                <ul className=" dropdown-menu dropdown-menu-dark pointer">
                                                      <li className="dropdown-item "
                                                            onClick={() => handleFilter('type')}>Todos</li>
                                                      <li className="dropdown-item"
                                                            onClick={() => handleFilter('type', 'remera')}>Remera</li>
                                                      <li className="dropdown-item"
                                                            onClick={() => handleFilter('type', 'buso')}>Buso</li>
                                                      <li className="dropdown-item"
                                                            onClick={() => handleFilter('type', 'campera')}>Campera</li>
                                                      <li className="dropdown-item"
                                                            onClick={() => handleFilter('type', 'pantalon')}>Pantalon</li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
export default Categories;