import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

const imageUrl1 = "./src/img/hamster-jaula.jpg";
const imageUrl2 = "./src/img/hamster-grupal.jpg";
const imageUrl3 = "./src/img/hamster-reiki.jpg";
const imageUrl4 = "./src/img/hamster-rueda.png";
const button = "¡Contratar Ahora!";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Navbar />
      <Jumbotron />

      <div className='ms-5 me-5 mb-5 d-flex row gap-4 justify-content-center'>
        <Card
          imageUrl={imageUrl1}
          title="Terapia Cuántica de Jaula"
          description="Reequilibramos los campos energéticos de la jaula de tu hámster.
                       Nuestras sesiones eliminan las malas vibraciones de las virutas y armonizan el flujo del alpiste." 
          button={button} />
        
        <Card
        imageUrl={imageUrl2}
        title="Meditación Colectiva Ultrasónica"
        description="Guiamos a los hámsters hacia la conciencia plena mediante frecuencias inaudibles.
                     Perfecta para reducir estrés roedor y elevar su vibración interna."
        button={button}/>

        <Card
        imageUrl={imageUrl3}
        title="Reiki Roedor Premium"
        description="Canalizamos energía cósmica directamente a través del bigote.
                     Resultados comprobados: calma interior y pelaje 30% más brillante."
        button={button}/>

        <Card
        imageUrl={imageUrl4}
        title="Desbloqueo del Chakra de la Rueda"
        description="Si la rueda gira sin sentido, el alma también.
                     Armoniza el ciclo vital de tu hámster y reconecta con su movimiento divino."
        button={button}/>

      </div>
      <Footer />
    </div>


  </StrictMode>
);
