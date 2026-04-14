export function menuMobile() {
  const MenuH = document.getElementById("MenuH");
  const limobile = document.querySelectorAll(".limobile");
  const MenuMobile = document.getElementById("MenuMobile");

  MenuH.addEventListener("click", () => {
    if (getComputedStyle(MenuMobile).display === "none") {
      MenuMobile.style.display = "flex";
      MenuH.src = "./assets/img/x.webp";
    } else {
      MenuMobile.style.display = "none";
      MenuH.src = "./assets/img/menu-hamburguer.webp";
    }
  });

  limobile.forEach((li) => {
    li.addEventListener("click", () => {
      if (getComputedStyle(MenuMobile).display === "none") {
        MenuMobile.style.display = "flex";
        MenuH.src = "./assets/img/x.webp";
      } else {
        MenuMobile.style.display = "none";
        MenuH.src = "./assets/img/menu-hamburguer.webp";
      }
    });
  });
}
