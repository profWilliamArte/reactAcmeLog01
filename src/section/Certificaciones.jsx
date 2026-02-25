// certificados 1

import { Award, Shield, CheckCircle, FileText } from 'lucide-react';

// certificados 2
import { /*Award, FileText,*/ Search, Filter, X, Download, Calendar, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';


const Certificaciones = () => {
  // para certificados 1 
  const certificados = [
    {
      icon: <Award size={48} className="text-primary" />,
      titulo: 'ISO 9001:2015',
      entidad: 'Gestión de Calidad',
      descripcion: 'Certificación internacional en gestión de calidad',
      fecha: '2024 - 2027'
    },
    {
      icon: <Shield size={48} className="text-success" />,
      titulo: 'ISO 14001',
      entidad: 'Gestión Ambiental',
      descripcion: 'Compromiso con el medio ambiente y sostenibilidad',
      fecha: '2024 - 2026'
    },
    {
      icon: <CheckCircle size={48} className="text-warning" />,
      titulo: 'OHSAS 18001',
      entidad: 'Seguridad y Salud',
      descripcion: 'Seguridad ocupacional y bienestar laboral',
      fecha: '2024 - 2026'
    },
    {
      icon: <FileText size={48} className="text-info" />,
      titulo: 'INACAL',
      entidad: 'Certificación Nacional',
      descripcion: 'Avalado por el Instituto Nacional de Calidad',
      fecha: '2024 - 2025'
    }
  ];

  // para certificados 2

  const [filtro, setFiltro] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [selectedCert, setSelectedCert] = useState(null);

  const certificados2 = [
    {
      id: 1,
      nombre: 'ISO 9001:2015',
      tipo: 'Calidad',
      organismo: 'Bureau Veritas',
      fecha: '2024',
      imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descripcion: 'Sistema de Gestión de Calidad',
      pais: 'Internacional'
    },
    {
      id: 2,
      nombre: 'ISO 14001:2015',
      tipo: 'Ambiental',
      organismo: 'SGS',
      fecha: '2024',
      imagen: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descripcion: 'Gestión Ambiental',
      pais: 'Internacional'
    },
    {
      id: 3,
      nombre: 'BASC',
      tipo: 'Seguridad',
      organismo: 'World BASC',
      fecha: '2024',
      imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descripcion: 'Seguridad Comercial',
      pais: 'Internacional'
    },
    {
      id: 4,
      nombre: 'INACAL',
      tipo: 'Nacional',
      organismo: 'INACAL',
      fecha: '2023',
      imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descripcion: 'Certificación Nacional',
      pais: 'Venezuela'
    },
    {
      id: 5,
      nombre: 'OHSAS 18001',
      tipo: 'Seguridad',
      organismo: 'BSI',
      fecha: '2024',
      imagen: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descripcion: 'Salud y Seguridad Ocupacional',
      pais: 'Internacional'
    },
    {
      id: 6,
      nombre: 'ISO 22000',
      tipo: 'Alimentos',
      organismo: 'DNV GL',
      fecha: '2024',
      imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      descripcion: 'Inocuidad Alimentaria',
      pais: 'Internacional'
    }
  ];

  const tipos = ['todos', ...new Set(certificados2.map(c => c.tipo))];

  const certificadosFiltrados = certificados2.filter(cert => {
    const matchesFiltro = filtro === 'todos' || cert.tipo === filtro;
    const matchesBusqueda = cert.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      cert.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return matchesFiltro && matchesBusqueda;
  });


  return (
    <>
      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Nuestras Certificaciones</h2>
            <p className="lead text-secondary">Avalados por las normas más exigentes</p>
          </div>

          <div className="row">
            {certificados.map((cert, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm text-center p-4">
                  <div className="mb-3">
                    {cert.icon}
                  </div>
                  <h4 className="fw-bold mb-2">{cert.titulo}</h4>
                  <p className="text-primary mb-2">{cert.entidad}</p>
                  <p className="text-secondary small mb-3">{cert.descripcion}</p>
                  <span className="badge bg-light text-dark">
                    Vigente: {cert.fecha}
                  </span>
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
            <h2 className="display-5 fw-bold mb-3">Galería de Certificaciones</h2>
            <p className="lead text-secondary">Explora todas nuestras acreditaciones</p>
          </div>

          {/* Filtros y búsqueda */}
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <Search size={18} className="text-secondary" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar certificación..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                {busqueda && (
                  <button className="btn btn-outline-secondary" onClick={() => setBusqueda('')}>
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="d-flex gap-2 flex-wrap">
                <Filter size={20} className="text-secondary me-2 align-self-center" />
                {tipos.map((tipo, index) => (
                  <button
                    key={index}
                    className={`btn ${filtro === tipo ? 'btn-primary' : 'btn-outline-secondary'} rounded-pill px-4`}
                    onClick={() => setFiltro(tipo)}
                  >
                    {tipo === 'todos' ? 'Todos' : tipo}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid de certificados */}
          <div className="row g-4">
            {certificadosFiltrados.map((cert) => (
              <div className="col-md-6 col-lg-4" key={cert.id}>
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="position-relative">
                    <img
                      src={cert.imagen}
                      className="card-img-top"
                      alt={cert.nombre}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 end-0 m-3 badge bg-primary">
                      {cert.tipo}
                    </span>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <Award size={24} className="text-primary" />
                      <h5 className="card-title fw-bold mb-0">{cert.nombre}</h5>
                    </div>

                    <p className="text-secondary mb-3">
                      {cert.descripcion}
                    </p>

                    <div className="d-flex flex-column gap-2 mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <Building size={14} className="text-secondary" />
                        <small>{cert.organismo}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Calendar size={14} className="text-secondary" />
                        <small>Vigente {cert.fecha}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <FileText size={14} className="text-secondary" />
                        <small>{cert.pais}</small>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-primary flex-grow-1"
                        onClick={() => setSelectedCert(cert)}
                      >
                        Ver certificado
                      </button>
                      <button className="btn btn-outline-secondary">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal de vista previa */}
          {selectedCert && (
            <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
              <div className="modal-dialog modal-xl">
                <div className="modal-content bg-transparent border-0">
                  <div className="modal-body p-0">
                    <div className="position-relative">
                      <button
                        className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-2"
                        onClick={() => setSelectedCert(null)}
                        style={{ zIndex: 1000 }}
                      >
                        <X size={24} />
                      </button>

                      <img
                        src={selectedCert.imagen}
                        alt={selectedCert.nombre}
                        className="img-fluid w-100 rounded-3"
                        style={{ maxHeight: '80vh', objectFit: 'contain' }}
                      />

                      <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                        <h3 className="h2 fw-bold">{selectedCert.nombre}</h3>
                        <p>{selectedCert.descripcion} - {selectedCert.organismo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
                .hover-lift:hover {
                    transform: translateY(-5px);
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
                }
            `}</style>
        <hr className='my-5' />
      </section>

    </>
  )
}

export default Certificaciones