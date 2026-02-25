import React from 'react'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-custom fixed-top" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ACME Lg.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#servicios">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#flota">Flota</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#cobertura">Cobertura</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#certificados">Certificados</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#infraestructura">Insfraestructura</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonios">Testimonios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacto">Contacto</a>
        </li>

      </ul>

    </div>
  </div>
</nav>

  )
}

export default Header