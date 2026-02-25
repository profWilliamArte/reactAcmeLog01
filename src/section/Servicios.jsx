
import { Truck, Package, Shield, Clock, MapPin, Headphones } from 'lucide-react'; // servisio 1

// para el servicio 2
import {/* Truck, Package,*/ Globe, Warehouse, Ship, Plane } from 'lucide-react';
import React, { useState } from 'react';


// pata el servicio 3
import { Check, X } from 'lucide-react';


// para el servicio 4
import { /* Package, Truck, */ Clipboard, CheckCircle, FileText, CreditCard } from 'lucide-react';


// para el servicio 5

//import React, { useState } from 'react';
import { /* Truck, Package, Shield, Clock, MapPin, Headphones, */ ArrowRight } from 'lucide-react';
const Servicios = () => {
  // para el servicio 1
  const servicios = [
    { icon: <Truck size={40} />, titulo: 'Transporte de Carga', desc: 'Servicio nacional e internacional con flota propia', color: '#4361ee' },
    { icon: <Package size={40} />, titulo: 'Almacenamiento', desc: 'Bodegas climatizadas y seguras', color: '#f72585' },
    { icon: <Shield size={40} />, titulo: 'Carga Asegurada', desc: 'Protección total para tu mercancía', color: '#4cc9f0' },
    { icon: <Clock size={40} />, titulo: 'Entrega Express', desc: 'Servicio 24/48 horas', color: '#f8961e' },
    { icon: <MapPin size={40} />, titulo: 'Rastreo GPS', desc: 'Seguimiento en tiempo real', color: '#43aa8b' },
    { icon: <Headphones size={40} />, titulo: 'Soporte 24/7', desc: 'Atención al cliente permanente', color: '#9c89b8' }
  ];

  // para el servicio 2
  const [activeTab, setActiveTab] = useState('terrestre');

  const tabs = [
    { id: 'terrestre', icon: <Truck />, label: 'Terrestre' },
    { id: 'maritimo', icon: <Ship />, label: 'Marítimo' },
    { id: 'aereo', icon: <Plane />, label: 'Aéreo' },
    { id: 'almacen', icon: <Warehouse />, label: 'Almacén' }
  ];
  const contenido = {
    terrestre: {
      titulo: 'Transporte Terrestre',
      desc: 'La columna vertebral de nuestra operación',
      servicios: [
        'Carga general (suelta, paletizada)',
        'Carga refrigerada (cadena de frío)',
        'Mudanzas y reubicaciones',
        'Transporte de materiales peligrosos',
        'Servicio express punto a punto'
      ],
      imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    maritimo: {
      titulo: 'Transporte Marítimo',
      desc: 'Conectamos continentes',
      servicios: [
        'Contenedores completos (FCL)',
        'Carga consolidada (LCL)',
        'Proyectos especiales',
        'Despacho de aduanas',
        'Seguro marítimo incluido'
      ],
      imagen: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    aereo: {
      titulo: 'Transporte Aéreo',
      desc: 'Velocidad y seguridad',
      servicios: [
        'Carga urgente (next flight out)',
        'Mercancías de alto valor',
        'Productos perecederos',
        'Documentación y paquetería',
        'Tracking en tiempo real'
      ],
      imagen: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    almacen: {
      titulo: 'Almacenamiento',
      desc: 'Tu mercancía segura',
      servicios: [
        'Bodegas climatizadas',
        'Gestión de inventarios',
        'Picking y packing',
        'Cross docking',
        'Distribución última milla'
      ],
      imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  };

  // para el servicio 3
  const paquetes = [
    {
      nombre: 'BÁSICO',
      precio: '$299',
      periodo: '/mes',
      desc: 'Para envíos ocasionales',
      features: [
        { name: 'Hasta 500 kg', included: true },
        { name: 'Rastreo básico', included: true },
        { name: 'Seguro incluido', included: true },
        { name: 'Soporte email', included: true },
        { name: 'Entrega 72h', included: true },
        { name: 'Almacenamiento', included: false },
        { name: 'Soporte 24/7', included: false }
      ],
      color: 'primary',
      destacado: false
    },
    {
      nombre: 'PROFESIONAL',
      precio: '$599',
      periodo: '/mes',
      desc: 'Para negocios en crecimiento',
      features: [
        { name: 'Hasta 2000 kg', included: true },
        { name: 'Rastreo premium', included: true },
        { name: 'Seguro incluido', included: true },
        { name: 'Soporte prioritario', included: true },
        { name: 'Entrega 48h', included: true },
        { name: 'Almacenamiento 30 días', included: true },
        { name: 'Soporte 24/7', included: true }
      ],
      color: 'warning',
      destacado: true
    },
    {
      nombre: 'EMPRESARIAL',
      precio: '$999',
      periodo: '/mes',
      desc: 'Para grandes volúmenes',
      features: [
        { name: 'Volumen ilimitado', included: true },
        { name: 'Rastreo dedicado', included: true },
        { name: 'Seguro premium', included: true },
        { name: 'Gerente de cuenta', included: true },
        { name: 'Entrega 24h', included: true },
        { name: 'Almacenamiento ilimitado', included: true },
        { name: 'Soporte VIP 24/7', included: true }
      ],
      color: 'dark',
      destacado: false
    }
  ];


  // para el servicio 4
  const pasos = [
    {
      icon: <Clipboard size={32} />,
      titulo: '1. Solicitud',
      desc: 'Completa nuestro formulario con los detalles de tu carga',
      tiempo: '5 minutos'
    },
    {
      icon: <FileText size={32} />,
      titulo: '2. Cotización',
      desc: 'Recibe una cotización personalizada en menos de 2 horas',
      tiempo: '2 horas'
    },
    {
      icon: <CheckCircle size={32} />,
      titulo: '3. Confirmación',
      desc: 'Acepta la cotización y confirma el servicio',
      tiempo: '1 día'
    },
    {
      icon: <Package size={32} />,
      titulo: '4. Recolección',
      desc: 'Nuestro equipo recoge la carga en tu ubicación',
      tiempo: '24-48h'
    },
    {
      icon: <Truck size={32} />,
      titulo: '5. Transporte',
      desc: 'Seguimiento GPS en tiempo real durante todo el trayecto',
      tiempo: 'Variable'
    },
    {
      icon: <CreditCard size={32} />,
      titulo: '6. Entrega',
      desc: 'Entrega segura y facturación del servicio',
      tiempo: 'Confirmado'
    }
  ];


  // para el servicio 5
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicios2 = [
        {
            icon: <Truck size={48} />,
            titulo: 'Transporte',
            desc: 'Servicio nacional con flota propia',
            stats: '20+ unidades',
            color: '#4158D0'
        },
        {
            icon: <Package size={48} />,
            titulo: 'Almacenaje',
            desc: 'Bodegas climatizadas 24/7',
            stats: '5000 m²',
            color: '#C850C0'
        },
        {
            icon: <Shield size={48} />,
            titulo: 'Seguros',
            desc: 'Cobertura total para tu carga',
            stats: '100% protegido',
            color: '#FFCC70'
        },
        {
            icon: <Clock size={48} />,
            titulo: 'Express',
            desc: 'Entregas urgentes',
            stats: '24/48 horas',
            color: '#FF6B6B'
        }
    ];

  return (
    <>
      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">NUESTROS SERVICIOS</span>
            <h2 className="display-5 fw-bold mb-3">Soluciones logísticas integrales</h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              Ofrecemos una amplia gama de servicios diseñados para cubrir todas tus necesidades de transporte y almacenamiento.
            </p>
          </div>

          <div className="row g-4">
            {servicios.map((servicio, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body text-center p-4">
                    <div className="d-inline-flex p-3 rounded-3 mb-4"
                      style={{ backgroundColor: `${servicio.color}20`, color: servicio.color }}>
                      {servicio.icon}
                    </div>
                    <h3 className="h4 fw-bold mb-3">{servicio.titulo}</h3>
                    <p className="text-secondary mb-3">{servicio.desc}</p>
                    <a href="#" className="text-decoration-none fw-semibold" style={{ color: servicio.color }}>
                      Saber más →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className='my-5' />

        <style jsx>{`
                .hover-lift:hover {
                    transform: translateY(-5px);
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
                }
            `}</style>
      </section>

      <hr className='my-5' />

      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge bg-warning text-dark px-3 py-2 mb-3">MULTIMODAL</span>
            <h2 className="display-5 fw-bold mb-3">Soluciones por modo de transporte</h2>
          </div>

          {/* Tabs */}
          <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`btn btn-lg rounded-pill px-4 d-flex align-items-center gap-2 ${activeTab === tab.id ? 'btn-primary' : 'btn-outline-secondary'
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {React.cloneElement(tab.icon, { size: 20 })}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenido dinámico */}
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <img
                src={contenido[activeTab].imagen}
                alt={contenido[activeTab].titulo}
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="display-6 fw-bold mb-3">{contenido[activeTab].titulo}</h3>
              <p className="lead text-secondary mb-4">{contenido[activeTab].desc}</p>

              <ul className="list-unstyled">
                {contenido[activeTab].servicios.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-success bg-opacity-10 text-success p-2 rounded-circle">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="btn btn-primary btn-lg px-5 mt-4">
                Cotizar este servicio
              </button>
            </div>
          </div>
        </div>
        <hr className='my-5' />
      </section>

      <hr className='my-5' />

      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge bg-success text-white px-3 py-2 mb-3">PLANES</span>
            <h2 className="display-5 fw-bold mb-3">Planes adaptados a tu negocio</h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
              Elige el plan que mejor se ajuste a tus necesidades de envío
            </p>
          </div>

          <div className="row g-4 align-items-end">
            {paquetes.map((paquete, index) => (
              <div className="col-md-4" key={index}>
                <div className={`card h-100 border-0 shadow-sm ${paquete.destacado ? 'border border-3 border-warning' : ''}`}>
                  {paquete.destacado && (
                    <div className="position-absolute top-0 start-50 translate-middle badge bg-warning text-dark px-4 py-2">
                      MÁS POPULAR
                    </div>
                  )}
                  <div className="card-body p-4 text-center">
                    <h3 className="h5 text-secondary fw-normal mb-3">{paquete.nombre}</h3>
                    <div className="display-4 fw-bold mb-2">
                      {paquete.precio}
                      <span className="fs-6 fw-normal text-secondary">{paquete.periodo}</span>
                    </div>
                    <p className="text-secondary small mb-4">{paquete.desc}</p>

                    <ul className="list-unstyled text-start mb-4">
                      {paquete.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-center gap-2 mb-2">
                          {feature.included ? (
                            <Check size={18} className="text-success" />
                          ) : (
                            <X size={18} className="text-danger" />
                          )}
                          <span className={feature.included ? '' : 'text-muted'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button className={`btn btn-${paquete.color} w-100 py-3 fw-semibold`}>
                      Seleccionar plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className='my-5' />
      </section>

      <hr className='my-5' />

      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge bg-info text-white px-3 py-2 mb-3">PROCESO</span>
            <h2 className="display-5 fw-bold mb-3">¿Cómo funciona?</h2>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
              Te acompañamos en cada paso del proceso, desde la solicitud hasta la entrega final
            </p>
          </div>

          <div className="position-relative">
            {/* Línea conectora */}
            <div className="position-absolute top-0 start-50 translate-middle-x bg-primary"
              style={{ width: '4px', height: '100%', opacity: 0.2 }}></div>

            <div className="row g-5">
              {pasos.map((paso, index) => (
                <div className="col-md-6" key={index}>
                  <div className={`d-flex gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-end'}`}>
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded-circle p-3 position-relative shadow"
                        style={{ width: '70px', height: '70px' }}>
                        {paso.icon}
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="h4 fw-bold mb-2">{paso.titulo}</h3>
                      <p className="text-secondary mb-2">{paso.desc}</p>
                      <span className="badge bg-light text-dark px-3 py-2">
                        ⏱️ {paso.tiempo}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-5 pt-5">
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
              Comenzar mi solicitud
            </button>
          </div>
        </div>
        <hr className='my-5' />
      </section>


       <section className="py-5">
            <hr className='my-5' />
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3">Servicios</h2>
                    <p className="fs-4 text-secondary">Descubre todo lo que podemos hacer por tu negocio</p>
                </div>

                <div className="row g-4">
                    {servicios2.map((servicio, index) => (
                        <div className="col-md-6 col-lg-3" key={index}
                             onMouseEnter={() => setHoveredIndex(index)}
                             onMouseLeave={() => setHoveredIndex(null)}>
                            <div className="position-relative overflow-hidden rounded-4"
                                 style={{ 
                                     height: hoveredIndex === index ? '400px' : '300px',
                                     transition: 'height 0.5s ease',
                                     backgroundColor: servicio.color,
                                     cursor: 'pointer'
                                 }}>
                                
                                {/* Contenido frontal */}
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white p-4">
                                    <div className="mb-4">
                                        {servicio.icon}
                                    </div>
                                    <h3 className="h3 fw-bold mb-2 text-center">{servicio.titulo}</h3>
                                    <p className="text-center opacity-90 mb-0">{servicio.desc}</p>
                                </div>

                                {/* Contenido expandido */}
                                {hoveredIndex === index && (
                                    <div className="position-absolute bottom-0 start-0 w-100 bg-white p-4"
                                         style={{ 
                                             animation: 'slideUp 0.5s ease',
                                             borderTop: `4px solid ${servicio.color}`
                                         }}>
                                        <h4 className="fw-bold mb-3" style={{ color: servicio.color }}>Detalles:</h4>
                                        <ul className="list-unstyled mb-3">
                                            <li className="d-flex align-items-center gap-2 mb-2">
                                                <span className="text-success">✓</span> {servicio.stats}
                                            </li>
                                            <li className="d-flex align-items-center gap-2 mb-2">
                                                <span className="text-success">✓</span> Rastreo GPS
                                            </li>
                                            <li className="d-flex align-items-center gap-2 mb-2">
                                                <span className="text-success">✓</span> Soporte 24/7
                                            </li>
                                        </ul>
                                        <button className="btn btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                                                style={{ backgroundColor: servicio.color, color: 'white' }}>
                                            Cotizar <ArrowRight size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='my-5' />

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    </>
  )
}

export default Servicios