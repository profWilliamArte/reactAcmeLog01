
// cobertura 0

import { MapPin, CheckCircle } from 'lucide-react';
// cobertura 1
import { /*MapPin,*/ Truck, Clock } from 'lucide-react';

//cobertuta 2
import { /*Clock,  MapPin, */Package } from 'lucide-react';

// cobertura 3
import {/* MapPin, */Check, X } from 'lucide-react';
import { useState } from 'react';


// cobertura 4:
import {/* MapPin, CheckCircle*/ } from 'lucide-react';

// cobertura 5:
import { /* MapPin, Truck, Package,*/   Users, TrendingUp } from 'lucide-react';

const Cobertura = () => {


  // para cobertura 0
  const [selectedEstado, setSelectedEstado] = useState(null);
  const estados0 = [
    { nombre: 'Caracas', cubierto: true, centros: 3 },
    { nombre: 'Miranda', cubierto: true, centros: 2 },
    { nombre: 'La Guaira', cubierto: true, centros: 1 },
    { nombre: 'Aragua', cubierto: true, centros: 2 },
    { nombre: 'Carabobo', cubierto: true, centros: 2 },
    { nombre: 'Lara', cubierto: true, centros: 2 },
    { nombre: 'Zulia', cubierto: true, centros: 3 },
    { nombre: 'Táchira', cubierto: true, centros: 1 },
    { nombre: 'Mérida', cubierto: true, centros: 1 },
    { nombre: 'Trujillo', cubierto: true, centros: 1 },
    { nombre: 'Barinas', cubierto: true, centros: 1 },
    { nombre: 'Portuguesa', cubierto: true, centros: 1 },
    { nombre: 'Cojedes', cubierto: true, centros: 1 },
    { nombre: 'Guárico', cubierto: true, centros: 1 },
    { nombre: 'Anzoátegui', cubierto: true, centros: 2 },
    { nombre: 'Monagas', cubierto: true, centros: 1 },
    { nombre: 'Sucre', cubierto: true, centros: 1 },
    { nombre: 'Nueva Esparta', cubierto: true, centros: 1 },
    { nombre: 'Bolívar', cubierto: true, centros: 2 },
    { nombre: 'Amazonas', cubierto: false, centros: 0 }
  ];

  // para cobertura 0
  const estados = [
    'Caracas', 'Miranda', 'La Guaira', 'Aragua', 'Carabobo',
    'Lara', 'Zulia', 'Táchira', 'Mérida', 'Trujillo',
    'Barinas', 'Portuguesa', 'Cojedes', 'Guárico', 'Anzoátegui',
    'Monagas', 'Sucre', 'Nueva Esparta', 'Bolívar', 'Amazonas'
  ];


  // para cobertura 1
  const regiones = [
    {
      nombre: 'Región Capital',
      estados: ['Caracas', 'Miranda', 'La Guaira', 'Aragua'],
      centros: 4,
      tiempo: '24 horas'
    },
    {
      nombre: 'Región Central',
      estados: ['Carabobo', 'Cojedes', 'Guárico'],
      centros: 3,
      tiempo: '24 horas'
    },
    {
      nombre: 'Región Occidental',
      estados: ['Lara', 'Zulia', 'Táchira', 'Mérida', 'Trujillo', 'Barinas', 'Portuguesa'],
      centros: 7,
      tiempo: '48 horas'
    },
    {
      nombre: 'Región Oriental',
      estados: ['Anzoátegui', 'Monagas', 'Sucre', 'Nueva Esparta'],
      centros: 4,
      tiempo: '48 horas'
    },
    {
      nombre: 'Región Sur',
      estados: ['Bolívar', 'Amazonas'],
      centros: 2,
      tiempo: '72 horas'
    }
  ];

  // para cobertura 2
  const rutas = [
    {
      origen: 'Caracas',
      destino: 'Maracaibo',
      distancia: '720 km',
      tiempo: '2 días',
      tipo: 'Express'
    },
    {
      origen: 'Caracas',
      destino: 'Valencia',
      distancia: '150 km',
      tiempo: '4 horas',
      tipo: 'Urgente'
    },
    {
      origen: 'Caracas',
      destino: 'Barcelona',
      distancia: '320 km',
      tiempo: '1 día',
      tipo: 'Express'
    },
    {
      origen: 'Valencia',
      destino: 'Barquisimeto',
      distancia: '180 km',
      tiempo: '6 horas',
      tipo: 'Urgente'
    },
    {
      origen: 'Maracaibo',
      destino: 'San Cristóbal',
      distancia: '450 km',
      tiempo: '2 días',
      tipo: 'Normal'
    },
    {
      origen: 'Puerto Ordaz',
      destino: 'Caracas',
      distancia: '700 km',
      tiempo: '2 días',
      tipo: 'Normal'
    }
  ];


  const stats = [
    { icon: <MapPin size={32} />, valor: '20+', label: 'Estados cubiertos' },
    { icon: <Truck size={32} />, valor: '15', label: 'Centros logísticos' },
    { icon: <Package size={32} />, valor: '100+', label: 'Ciudades' },
    { icon: <Users size={32} />, valor: '500+', label: 'Clientes activos' },
    { icon: <TrendingUp size={32} />, valor: '98%', label: 'Entregas a tiempo' }
  ];

  return (
    <>

      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Cobertura Nacional</h2>
            <p className="lead text-secondary">Llegamos a todos los rincones del país</p>
          </div>

          <div className="row">
            {estados.map((estado, index) => (
              <div className="col-md-4 col-lg-3 mb-3" key={index}>
                <div className="d-flex align-items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span>{estado}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <div className="bg-light p-4 rounded-3">
              <CheckCircle className="text-success mb-2" size={32} />
              <h4>Cobertura garantizada en todo el territorio nacional</h4>
              <p className="text-secondary mb-0">Más de 20 estados y 100 ciudades</p>
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
            <h2 className="display-5 fw-bold mb-3">Cobertura por Regiones</h2>
            <p className="lead text-secondary">Organizamos nuestra logística en 5 regiones principales</p>
          </div>

          <div className="row">
            {regiones.map((region, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <MapPin size={28} className="text-primary" />
                      <h3 className="h4 fw-bold mb-0">{region.nombre}</h3>
                    </div>

                    <p className="mb-3">
                      <strong>Estados:</strong> {region.estados.join(', ')}
                    </p>

                    <div className="d-flex gap-4">
                      <div className="d-flex align-items-center gap-2">
                        <Truck size={16} className="text-secondary" />
                        <span>{region.centros} centros</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Clock size={16} className="text-secondary" />
                        <span>{region.tiempo}</span>
                      </div>
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

      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Tiempos de Entrega</h2>
            <p className="lead text-secondary">Consulta los tiempos estimados entre principales ciudades</p>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-hover bg-white">
              <thead className="table-primary">
                <tr className="text-center">
                  <th>Origen</th>
                  <th>Destino</th>
                  <th>Distancia</th>
                  <th>Tiempo</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {rutas.map((ruta, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{ruta.origen}</td>
                    <td>{ruta.destino}</td>
                    <td className="text-center">{ruta.distancia}</td>
                    <td className="text-center">
                      <Clock size={14} className="me-1" />
                      {ruta.tiempo}
                    </td>
                    <td className="text-center">
                      <span className={`badge ${ruta.tipo === 'Urgente' ? 'bg-danger' : ruta.tipo === 'Express' ? 'bg-warning' : 'bg-info'}`}>
                        {ruta.tipo}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <hr className='my-5' />
      </section>

      <hr className='my-5' />

      <section className="py-5 bg-light">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Mapa de Cobertura</h2>
            <p className="lead text-secondary">Selecciona un estado para ver detalles</p>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="bg-white p-4 rounded-3 shadow-sm">
                <div className="row">
                  {estados.map((estado, index) => (
                    <div className="col-md-4 mb-2" key={index}>
                      <button
                        className={`btn w-100 text-start d-flex align-items-center justify-content-between ${selectedEstado === estado.nombre ? 'btn-primary text-white' : 'btn-light'
                          }`}
                        onClick={() => setSelectedEstado(estado.nombre)}
                      >
                        <span>
                          <MapPin size={14} className="me-2" />
                          {estado.nombre}
                        </span>
                        {estado.cubierto ? (
                          <Check size={16} className="text-success" />
                        ) : (
                          <X size={16} className="text-danger" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {selectedEstado ? (
                <div className="bg-white p-4 rounded-3 shadow-sm">
                  {estados.find(e => e.nombre === selectedEstado).cubierto ? (
                    <>
                      <h4 className="fw-bold mb-3">{selectedEstado}</h4>
                      <p className="text-success mb-2">✓ Cobertura activa</p>
                      <p><strong>Centros logísticos:</strong> {estados.find(e => e.nombre === selectedEstado).centros}</p>
                      <p><strong>Tiempo estimado:</strong> 24-48 horas</p>
                      <button className="btn btn-primary w-100 mt-3">Cotizar envío</button>
                    </>
                  ) : (
                    <>
                      <h4 className="fw-bold mb-3">{selectedEstado}</h4>
                      <p className="text-danger mb-2">✗ Sin cobertura por ahora</p>
                      <p>Estamos trabajando para llegar pronto a esta zona.</p>
                      <button className="btn btn-outline-primary w-100 mt-3">Notificarme</button>
                    </>
                  )}
                </div>
              ) : (
                <div className="bg-white p-4 rounded-3 shadow-sm text-center">
                  <MapPin size={48} className="text-secondary mb-3" />
                  <p>Selecciona un estado para ver detalles de cobertura</p>
                </div>
              )}
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
                    <h2 className="display-5 fw-bold mb-3">Nuestra Cobertura en Números</h2>
                    <p className="lead text-secondary">Crecemos para servirte mejor</p>
                </div>

                <div className="row mb-5">
                    {stats.map((stat, index) => (
                        <div className="col-md-4 col-lg text-center mb-4" key={index}>
                            <div className="text-primary mb-3">{stat.icon}</div>
                            <h3 className="display-5 fw-bold text-primary">{stat.valor}</h3>
                            <p className="text-secondary">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="bg-light p-4 rounded-3">
                            <h4 className="fw-bold mb-3">Cobertura Actual</h4>
                            <div className="progress mb-3" style={{ height: '25px' }}>
                                <div className="progress-bar bg-success" style={{ width: '95%' }}>
                                    95% del territorio nacional
                                </div>
                            </div>
                            <p>Llegamos a 20 de 21 estados del país</p>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-4">
                        <div className="bg-light p-4 rounded-3">
                            <h4 className="fw-bold mb-3">Próximas Expansiones</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2">✓ Amazonas (próximo mes)</li>
                                <li className="mb-2">✓ Delta Amacuro (trimestre)</li>
                                <li className="mb-2">✓ Nuevos centros en Oriente</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-5' />
        </section>
    </>
  )
}

export default Cobertura