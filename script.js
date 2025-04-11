// -------------------------------------
// 1. Carrossel de Máquinas
// -------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    console.log("Carrossel carregado");

    const buttonsWrapper = document.querySelector(".map");
    const slides = document.querySelector(".inner");
    const cards = document.querySelectorAll(".card");
    const wrapper = document.querySelector(".wrapper");

    if (!buttonsWrapper || !slides || !wrapper || cards.length === 0) {
        console.error("Erro: Elementos do carrossel não encontrados!");
        return;
    }

    console.log("Botões encontrados:", document.querySelectorAll(".map button"));
    console.log("Slides encontrados:", slides);
    console.log("Wrapper encontrado:", wrapper);

    const wrapperWidth = wrapper.offsetWidth;
    
    buttonsWrapper.addEventListener("click", (e) => {
        if (e.target.matches("button")) {
            document.querySelectorAll(".map button").forEach((btn) =>
                btn.classList.remove("active")
            );

            let index = 0;
            if (e.target.classList.contains("second")) index = 1;
            else if (e.target.classList.contains("third")) index = 2;

            const translateValue = -index * wrapperWidth;
            console.log("Movendo para:", translateValue + "px");

            slides.style.transform = `translateX(${translateValue}px)`;
            e.target.classList.add("active");
        }
    });
});

// -------------------------------------
// 2. Validação e Interação do Formulário
// -------------------------------------
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
        contactForm.reset();
    });
}

// -------------------------------------
// 3. Botão WhatsApp Interativo
// -------------------------------------
const whatsappBtn = document.getElementById('whatsapp-btn');

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        window.open('https://wa.me/SEUNUMERO', '_blank');
    });
}

// -------------------------------------
// 4. Botão Voltar ao Topo
// -------------------------------------
 
// -------------------------------------
// 5. Navegação Suave entre Seções
// -------------------------------------
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// -------------------------------------
// 6. Realce do Menu Ativo
// -------------------------------------
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Ajuste para o menu
        const sectionHeight = section.offsetHeight;
        const link = document.querySelector(`nav ul li a[href="#${section.id}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// -------------------------------------
// 7. Botão WhatsApp Desaparecendo ao Rolar até o Rodapé
// -------------------------------------
window.addEventListener("scroll", function () {
    const whatsappButton = document.querySelector(".whatsapp-button");
    const footer = document.querySelector("footer");

    if (whatsappButton && footer) {
        const footerPosition = footer.getBoundingClientRect().top;

        // Verifica se o rodapé entrou na tela
        if (footerPosition <= window.innerHeight) {
            whatsappButton.classList.add("hidden");
        } else {
            whatsappButton.classList.remove("hidden");
        }
    }
});