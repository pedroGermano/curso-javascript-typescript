function meuEscopo() {
  const form = document.querySelector('.form');

  // form.onsubmit = function (e) {
  //   e.prevendDefault()
  // };
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  });
}

meuEscopo();
