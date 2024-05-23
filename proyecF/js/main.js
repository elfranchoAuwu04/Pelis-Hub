function toggleAnswer(index) {
  const answers = document.querySelectorAll('.faq-answer');
  answers[index].classList.toggle('open');
}



$('.message a').click(function() {
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

// Agregar un manejador de eventos para el envío del formulario de inicio de sesión
$('.login-form').submit(function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos de entrada
  var email = $(this).find('input[placeholder="Correo electronico"]').val();
  var password = $(this).find('input[placeholder="Contraseña"]').val();

  // Verificar si los campos están llenos
  if (email && password) {
      // Redirigir al usuario a "pago.htm"
      window.location.href = "pago.html";
  } else {
      alert("Por favor, complete todos los campos.");
  }
});

// Agregar un manejador de eventos para el envío del formulario de registro
$('.register-form').submit(function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos de entrada
  var fullName = $(this).find('input[placeholder="Nombre completo"]').val();
  var username = $(this).find('input[placeholder="@usuario"]').val();
  var email = $(this).find('input[placeholder="Correo electronico"]').val();
  var password = $(this).find('input[placeholder="Contraseña"]').val();

  // Verificar si los campos están llenos
  if (fullName && username && email && password) {
      // Redirigir al usuario a "pago.htm"
      window.location.href = "pago.html";
  } else {
      alert("Por favor, complete todos los campos.");
  }
});

