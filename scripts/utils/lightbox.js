window.onload = () => {
  const lightbox = document.querySelector("#lightbox");
  const lightboxClose = document.querySelector(".lightbox_close");

  // On ajoute l'écouteur click sur les liens
  for (let link of mediaImage) {
    link.addEventListener("click", function (e) {
      // On désactive le comportement des liens
      e.preventDefault();
      // On ajoute l'image du lien cliqué dans la modale
      const lightboxImage = lightbox.querySelector(".lightbox_content img");
      lightboxImage.src = this.href;
      // On affiche la modale
      lightbox.classList.add("show");
    });
  }

  // On active le bouton close
  lightboxClose.addEventListener("click", function () {
    lightboxClose.classList.remove("show");
  });

  // On ferme au clic sur la modale
  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("show");
  });
};
