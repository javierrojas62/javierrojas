// Diccionario de idiomas
const translations = {
    en: {
        projectsButton: "Projects",
        techButton: "Technologies",
        subtext01: "Technologies",
        subtext02: "Projects",
        title_01: ["Hello, my name is Javier Rojas. I am a student at the National University of San Juan, pursuing a Web Programming Technician degree with 55% progress. I am developing skills in web programming, database management, and technical problem-solving. I am seeking opportunities to grow professionally and contribute value to technological projects."],
        'project1-title': "Digital wedding invitation",
        'project1-desc': "Wedding invitation website with HTML5/CSS3/JS: countdown animation, WhatsApp confirmation, collaborative Spotify playlist, and integrated maps for easy guest access.",
        'project1-btn': "View",
        'project2-title': "Easy Rental",
        'project2-desc': "A rental management app built with React and Supabase featuring a modern neumorphic UI, client/property management, PDF generation, light/dark modes, and automatic index updates (CPI/ILC) — all crafted for a smooth, efficient user experience.",
        'project2-btn': "View",
        'project3-title': "Your Best Version",
        'project3-desc': "A clean static web guide built with HTML, CSS, and JavaScript designed to deliver a clear, user-friendly experience for personal and professional development.",
        'project3-btn': "View",
        'project4-title': "Password Generator",
        'project4-desc': "A simple web tool built with HTML, CSS, and JavaScript that enables intuitive password generation with a user-friendly, straightforward interface.",
        'project4-btn': "View",
    },
    es: {
        projectsButton: "Proyectos",
        techButton: "Tecnologías",
        subtext01: "Tecnologías",
        subtext02: "Proyectos",
        title_01: ["Hola, mi nombre es Javier Rojas. Soy estudiante de la Universidad Nacional de San Juan en la carrera de Tecnicatura en Programación Web, con un avance del 55%. Estoy desarrollando habilidades en programación web, manejo de bases de datos y resolución de problemas técnicos. Busco oportunidades para crecer profesionalmente y aportar valor a proyectos tecnológicos."],
        'project1-title': "Invitación digital de boda",
        'project1-desc': "Sitio de invitación de boda con HTML5/CSS3/JS: animación de cuenta regresiva, confirmación vía WhatsApp, playlist colaborativa en Spotify y mapas integrados para facilitar el acceso a los invitados.",
        'project1-btn': "Ver",
        'project2-title': "Renta Fácil",
        'project2-desc': "Aplicación de gestión de alquileres desarrollada en React con Supabase, que ofrece interfaz neumórfica moderna, gestión de clientes e inmuebles, generación de PDFs, modo claro/oscuro y actualizaciones automáticas (IPC/ICL) — todo pensado para una experiencia fluida y eficiente.",
        'project2-btn': "Ver",
        'project3-title': "Tu Mejor Versión",
        'project3-desc': "Una guía web estática en HTML, CSS y JavaScript enfocada en ofrecer una experiencia clara y navegable para promover crecimiento personal y profesional.",
        'project3-btn': "Ver",
        'project4-title': "Generador de Contraseñas",
        'project4-desc': "Pequeña herramienta web en HTML, CSS y JavaScript que permite generar contraseñas de forma simple e intuitiva, con diseño enfocado en facilidad de uso.",
        'project4-btn': "Ver",
    },
};

// Referencias a los elementos
const languageButton = document.getElementById("languageButton");
const elements = {
    projectsButton: document.getElementById("projectsButton"),
    techButton: document.getElementById("techButton"),
    title_01: document.getElementById("title_01"),
    subtext01: document.getElementById("subtext01"),
    subtext02: document.getElementById("subtext02"),
    'project1-title': document.getElementById('project1-title'),
    'project1-desc': document.getElementById('project1-desc'),
    'project1-btn': document.getElementById('project1-btn'),
    'project2-title': document.getElementById('project2-title'),
    'project2-desc': document.getElementById('project2-desc'),
    'project2-btn': document.getElementById('project2-btn'),
    'project3-title': document.getElementById('project3-title'),
    'project3-desc': document.getElementById('project3-desc'),
    'project3-btn': document.getElementById('project3-btn'),
    'project4-title': document.getElementById('project4-title'),
    'project4-desc': document.getElementById('project4-desc'),
    'project4-btn': document.getElementById('project4-btn'),
};

// Función para actualizar el idioma
function updateLanguage(lang) {
    // Actualizamos los textos de los elementos
    for (const key in translations[lang]) {
        if (elements[key]) {
            // Si es un array, tomamos el primer elemento y lo asignamos directamente
            if (Array.isArray(translations[lang][key])) {
                elements[key].textContent = translations[lang][key][0];
            } else {
                elements[key].textContent = translations[lang][key];
            }
        }
    }
}

// Evento para cambiar el idioma
let currentLang = "es"; // Variable para trackear el idioma actual
languageButton.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    updateLanguage(currentLang);
});

// Establecer el idioma inicial
updateLanguage("es");

// Agregar scroll suave al logo
document.querySelector('.logo-inner').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
