var isEnglish = true;
var languageToggle = document.getElementById("language-toggle");
var elementsToTranslate;
var placeholdersToTranslate;

document.addEventListener("DOMContentLoaded", function() {
    languageToggle = document.getElementById("language-toggle");
    elementsToTranslate = document.querySelectorAll("[data-translation]");

    let isSpanish = true; // Por defecto, muestra el contenido en español

    languageToggle.addEventListener("click", changeLanguage);
});

function changeLanguage()
{
    isEnglish = !isEnglish; // Cambiar el estado del idioma

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute("data-translation");
        element.textContent = isEnglish ? translations.es[key] : translations.en[key];
    });

    placeholdersToTranslate.forEach(placehold => {
        const placKey = placehold.getAttribute("data-translation-placeholder");
        document.getElementById("translation-placeholder").placeholder  = isEnglish ? placeholdersTrans.es[placKey] : placeholdersTrans.en[placKey];
    });
};

// Definir las traducciones
const placeholdersTrans = {
    es:{
        fistN_pla: "Nombre", 
        lastN_pla: "Apellido", 
        email_pla: "Correo electrónico", 
        msg_pla: "Escribe tu mensaje",
    },
    en:{
        fistN_pla: "First Name", 
        lastN_pla: "Last Name", 
        email_pla: "Email Address", 
        msg_pla: "Enter your message",
    }
};
const translations = {
    es: {
        //Pagina principal
        home_t: "Inicio",
        experience_t: "Experiencia",
        projects_t: "Proyectos",
        contact_t: "Contacto",
        greeting_h: "Mi nombre es Sebastian, un Ingeniero Multimedia y Desarrollador de videojuegos Junior.",
        greeting_d: "Poseo conocimiento en el manejo del motor Unity 3D para desarrollo de videojuegos en C#. Tengo también habilidades en el uso de otros lenguajes como HTML, JavaScript y CSS, al igual que software de diseño como Photoshop e Illustrator. Acompañame en mi aventura, donde desarrollar videojuegos ha sido mi pasión desde que tengo memoria.",
        linkd_btn: "Echale un vistazo a mi perfil de LinkedIn",
        bluepr_d: "Fui de apoyo en el desarrollo de 6 videojuegos educativos a lo largo de 1 año. Se usó el motor de desarrollo Unity3D y entre mis roles estaba el idear las bases de cada uno de los videojuegos, importar y configurar los assets necesarios, programar mecanicas principales, resolución de incidencias y errores, uso de bases de datos locales para almacenar información y transición entre escenas usando archivos .JSON para guardado de partidas.",
        bluepr_btn: "Echale un vistazo a la página de Blueprint Transformation",
        cloudl_d:"Durante mi tiempo en esta empresa, desarrollé y arreglé los diferentes simuladores que se me asignaban usando el preset de desarrollo base que usan todos los simuladores. Desarrollé 2 simuladores desde su inicio hasta su fin, al igual que hice su respectivo mantenimiento. El resto de tiempo se me asignó la correción de incidencias/errores en simuladores nuevos y antiguos en educación primaria, secundaria y universitaria. Los simuladores usaban el motor de Unity3D para su desarrollo y se usaron tecnologías como guardado de datos y envio en la nube, generación de reporte en PDF y login con respuesta de servidor.",
        cloudl_btn:"Echale un vistazo a la página de CloudLabs",
        skylanders_d:"Skylanders Project es un videojuego en tercera persona, Aventura-RPG donde explorarás un vasto mundo generado proceduralmente, en el cual te enfrentarás a angeles, demonios y seres vivientes de las profundidades de la tierra. En sus mecanicas estará el combate de accción, movimiento rapido y libre (terrenal y por aire), enfrentamiento de jefes y obtención de items unicos. El juego se encuentra en desarrollo actualmente por mi persona.",
        apoc_d:"Apocalipsis es un videojuego Aventura-Roguelike, con perspectiva isométrica. Inspirado en videojuegos como Hades o Gatekeeper Infinity, recorrerás un vasto terreno procedural por rondas, reuniendo objetos y enfrentandote contra enemigos y jefes. Está siendo desarrollado en conjunto con ZEZ Entertainment, donde mi rol ha sido director de programación de mecanicas de personajes y gameplay.",
        multi_d:"Wing project fue un proyecto donde utilicé Netcode y Parrelsync para probar mecánicas de multijugador en tercera persona. El projecto lamentablemente se ha perdido y por el momento ha estado cancelado, aunque inicialmente se creó con la idea de incrementar mis habilidades en programación con mecánicas de multijugador. ",
        firstPerson_d:"Un test que hice para probar mecanicas de videojuego en primera persona, tales como interactuar con objetos del entorno, equipar/desequipar armas. Ademas usé 3 tipos diferentes de armas, la primera dispara explosivos en un arco, la segunda dispara un orbe gravitacional que atrae las cajas cercanas y la ultima dispara una bala pesada que crea una expansión hacia arriba.",
        aeonbook_d:"The Aeon Book fue un proyecto universitario, el cual es un pequeño demo jugable de un plataformas-aventura 2D donde encarnas a un mago que debe derrotar a los enemigos que tiene delante (goblins, cuervos y ogros) hasta llegar a la meta final. El juego contaba con diferentes poderes ofensivos, mecanicas basicas de salto con coyote-time y IA basica para los enemigos, los cuales podían patrullar y atacar.",
        procTerr_d:"Una prueba antigua donde implementé un sistema de generación procedural de terreno.",
        clothSystem_d:"Un pequeño proyecto en 2D donde hice la implementación de cambio de ropajes en un personaje, al igual que su compra y venta de los mismos.",
        // Contacto
        contact_d:"Formulario de Contacto",
        send_btn:"Enviar mensaje",
    },
    en: {
        home_t: "Home",
        experience_t: "Experience",
        projects_t: "Projects",
        contact_t: "Contact",
        greeting_h: "My name is Sebastian, a Multimedia Engineer and Junior Video Game Developer.",
        greeting_d: "I have knowledge of using the Unity 3D engine for video game development in C#. I am also skilled in the use of other languages such as HTML, JavaScript and CSS, as well as design software such as Photoshop and Illustrator. Join me on my adventure, where developing video games has been my passion since I can remember.",
        linkd_btn: "Check my LinkedIn Profile",
        bluepr_d: "I supported the development of 6 educational video games over 1 year. The Unity3D development engine was used and among my roles was devising the bases of each of the video games, importing and configuring the necessary assets, programming main mechanics, resolution of incidents and errors, use of local databases to store information and transition between scenes using .JSON files to save games.",
        bluepr_btn: "Check out Blueprint Transformation's webpage",
        cloudl_d:"During my time at this company, I developed and fixed the different simulators that were assigned to me using the base development preset that all simulators use. I developed 2 simulators from start to finish, as well as their respective maintenance. The rest of the time I was assigned to correct incidents/errors in new and old simulators in primary, secondary and university education. The simulators used the Unity3D engine for their development and technologies such as data saving and sending in the cloud, PDF report generation and login with server response were used.",
        cloudl_btn:"Check out CloudLabs webpage",
        skylanders_d:"Skylanders Project is a third-person, Adventure-RPG video game where you will explore a vast procedurally generated world, in which you will face angels, demons and living beings from the depths of the earth. Its mechanics will include action combat, fast and free movement (on the ground and in the air), boss fights and obtaining unique items. The game is currently in development by me.",
        apoc_d:"Apocalypse is an Adventure-Roguelike video game, with an isometric perspective. Inspired by video games like Hades or Gatekeeper Infinity, you will traverse a vast procedural terrain in rounds, collecting objects and facing off against enemies and bosses. Is currently on development in conjunction with ZEZ Entertainment, where my role has been character mechanics and gameplay programmer director.",
        multi_d:"Wing project was a project where I used Netcode and Parrelsync to test third-person multiplayer mechanics. The project has unfortunately been lost and has been canceled for the moment, although it was initially created with the idea of increasing my programming skills with multiplayer mechanics.",
        firstPerson_d:"A test I did to test first-person video game mechanics, such as interacting with objects in the environment, equipping/unequipping weapons. I also used 3 different types of weapons, the first fires explosives in an arc, the second fires a gravitational orb that attracts nearby boxes and the last fires a heavy bullet that creates an upward expansion.",
        aeonbook_d:"The Aeon Book was a university project, which is a small playable demo of a 2D platform-adventure where you play a wizard who must defeat the enemies in front of him (goblins, crows and ogres) until reaching the final goal. The game had different offensive powers, basic jump with coyote-time and basic AI for enemies, which could patrol and attack.",
        procTerr_d:"An old test where I implemented a procedural terrain generation system.",
        clothSystem_d:"A small 2D project where I implemented the change of clothes in a character, as well as their purchase and sale.",
        // Agregar más traducciones según sea necesario
        contact_d:"Contact Form",
        send_btn:"Send Message",
    }
};
