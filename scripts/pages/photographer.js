async function getPhotographer() {
  // const id = window.location.search.split("id=")[1];

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log(id);

  const photographers = await fetch("./data/photographers.json").then(
    (response) => response.json()
  );

  photographers.photographers = photographers.photographers.filter(
    (photographer) => photographer.id == id
  )[0];
  photographers.media = photographers.media.filter(
    (media) => media.photographerId == id
  );

  return photographers;
}

function displayData(photographer) {
  const photographersInfos = document.getElementById("photographeInfos");
  const profilesTemplate = photographerFactory(photographer);
  const photographersProfile = profilesTemplate.getPhotographProfil();
  photographersInfos.appendChild(photographersProfile);

  const photographersMedia = document.querySelector(".photographer_media");
  const mediaTemplate = mediaFactory(photographer);
  const photographerMedia = mediaTemplate.getUserMedia();
  photographersMedia.appendChild(photographerMedia);
}

async function init() {
  // Récupère les datas des photographes
  const photographer = await getPhotographer();
  console.log(photographer);
  displayData(photographer.photographers);
}

init();
