// Cambiar entre modo claro y oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
});

// Botón para subir al inicio
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animaciones al hacer scroll
const sections = document.querySelectorAll('section');

const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Verificar al cargar la página
// Define los valores de porcentaje para cada habilidad
const skillLevels = {
    "Spark": 90,
    "Apache Nifi": 90,
    "Apache Airflow": 70,
    "HTML": 95,
    "CSS": 95,
    "JavaScript": 95,
    "React": 65,
    "Node.js": 70,
    "Python": 95,
    "SQL": 95,
    "Git": 95,
    "Excel": 95,
    "Liderazgo": 100,
    "Trabajo en equipo":100
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".skill").forEach(skill => {
        const skillName = skill.querySelector("span").textContent;
        const percentageElement = skill.querySelector(".percentage");
        const progressBar = skill.querySelector(".progress-bar");

        if (skillLevels[skillName]) {
            let percent = 0;
            let target = skillLevels[skillName];

            const interval = setInterval(() => {
                if (percent >= target) {
                    clearInterval(interval);
                } else {
                    percent++;
                    percentageElement.textContent = percent + "%";
                    progressBar.style.width = percent + "%";
                }
            }, 15);
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");
    const navLinks = document.querySelectorAll("nav a");

    // Intersection Observer para mostrar las secciones
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        {
            threshold: 0.3, // Se activa cuando el 30% del elemento es visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Detectar la sección activa y resaltar en el menú
    const highlightNav = () => {
        let index = sections.length;
        
        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    };

    window.addEventListener("scroll", highlightNav);
});


