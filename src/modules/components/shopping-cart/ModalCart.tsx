import  './styles/modalcart.css'

const modalCart = () => {
  return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex-="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                              <div className="modal-header">
                                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                              <div className="modal-body">
                                  <div className="card modal-card">
                                        <div className="card-header">
                                          Featured
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div> 
                                    <div className="card modal-card">
                                        <div className="card-header">
                                          Featured
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                  <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      <button type="button" className="btn btn-primary">Save changes</button>
                                  </div>
                            </div>
                      </div>
                  </div>
            </div>
    </div>
  )
}

export default modalCart