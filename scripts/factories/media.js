function mediaFactory(mediaData) {
  const { price, likes, image, video, title } = mediaData;

  const mediaImage = `assets/photographers/medias/${image}`;
  const mediaVideo = `assets/photographers/medias/${video}`;

  function getUserMedia() {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");

    div.setAttribute("class", "photographmedia_container");

    // Pop method for media
    // In MP4 case
    if (mediaVideo.split(".").pop() == "mp4") {
      const video = document.createElement("video");
      video.setAttribute("controls", "");
      video.setAttribute("class", "photographmedia_image");
      video.setAttribute("src", mediaVideo);
      const source = document.createElement("source");
      source.setAttribute("src", mediaVideo);
      source.setAttribute("type", "video/mp4");

      div.appendChild(video);
      video.appendChild(source);
    }
    // In JPG case
    if (mediaImage.split(".").pop() == "jpg") {
      const image = document.createElement("img");
      image.setAttribute("class", "photographmedia_image");
      image.setAttribute("src", mediaImage);

      div.appendChild(image);
    }
    //
    h2.setAttribute("class", "photographmedia_description");
    h2.textContent = `${title} ${likes}`;
    //
    h4.setAttribute("class", "photographmedia_name");
    h4.textContent = `${price}€/jour`;

    console.log(video);
    //
    div.appendChild(h2);

    return div;
  }
  return { getUserMedia };
}
