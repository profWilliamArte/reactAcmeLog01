// testimonio 1
import { Star, Quote, User } from 'lucide-react';


// testimonios 2
import React, { useState } from 'react';
import { /*Star, Quote, User,*/ ChevronLeft, ChevronRight, Building, Calendar, ThumbsUp } from 'lucide-react';

const Testimonios = () => {
  // para testimonio 1
  const testimonios = [
    {
      nombre: 'María González',
      empresa: 'Distribuidora MG',
      cargo: 'Gerente General',
      testimonio: 'Excelente servicio, siempre puntuales y con la carga en perfectas condiciones. Llevamos 3 años trabajando con ACME y nunca hemos tenido un problema.',
      rating: 5,
      fecha: '15/01/2024',
      imagen: 'https://images.unsplash.com/photo-1494790108755-2f93e7b22df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      nombre: 'Carlos Rodríguez',
      empresa: 'Importaciones CR',
      cargo: 'Director de Logística',
      testimonio: 'El sistema de rastreo GPS en tiempo real nos da tranquilidad absoluta. Sabemos dónde está nuestra carga en todo momento. Totalmente recomendados.',
      rating: 5,
      fecha: '20/12/2023',
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      nombre: 'Ana Martínez',
      empresa: 'Alimentos del Valle',
      cargo: 'Jefa de Compras',
      testimonio: 'La flota refrigerada mantiene nuestros productos a la temperatura exacta. El personal es muy profesional y siempre dispuesto a ayudar.',
      rating: 5,
      fecha: '05/02/2024',
      imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      nombre: 'José Pérez',
      empresa: 'Ferretería JP',
      cargo: 'Propietario',
      testimonio: 'Excelente relación calidad-precio. Han sido un aliado estratégico para nuestro crecimiento. Recomiendo sus servicios sin dudar.',
      rating: 4,
      fecha: '10/01/2024',
      imagen: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-warning fill-warning' : 'text-secondary'}
      />
    ));
  };

  // para testimonio 2

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonios2 = [
    {
      id: 1,
      nombre: 'María González',
      empresa: 'Distribuidora MG',
      cargo: 'Gerente General',
      testimonio: 'ACME Logística ha sido un socio fundamental para nuestro crecimiento. Su flota moderna y el sistema de rastreo GPS nos han permitido optimizar nuestra cadena de suministro. El equipo siempre está dispuesto a resolver cualquier eventualidad, lo que nos da una tranquilidad invaluable.',
      rating: 5,
      fecha: '15/01/2024',
      imagen: 'https://images.unsplash.com/photo-1494790108755-2f93e7b22df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      destacado: true,
      proyectos: 45
    },
    {
      id: 2,
      nombre: 'Carlos Rodríguez',
      empresa: 'Importaciones CR',
      cargo: 'Director de Logística',
      testimonio: 'Trabajamos con ACME desde 2018 y la experiencia ha sido excelente. La comunicación es fluida, las entregas son puntuales y el servicio post-venta es excepcional. Han superado nuestras expectativas en cada envío.',
      rating: 5,
      fecha: '20/12/2023',
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      destacado: true,
      proyectos: 120
    },
    {
      id: 3,
      nombre: 'Ana Martínez',
      empresa: 'Alimentos del Valle',
      cargo: 'Jefa de Compras',
      testimonio: 'La flota refrigerada de ACME mantiene nuestros productos a la temperatura exacta. El personal está altamente capacitado y siempre dispuesto a ayudar. Llevamos 2 años trabajando juntos y no podríamos estar más satisfechos.',
      rating: 5,
      fecha: '05/02/2024',
      imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      destacado: false,
      proyectos: 30
    },
    {
      id: 4,
      nombre: 'José Pérez',
      empresa: 'Ferretería JP',
      cargo: 'Propietario',
      testimonio: 'Como pequeña empresa, encontrar un aliado logístico confiable era crucial. ACME nos ha brindado un servicio personalizado y tarifas competitivas. Han sido parte de nuestro crecimiento.',
      rating: 4,
      fecha: '10/01/2024',
      imagen: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      destacado: false,
      proyectos: 15
    }
  ];

  const testimoniosDestacados = testimonios2.filter(t => t.destacado);

  const nextTestimonio = () => {
    setActiveIndex((prev) => (prev === testimoniosDestacados.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonio = () => {
    setActiveIndex((prev) => (prev === 0 ? testimoniosDestacados.length - 1 : prev - 1));
  };

  const renderStars2 = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-warning fill-warning' : 'text-secondary'}
      />
    ));
  };

  return (
    <>
      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Lo que dicen nuestros clientes</h2>
            <p className="lead text-secondary">Más de 15 años respaldan nuestro compromiso</p>
          </div>

          <div className="row">
            {testimonios.map((testimonio, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex gap-2 mb-3">
                      {renderStars(testimonio.rating)}
                    </div>

                    <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      "{testimonio.testimonio}"
                    </p>

                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="fw-bold mb-1">{testimonio.nombre}</h6>
                        <small className="text-secondary d-block">{testimonio.empresa}</small>
                        <small className="text-secondary">{testimonio.cargo}</small>
                      </div>
                    </div>

                    <div className="mt-3 text-end">
                      <small className="text-secondary">{testimonio.fecha}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de calificaciones */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-light p-4 rounded-3 text-center">
                <h3 className="display-4 fw-bold text-primary">4.8/5</h3>
                <div className="d-flex justify-content-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-warning fill-warning" />
                  ))}
                </div>
                <p className="text-secondary mb-0">Basado en 150+ opiniones de clientes</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-5' />
      </section>

      <hr className='my-5' />

      <section className="py-5 bg-light">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <Quote size={48} className="text-primary opacity-25 mb-3" />
            <h2 className="display-5 fw-bold mb-3">Testimonios de Clientes</h2>
            <p className="lead text-secondary">La opinión de quienes confían en nosotros</p>
          </div>

          {/* Testimonio destacado con slider */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg overflow-hidden">
                <div className="row g-0">
                  <div className="col-md-5">
                    <div className="position-relative h-100">
                      <img
                        src={testimoniosDestacados[activeIndex].imagen}
                        alt={testimoniosDestacados[activeIndex].nombre}
                        className="img-fluid h-100 w-100"
                        style={{ objectFit: 'cover', minHeight: '400px' }}
                      />
                      <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark">
                        <div className="d-flex align-items-center text-white gap-3">
                          <User size={16} />
                          <span>Cliente destacado</span>
                          <ThumbsUp size={16} />
                          <span>{testimoniosDestacados[activeIndex].proyectos}+ envíos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-4 p-lg-5">
                      <div className="d-flex justify-content-between mb-4">
                        <div>
                          <h3 className="h2 fw-bold mb-2">{testimoniosDestacados[activeIndex].nombre}</h3>
                          <div className="d-flex align-items-center gap-3">
                            <Building size={16} className="text-secondary" />
                            <span className="text-secondary">{testimoniosDestacados[activeIndex].empresa}</span>
                          </div>
                          <div className="d-flex align-items-center gap-3 mt-1">
                            <Calendar size={16} className="text-secondary" />
                            <span className="text-secondary">{testimoniosDestacados[activeIndex].fecha}</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <div className="d-flex gap-1 mb-2">
                            {renderStars2(testimoniosDestacados[activeIndex].rating)}
                          </div>
                          <span className="badge bg-primary">{testimoniosDestacados[activeIndex].cargo}</span>
                        </div>
                      </div>

                      <Quote size={32} className="text-primary opacity-25 mb-2" />

                      <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                        "{testimoniosDestacados[activeIndex].testimonio}"
                      </p>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-outline-primary rounded-circle p-2"
                            onClick={prevTestimonio}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            className="btn btn-outline-primary rounded-circle p-2"
                            onClick={nextTestimonio}
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                        <div>
                          {testimoniosDestacados.map((_, index) => (
                            <button
                              key={index}
                              className={`btn p-1 rounded-circle mx-1 ${index === activeIndex ? 'bg-primary' : 'bg-secondary'}`}
                              style={{ width: '10px', height: '10px' }}
                              onClick={() => setActiveIndex(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonios secundarios en grid */}
          <h3 className="h3 fw-bold text-center mb-4">Más opiniones de clientes</h3>
          <div className="row">
            {testimonios2.filter(t => !t.destacado).map((testimonio, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="rounded-circle"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div>
                        <h5 className="fw-bold mb-1">{testimonio.nombre}</h5>
                        <small className="text-secondary d-block">{testimonio.empresa}</small>
                        <small className="text-secondary">{testimonio.cargo}</small>
                      </div>
                    </div>

                    <div className="d-flex gap-1 mb-3">
                      {renderStars2(testimonio.rating)}
                    </div>

                    <p className="text-secondary mb-3" style={{ fontSize: '0.95rem' }}>
                      "{testimonio.testimonio.substring(0, 100)}..."
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-secondary">{testimonio.fecha}</small>
                      <button className="btn btn-link text-primary p-0">Leer más</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Estadísticas */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-white p-4 rounded-3 shadow-sm">
                <div className="row text-center">
                  <div className="col-4">
                    <h3 className="display-6 fw-bold text-primary">150+</h3>
                    <small>Clientes satisfechos</small>
                  </div>
                  <div className="col-4">
                    <h3 className="display-6 fw-bold text-primary">4.8/5</h3>
                    <div className="d-flex justify-content-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-warning fill-warning" />
                      ))}
                    </div>
                  </div>
                  <div className="col-4">
                    <h3 className="display-6 fw-bold text-primary">15</h3>
                    <small>Años de experiencia</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
                .bg-gradient-dark {
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                }
            `}</style>
        <hr className='my-5' />
      </section>
    </>
  )
}

export default Testimonios