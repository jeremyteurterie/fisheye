async function getPhotographers() {
  let myInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
  };

  let myRequest = new Request("./data/photographers.json", myInit);

  const photographers = [
    fetch(myRequest)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      }),
  ];
  return { photographers };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
