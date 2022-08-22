function photographerCard(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const article = `
    <article>
        <a href= "./photographer.html?id=${id}"
            <img src="/assets/photographers/${portrait}" alt="${name}">    
        </a>
    <h2>${name}</h2>
    <p>${city}, ${country}</p>
    <p>${tagline}</p>
    <p>${price}€/jour</p>
    </article>
`;
  return article;
}
