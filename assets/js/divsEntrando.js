export function eixoX() {
  const esquerda = document.querySelectorAll(".esquerda");
  const direita = document.querySelectorAll(".direita");

  const observerX = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrouL");
      }
    });
  });

  esquerda.forEach((e) => {
    observerX.observe(e);
  });

  direita.forEach((d) => {
    observerX.observe(d);
  });
}

export function eixoY() {
  const cima = document.querySelectorAll(".cima");
  const baixo = document.querySelectorAll(".baixo");

  const observerY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrouC");
      }
    });
  });

  cima.forEach((c) => {
    observerY.observe(c);
  });

  baixo.forEach((b) => {
    observerY.observe(b);
  });
}
