function mediaFactory(mediaData) {
  const { price, likes, image, video, title, date } = mediaData;

  const mediaImage = `assets/photographers/medias/${image}`;
  const mediaVideo = `assets/photographers/medias/${video}`;
  const like = `${likes}`;
  const dates = `${date}`;
  const titles = `${title}`;

  function getUserMedia() {
    const mediaContainer = document.createElement("div");
    const mediaDescription = document.createElement("p");
    const mediaTitle = document.createElement("h2");
    const mediaLikes = document.createElement("h3");
    const mediaPrice = document.createElement("h4");
    const mediaLikesButton = document.createElement("button");
    const mediaLikesButtonImage = document.createElement("img");
    const icon = `assets/icons/heart.svg`;
    const mediaLikesContainer = document.createElement("div");

    mediaContainer.setAttribute("class", "media_container");
    mediaContainer.setAttribute("data-likes", like);
    mediaContainer.setAttribute("data-date", dates);
    mediaContainer.setAttribute("data-title", titles);

    // Pop method for media
    // In MP4 case
    if (mediaVideo.split(".").pop() == "mp4") {
      const video = document.createElement("video");
      video.setAttribute("controls", "");
      video.setAttribute("class", "media_image");
      video.setAttribute("src", mediaVideo);
      const source = document.createElement("source");
      source.setAttribute("src", mediaVideo);
      source.setAttribute("type", "video/mp4");

      mediaContainer.append(video, mediaDescription);
      video.appendChild(source);
    }
    // In JPG case
    if (mediaImage.split(".").pop() == "jpg") {
      const image = document.createElement("img");
      image.setAttribute("class", "media_image");
      image.setAttribute("src", mediaImage);

      mediaContainer.append(image, mediaDescription);
    }
    //
    mediaDescription.setAttribute("class", "media_description");
    //
    mediaTitle.setAttribute("class", "media_title");
    mediaTitle.textContent = `${title}`;
    //
    mediaLikesContainer.setAttribute("class", "media_likescontainer");
    //
    mediaLikes.setAttribute("class", "media_likes");
    mediaLikes.textContent = `${likes}`;
    //
    mediaLikesButton.setAttribute("class", "media_likesbutton");
    mediaLikesButton.setAttribute("type", "button");
    //
    mediaLikesButtonImage.setAttribute("class", "media_likesbuttonimage");
    mediaLikesButtonImage.setAttribute("src", icon);
    //
    mediaPrice.setAttribute("class", "media_price");
    mediaPrice.textContent = `${price}€/jour`;

    //
    mediaDescription.append(mediaTitle, mediaLikes, mediaLikesContainer);
    mediaLikesContainer.append(
      mediaLikes,
      mediaLikesButton,
      mediaLikesButtonImage
    );
    mediaLikesButton.appendChild(mediaLikesButtonImage);

    // Ajout d'un like pour chaque média lorsque l'utilisateur clique sur le bouton
    function increaseLikes() {
      let count = like;
      count++;
      mediaLikes.innerText = count;
      totalLike.innerText = parseInt(totalLike.innerText) + 1; // Ajout d'un like dans la bannière totale
      return count;
    }

    mediaLikesButton.addEventListener("click", increaseLikes);

    return mediaContainer;
  }

  return { getUserMedia };
}
