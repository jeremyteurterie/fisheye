function mediaFactory(mediaData) {
  const { likes, price, title } = mediaData;

  function getUserMedia() {
    const div = document.createElement("div");

    const image = document.createElement("img");
    const video = document.createElement("video");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    div.setAttribute("class", "photographmedia_container");
    //
    h2.setAttribute("class", "photographmedia_name");
    h2.textContent = `${title}`;
    //
    h3.setAttribute("class", "photographmedia_name");
    h3.textContent = `${likes}`;
    //
    h4.setAttribute("class", "photographmedia_name");
    h4.textContent = `${price}€/jour`;
    //
    image.setAttribute("class", "photographmedia_image");
    image.setAttribute("src", `assets/photographers/photos/${image}`);
    //
    video.setAttribute("class", "photographmedia_video");
    video.setAttribute("src", `assets/photographers/photos/${video}`);
    //
    div.appendChild(image);
    div.appendChild(video);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);

    return div;
  }
  return { getUserMedia };
}
