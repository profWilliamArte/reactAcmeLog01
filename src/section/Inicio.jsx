import React, { useState } from 'react'
// hero 2
import { Truck, Shield, Clock, MapPin } from 'lucide-react';
// hero 3
const servicios = [
    { icon: '📦', title: 'Carga General', desc: 'Transporte de mercancía general' },
    { icon: '❄️', title: 'Refrigerada', desc: 'Productos con temperatura controlada' },
    { icon: '⚡', title: 'Express', desc: 'Entregas urgentes 24/48h' },
    { icon: '🏗️', title: 'Maquinaria', desc: 'Equipos y maquinaria pesada' }
];

// hero 4
import { ArrowRight } from 'lucide-react';

// hero 5
import { ChevronRight } from 'lucide-react';


// hero 6

import { Package, Globe, /* Truck,Clock,  ArrowRight*/ } from 'lucide-react';

// hero 7

import { ChevronDown } from 'lucide-react';

// hero 9
import { Leaf, Wind, Droplet, Sun } from 'lucide-react';


const Inicio = () => {

    const [activeCard, setActiveCard] = useState(null); // para el hero 6

    // para el hero 6
    const cards = [
        { id: 1, icon: <Truck size={40} />, title: 'Flota Moderna', desc: '20 unidades con GPS', color: '#4361ee' },
        { id: 2, icon: <Package size={40} />, title: 'Carga Segura', desc: 'Seguro incluido', color: '#f72585' },
        { id: 3, icon: <Globe size={40} />, title: 'Cobertura', desc: 'Todo el país', color: '#4cc9f0' },
        { id: 4, icon: <Clock size={40} />, title: '24/7', desc: 'Soporte permanente', color: '#f8961e' }
    ];

    // para el hero 7

    const milestones = [
        { year: '2009', text: 'Fundación de ACME' },
        { year: '2015', text: 'Expansión nacional' },
        { year: '2020', text: 'Flota 100% renovada' },
        { year: '2024', text: '+5000 clientes' }
    ];

    // para el hero 9
    const stats = [
        { icon: <Leaf />, value: '30%', label: 'Reducción CO2' },
        { icon: <Wind />, value: '100%', label: 'Flota ecológica' },
        { icon: <Droplet />, value: '5000L', label: 'Agua ahorrada' },
        { icon: <Sun />, value: '100%', label: 'Energía solar' }
    ];


    return (
        <>

            <section className="d-flex align-items-center justify-content-center min-vh-100   overflow-hidden">
                {/* Background Image */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-overlay"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.3
                    }}
                ></div>

                {/* Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

                {/* Content */}
                <div className="position-relative z-index-1">
                    <div className="row justify-content-center text-center text-white">
                        <div className="col-lg-10 col-xl-8">
                            <h1 className="display-3 fw-bold mb-4 lh-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                ACME LOGÍSTICA C.A.
                            </h1>
                            <p className="lead fs-3 mb-5 opacity-90">
                                Transporte terrestre de carga nacional con más de <strong>15 años</strong> de experiencia.
                                Seguridad, puntualidad y rastreo GPS en tiempo real.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                <a
                                    href="mailto:cotizaciones@acmelogistica.com.ve?subject=Cotización%20Logística"
                                    className="btn btn-warning btn-lg px-5 fw-semibold"
                                >
                                    Solicitar Cotización
                                </a>
                                <a
                                    href="https://wa.me/584129876543?text=Hola,%20quiero%20una%20cotización%20para%20transporte%20de%20carga"
                                    className="btn btn-outline-light btn-lg px-5"
                                >
                                    WhatsApp +58-412-987.65.43
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Open+Sans:wght@400;500&display=swap');
        
        .bg-overlay {
          z-index: 1;
        }
        
        .z-index-1 {
          z-index: 2;
        }
        
        h1 {
          font-weight: 700 !important;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        
        .lead {
          font-family: 'Open Sans', sans-serif;
          font-weight: 500;
        }
        
        .btn-warning {
          background-color: #FFB400;
          border-color: #FFB400;
        }
        
        .btn-warning:hover {
          background-color: #e6a500;
          border-color: #e6a500;
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          .fs-3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
            </section>

            <hr className='my-5' />



            <section className="min-vh-100 d-flex align-items-center bg-white overflow-hidden">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* Columna izquierda - Contenido */}
                        <div className="col-lg-6">
                            <div className="pe-lg-5">
                                <span className="badge bg-warning text-dark px-3 py-2 mb-4 fw-semibold">
                                    ★ 15 AÑOS DE EXPERIENCIA
                                </span>

                                <h1 className="display-4 fw-bold mb-4 lh-1 text-dark">
                                    Transporte seguro y <span className="text-warning">confiable</span> en todo el país
                                </h1>

                                <p className="lead text-secondary mb-5 fs-4">
                                    Somos tu socio estratégico en logística, ofreciendo soluciones de transporte terrestre con tecnología de punta y el mejor equipo humano.
                                </p>

                                {/* Features */}
                                <div className="row g-4 mb-5">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-warning bg-opacity-10 p-3 rounded-3">
                                                <Truck size={28} className="text-warning" />
                                            </div>
                                            <div>
                                                <h5 className="fw-bold mb-1">Flota propia</h5>
                                                <p className="text-secondary mb-0">20+ unidades</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-warning bg-opacity-10 p-3 rounded-3">
                                                <Shield size={28} className="text-warning" />
                                            </div>
                                            <div>
                                                <h5 className="fw-bold mb-1">Seguro incluido</h5>
                                                <p className="text-secondary mb-0">Cobertura total</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-warning bg-opacity-10 p-3 rounded-3">
                                                <Clock size={28} className="text-warning" />
                                            </div>
                                            <div>
                                                <h5 className="fw-bold mb-1">Entrega puntual</h5>
                                                <p className="text-secondary mb-0">99% cumplimiento</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-warning bg-opacity-10 p-3 rounded-3">
                                                <MapPin size={28} className="text-warning" />
                                            </div>
                                            <div>
                                                <h5 className="fw-bold mb-1">GPS en vivo</h5>
                                                <p className="text-secondary mb-0">Rastreo 24/7</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Botones */}
                                <div className="d-flex gap-3">
                                    <a href="#contacto" className="btn btn-warning btn-lg px-4 fw-semibold">
                                        Cotizar ahora
                                    </a>
                                    <a href="#servicios" className="btn btn-outline-secondary btn-lg px-4">
                                        Conocer más
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Columna derecha - Imagen con estadísticas */}
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img
                                    src="img/semi-truck-highway-sunset.jpg"
                                    alt="Camión ACME"
                                    className="img-fluid rounded-4 shadow-lg"
                                />

                                {/* Tarjeta flotante */}
                                <div className="position-absolute bottom-0 start-0 bg-white p-4 rounded-4 shadow m-4" style={{ maxWidth: '250px' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div>
                                            <h2 className="display-6 fw-bold text-warning mb-0">+15</h2>
                                            <p className="text-secondary mb-0">Años de experiencia</p>
                                        </div>
                                        <div className="vr" style={{ height: '50px' }}></div>
                                        <div>
                                            <h2 className="display-6 fw-bold text-warning mb-0">5k</h2>
                                            <p className="text-secondary mb-0">Clientes satisfechos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='my-5' />


            <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
                {/* Video de fondo */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    style={{ filter: 'brightness(0.4)' }}
                >
                    <source src="https://www.pexels.com/download/video/855823/" type="video/mp4" />
                </video>

                {/* Contenido */}
                <div className="position-relative container text-white text-center">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8">
                            <h1 className="display-2 fw-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                LOGÍSTICA <span className="border-bottom border-3 border-warning pb-2">INTELIGENTE</span>
                            </h1>
                            <p className="fs-4 mb-5 opacity-90">
                                Conectamos tu negocio con el futuro del transporte
                            </p>
                        </div>
                    </div>

                    {/* Cards de servicios */}
                    <div className="row g-4 justify-content-center">
                        {servicios.map((servicio, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-4 h-100 border border-white border-opacity-25 hover-lift">
                                    <div className="display-1 mb-3">{servicio.icon}</div>
                                    <h3 className="h4 fw-bold mb-2">{servicio.title}</h3>
                                    <p className="mb-0 opacity-75">{servicio.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Botón */}
                    <div className="mt-5">
                        <a href="#contacto" className="btn btn-warning btn-lg px-5 py-3 fw-semibold">
                            Solicitar información
                        </a>
                    </div>
                </div>

                <style jsx>{`
                .backdrop-blur {
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                }
            `}</style>
            </section>

            <hr className='my-5' />

            <section className="min-vh-100 d-flex align-items-center bg-light overflow-hidden">
                <div className="container-fluid px-0">
                    <div className="row g-0">
                        {/* Lado izquierdo - Contenido */}
                        <div className="col-lg-6 d-flex align-items-center" style={{ minHeight: '100vh' }}>
                            <div className="p-5 p-xl-5 ms-lg-5">
                                <div className="mb-4">
                                    <span className="badge bg-primary text-white px-4 py-2 rounded-pill mb-4">
                                        🔥 NUEVA FLOTA 2024
                                    </span>
                                    <h1 className="display-3 fw-bold mb-4">
                                        La <span className="text-primary">fuerza</span> que mueve tu carga
                                    </h1>
                                    <p className="lead text-secondary fs-3">
                                        Tecnología, experiencia y compromiso en cada kilómetro.
                                    </p>
                                </div>

                                {/* Lista con check */}
                                <div className="mb-5">
                                    {['Rastreo satelital en tiempo real', 'Seguro de carga incluido', 'Entregas garantizadas'].map((item, i) => (
                                        <div key={i} className="d-flex align-items-center gap-3 mb-3">
                                            <div className="bg-success bg-opacity-10 text-success p-2 rounded-circle">
                                                ✓
                                            </div>
                                            <span className="fs-5">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="d-flex gap-3">
                                    <a href="#contacto" className="btn btn-primary btn-lg px-5">
                                        Cotizar
                                    </a>
                                    <a href="#servicios" className="btn btn-link text-decoration-none fw-semibold d-flex align-items-center gap-2">
                                        Ver servicios <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Lado derecho - Imagen con forma diagonal */}
                        <div className="col-lg-6 position-relative overflow-hidden" style={{ minHeight: '100vh' }}>
                            <div className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    backgroundImage: 'url("img/global-logistics-transportation-network-sunset.jpg")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'top',
                                    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <hr className='my-5' />


            <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
                {/* Fondo degradado */}
                <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }}>
                </div>

                {/* Círculos decorativos */}
                <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
                    <div className="position-absolute bg-white rounded-circle opacity-10"
                        style={{ width: '300px', height: '300px', top: '-150px', right: '-150px' }}></div>
                    <div className="position-absolute bg-white rounded-circle opacity-10"
                        style={{ width: '500px', height: '500px', bottom: '-250px', left: '-250px' }}></div>
                </div>

                {/* Contenido */}
                <div className="position-relative container text-white">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 text-center">
                            <h1 className="display-1 fw-light mb-4" style={{ letterSpacing: '-2px' }}>
                                <span className="fw-bold">ACME</span>
                            </h1>
                            <p className="fs-3 text-white text-opacity-90 mb-5 fw-light">
                                Logística que simplifica tu negocio
                            </p>

                            {/* Línea decorativa */}
                            <div className="d-flex justify-content-center gap-2 mb-5">
                                <div className="bg-white" style={{ width: '50px', height: '2px' }}></div>
                                <div className="bg-white" style={{ width: '50px', height: '2px', opacity: 0.5 }}></div>
                                <div className="bg-white" style={{ width: '50px', height: '2px', opacity: 0.2 }}></div>
                            </div>

                            {/* Botón minimalista */}
                            <a href="#contacto"
                                className="btn btn-outline-light btn-lg px-5 py-3 rounded-0 fw-light d-inline-flex align-items-center gap-2 mx-auto">
                                Comenzar <ChevronRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <hr className='my-5' />

            <section className="min-vh-100 d-flex align-items-center bg-dark position-relative overflow-hidden">
                {/* Fondo con patrón */}
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        backgroundSize: '60px 60px'
                    }}>
                </div>

                <div className="container position-relative">
                    {/* Título */}
                    <div className="text-center mb-5">
                        <span className="badge bg-warning text-dark px-4 py-2 mb-3">ACME LOGÍSTICA</span>
                        <h2 className="display-4 fw-bold text-white">Soluciones que mueven tu negocio</h2>
                    </div>

                    {/* Mosaico de tarjetas */}
                    <div className="row g-4">
                        {cards.map((card) => (
                            <div className="col-md-6 col-lg-3" key={card.id}>
                                <div
                                    className="card h-100 border-0 rounded-4 overflow-hidden cursor-pointer"
                                    style={{
                                        backgroundColor: card.color,
                                        transform: activeCard === card.id ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'all 0.3s ease',
                                        minHeight: '300px'
                                    }}
                                    onMouseEnter={() => setActiveCard(card.id)}
                                    onMouseLeave={() => setActiveCard(null)}
                                >
                                    <div className="card-body d-flex flex-column justify-content-between p-4">
                                        <div className="text-white mb-4">
                                            {card.icon}
                                        </div>
                                        <div>
                                            <h3 className="h3 fw-bold text-white mb-2">{card.title}</h3>
                                            <p className="text-white opacity-90 mb-3">{card.desc}</p>
                                            <div className="d-flex align-items-center text-white">
                                                <span className="small">Saber más</span>
                                                <ArrowRight size={16} className="ms-2" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Efecto hover */}
                                    {activeCard === card.id && (
                                        <div className="position-absolute bottom-0 start-0 w-100 h-50"
                                            style={{
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                                            }}>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-5">
                        <button className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-semibold">
                            Cotizar ahora
                        </button>
                    </div>
                </div>
            </section>

            <hr className='my-5' />

            <section className="position-relative overflow-hidden">
                {/* Sección hero */}
                <div className="min-vh-100 d-flex align-items-center position-relative"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60"></div>

                    <div className="container position-relative text-white">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="display-2 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    15 años moviendo a Venezuela
                                </h1>
                                <p className="fs-3 mb-5 opacity-90">
                                    Una historia de compromiso y evolución constante
                                </p>

                                {/* Timeline visual */}
                                <div className="d-flex justify-content-between mt-5 pt-5 position-relative">
                                    {milestones.map((item, index) => (
                                        <div key={index} className="text-center position-relative" style={{ zIndex: 2 }}>
                                            <div className="bg-warning rounded-circle mb-3 mx-auto"
                                                style={{ width: '20px', height: '20px' }}></div>
                                            <div className="fw-bold fs-5">{item.year}</div>
                                            <div className="small opacity-75" style={{ maxWidth: '120px' }}>{item.text}</div>
                                        </div>
                                    ))}
                                    {/* Línea conectora */}
                                    <div className="position-absolute top-0 start-0 w-100 bg-warning"
                                        style={{ height: '2px', top: '10px', opacity: 0.3 }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 text-white animate-bounce">
                        <ChevronDown size={32} />
                    </div>
                </div>

                {/* Segunda sección */}
                <div className="min-vh-50 d-flex align-items-center bg-light py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="display-5 fw-bold mb-4">Más que transporte, <span className="text-warning">una alianza</span></h2>
                                <p className="lead text-secondary">Cada kilómetro recorrido es un paso más en nuestra misión de conectar personas y negocios.</p>
                            </div>
                            <div className="col-lg-6">
                                <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Historia"
                                    className="img-fluid rounded-3 shadow" />
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <hr className='my-5' />

            <section className="min-vh-100 d-flex align-items-center bg-black position-relative overflow-hidden">
                {/* Efecto de líneas grid */}
                <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage: `
                         linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                     `,
                        backgroundSize: '50px 50px',
                        transform: 'perspective(500px) rotateX(60deg)',
                        transformOrigin: 'top',
                        top: '-50%'
                    }}>
                </div>

                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            {/* Texto estilo terminal */}
                            <div className="mb-5">
                                <span className="text-cyan-400 fw-light font-monospace small d-block mb-3">
                                    &gt; SYSTEM INITIALIZING...
                                </span>
                                <span className="text-cyan-400 fw-light font-monospace small d-block mb-4">
                                    &gt; LOADING LOGISTICS MODULE...
                                </span>
                            </div>

                            <h1 className="display-1 fw-bold text-white mb-4 font-monospace">
                                <span className="text-warning">ACME</span>_LOGISTICS
                            </h1>

                            <div className="text-cyan-400 font-monospace mb-5">
                                <p className="fs-4 mb-2">[CONNECTING TO NETWORK...]</p>
                                <p className="fs-5 opacity-75">Status: <span className="text-success">ONLINE</span> | Nodes: 20 | Coverage: 100%</p>
                            </div>

                            {/* Código falso animado */}
                            <div className="bg-dark bg-opacity-50 p-4 rounded-3 text-start mb-5 border border-cyan border-opacity-25">
                                <pre className="text-cyan-400 small mb-0 font-monospace">
                                    {`> const shipment = {
                            origin: "Caracas",
                            destination: "Maracaibo",
                            priority: "high",
                            gps: true
                        };
                        > shipment.track();
                        📍 En tránsito - ETA: 2h 30m`}
                                </pre>
                                <div className="typing-cursor mt-2 text-cyan-400">_</div>
                            </div>

                            {/* Botones estilo terminal */}
                            <div className="d-flex gap-3 justify-content-center">
                                <button className="btn btn-outline-warning btn-lg px-5 font-monospace border-2">
                                    &gt; COTIZAR
                                </button>
                                <button className="btn btn-outline-cyan btn-lg px-5 font-monospace border-2">
                                    &gt; RASTREAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                .text-cyan {
                    color: #00ffff;
                }
                .text-cyan-400 {
                    color: #4dd0e1;
                }
                .border-cyan {
                    border-color: #00ffff;
                }
                .btn-outline-cyan {
                    color: #00ffff;
                    border-color: #00ffff;
                }
                .btn-outline-cyan:hover {
                    background-color: #00ffff;
                    color: black;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .typing-cursor {
                    animation: blink 1s infinite;
                    font-size: 20px;
                    line-height: 1;
                }
            `}</style>
            </section>

            <hr className='my-5' />

            <section className="min-vh-100 d-flex align-items-center position-relative"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                {/* Overlay verde suave */}
                <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.7), rgba(27, 94, 32, 0.8))' }}>
                </div>

                <div className="container position-relative">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 text-white">
                            <span className="badge bg-success bg-opacity-25 text-white border border-white border-opacity-25 px-4 py-2 mb-4 rounded-pill">
                                🌱 LOGÍSTICA SOSTENIBLE
                            </span>

                            <h1 className="display-3 fw-bold mb-4">
                                Transporte que <span className="border-bottom border-3 border-success-light">respeta</span> el planeta
                            </h1>

                            <p className="fs-4 mb-5 opacity-90">
                                Comprometidos con el medio ambiente, innovamos para ofrecer soluciones logísticas eco-friendly sin comprometer la eficiencia.
                            </p>

                            {/* Stats con iconos */}
                            <div className="row g-4">
                                {stats.map((stat, index) => (
                                    <div className="col-6 col-md-3" key={index}>
                                        <div className="text-center">
                                            <div className="bg-white bg-opacity-10 rounded-circle p-3 mb-2 d-inline-block">
                                                {React.cloneElement(stat.icon, { size: 24 })}
                                            </div>
                                            <div className="fw-bold fs-4">{stat.value}</div>
                                            <div className="small opacity-75">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {/* Tarjeta de certificación */}
                            <div className="bg-white bg-opacity-10 backdrop-blur p-5 rounded-4 text-white border border-white border-opacity-20">
                                <h3 className="h2 fw-bold mb-4">Certificaciones</h3>
                                <div className="d-flex flex-wrap gap-3 mb-4">
                                    <span className="badge bg-success px-3 py-2">ISO 14001</span>
                                    <span className="badge bg-success px-3 py-2">Carbono Neutral</span>
                                    <span className="badge bg-success px-3 py-2">Green Logistics</span>
                                </div>
                                <p className="mb-4 opacity-90">
                                    "Somos la primera empresa de logística en Venezuela en obtener la certificación de carbono neutralidad."
                                </p>
                                <button className="btn btn-outline-light rounded-pill px-4">
                                    Conocer más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                .backdrop-blur {
                    backdrop-filter: blur(10px);
                }
                .border-success-light {
                    border-color: #81c784 !important;
                }
            `}</style>
            </section>

            <hr className='my-5' />

            <section className="min-vh-100 bg-white">
                {/* Barra superior editorial */}
                <div className="bg-dark text-white py-2">
                    <div className="container d-flex justify-content-between small">
                        <span>ACME LOGÍSTICA · EDICIÓN 2024</span>
                        <span>TRANSPORTE · CARGA · LOGÍSTICA</span>
                    </div>
                </div>

                <div className="container">
                    <div className="row min-vh-100 align-items-center">
                        <div className="col-lg-6">
                            {/* Número de edición */}
                            <div className="mb-5">
                                <span className="text-muted fw-light small">VOL. 01 · NO. 24</span>
                            </div>

                            {/* Título gigante estilo revista */}
                            <h1 className="display-1 fw-black text-uppercase lh-1 mb-4"
                                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(3rem, 15vw, 8rem)' }}>
                                <span className="d-block">EL FUTURO</span>
                                <span className="d-block text-primary">DEL MOVER</span>
                                <span className="d-block text-secondary">CARGA</span>
                            </h1>

                            {/* Línea decorativa */}
                            <div className="bg-primary mb-4" style={{ width: '100px', height: '4px' }}></div>

                            {/* Subtítulo */}
                            <p className="fs-4 text-secondary mb-5" style={{ maxWidth: '500px' }}>
                                Innovación, tecnología y compromiso en cada entrega. La nueva era de la logística ha llegado.
                            </p>

                            {/* Botones editoriales */}
                            <div className="d-flex gap-3">
                                <button className="btn btn-dark btn-lg rounded-0 px-5 fw-semibold">
                                    LEER MÁS
                                </button>
                                <button className="btn btn-outline-dark btn-lg rounded-0 px-5">
                                    SUSCRIBIRSE
                                </button>
                            </div>

                            {/* Footer editorial */}
                            <div className="mt-5 pt-5 d-flex gap-4 text-muted small">
                                <span>● 15 AÑOS</span>
                                <span>● 5000+ CLIENTES</span>
                                <span>● 20 UNIDADES</span>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {/* Imagen estilo collage */}
                            <div className="position-relative">
                                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Truck"
                                    className="img-fluid" />

                                {/* Recuadro de cita */}
                                <div className="position-absolute bottom-0 end-0 bg-primary text-white p-4 p-lg-5"
                                    style={{ maxWidth: '300px' }}>
                                    <p className="fs-5 mb-0">
                                        "La logística no es solo mover cosas, es conectar personas."
                                    </p>
                                    <div className="mt-3 small opacity-75">— Fundador ACME</div>
                                </div>

                                {/* Número de página */}
                                <div className="position-absolute top-0 start-0 bg-dark text-white px-3 py-2">
                                    PÁGINA 01
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>


    )
}

export default Inicio