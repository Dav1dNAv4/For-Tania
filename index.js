const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

// Variable para llevar la cuenta del tamaño del botón "Sí"
let yesBtnScale = 1;

// --- Evento para el botón "Sí" ---
yesBtn.addEventListener('click', function () {
    // Ocultamos los botones y el texto para mostrar un mensaje final
    document.querySelector('.contenedor').innerHTML = `
        <div style="text-align: center; color: white; font-family: 'Pacifico', cursive; font-size: 3em;">
            <p>¡Sabía que dirías que sí! </p>
            <p>¡¡TE VEO MAÑANA A LAS 9 AM!!</p>
            <p style="font-size: 0.5em; margin-top: 20px;">Te quiero mucho, mira lo demas de la cajita ❤️</p>
        </div>
    `;
    // Detenemos la animación de las estrellas para que no distraiga
    document.getElementById('stars').style.animation = 'none';
});

// --- Evento para el botón "No" ---
noBtn.addEventListener('mouseover', function () {
    // Hacemos el botón "Sí" un 5% más grande
    yesBtnScale += 0.05;
    yesBtn.style.transform = `translate(-100%, 0) scale(${yesBtnScale})`;

    // Movemos el botón "No" a una posición aleatoria en la pantalla
    const randomX = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.clientHeight);
    
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
