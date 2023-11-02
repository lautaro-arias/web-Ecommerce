import React from 'react'
import './styles/categories.css'

const Categories = () => {
  return (
    <div className="container mt-4"> 
        <div className="card border border-white">
              <div className="card-header bg-white border border-white">
              <form className="d-flex" role="search">
                <input className="form-control rounded-4 search" type="search" placeholder="Search" aria-label="Search"/>
              </form>
              </div>
              <div className="card-body">
                <h5 className="card-title">Que te gustaria ver hoy ?</h5> 
                  <ul className="  horizontal-list ">
                    <li className="  bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Remeras</li>
                    <li className="  bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Musculosas</li>
                    <li className=" bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Remera sport</li>
                    <li className=" bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Pantalones</li>
                    <li className=" bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Jeans</li>
                    <li className=" bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Pantalon sport</li>
                    <li className=" bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Mayas</li>
                    <li className=" bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Camperas</li>
                    <li className=" bg-dark text-white p-0 mb-2 mt-2 rounded-4 me-1 ">Busos</li>
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default Categories