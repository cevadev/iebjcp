/* ********** Menu ********** */
/* empleamos una funcion anonima autoejecutable */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none"); // menu-bars.svg
    $btnMenu.lastElementChild.classList.toggle("none"); // menu-close.svg
    $menu.classList.toggle("is-active");
  });

  /* cerramos el menu cuando se detecta que el usuario hizo click en alguna opcion del menu */
  /* delegamos el evento click al documentos y preguntamos donde se realizo la accion */
  d.addEventListener("click", (e) => {
    /** si el click no se hizo en un elemento a dentro de la clase menu entonces cancelamos la accion */
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove(
      "none"
    ); /** hacemos visible el svg de las barras */
    $btnMenu.lastElementChild.classList.add(
      "none"
    ); /** ocultamos el svg close */
    $menu.classList.remove("is-active");
  });
})(document);
