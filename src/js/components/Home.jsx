import React from "react";
import { NavBar } from "./Navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { JumboTron } from "./JumboTron";
import { Cards } from "./Cards";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<JumboTron />
			<div className="container pt-5">
				<div className="row">
					<Cards 
					imagen="https://wallpapers.com/images/featured-full/1920-x-1080-naruto-puo1nvsest4fw828.jpg"
					name= "Naruto"
					description="Naruto Uzumaki es un ninja valiente y perseverante que sueña con ser Hokage para ganarse el respeto de su aldea."/>
					<Cards 
					imagen="https://images2.alphacoders.com/126/1260943.jpg"
					name= "Itachi"
					description="Itachi Uchiha es un ninja brillante y enigmático que sacrificó todo por la paz, incluso siendo visto como traidor para proteger a su hermano y a la aldea."
					/>
					<Cards 
					imagen="https://sm.ign.com/t/ign_latam/screenshot/default/sasuke-versiones_4v2c.2560.jpg"
					name= "Sasuke"
					description="Sasuke Uchiha es un ninja talentoso y solitario que busca vengar a su clan, destruido por su hermano Itachi, y luego encuentra su propio camino entre la venganza y la redención."
					/>
					<Cards 
					imagen="https://static.wikia.nocookie.net/narutho/images/8/8a/Frases-de-Madara-Uchiha.jpg/revision/latest?cb=20170602190407&path-prefix=es"
					name= "Madara"
					description="Madara Uchiha fue un legendario ninja y cofundador de la Aldea Oculta de la Hoja. Ambicioso y poderoso, buscó imponer la paz a través del control absoluto usando el poder del Sharingan."
					/>
					<Cards 
					imagen="https://static.wikia.nocookie.net/narutofanones/images/f/fb/Tobi_HD_2.png/revision/latest?cb=20150916020432&path-prefix=es"
					name= "Obito"
					description="Obito Uchiha fue un ninja idealista que, tras una tragedia, cayó en la oscuridad y se convirtió en enemigo del mundo ninja, ocultando su identidad y buscando crear una falsa paz mediante el control total."
					/>
					<Cards 
					imagen="https://static.wikia.nocookie.net/naruto/images/2/24/Shodai_Hokage.PNG/revision/latest/scale-to-width-down/732?cb=20100206180921"
					name= "Hasirama"
					description="Hashirama Senju fue el primer Hokage y cofundador de la Aldea Oculta de la Hoja. Conocido como el “Dios de los Shinobi”, luchó por la paz entre clanes y fue rival y amigo de Madara Uchiha."
					/>
				</div>
			</div>
		</>

	)
};

export default Home;