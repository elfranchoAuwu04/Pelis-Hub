// PlcPagas.js



// Añadir esto al principio del archivo PlcPagas.js

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const query = searchInput.value.toLowerCase();
      searchMovies(query);
    });
  });
  
  function searchMovies(query) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const title = card.querySelector('.card-info h3').innerText.toLowerCase();
      if (title.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.querySelector('.intro-video');
    video.play().then(() => {
        video.muted = false;
    }).catch((error) => {
        console.log('El navegador ha bloqueado la reproducción automática con sonido.', error);
    });
});

document.querySelector('.slider-btn.left').addEventListener('click', () => {
    document.querySelector('.slider-content').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.querySelector('.slider-btn.right').addEventListener('click', () => {
    document.querySelector('.slider-content').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});



// PlcPagas.js

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.querySelector('.intro-video');
    video.play().then(() => {
        video.muted = false;
    }).catch((error) => {
        console.log('El navegador ha bloqueado la reproducción automática con sonido.', error);
    });
});

document.querySelector('.slider-btn.left').addEventListener('click', () => {
    document.querySelector('.slider-content').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.querySelector('.slider-btn.right').addEventListener('click', () => {
    document.querySelector('.slider-content').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

// Código para abrir el reproductor de video
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        const videoUrl = this.dataset.video;
        window.open(`reproductor.html?video=${encodeURIComponent(videoUrl)}`, '_blank');
    });
});


