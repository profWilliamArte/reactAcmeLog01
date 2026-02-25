// contacto 1
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

// contacto 2
//import React, { useState } from 'react';
import { /*Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter, */ Building, ChevronRight, MessageCircle, Headphones } from 'lucide-react';

const Contactos = () => {

  // para contacto 1
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log('Formulario enviado:', formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  // para contacto 2

  const [selectedSede, setSelectedSede] = useState('caracas');
  const [formData2, setFormData2] = useState({
    nombre: '',
    email: '',
    telefono: '',
    sede: 'caracas',
    asunto: '',
    mensaje: ''
  });

  const sedes = [
    {
      id: 'caracas',
      nombre: 'Caracas (Matriz)',
      direccion: 'Av. Principal de La Yaguara, Edif. ACME, Caracas',
      telefono: '+58 212-555-0101',
      email: 'caracas@acme.com.ve',
      horario: 'Lun-Vie 8am-6pm, Sáb 8am-12pm',
      mapa: 'https://maps.google.com/?q=Caracas'
    },
    {
      id: 'valencia',
      nombre: 'Valencia',
      direccion: 'Zona Industrial Municipal Norte, Calle 3, Valencia',
      telefono: '+58 241-555-0202',
      email: 'valencia@acme.com.ve',
      horario: 'Lun-Vie 8am-5pm',
      mapa: 'https://maps.google.com/?q=Valencia'
    },
    {
      id: 'maracaibo',
      nombre: 'Maracaibo',
      direccion: 'Av. Circunvalación 2, Centro Empresarial, Maracaibo',
      telefono: '+58 261-555-0303',
      email: 'maracaibo@acme.com.ve',
      horario: 'Lun-Vie 8am-5pm',
      mapa: 'https://maps.google.com/?q=Maracaibo'
    }
  ];

  const handleChange2 = (e) => {
    setFormData({
      ...formData2,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData2);
    alert('Mensaje enviado con éxito');
  };

  return (
    <>

      <section className="py-5">
        <hr className='my-5' />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Contáctanos</h2>
            <p className="lead text-secondary">Estamos aquí para ayudarte</p>
          </div>

          <div className="row">
            {/* Información de contacto */}
            <div className="col-lg-4 mb-4">
              <div className="bg-light p-4 rounded-3 h-100">
                <h3 className="h4 fw-bold mb-4">Información</h3>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-primary text-white rounded-circle p-3">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-secondary mb-1">Teléfono</p>
                    <p className="fw-bold mb-0">+58 212-555-0101</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-primary text-white rounded-circle p-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-secondary mb-1">Email</p>
                    <p className="fw-bold mb-0">contacto@acme.com.ve</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-primary text-white rounded-circle p-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-secondary mb-1">Dirección</p>
                    <p className="fw-bold mb-0">Av. Principal, Caracas</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="bg-primary text-white rounded-circle p-3">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-secondary mb-1">Horario</p>
                    <p className="fw-bold mb-0">Lun-Vie: 8am - 6pm</p>
                  </div>
                </div>

                <hr />

                <h4 className="h6 fw-bold mb-3">Síguenos</h4>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h4 fw-bold mb-4">Envíanos un mensaje</h3>

                  {enviado && (
                    <div className="alert alert-success mb-4">
                      ¡Mensaje enviado con éxito! Te contactaremos pronto.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Nombre completo</label>
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="Tu nombre"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Teléfono</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        placeholder="0412-1234567"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Mensaje</label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        rows="5"
                        placeholder="¿En qué podemos ayudarte?"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      <Send size={18} className="me-2" />
                      Enviar mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-5' />
      </section>



      <section className="py-5 bg-light">
            <hr className='my-5' />
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Contáctanos</h2>
                    <p className="lead text-secondary">Elige la sede más cercana o escríbenos</p>
                </div>

                {/* Selector de sedes */}
                <div className="row mb-5">
                    {sedes.map((sede) => (
                        <div className="col-md-4 mb-3" key={sede.id}>
                            <button
                                className={`btn w-100 text-start p-3 d-flex align-items-center gap-3 ${
                                    selectedSede === sede.id ? 'btn-primary text-white' : 'btn-light'
                                }`}
                                onClick={() => setSelectedSede(sede.id)}
                            >
                                <Building size={20} />
                                <div>
                                    <span className="fw-bold d-block">{sede.nombre}</span>
                                    <small>{sede.direccion.substring(0, 30)}...</small>
                                </div>
                                <ChevronRight size={18} className="ms-auto" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Mapa y detalles de sede seleccionada */}
                <div className="row mb-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                            <h3 className="h4 fw-bold mb-4">{sedes.find(s => s.id === selectedSede).nombre}</h3>
                            
                            <div className="mb-4">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <MapPin size={18} className="text-primary" />
                                    <span>{sedes.find(s => s.id === selectedSede).direccion}</span>
                                </div>
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <Phone size={18} className="text-primary" />
                                    <span>{sedes.find(s => s.id === selectedSede).telefono}</span>
                                </div>
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <Mail size={18} className="text-primary" />
                                    <span>{sedes.find(s => s.id === selectedSede).email}</span>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <Clock size={18} className="text-primary" />
                                    <span>{sedes.find(s => s.id === selectedSede).horario}</span>
                                </div>
                            </div>

                            <a 
                                href={sedes.find(s => s.id === selectedSede).mapa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-primary w-100"
                            >
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="bg-light p-4 rounded-3 shadow-sm h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                            <img 
                                src="https://images.unsplash.com/photo-1577086664693-894d8405334a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Mapa"
                                className="img-fluid rounded-3"
                                style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Formulario */}
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4 p-lg-5">
                                <h3 className="h4 fw-bold mb-4">Envíanos un mensaje</h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-semibold">Nombre</label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                className="form-control"
                                                value={formData2.nombre}
                                                onChange={handleChange2}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-semibold">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={formData2.email}
                                                onChange={handleChange2}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-semibold">Teléfono</label>
                                            <input
                                                type="tel"
                                                name="telefono"
                                                className="form-control"
                                                value={formData2.telefono}
                                                onChange={handleChange2}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-semibold">Sede</label>
                                            <select
                                                name="sede"
                                                className="form-select"
                                                value={formData2.sede}
                                                onChange={handleChange2}
                                            >
                                                {sedes.map(s => (
                                                    <option key={s.id} value={s.id}>{s.nombre}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Asunto</label>
                                        <input
                                            type="text"
                                            name="asunto"
                                            className="form-control"
                                            value={formData2.asunto}
                                            onChange={handleChange2}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">Mensaje</label>
                                        <textarea
                                            name="mensaje"
                                            className="form-control"
                                            rows="4"
                                            value={formData2.mensaje}
                                            onChange={handleChange2}
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 py-3">
                                        <Send size={18} className="me-2" />
                                        Enviar mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Canales rápidos */}
                    <div className="col-lg-4">
                        <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                            <h3 className="h5 fw-bold mb-4">Canales rápidos</h3>
                            
                            <div className="text-center mb-4 p-3 bg-success bg-opacity-10 rounded-3">
                                <MessageCircle size={32} className="text-success mb-2" />
                                <h4 className="h6 fw-bold">WhatsApp</h4>
                                <p className="small text-secondary mb-2">Respuesta inmediata</p>
                                <a href="https://wa.me/584243778671" className="btn btn-success btn-sm w-100">
                                    +58 424-3778671
                                </a>
                            </div>

                            <div className="text-center mb-4 p-3 bg-primary bg-opacity-10 rounded-3">
                                <Headphones size={32} className="text-primary mb-2" />
                                <h4 className="h6 fw-bold">Atención al cliente</h4>
                                <p className="small text-secondary mb-2">Lun-Vie 8am-6pm</p>
                                <a href="tel:+582125550101" className="btn btn-primary btn-sm w-100">
                                    +58 212-5550101
                                </a>
                            </div>

                            <hr />

                            <h4 className="h6 fw-bold mb-3">Redes sociales</h4>
                            <div className="d-flex justify-content-center gap-2">
                                <a href="#" className="btn btn-outline-primary rounded-circle p-3">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="btn btn-outline-primary rounded-circle p-3">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="btn btn-outline-primary rounded-circle p-3">
                                    <Twitter size={20} />
                                </a>
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

export default Contactos