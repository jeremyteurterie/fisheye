function photographerFactory(data) {
  const { name, portrait, city, country, id, price, tagline } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");
    const link = document.createElement("a");

    img.setAttribute("src", picture);
    h2.textContent = name;
    h3.textContent = `${city}, ${country}`;
    h4.textContent = `${tagline}`;
    h5.textContent = `${price}€/jour`;
    link.setAttribute("aria-label", `${name}`);
    link.setAttribute("href", `photographer.html?id=${id}`);

    link.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(h5);

    return article, link;
  }

  function getPhotographProfil() {
    //
    const div = document.createElement("div");
    const nom = document.createElement("h2");
    const location = document.createElement("h3");
    const tag = document.createElement("h4");
    const image = document.createElement("img");
    const prix = document.createElement("h5");

    div.setAttribute("class", "photograph_container");
    //
    nom.setAttribute("class", "photograph_name");
    nom.textContent = `${name}`;
    //
    location.setAttribute("class", "photograph_location");
    location.textContent = `${city}, ${country}`;
    //
    tag.setAttribute("class", "photograph_tag");
    tag.textContent = `${tagline}`;
    //
    image.setAttribute("class", "photograph_image");
    image.setAttribute("src", `assets/photographers/${portrait}`);
    //
    prix.setAttribute("class", "photograph_price");
    prix.textContent = `${price}€/jour`;
    //
    div.appendChild(image);
    div.appendChild(nom);
    div.appendChild(location);
    div.appendChild(tag);
    div.appendChild(prix);

    return div;
  }
  return {
    getUserCardDOM,
    getPhotographProfil,
  };
}
