import React, { useState } from 'react'

// para flota 1
import { Truck, Gauge, Weight, Fuel, Users, Calendar } from 'lucide-react';

// para flota 2
import { /*Truck, Gauge, Weight,  Fuel,*/ Thermometer, Wifi, Shield, Clock } from 'lucide-react';


// para flota 3
import { ChevronLeft, ChevronRight, MapPin, User /*Truck,  Calendar  */ } from 'lucide-react';



// para la flota 4 
import { /*Truck, */ Check, X, Package, Zap, Snowflake } from 'lucide-react';


// para la flota 5
import { /* MapPin, Truck, Clock, Users,*/ Navigation, Phone } from 'lucide-react';

const Flota = () => {
    // patra la flota 1 
    const vehiculos = [
        {
            nombre: 'Turbo 3000',
            tipo: 'Camión 3/4',
            capacidad: '3.5 toneladas',
            imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            año: 2023,
            consumo: '35 L/100km',
            transmision: 'Manual 6 vel',
            disponible: true
        },
        {
            nombre: 'CargoMaster',
            tipo: 'Camión 3/4',
            capacidad: '5 toneladas',
            imagen: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            año: 2024,
            consumo: '40 L/100km',
            transmision: 'Manual 8 vel',
            disponible: true
        },
        {
            nombre: 'FrigoPlus',
            tipo: 'Refrigerado',
            capacidad: '4 toneladas',
            imagen: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            año: 2023,
            consumo: '45 L/100km',
            transmision: 'Manual 6 vel',
            disponible: false
        },
        {
            nombre: 'MegaTrailer',
            tipo: 'Trailer',
            capacidad: '15 toneladas',
            imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            año: 2024,
            consumo: '50 L/100km',
            transmision: 'Manual 12 vel',
            disponible: true
        }
    ];

    // para la flota 2
    const [selectedTipo, setSelectedTipo] = useState('todos');

    const tipos = [
        { id: 'todos', label: 'Todos' },
        { id: '3/4', label: 'Camiones 3/4' },
        { id: 'trailer', label: 'Trailers' },
        { id: 'refrigerado', label: 'Refrigerados' }
    ];

    const vehiculos2 = [
        {
            id: 1,
            nombre: 'International HV Series',
            tipo: '3/4',
            imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            specs: [
                { icon: <Weight size={18} />, label: 'Capacidad', value: '3.5 ton' },
                { icon: <Gauge size={18} />, label: 'Potencia', value: '350 HP' },
                { icon: <Fuel size={18} />, label: 'Tanque', value: '300 L' },
                { icon: <Clock size={18} />, label: 'Año', value: '2024' }
            ],
            equipamiento: ['GPS', 'Aire acondicionado', 'Cámara reversa', 'ABS'],
            disponible: 5
        },
        {
            id: 2,
            nombre: 'Freightliner Cascadia',
            tipo: 'trailer',
            imagen: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            specs: [
                { icon: <Weight size={18} />, label: 'Capacidad', value: '20 ton' },
                { icon: <Gauge size={18} />, label: 'Potencia', value: '500 HP' },
                { icon: <Fuel size={18} />, label: 'Tanque', value: '800 L' },
                { icon: <Clock size={18} />, label: 'Año', value: '2023' }
            ],
            equipamiento: ['GPS', 'Doble cabina', 'Suspensión neumática', 'Frenos ABS'],
            disponible: 3
        },
        {
            id: 3,
            nombre: 'Thermo King T系列',
            tipo: 'refrigerado',
            imagen: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            specs: [
                { icon: <Weight size={18} />, label: 'Capacidad', value: '4 ton' },
                { icon: <Thermometer size={18} />, label: 'Temperatura', value: '-20°C a 10°C' },
                { icon: <Fuel size={18} />, label: 'Tanque', value: '400 L' },
                { icon: <Clock size={18} />, label: 'Año', value: '2024' }
            ],
            equipamiento: ['Control temp', 'GPS', 'Registro datos', 'Alarma'],
            disponible: 2
        }
    ];

    const filteredVehiculos = selectedTipo === 'todos'
        ? vehiculos2
        : vehiculos2.filter(v => v.tipo === selectedTipo);



    // para flota 3
    const [activeIndex, setActiveIndex] = useState(0);

    const vehiculos3 = [
        {
            nombre: 'Volvo FH16',
            tipo: 'Camión pesado',
            imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            capacidad: '25 toneladas',
            año: 2024,
            ubicacion: 'Caracas',
            conductor: 'Carlos Rodríguez',
            disponible: true
        },
        {
            nombre: 'Scania R500',
            tipo: 'Trailer',
            imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            capacidad: '30 toneladas',
            año: 2023,
            ubicacion: 'Maracaibo',
            conductor: 'José Martínez',
            disponible: true
        },
        {
            nombre: 'Mercedes Actros',
            tipo: 'Refrigerado',
            imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            capacidad: '18 toneladas',
            año: 2024,
            ubicacion: 'Valencia',
            conductor: 'Luis Pérez',
            disponible: false
        }
    ];

    // Función para ir al slide anterior con validación
    const prevSlide = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === 0) {
                // Si estamos en el primero, vamos al último
                return vehiculos3.length - 1;
            } else {
                // Si no, retrocedemos uno
                return prevIndex - 1;
            }
        });
    };

    // Función para ir al siguiente slide con validación
    const nextSlide = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === vehiculos3.length - 1) {
                // Si estamos en el último, volvemos al primero
                return 0;
            } else {
                // Si no, avanzamos uno
                return prevIndex + 1;
            }
        });
    };


    // para la flota 4
    const categorias = [
        { nombre: 'Características', icon: null },
        { nombre: 'Camión 3/4', icon: <Truck size={20} /> },
        { nombre: 'Trailer', icon: <Package size={20} /> },
        { nombre: 'Express', icon: <Zap size={20} /> },
        { nombre: 'Refrigerado', icon: <Snowflake size={20} /> }
    ];

    const caracteristicas = [
        {
            nombre: 'Capacidad máxima',
            valores: ['3.5 ton', '25 ton', '2 ton', '4 ton']
        },
        {
            nombre: 'GPS en tiempo real',
            valores: [true, true, true, true]
        },
        {
            nombre: 'Seguro incluido',
            valores: [true, true, true, true]
        },
        {
            nombre: 'Aire acondicionado',
            valores: [true, true, true, true]
        },
        {
            nombre: 'Control de temperatura',
            valores: [false, false, false, true]
        },
        {
            nombre: 'Entrega express 24h',
            valores: [false, false, true, false]
        },
        {
            nombre: 'Doble conductor',
            valores: [false, true, false, false]
        },
        {
            nombre: 'Tarifa por km (base)',
            valores: ['$2.5/km', '$4.8/km', '$3.2/km', '$3.8/km']
        }
    ];


    // para la flota 5
    const [selectedCity, setSelectedCity] = useState('caracas');

    const ciudades = [
        {
            id: 'caracas',
            nombre: 'Caracas',
            coordenadas: '10.4806° N, 66.9036° O',
            unidades: 8,
            disponible: 4,
            contacto: '+58 212-555-0123',
            supervisor: 'Carlos Mendoza'
        },
        {
            id: 'maracaibo',
            nombre: 'Maracaibo',
            coordenadas: '10.6317° N, 71.6405° O',
            unidades: 5,
            disponible: 2,
            contacto: '+58 261-555-0456',
            supervisor: 'Ana González'
        },
        {
            id: 'valencia',
            nombre: 'Valencia',
            coordenadas: '10.1620° N, 68.0070° O',
            unidades: 6,
            disponible: 3,
            contacto: '+58 241-555-0789',
            supervisor: 'Pedro Sánchez'
        },
        {
            id: 'barquisimeto',
            nombre: 'Barquisimeto',
            coordenadas: '10.0731° N, 69.3227° O',
            unidades: 4,
            disponible: 2,
            contacto: '+58 251-555-0321',
            supervisor: 'María López'
        }
    ];

    return (
        <>
            <section className="py-5">
                <hr className='my-5' />
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3">NUESTRA FLOTA</span>
                        <h2 className="display-5 fw-bold mb-3">Vehículos modernos y equipados</h2>
                        <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                            Contamos con una flota renovada y equipada con la última tecnología para garantizar la seguridad de tu carga
                        </p>
                    </div>

                    <div className="row g-4">
                        {vehiculos.map((vehiculo, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="card h-100 border-0 shadow-sm hover-lift">
                                    <div className="position-relative">
                                        <img src={vehiculo.imagen} alt={vehiculo.nombre} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                                        <span className={`position-absolute top-0 end-0 m-3 badge ${vehiculo.disponible ? 'bg-success' : 'bg-secondary'}`}>
                                            {vehiculo.disponible ? 'Disponible' : 'En ruta'}
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="h5 fw-bold mb-1">{vehiculo.nombre}</h3>
                                        <p className="text-secondary small mb-3">{vehiculo.tipo}</p>

                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
                                                <Weight size={12} /> {vehiculo.capacidad}
                                            </span>
                                            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
                                                <Calendar size={12} /> {vehiculo.año}
                                            </span>
                                            <span className="badge bg-light text-dark d-flex align-items-center gap-1">
                                                <Gauge size={12} /> {vehiculo.consumo}
                                            </span>
                                        </div>

                                        <hr className='my-3' />

                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-secondary">
                                                <Users size={14} className="me-1" />
                                                2 operadores
                                            </small>
                                            <button className="btn btn-sm btn-primary">Cotizar</button>
                                        </div>
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

            <section className="py-5 bg-light">
                <hr className='my-5' />
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-dark text-white px-3 py-2 mb-3">ESPECIFICACIONES TÉCNICAS</span>
                        <h2 className="display-5 fw-bold mb-3">Flota de alto rendimiento</h2>
                    </div>

                    {/* Filtros */}
                    <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
                        {tipos.map(tipo => (
                            <button
                                key={tipo.id}
                                className={`btn rounded-pill px-4 ${selectedTipo === tipo.id ? 'btn-dark' : 'btn-outline-secondary'
                                    }`}
                                onClick={() => setSelectedTipo(tipo.id)}
                            >
                                {tipo.label}
                            </button>
                        ))}
                    </div>

                    <div className="row g-4">
                        {filteredVehiculos.map(vehiculo => (
                            <div className="col-lg-4" key={vehiculo.id}>
                                <div className="card border-0 shadow-sm h-100">
                                    <img src={vehiculo.imagen} alt={vehiculo.nombre} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />

                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h3 className="h5 fw-bold mb-0">{vehiculo.nombre}</h3>
                                            <span className="badge bg-success">{vehiculo.disponible} unidades</span>
                                        </div>

                                        {/* Especificaciones en grid */}
                                        <div className="row g-2 mb-4">
                                            {vehiculo.specs.map((spec, idx) => (
                                                <div className="col-6" key={idx}>
                                                    <div className="bg-light p-2 rounded d-flex align-items-center gap-2">
                                                        {spec.icon}
                                                        <div>
                                                            <small className="text-secondary d-block">{spec.label}</small>
                                                            <span className="fw-semibold small">{spec.value}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Equipamiento */}
                                        <div className="mb-4">
                                            <small className="text-secondary d-block mb-2">Equipamiento:</small>
                                            <div className="d-flex flex-wrap gap-2">
                                                {vehiculo.equipamiento.map((item, idx) => (
                                                    <span key={idx} className="badge bg-light text-dark">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="btn btn-dark w-100">
                                            Solicitar cotización
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
                        <h2 className="display-5 fw-bold mb-3">Conoce nuestra flota</h2>
                        <p className="lead text-secondary">Vehículos en tiempo real - disponible ahora</p>
                    </div>

                    <div className="position-relative">
                        {/* Slider principal */}
                        <div className="row align-items-center">
                            <div className="col-md-1 text-center">
                                <button className="btn btn-light rounded-circle p-3 shadow" onClick={prevSlide}>
                                    <ChevronLeft size={24} />
                                </button>
                            </div>

                            <div className="col-md-10">
                                <div className="card border-0 shadow-lg overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-md-7">
                                            <img
                                                src={vehiculos3[activeIndex].imagen}
                                                alt={vehiculos3[activeIndex].nombre}
                                                className="img-fluid h-100 w-100"
                                                style={{ objectFit: 'cover', minHeight: '400px' }}
                                            />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body p-4 p-lg-5">
                                                <span className="badge bg-primary mb-3">EN VIVO</span>
                                                <h2 className="display-6 fw-bold mb-2">{vehiculos[activeIndex].nombre}</h2>
                                                <p className="text-secondary mb-4">{vehiculos[activeIndex].tipo}</p>

                                                <div className="d-flex flex-column gap-3 mb-4">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <Truck size={20} className="text-primary" />
                                                        <span>Capacidad: <strong>{vehiculos[activeIndex].capacidad}</strong></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <Calendar size={20} className="text-primary" />
                                                        <span>Año: <strong>{vehiculos[activeIndex].año}</strong></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <MapPin size={20} className="text-primary" />
                                                        <span>Ubicación: <strong>{vehiculos[activeIndex].ubicacion}</strong></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <User size={20} className="text-primary" />
                                                        <span>Conductor: <strong>{vehiculos[activeIndex].conductor}</strong></span>
                                                    </div>
                                                </div>

                                                <div className="d-flex gap-3">
                                                    <button className="btn btn-primary btn-lg flex-grow-1">
                                                        Cotizar ahora
                                                    </button>
                                                    <button className="btn btn-outline-primary btn-lg">
                                                        Ver detalles
                                                    </button>
                                                </div>

                                                <div className="mt-4">
                                                    <span className={`badge ${vehiculos3[activeIndex].disponible ? 'bg-success' : 'bg-warning'} p-2`}>
                                                        {vehiculos3[activeIndex].disponible ? '✓ Disponible inmediato' : '⏳ Reservado'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-1 text-center">
                                <button className="btn btn-light rounded-circle p-3 shadow" onClick={nextSlide}>
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Indicadores */}
                        <div className="d-flex justify-content-center gap-2 mt-4">
                            {vehiculos3.map((_, index) => (
                                <button
                                    key={index}
                                    className={`btn p-1 rounded-circle ${index === activeIndex ? 'bg-primary' : 'bg-secondary'}`}
                                    style={{ width: '12px', height: '12px' }}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
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
                        <span className="badge bg-info text-white px-3 py-2 mb-3">COMPARATIVA</span>
                        <h2 className="display-5 fw-bold mb-3">Encuentra el vehículo ideal</h2>
                        <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                            Compara todas nuestras opciones y elige la que mejor se adapte a tu carga
                        </p>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered bg-white shadow-sm">
                            <thead className="bg-light">
                                <tr>
                                    {categorias.map((cat, idx) => (
                                        <th key={idx} className="text-center p-3 align-middle">
                                            {cat.icon && <div className="mb-2">{cat.icon}</div>}
                                            {cat.nombre}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {caracteristicas.map((caract, rowIdx) => (
                                    <tr key={rowIdx}>
                                        <td className="fw-semibold p-3">{caract.nombre}</td>
                                        {caract.valores.map((valor, colIdx) => (
                                            <td key={colIdx} className="text-center p-3">
                                                {typeof valor === 'boolean' ? (
                                                    valor ?
                                                        <Check className="text-success mx-auto" size={20} /> :
                                                        <X className="text-danger mx-auto" size={20} />
                                                ) : (
                                                    <span className="fw-bold">{valor}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-5">
                        <p className="text-secondary mb-4">¿Necesitas una combinación personalizada?</p>
                        <button className="btn btn-primary btn-lg px-5">
                            Solicitar asesoría
                        </button>
                    </div>
                </div>
                <hr className='my-5' />
            </section>


            <hr className='my-5' />

            <section className="py-5">
                <hr className='my-5' />
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-success text-white px-3 py-2 mb-3">COBERTURA NACIONAL</span>
                        <h2 className="display-5 fw-bold mb-3">Flota desplegada en todo el país</h2>
                    </div>

                    <div className="row g-4">
                        {/* Mapa simplificado (representación visual) */}
                        <div className="col-lg-7">
                            <div className="position-relative bg-light rounded-4 overflow-hidden" style={{ minHeight: '400px' }}>
                                {/* Imagen de mapa simulado */}
                                <img
                                    src="img/mapa.png"
                                    alt="Mapa de Venezuela"
                                    className="img-fluid h-100 w-100"
                                    style={{ objectFit: 'cover', opacity: 0.7 }}
                                />

                                {/* Marcadores de ciudades */}
                                {ciudades.map((ciudad, idx) => (
                                    <button
                                        key={ciudad.id}
                                        className={`position-absolute btn btn-sm rounded-pill shadow ${selectedCity === ciudad.id ? 'bg-primary text-white' : 'bg-white'
                                            }`}
                                        style={{
                                            top: `${30 + idx * 15}%`,
                                            left: `${40 + idx * 8}%`,
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 2
                                        }}
                                        onClick={() => setSelectedCity(ciudad.id)}
                                    >
                                        <MapPin size={16} className="me-1" />
                                        {ciudad.nombre}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Detalles de ciudad seleccionada */}
                        <div className="col-lg-5">
                            {ciudades.filter(c => c.id === selectedCity).map(ciudad => (
                                <div key={ciudad.id} className="card border-0 shadow-lg h-100">
                                    <div className="card-body p-4">
                                        <h3 className="h2 fw-bold mb-4">{ciudad.nombre}</h3>

                                        <div className="d-flex align-items-center gap-3 mb-4">
                                            <div className="bg-primary bg-opacity-10 p-3 rounded-3">
                                                <Truck size={32} className="text-primary" />
                                            </div>
                                            <div>
                                                <span className="text-secondary d-block">Unidades totales</span>
                                                <span className="display-6 fw-bold">{ciudad.unidades}</span>
                                            </div>
                                            <div className="ms-4">
                                                <span className="text-secondary d-block">Disponibles</span>
                                                <span className="display-6 fw-bold text-success">{ciudad.disponible}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                <Navigation size={18} className="text-secondary" />
                                                <span>{ciudad.coordenadas}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                <Users size={18} className="text-secondary" />
                                                <span>Supervisor: <strong>{ciudad.supervisor}</strong></span>
                                            </div>
                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                <Phone size={18} className="text-secondary" />
                                                <span>{ciudad.contacto}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <Clock size={18} className="text-secondary" />
                                                <span>Disponibilidad: 24/7</span>
                                            </div>
                                        </div>

                                        <hr />

                                        <h4 className="h6 fw-bold mb-3">Unidades disponibles ahora:</h4>
                                        <div className="d-flex flex-wrap gap-2 mb-4">
                                            {['Turbo 3000', 'CargoMaster', 'FrigoPlus', 'MegaTrailer'].slice(0, ciudad.disponible).map((name, idx) => (
                                                <span key={idx} className="badge bg-light text-dark p-2">
                                                    {name}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary btn-lg">
                                                Asignar unidad desde {ciudad.nombre}
                                            </button>
                                            <button className="btn btn-outline-primary">
                                                Ver todas las unidades
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className='my-5' />
            </section>

        </>
    )
}

export default Flota