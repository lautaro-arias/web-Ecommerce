const Categories= ({ handleFilter }:any) => {
  return (
    <div className="container mt-4"> 
        <div className="card border border-white">
              <div className="card-body">
                <h5 className="card-title mb-4">Que te gustaria ver hoy ?</h5> 
                <div className="row justify-content-center">
                  <div className="col-md-4 col-lg-2">
                    <div className="btn-group">  
                                <button className="btn btn-outline-dark  dropdown-toggle me-2 rounded-5 mb-2 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Productos
                                </button>
                            <ul className=" dropdown-menu dropdown-menu-dark pointer">
                                <li className="dropdown-item "
                                onClick={() => handleFilter('type','')}>Todos</li>
                                <li className="dropdown-item"
                                onClick={() => handleFilter('type','remera')}>Remera</li>
                                <li className="dropdown-item"
                                onClick={() => handleFilter('type','buso')}>Buso</li>
                                <li className="dropdown-item"
                                onClick={() => handleFilter('type','campera')}>Campera</li>
                                <li className="dropdown-item"
                                onClick={() => handleFilter('type','pantalon')}>Pantalon</li>
                              </ul>
                        </div>
                      </div>
                  <div className="col-md-2 col-lg-2">
                        <div className="btn-group">  
                            <button className="btn btn-outline-dark dropdown-toggle me-2 rounded-5 mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Marcas
                            </button>
                          <ul className="dropdown-menu dropdown-menu-dark pointer">
                              <li className="dropdown-item"
                              onClick={() => handleFilter('marca','levis')}>Levis</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('marca','taverniti')}>Taverniti</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('marca','lotus')}>Lotus</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('marca','worren')}>Worren</li>
                            </ul>
                        </div>
                      </div>
                  <div className="col-md-2 col-lg-2">
                        <div className="btn-group"> 
                            <button className="btn btn-outline-dark dropdown-toggle me-2 rounded-5 mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Colores
                            </button>
                          <ul className=" dropdown-menu dropdown-menu-dark pointer">
                              <li className="dropdown-item"
                              onClick={() => handleFilter('color','blanco')}>Blanco</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('color','negro')}>Negro</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('color','red')}>Rojo</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('color','azul')}>Azul</li>
                            </ul>
                        </div>
                      </div>
                  <div className="col-md-2 col-lg-2">
                        <div className="btn-group">  
                            <button className="btn btn-outline-dark dropdown-toggle me-2 rounded-5 mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Talles
                            </button>
                          <ul className="dropdown-menu dropdown-menu-dark pointer">
                              <li className="dropdown-item"
                              onClick={() => handleFilter('talle','s')}>S</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('talle','m')}>M</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('talle','l')}>L</li>
                              <li className="dropdown-item"
                              onClick={() => handleFilter('talle','xl')}>XL</li>
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default Categories