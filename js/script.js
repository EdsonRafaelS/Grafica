window.addEventListener('DOMContentLoaded', function() {
    console.log('Página completamente carregada');
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 100);
});

window.addEventListener('DOMContentLoaded', function() {
    // Remove o último âncora da URL
    var cleanUrl = window.location.href.replace(/#.*$/, '');
    history.replaceState({}, document.title, cleanUrl);
});


function enviarWhatsApp1() {
    var numeroTelefone = '5589994016870'; // Substitua pelo número de telefone desejado
    var url = 'https://wa.me/' + numeroTelefone;
    window.open(url);
}

function enviarWhatsApp2() {
    var numeroTelefone = '5589994552634'; // Substitua pelo número de telefone desejado
    var url = 'https://wa.me/' + numeroTelefone;
    window.open(url);
}

function enviarWhatsApp3() {
  var numeroTelefone = '558994252717'; // Substitua pelo número de telefone desejado
  var url = 'https://wa.me/' + numeroTelefone;
  window.open(url);
}

function enviarWhatsApp4() {
  var numeroTelefone = '5589994675682'; // Substitua pelo número de telefone desejado
  var url = 'https://wa.me/' + numeroTelefone;
  window.open(url);
}

function rolarParaContato() {
    var contatoSection = document.getElementById("Contato");
    contatoSection.scrollIntoView({ behavior: "smooth" });
}

function initCarousel() {
    const prevButton = document.querySelector('.Carrossel-container .prev');
    const nextButton = document.querySelector('.Carrossel-container .next');
    const carousel = document.querySelector('.Carrossel-container .imagens');
    const slides = carousel.querySelectorAll('img');
  
    let slideIndex = 0;
  
    function showSlide(index) {
      // Esconda todos os slides
      slides.forEach((slide) => {
        slide.style.display = 'none';
      });
  
      // Mostre o slide atual
      slides[index].style.display = 'block';
    }
  
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0; // Volta para o primeiro slide
      }
      showSlide(slideIndex);
    }
  
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Volta para o último slide
      }
      showSlide(slideIndex);
    }
  
    // Adicione eventos de clique aos botões de navegação
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    // Mostre o primeiro slide quando a página carregar
    showSlide(slideIndex);
  }
  
  // Chame a função de inicialização do carrossel quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', initCarousel);
  