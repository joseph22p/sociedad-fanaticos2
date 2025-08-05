
const eventoFecha = new Date("September 15, 2025 18:00:00").getTime();
const contador = document.getElementById("contador");

const actualizarContador = () => {
  const ahora = new Date().getTime();
  const diferencia = eventoFecha - ahora;

  if (diferencia <= 0) {
    contador.innerHTML = "¡El evento ha comenzado!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.innerHTML = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
};

setInterval(actualizarContador, 1000);
