import React from 'react'

const Footer = () => {
    return (
        <div className='bg-body-tertiary p-5 text-center'>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Servicios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Flota</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cobertura</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Certificaciones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Infraestructura</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Testimonios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>



            </ul>
            <p>© 2026 ACME Logistica</p>
        </div>
    )
}

export default Footer