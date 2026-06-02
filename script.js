// ==================== ANIME.JS ANIMACIONES ====================

document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Rayo que parpadea constantemente
  anime({
    targets: '#lightningAnim',
    scale: [1, 1.3, 1],
    rotate: ['0deg', '15deg', '-15deg', '0deg'],
    duration: 800,
    loop: true,
    easing: 'easeInOutQuad'
  });
  
  // 2. Animación de entrada para el logo METALLICA
  anime({
    targets: '#logoAnim',
    opacity: [0, 1],
    translateY: [-50, 0],
    scale: [0.5, 1],
    duration: 1200,
    easing: 'spring(1, 80, 10, 0)'
  });
  
  // 3. Animación del nombre
  anime({
    targets: '#nameAnim',
    opacity: [0, 1],
    translateX: [-80, 0],
    duration: 1000,
    delay: 300,
    easing: 'easeOutElastic(1, .5)'
  });
  
  // 4. Animación de la edad
  anime({
    targets: '#ageAnim',
    opacity: [0, 1],
    translateX: [80, 0],
    duration: 1000,
    delay: 500,
    easing: 'easeOutElastic(1, .5)'
  });
  
  // 5. Animación de la fecha
  anime({
    targets: '#dateAnim',
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 800,
    delay: 700,
    easing: 'easeOutQuad'
  });
  
  // 6. Animación del botón CTA
  anime({
    targets: '#ctaAnim',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    delay: 900,
    easing: 'easeOutQuad'
  });
  
  // 7. Partículas de fondo animadas
  const heroSection = document.getElementById('hero');
  for (let i = 0; i < 40; i++) {
    let particle = document.createElement('div');
    particle.classList.add('particle');
    let size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.background = `rgba(192,57,43,${Math.random() * 0.4 + 0.1})`;
    heroSection.appendChild(particle);
    
    anime({
      targets: particle,
      translateX: [0, anime.random(-100, 100)],
      translateY: [0, anime.random(-100, 100)],
      scale: [1, anime.random(0.5, 2)],
      opacity: [anime.random(0.3, 0.8), 0],
      duration: anime.random(3000, 7000),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  }
  
  // 8. Animación de los elementos de la galería
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item, index) => {
    const anim = anime({
      targets: item,
      opacity: [0, 1],
      translateY: [40, 0],
      delay: index * 150,
      duration: 600,
      autoplay: false
    });
    
    const observerGal = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anim.play();
          observerGal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    observerGal.observe(item);
  });
  
  // 9. Animación de los números del setlist
  const setlistNums = document.querySelectorAll('.setlistNum');
  setlistNums.forEach(num => {
    num.addEventListener('mouseenter', () => {
      anime({
        targets: num,
        scale: 1.3,
        color: '#f39c12',
        duration: 300
      });
    });
    num.addEventListener('mouseleave', () => {
      anime({
        targets: num,
        scale: 1,
        color: '#c0392b',
        duration: 300
      });
    });
  });
  
  // 10. Efecto de pulsación para el botón de WhatsApp
  anime({
    targets: '#whatsappBtn',
    scale: [1, 1.05, 1],
    duration: 1500,
    loop: true,
    easing: 'easeInOutSine'
  });
  
  // 11. Animación de la tarjeta de invitación
  const inviteCard = document.getElementById('inviteCard');
  const inviteObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: inviteCard,
          scale: [0.95, 1],
          opacity: [0, 1],
          duration: 800,
          easing: 'spring(1, 80, 10, 0)'
        });
        inviteObserver.unobserve(inviteCard);
      }
    });
  }, { threshold: 0.3 });
  inviteObserver.observe(inviteCard);
  
});

// ==================== COUNTDOWN (11 de Mayo de 2026) ====================
function updateCountdown() {
  const targetDate = new Date(2026, 4, 11, 20, 0, 0);
  const now = new Date();
  const diff = targetDate - now;
  
  if (diff <= 0) {
    document.getElementById('days').innerHTML = '00';
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (86400000)) / (3600000));
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  
  document.getElementById('days').innerHTML = String(days).padStart(2, '0');
  document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==================== BURGER MENU ====================
const burger = document.getElementById('burger');
const navLinksMenu = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinksMenu.classList.toggle('open');
  burger.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(l => {
  l.addEventListener('click', () => {
    navLinksMenu.classList.remove('open');
    burger.classList.remove('open');
  });
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

function updateActiveNav() {
  let current = '';
  const scrollPosition = window.pageYOffset + 200; // Offset para activar antes
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionBottom = sectionTop + sectionHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      current = section.getAttribute('id');
    }
  });
  
  // Si no hay sección activa (estamos al final), activar la última
  if (!current && sections.length > 0) {
    const lastSection = sections[sections.length - 1];
    const lastSectionTop = lastSection.offsetTop;
    const lastSectionHeight = lastSection.clientHeight;
    
    if (window.pageYOffset + window.innerHeight >= lastSectionTop + lastSectionHeight / 2) {
      current = lastSection.getAttribute('id');
    }
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ==================== FADE IN OBSERVER ====================
const faders = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => fadeObserver.observe(el));

// ==================== WHATSAPP CONFIRMATION ====================
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
  e.preventDefault();
  let phone = "5491123456789";
  let msg = "🎸🤘 ¡Hola! Confirmo mi asistencia a los 50 años de RAFAEL estilo METALLICA. Allí estaré el 11 de Mayo de 2026 en Prolongación San Isidro 314, El Tambo - Huancayo. ¡Vamos con todo! 🔥🎂";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
});

// ==================== GALLERY CLICK EFFECT ====================
document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('click', () => {
    anime({
      targets: card,
      scale: [1, 0.95, 1],
      duration: 200,
      easing: 'easeOutQuad'
    });
  });
});

// ==================== SETLIST CLICK EFECTO ====================
document.querySelectorAll('.setlist-item').forEach(item => {
  item.addEventListener('click', () => {
    const num = item.querySelector('.setlist-num');
    anime({
      targets: num,
      scale: [1, 1.5],
      color: ['#c0392b', '#f39c12'],
      duration: 300,
      direction: 'alternate',
      complete: () => {
        anime({
          targets: num,
          scale: 1,
          color: '#c0392b',
          duration: 300
        });
      }
    });
  });
});

// ==================== HOVER EFECTOS SETLIST ====================
document.querySelectorAll('.setlist-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    anime({
      targets: item,
      translateX: [0, 10],
      duration: 200,
      easing: 'easeOutQuad'
    });
  });
  item.addEventListener('mouseleave', () => {
    anime({
      targets: item,
      translateX: 0,
      duration: 200
    });
  });
});
