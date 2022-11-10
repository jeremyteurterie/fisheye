async function getPhotographer () {
  // const id = window.location.search.split("id=")[1];

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const photographers = await fetch("./data/photographers.json").then(
    (response) => response.json()
  );

  photographers.photographers = photographers.photographers.filter(
    // eslint-disable-next-line eqeqeq
    (photographer) => photographer.id == id
  )[0];
  photographers.media = photographers.media.filter(
    // eslint-disable-next-line eqeqeq
    (media) => media.photographerId == id
  );

  return photographers;
}

async function init () {
  // Récupère les datas des photographes
  const photographer = await getPhotographer();
  displayData(photographer.photographers);
  displayDataMedia(photographer.media);
}

// Fonction qui fait appraitre les photographes
function displayData (photographer) {
  const photographersSection = document.getElementById("photographeInfos");
  const profileModel = photographerFactory(photographer);
  const profiles = profileModel.getPhotographerProfil();
  photographersSection.appendChild(profiles);
}

// Fonction qui fait appraitre les médias
function displayDataMedia (medias) {
  const mediaslist = document.querySelector(".photographer_media");
  Array.from(medias).forEach((media) => {
    const mediaModel = mediaFactory(media);
    const displaymedia = mediaModel.getUserMedia();
    mediaslist.appendChild(displaymedia);
  });

  // Affichage du total des likes
  let totalLike = 0;

  const displaylikes = medias.map((media) => {
    totalLike += media.likes;
    document.querySelector("#totalLike").innerHTML = totalLike;
    return displaylikes;
  });
}

// Fonction pour le tri des médias
function mediasSort (type) {
  let mediaContainer = document.querySelectorAll(".media_container");
  mediaContainer = [].slice.call(mediaContainer);
  if (type === "title") {
    sortByTitle(mediaContainer);
  } else if (type === "date") {
    sortByDate(mediaContainer);
  } else {
    sortByLike(mediaContainer);
  }

  // Fonction pour l'affichage alphabétique
  function sortByTitle (mediaContainer) {
    mediaContainer.sort(function (a, b) {
      return a.dataset.title.localeCompare(b.dataset.title);
    });
  }

  // Fonction pour l'affichage par popularité
  function sortByLike (mediaContainer) {
    mediaContainer.sort(function (a, b) {
      return b.dataset.likes - a.dataset.likes;
    });
  }

  // Fonction pour l'affichage par date
  function sortByDate (mediaContainer) {
    mediaContainer.sort(function (a, b) {
      return a.dataset.date.localeCompare(b.dataset.date);
    });
  }

  const mediaslist = document.querySelector(".photographer_media");
  mediaslist.innerHTML = "";

  mediaContainer.forEach((media) => {
    mediaslist.append(media);
  });
}

// Lightbox

// Elements
const fondLightbox = document.querySelector(".lightbox-background");
const lightbox = document.getElementById("lightbox");
const mediaLightbox = document.querySelectorAll(".media_container");
const suivante = document.querySelectorAll(".droite");
const precedente = document.querySelectorAll(".gauche");
const titre = document.querySelectorAll(".titre-media");
const croixFermer = document.querySelectorAll(".fermer"); // Fermer la modale
const mediaClavier = document.querySelector(".grillePhotosProfil_main");

lightbox.onclick = () => {
  console.log("Clicked button");
  lightbox.style.display = "block";
};

// mediaLightbox.forEach(() => {
//   console.log("event");
//   addEventListener("click", launchLightbox);
//   .onclick = function() { myScript };
// });

// console.log(mediaLightbox);
// croixFermer.forEach((btn) => btn.addEventListener("click", closeLightbox)); // Fermer la modale

// Modal form
// function launchLightbox() {
//   lightbox.style.display = "block";
// }

function closeLightbox () {
  lightbox.style.display = "none";
  document.querySelectorAll(".lightbox-media").forEach((Lmedia) => {
    Lmedia.remove();
  });
}

// function galleryCarrousel(id, type, media, alt, title) {
//   document.querySelectorAll(".lightbox-media").forEach((Lmedia) => {
//     Lmedia.remove();
//   });
//   launchLightbox();

//   let mediasCarrousel;

//   if (type === "video") {
//     mediasCarrousel = `<video controls class="video_main"><source src="assets/images/${media}" alt="${alt}"></video>`;
//   } else {
//     mediasCarrousel = `<img src="assets/images/${media}" alt="${alt}"  data-media="${id}">`;
//   }

//   const totalMedias = document.querySelectorAll(".media_container");
//   const firstChildTitle = document
//     .querySelectorAll(".media_container")[0]
//     .getAttribute("data-title");
//   const lastChildTitle = document
//     .querySelectorAll(".media_container")
//     [totalMedias.length - 1].getAttribute("data-title");

//   var index =
//     Array.prototype.indexOf.call(
//       document.getElementById(id).parentNode.children,
//       document.getElementById(id)
//     ) + 1;

//   let flecheGauche;
//   if (title === firstChildTitle) {
//     flecheGauche = "";
//   } else {
//     flecheGauche = `<i class="fa-solid fa-angle-left gauche" id="fleche-gauche" aria-label="Image précédente" onclick="flecheGaucheLightbox(${
//       index - 2
//     })" ></i>`;
//   }

//   let flecheDroite;
//   if (title === lastChildTitle) {
//     flecheDroite = "";
//   } else {
//     flecheDroite = `<i class="fa-solid fa-angle-right droite" id="fleche-droite" aria-label="Image suivante" onclick="flecheDroiteLightbox(${index})"></i>`;
//   }
// }
init();
