// Mostrar SweetAlert al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  Swal.fire({
    title: '¡Bienvenido!',
    text: 'Me da gusto compartir contigo esta invitación.',
    icon: 'info',
    confirmButtonText: 'Gracias'
  });
});

// Contador regresivo para el 27 de diciembre
const countdownElement = document.getElementById('countdown-timer');
const targetDate = new Date('December 27, 2024 00:00:00').getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "¡Es el día!";
  }
}, 1000);

// Manejo del formulario de confirmación
document.getElementById('confirmationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const guests = document.getElementById('guests').value;

  if (name && email && guests) {
    Swal.fire({
      title: '¡Confirmación recibida!',
      text: `Gracias, ${name}. Hemos recibido tu confirmación para ${guests} invitado(s).`,
      icon: 'success',
      confirmButtonText: 'Cerrar'
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Por favor, completa todos los campos.',
      icon: 'error',
      confirmButtonText: 'Cerrar'
    });
  }
});
