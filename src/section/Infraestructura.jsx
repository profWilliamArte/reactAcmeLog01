// insfractura 1
import { Warehouse, Building, MapPin, Ruler, Shield, Truck } from 'lucide-react';

// insfractura 2
import {/* Warehouse, Building, MapPin, Ruler, Shield, Truck,*/ Camera, Wifi, Zap, Droplet, Thermometer, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Infraestructura = () => {
  // para insfractura 1
  const instalaciones = [
    {
      icon: <Warehouse size={48} className="text-primary" />,
      nombre: 'Centro Logístico Caracas',
      ubicacion: 'La Yaguara, Caracas',
      area: '5,000 m²',
      capacidad: '200 ton/día',
      caracteristicas: [
        'Muelles de carga',
        'Oficinas administrativas',
        'Parqueo para 30 vehículos',
        'Sistema de seguridad 24/7'
      ]
    },
    {
      icon: <Building size={48} className="text-success" />,
      nombre: 'Centro de Distribución Valencia',
      ubicacion: 'Zona Industrial, Valencia',
      area: '3,500 m²',
      capacidad: '150 ton/día',
      caracteristicas: [
        'Cámaras frigoríficas',
        'Zona de cross-docking',
        'Patio de maniobras',
        'Generador eléctrico'
      ]
    },
    {
      icon: <Warehouse size={48} className="text-warning" />,
      nombre: 'Base Operativa Maracaibo',
      ubicacion: 'Circunvalación 2, Maracaibo',
      area: '2,800 m²',
      capacidad: '100 ton/día',
      caracteristicas: [
        'Taller de mantenimiento',
        'Lavado de unidades',
        'Oficinas de operaciones',
        'Estacionamiento techado'
      ]
    }
  ];

  // para insfractura 2

  const [selectedSede, setSelectedSede] = useState(0);
  const [imagenActiva, setImagenActiva] = useState(0);

  const sedes = [
    {
      nombre: 'Centro Logístico Caracas',
      direccion: 'Av. Principal de La Yaguara, Caracas',
      telefono: '+58 212-555-0101',
      email: 'caracas@acme.com.ve',
      horario: 'Lunes a Viernes 8am - 6pm, Sábados 8am - 12pm',
      area: '5,000 m²',
      capacidad: '200 ton/día',
      empleados: 45,
      año: 2015,
      coordenadas: '10.4806° N, 66.9036° O',
      imagenes: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      equipamiento: [
        { icon: <Camera />, nombre: 'Circuito cerrado TV', cantidad: '24 cámaras' },
        { icon: <Wifi />, nombre: 'WiFi industrial', cantidad: 'Cobertura total' },
        { icon: <Zap />, nombre: 'Planta eléctrica', cantidad: '500 kVA' },
        { icon: <Droplet />, nombre: 'Sistema contra incendios', cantidad: 'Certificado' },
        { icon: <Thermometer />, nombre: 'Área climatizada', cantidad: '1,000 m²' }
      ],
      servicios: [
        'Almacenamiento general',
        'Cámaras frigoríficas',
        'Cross-docking',
        'Picking y packing',
        'Control de inventarios'
      ]
    },
    {
      nombre: 'Centro de Distribución Valencia',
      direccion: 'Zona Industrial Municipal Norte, Valencia',
      telefono: '+58 241-555-0202',
      email: 'valencia@acme.com.ve',
      horario: 'Lunes a Viernes 7am - 7pm, Sábados 7am - 1pm',
      area: '3,500 m²',
      capacidad: '150 ton/día',
      empleados: 32,
      año: 2018,
      coordenadas: '10.1620° N, 68.0070° O',
      imagenes: [
        'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      equipamiento: [
        { icon: <Camera />, nombre: 'Circuito cerrado TV', cantidad: '18 cámaras' },
        { icon: <Wifi />, nombre: 'WiFi industrial', cantidad: 'Cobertura total' },
        { icon: <Zap />, nombre: 'Planta eléctrica', cantidad: '300 kVA' },
        { icon: <Droplet />, nombre: 'Sistema contra incendios', cantidad: 'Certificado' },
        { icon: <Thermometer />, nombre: 'Área climatizada', cantidad: '800 m²' }
      ],
      servicios: [
        'Almacenamiento general',
        'Distribución regional',
        'Consolidación de carga',
        'Etiquetado y reempaque',
        'Inventario justo a tiempo'
      ]
    },
    {
      nombre: 'Base Operativa Maracaibo',
      direccion: 'Av. Circunvalación 2, Maracaibo',
      telefono: '+58 261-555-0303',
      email: 'maracaibo@acme.com.ve',
      horario: 'Lunes a Viernes 8am - 5pm',
      area: '2,800 m²',
      capacidad: '100 ton/día',
      empleados: 25,
      año: 2020,
      coordenadas: '10.6317° N, 71.6405° O',
      imagenes: [
        'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      equipamiento: [
        { icon: <Camera />, nombre: 'Circuito cerrado TV', cantidad: '12 cámaras' },
        { icon: <Wifi />, nombre: 'WiFi industrial', cantidad: 'Cobertura total' },
        { icon: <Zap />, nombre: 'Planta eléctrica', cantidad: '200 kVA' },
        { icon: <Droplet />, nombre: 'Sistema contra incendios', cantidad: 'Certificado' },
        { icon: <Truck />, nombre: 'Taller mecánico', cantidad: '3 bahías' }
      ],
      servicios: [
        'Mantenimiento de flota',
        'Estacionamiento de unidades',
        'Lavado y desinfección',
        'Almacenamiento temporal',
        'Base de operadores'
      ]
    }
  ];

  return (
    <>
      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Nuestra Infraestructura</h2>
            <p className="lead text-secondary">Instalaciones preparadas para ofrecer el mejor servicio</p>
          </div>

          <div className="row">
            {instalaciones.map((inst, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <div className="d-inline-block p-3 bg-light rounded-circle mb-3">
                        {inst.icon}
                      </div>
                      <h3 className="h4 fw-bold">{inst.nombre}</h3>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <MapPin size={16} className="text-secondary" />
                        <span>{inst.ubicacion}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <Ruler size={16} className="text-secondary" />
                        <span><strong>Área:</strong> {inst.area}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Truck size={16} className="text-secondary" />
                        <span><strong>Capacidad:</strong> {inst.capacidad}</span>
                      </div>
                    </div>

                    <hr />

                    <div>
                      <p className="fw-semibold mb-2">Características:</p>
                      <ul className="list-unstyled">
                        {inst.caracteristicas.map((car, idx) => (
                          <li key={idx} className="d-flex align-items-center gap-2 mb-2">
                            <Shield size={14} className="text-success" />
                            <span className="small">{car}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className='my-5' />
      </section>

      <hr className='my-5' />

      <section className="py-5 bg-light">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Infraestructura y Sedes</h2>
            <p className="lead text-secondary">Conoce nuestras instalaciones a nivel nacional</p>
          </div>

          {/* Selector de sedes */}
          <div className="row mb-4">
            {sedes.map((sede, index) => (
              <div className="col-md-4 mb-2" key={index}>
                <button
                  className={`btn w-100 text-start p-3 ${selectedSede === index ? 'btn-primary text-white' : 'btn-light'}`}
                  onClick={() => {
                    setSelectedSede(index);
                    setImagenActiva(0);
                  }}
                >
                  <Warehouse size={20} className="me-2" />
                  {sede.nombre}
                </button>
              </div>
            ))}
          </div>

          {/* Contenido detallado */}
          <div className="card border-0 shadow-lg">
            <div className="row g-0">
              <div className="col-lg-6">
                {/* Carrusel de imágenes */}
                <div className="position-relative" style={{ minHeight: '400px' }}>
                  <img
                    src={sedes[selectedSede].imagenes[imagenActiva]}
                    alt={sedes[selectedSede].nombre}
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: 'cover', minHeight: '400px' }}
                  />

                  {/* Miniaturas */}
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50">
                    <div className="d-flex gap-2 justify-content-center">
                      {sedes[selectedSede].imagenes.map((img, idx) => (
                        <button
                          key={idx}
                          className={`btn p-0 border-2 ${imagenActiva === idx ? 'border-primary' : 'border-transparent'}`}
                          onClick={() => setImagenActiva(idx)}
                          style={{ width: '60px', height: '40px', overflow: 'hidden' }}
                        >
                          <img
                            src={img}
                            alt={`Vista ${idx + 1}`}
                            className="img-fluid h-100 w-100"
                            style={{ objectFit: 'cover' }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h2 fw-bold mb-3">{sedes[selectedSede].nombre}</h3>

                  <div className="mb-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <MapPin size={16} className="text-primary" />
                      <span>{sedes[selectedSede].direccion}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <Ruler size={16} className="text-primary" />
                      <span><strong>Área total:</strong> {sedes[selectedSede].area}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <Truck size={16} className="text-primary" />
                      <span><strong>Capacidad:</strong> {sedes[selectedSede].capacidad}</span>
                    </div>
                  </div>

                  <hr />

                  <div className="row mb-4">
                    <div className="col-6">
                      <p className="text-secondary small mb-1">Teléfono</p>
                      <p className="fw-semibold">{sedes[selectedSede].telefono}</p>
                    </div>
                    <div className="col-6">
                      <p className="text-secondary small mb-1">Email</p>
                      <p className="fw-semibold">{sedes[selectedSede].email}</p>
                    </div>
                    <div className="col-12">
                      <p className="text-secondary small mb-1">Horario</p>
                      <p className="fw-semibold">{sedes[selectedSede].horario}</p>
                    </div>
                  </div>

                  <hr />

                  <h5 className="fw-bold mb-3">Equipamiento</h5>
                  <div className="row mb-4">
                    {sedes[selectedSede].equipamiento.map((eq, idx) => (
                      <div className="col-6 mb-2" key={idx}>
                        <div className="d-flex align-items-center gap-2">
                          <div className="text-primary">{eq.icon}</div>
                          <div>
                            <small className="text-secondary d-block">{eq.nombre}</small>
                            <span className="fw-semibold small">{eq.cantidad}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr />

                  <h5 className="fw-bold mb-3">Servicios disponibles</h5>
                  <div className="row">
                    {sedes[selectedSede].servicios.map((serv, idx) => (
                      <div className="col-12 mb-2" key={idx}>
                        <div className="d-flex align-items-center gap-2">
                          <ChevronRight size={14} className="text-primary" />
                          <span>{serv}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen rápido */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-white p-4 rounded-3 shadow-sm">
                <div className="row text-center">
                  <div className="col-4">
                    <h3 className="display-6 fw-bold text-primary">3</h3>
                    <small>Sedes operativas</small>
                  </div>
                  <div className="col-4">
                    <h3 className="display-6 fw-bold text-primary">11,300 m²</h3>
                    <small>Área total</small>
                  </div>
                  <div className="col-4">
                    <h3 className="display-6 fw-bold text-primary">102</h3>
                    <small>Empleados</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-5' />
      </section>
    </>
  )
}

export default Infraestructura