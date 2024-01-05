import './styles/info.css'

const Info = () => {
  return (
        <div className="container">
              <div className="row">
                  <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mt-1 ">
                        <div className="card fondo-info1 border border-white rounded-4">
                              <div className="card-body fondo-body">
                                    <h5 className="card-title">Envios a todo el pais</h5>
                                    <p className="card-text">Puedes regresar tu pedido hasta despues de 20 dias.</p>
                              </div>
                        </div>
                  </div>
                <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mt-1">
                        <div className="card fondo-info2 border border-white rounded-4">
                              <div className="card-body fondo-body ">
                                    <h5 className="card-title">Tarjetas</h5>
                                    <p className="card-text">3 y 6 sin interes aceptamos todas las tarjetas </p>
                              </div>
                        </div>
                  </div>
                <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mt-1">
                        <div className="card fondo-info3 border border-white rounded-4">
                              <div className="card-body fondo-body">
                                    <h5 className="card-title">Efectivo</h5>
                                    <p className="card-text">Al depositar en efectivo tienes un 10% de descuento.</p>
                              </div>
                        </div>
                  </div>
              <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mt-1">
                      <div className="card fondo-info4 border border-white rounded-4">
                            <div className="card-body fondo-body">
                                  <h5 className="card-title">Moda masculina</h5>
                                  <p className="card-text">Las ultimas tendencias de la moda</p>
                            </div>
                      </div>
                </div>
          </div>
    </div>
  )
}
export default Info