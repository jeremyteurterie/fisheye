async function getPhotographers() {
  const photographers = [];
  fetch("./data/photographers.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json.photographers);
    });
  return { photographers };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerCard.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
