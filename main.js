// Diccionario de idiomas
const translations = {
    en: {
        var1: "Home",
        var2: "About",
        var3: "Contact",
        subtext01: "Technologies ⬇️",
        subtext02: "My certificates ⬇️",
        cer01: "Web development",
        cer02: "Backend web programming",
        title_01: ["Hello, my name is Javier Rojas. I am a student at the National University of San Juan, pursuing a Web Programming Technician degree with 40% progress. I am developing skills in web programming, database management, and technical problem-solving. I am seeking opportunities to grow professionally and contribute value to technological projects."],
    },
    es: {
        var1: "Inicio",
        var2: "Acerca de",
        var3: "Contacto",
        subtext01: "Tecnologías ⬇️",
        cer01: "Desarrollo Web",
        cer02: "Programación Web Backend",
        subtext02: "Mis Certificados ⬇️",
        title_01: ["Hola, mi nombre es Javier Rojas. Soy estudiante de la Universidad Nacional de San Juan en la carrera de Tecnicatura en Programación Web, con un avance del 40%. Estoy desarrollando habilidades en programación web, manejo de bases de datos y resolución de problemas técnicos. Busco oportunidades para crecer profesionalmente y aportar valor a proyectos tecnológicos."],
    },
};

// Referencias a los elementos
const langSwitch = document.getElementById("languageSwitch");
const elements = {
    var1: document.getElementById("var1"),
    var2: document.getElementById("var2"),
    var3: document.getElementById("var3"),
    title_01: document.getElementById("title_01"),
    subtext01: document.getElementById("subtext01"),
    subtext02: document.getElementById("subtext02"),
    cer01: document.getElementById("cer01"),
    cer02: document.getElementById("cer02"),

};

// Variable para almacenar la instancia de Typed.js
let typedInstance = null;

// Función para actualizar el idioma
function updateLanguage(lang) {
    // Actualizamos los textos de los elementos
    for (const key in translations[lang]) {
        if (elements[key]) {
            if (Array.isArray(translations[lang][key])) {
                // Si ya existe una instancia de Typed.js, la destruimos antes de crear una nueva
                if (typedInstance) {
                    typedInstance.destroy();
                }

                // Inicializamos Typed.js con el texto correspondiente al idioma seleccionado
                typedInstance = new Typed("#title_01", {
                    strings: translations[lang][key],
                    typeSpeed: 10,
                    backSpeed: 30,
                    loop: false
                });
            } else {
                // Si no es un array, solo cambiamos el texto
                elements[key].textContent = translations[lang][key];
            }
        }
    }
}

// Evento para cambiar el idioma
langSwitch.addEventListener("change", () => {
    const selectedLang = langSwitch.checked ? "en" : "es";
    updateLanguage(selectedLang);
});

// Establecer el idioma inicial
updateLanguage("es");

//certificados
// Mostrar el certificado en el overlay
function showCert(imageSrc) {
    const overlay = document.getElementById('cert-overlay'); // Selecciona el overlay
    const largeImage = document.getElementById('cert-large'); // Selecciona la imagen grande
    largeImage.src = imageSrc; // Asigna el `src` recibido a la imagen grande
    overlay.style.display = 'flex'; // Hace visible el overlay
  }
  
  function closeCert() {
    const overlay = document.getElementById('cert-overlay');
    overlay.style.display = 'none'; // Oculta el overlay
  }
  
  //redes
  // Seleccionamos el ícono principal
const toggleIcons = document.getElementById("toggleIcons");
const floatingIcons = document.querySelector(".floating-icons");

// Evento para alternar la clase 'open'
toggleIcons.addEventListener("click", () => {
    floatingIcons.classList.toggle("open");
});
