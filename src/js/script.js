document.addEventListener('DOMContentLoaded', function () {
    // Dark mode toggle
    const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');
    const body = document.body;
    const logo = document.getElementById('logo'); // Seleciona a logo

    // Adiciona um evento de clique em cada toggle
    darkModeToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            body.classList.toggle('dark-mode');

            // Atualiza o ícone para todos os toggles
            darkModeToggles.forEach(btn => {
                const icon = btn.querySelector('i');
                if (body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    logo.src = '/src/images/yellow-logo.svg'

                    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                        link.addEventListener('mouseenter', () => {
                            link.style.setProperty('color', '#F2E500', 'important');
                        });
                        link.addEventListener('mouseleave', () => {
                            link.style.removeProperty('color');
                        });
                    });
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    logo.src = 'src/images/purple-logo.svg'

                    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                        link.addEventListener('mouseenter', () => {
                            link.style.setProperty('color', '#9370DB', 'important');
                        });
                        link.addEventListener('mouseleave', () => {
                            link.style.removeProperty('color');
                        });
                    });
                }
            });
        });
    });

    // Typing effect 
    const typingText = document.getElementById('typing-text');
    const texts = [
        "Transforme seu futuro com tecnologia",
        "Aprenda a programar",
        "Desenvolva jogos",
        "Crie aplicativos",
        "Explore a robótica"
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            typingText.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();
});

// Testimonial Slider
// const testimonials = [
//     {
//         image: "src/images/amancio.jpeg",
//         quote: "A Código Kid transformou minha carreira. O curso de Desenvolvimento Web Full Stack me deu as habilidades e a confiança necessárias para conseguir meu primeiro emprego como desenvolvedor em uma startup de tecnologia.",
//         author: "Matheus Amâncio",
//         role: "Desenvolvedor Web Full Stack"
//     },
//     {
//         image: "src/images/basic-computing.jpg",
//         quote: "O curso de Ciência de Dados da Código Kid é simplesmente excepcional. A abordagem prática e os projetos reais me permitiram construir um portfólio sólido, que foi fundamental para minha transição de carreira para a área de dados.",
//         author: "Maria Santos",
//         role: "Cientista de Dados"
//     },
//     {
//         image: "src/images/cat.png",
//         quote: "Graças ao curso de Desenvolvimento Mobile da Código Kid, consegui criar e lançar meu próprio aplicativo na App Store e Google Play. A qualidade do ensino e o suporte da comunidade foram essenciais para meu sucesso.",
//         author: "Pedro Oliveira",
//         role: "Desenvolvedor Mobile Independente"
//     }
// ];

// let currentTestimonial = 0;
// const testimonialCard = document.querySelector('.testimonial-card');
// const prevButton = document.getElementById('prevTestimonial');
// const nextButton = document.getElementById('nextTestimonial');

// function showTestimonial(index) {
//     const testimonial = testimonials[index];
//     testimonialCard.innerHTML = `
//         <div class="testimonial-image">
//             <img src="${testimonial.image}" alt="${testimonial.author}">
//         </div>
//         <p class="testimonial-quote">"${testimonial.quote}"</p>
//         <p class="testimonial-author">${testimonial.author}</p>
//         <p class="testimonial-role">${testimonial.role}</p>
//     `;
// }

// prevButton.addEventListener('click', () => {
//     currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
//     showTestimonial(currentTestimonial);
// });

// nextButton.addEventListener('click', () => {
//     currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//     showTestimonial(currentTestimonial);
// });

// showTestimonial(currentTestimonial);

const testimonials = [
    {
        image: "src/images/amancio.jpeg",
        quote: "\"Murilo está simplesmente encantado com as aulas de robótica! Desde que começou, sua paixão pela área só tem crescido, e ele fica ansioso para ir para escola. A cada aula, ele se sente mais envolvido e aprende novos conceitos de maneira divertida e prática. O mais impressionante é a evolução na sua autonomia. Antes mais dependente, e percebo que agora ele demonstra confiança e proatividade em resolver os desafios propostos. Murilo ama o processo de montar e programar, e isso tem despertado nele uma verdadeira curiosidade. Quando chega em casa ele fica virado nos legos, montando. É incrível ver como ele se empolga e adora compartilhar suas criações. Sem dúvida, as aulas de robótica têm sido uma experiência transformadora e muito gratificante para ele! ❤\"",
        author: "Aline, mãe de Murilo Fitipaldi",
        // role: "Desenvolvedor Web Full Stack"
    },
    {
        image: "src/images/basic-computing.jpg",
        quote: "\"Queria que ao invés de integral a escola tivesse a Código Kid.\"",
        author: "Pedro Chalegre, aluno da robótica CKJunior",
        // role: "Cientista de Dados"
    },
    {
        image: "src/images/cat.png",
        quote: "\"A escola de informática Código Kid, onde meu filho Bruno José está na fase II do curso de Robótica, realmente nos surpreendeu com seu método de ensino. Notamos que, rapidamente, Bruno passou a desenvolver os programas deste curso e apresentar os projetos com facilidade, trazendo autoconfiança e consciência do uso da tecnologia com responsabilidade. Temos certeza que, em breve, ele vai dominar a linguagem de programação. Estamos satisfeitos e felizes com a qualidade, dedicação e acolhimento de todos os profissionais da escola.\"",
        author: "Mônica, mãe Bruno José",
        // role: "Desenvolvedor Mobile Independente"
    },
    {
        image: "src/images/example4.jpg",
        quote: "\"Eu gosto muito da Código Kid e de todos os tios. Gosto de tudo dela. Por mim, eu viveria nela. Que toda escola seja como a Código Kid.\"",
        author: "Noah, aluno do curso CKJunior",
        // role: "Analista de Sistemas"
    }
];

const testimonialCards = document.querySelector('.testimonial-cards');
const prevButton = document.getElementById('prevTestimonial');
const nextButton = document.getElementById('nextTestimonial');

let currentIndex = 0;

// Renderizar os depoimentos
function renderTestimonials() {
    testimonialCards.innerHTML = testimonials.map((testimonial, index) => {
        const truncatedText = testimonial.quote.length > 150 
            ? testimonial.quote.substring(0, 150) + "..." 
            : testimonial.quote;

        return `
            <div class="testimonial-card" data-index="${index}">
                <div class="testimonial-image">
                    <img src="${testimonial.image}" alt="${testimonial.author}">
                </div>
                <p class="testimonial-quote">${truncatedText}</p>
                ${testimonial.quote.length > 150 ? `<span class="read-more" data-text="${testimonial.quote.replace(/"/g, "&quot;")}" data-author="${testimonial.author}">Ler mais...</span>` : ""}
                <p class="testimonial-author"><strong>${testimonial.author}</strong></p>
                
            </div>
        `;

        // <p class="testimonial-role">${testimonial.role}</p> //Código apra ser colocado acima caso necessário
    }).join('');

    // Adiciona evento ao botão "Ler mais..."
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function () {
            modalText.innerText = this.dataset.text.replace(/&quot;/g, '"'); // Converte de volta para as aspas duplas no modal
            modalAuthor.innerText = this.dataset.author;
            modal.style.display = "flex";
            modalOverlay.style.display = "block";
        });
    });
}

// Mover o carrossel
function updateCarousel() {
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth; // Largura de um cartão
    const gap = parseInt(getComputedStyle(testimonialCards).gap) || 0; // Valor do gap
    const totalWidth = cardWidth + gap; // Largura do cartão + gap
    const offset = -currentIndex * totalWidth; // Deslocamento ajustado
    testimonialCards.style.transform = `translateX(${offset}px)`;
}

// Clique para ir ao anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
});

// Clique para ir ao próximo
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
});

//Modal dos depoimentos
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalText = document.getElementById('modalText');
const modalAuthor = document.getElementById('modalAuthor');
const closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
});

modalOverlay.addEventListener('click', () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
});

// Inicializar
renderTestimonials();
updateCarousel();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.course-card, .testimonial-card, .cta, .tech-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 50) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize elements with initial styles
const initializeStyles = () => {
    const elements = document.querySelectorAll('.course-card, .testimonial-card, .cta, .tech-item, .faq-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
};

initializeStyles();

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

function backToTop(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth", 
    });
}

// Cursos Renovados
document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category")
    const courses = document.querySelectorAll(".course-topic")
    let activeCategory = null
  
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        const categoryName = category.dataset.category
        toggleCourse(categoryName)
        setActiveCategory(category)
      })
    })
  
    function toggleCourse(categoryName) {
      courses.forEach((course) => {
        if (course.id === categoryName) {
          course.classList.add("active")
        } else {
          course.classList.remove("active")
        }
      })
    }
  
    function setActiveCategory(category) {
      if (activeCategory) {
        activeCategory.classList.remove("selected-topic-course") // Remove a cor do anterior
        activeCategory.style.transform = ""
      }
      category.classList.add("selected-topic-course") // Adiciona a cor ao ativo
      category.style.transform = "scale(1.05)"
      activeCategory = category
    }
  
    // Set initial active category
    toggleCourse("baby")
    setActiveCategory(categories[0])
})