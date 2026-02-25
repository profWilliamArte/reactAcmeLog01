import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './section/Inicio'
import Servicios from './section/Servicios'
import Flota from './section/Flota'
import Cobertura from './section/Cobertura'
import Certificaciones from './section/Certificaciones'
import Infraestructura from './section/Infraestructura'
import Contactos from './section/Contactos'
import Testimonios from './section/Testimonios'

const App = () => {
   // const [theme, setTheme] = useState('dark') // 'light' o 'dark'
   
  return (
    

     <div className='app' > 

      <Header  />
    
        <section id='inicio'>
          <>
          <Inicio />
         
          </>
          
        </section>
        <section id='servicios'>
          <Servicios />
        </section>
        <section id='flota'>
          <Flota />
        </section>
        <section id='cobertura'>
          <Cobertura />
        </section>
        <section id='certificados'>
          <Certificaciones />
        </section>
        <section id='infraestructura'>
          <Infraestructura/>
        </section>
        <section id='testimonios'>
          <Testimonios />
        </section>
        <section id='contacto'>
          <Contactos />
        </section>
    
      <Footer />
    </div>

  )
}

export default App