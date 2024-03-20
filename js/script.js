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
