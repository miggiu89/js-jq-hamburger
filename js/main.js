//variabile del menu
var hamburgerMenu = $('.hamburger-menu');

// creo la funzione che si attiva al momento del click per entrare nel menu
$('.header-right a').click(function() {
    hamburgerMenu.fadeIn('slow');
});

//creo la funzione per uscire (usando un doppio click) dal menu
jQuery('.close i').dblclick(function() {
    hamburgerMenu.fadeOut('fast');
});


//non funziona , entra nel menu ma esce subito visto che entrambi si attivano con un solo click
/*$('.header-right a, .close i').click(function() {
    hamburgerMenu.fadeIn('slow');
    hamburgerMenu.fadeOut('fast');
});*/

