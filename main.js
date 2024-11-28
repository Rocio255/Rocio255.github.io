var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Apunta a la luna, incluso si fallas!')
    .pauseFor(2500)
    .deleteChars(18)
    .typeString('<strong>aterrizarás entre las estrellas!</strong>')
    .pauseFor(2500)
    .start();