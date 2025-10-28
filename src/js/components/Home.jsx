import React from "react";
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const imageUrl1 = "./src/img/hamster-jaula.jpg";
const imageUrl2 = "./src/img/hamster-grupal.jpg";
const imageUrl3 = "./src/img/hamster-reiki.jpg";
const imageUrl4 = "./src/img/hamster-rueda.png";
const button = "¡Contratar Ahora!";

//create your first component
const Home = () => {
	return (
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
					button={button} />

				<Card
					imageUrl={imageUrl3}
					title="Reiki Roedor Premium"
					description="Canalizamos energía cósmica directamente a través del bigote.
                     Resultados comprobados: calma interior y pelaje 30% más brillante."
					button={button} />

				<Card
					imageUrl={imageUrl4}
					title="Desbloqueo del Chakra de la Rueda"
					description="Si la rueda gira sin sentido, el alma también.
                     Armoniza el ciclo vital de tu hámster y reconecta con su movimiento divino."
					button={button} />

			</div>
			<Footer />
		</div>
	);
};

export default Home;