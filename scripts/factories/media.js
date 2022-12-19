function mediaFactory(mediaData, photographer) {
  let mediaArray = [];
  const { price, likes, image, video, title, date, id } = mediaData;

  const mediaImage = `assets/photographers/medias/${image}`;
  const mediaVideo = `assets/photographers/medias/${video}`;
  const like = `${likes}`;
  const dates = `${date}`;
  const titles = `${title}`;
  const mediaId = `${id}`;
  // console.log(mediaData);
  console.log(JSON.stringify(photographer.media));
  console.log(typeof mediaData);
  mediaArray.push(mediaData);

  console.log(JSON.stringify(mediaArray) + " array of media ");

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
    const mediaLink = document.createElement("a");

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

      mediaContainer.append(mediaLink, video, mediaDescription);
      video.appendChild(source);
      mediaLink.append(video);
    }
    // In JPG case
    if (mediaImage.split(".").pop() == "jpg") {
      const image = document.createElement("img");
      image.setAttribute("class", "media_image");
      image.setAttribute("src", mediaImage);
      image.setAttribute("mediaId", mediaId);

      mediaContainer.append(mediaLink, image, mediaDescription);
      mediaLink.append(image);
    }

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    const mediaLightbox = document.createElement("div");
    const closeBtn = document.querySelector("#close");
    const mediaImg = document.createElement("img");
    const mediaVid = document.createElement("video");

    mediaVid.setAttribute("controls", "");

    mediaImg.setAttribute("src", mediaImage);
    mediaImg.setAttribute("class", "medias");
    mediaImg.setAttribute("mediaId", mediaId);
    mediaImg.setAttribute("id", "lightboxMedia");
    mediaVid.setAttribute("src", mediaVideo);

    mediaLightbox.setAttribute("id", "mediaLightbox");

    mediaLink.onclick = function () {
      if (!mediaImage.includes("undefined")) {
        openLightbox(mediaImg);
      } else {
        openLightbox(mediaVid);
      }
    };

    closeBtn.onclick = function () {
      closeLightbox();
    };

    function openLightbox(media) {
      console.log(media.image);
      lightbox.style.display = "block";
      lightbox.append(media);
    }

    function closeLightbox() {
      lightbox.style.display = "none";
      lightbox.innerHTML = "";
    }

    // variables previous & next button
    const previousBtn = document.querySelector(".gauche");
    const nextBtn = document.querySelector(".droite");

    // left arrow event : previous media onclick
    previousBtn.onclick = (event) => {
      const media = document
        .querySelector("#lightbox")
        .querySelector("#lightboxMedia");
      const actualMediaIndex = photographer.media.findIndex(
        ({ id }) => id == media.getAttribute("mediaId")
        //
      );

      let previousMediaIndex = actualMediaIndex - 1;

      if (previousMediaIndex > photographer.media.length) {
        previousMediaIndex = 0;
        media.src =
          "assets/photographers/medias/" + photographer.media[0].image;
        media.setAttribute("mediaid", photographer.media[0].id);
      } else {
        media.src =
          "assets/photographers/medias/" +
          photographer.media[previousMediaIndex].image;
        media.setAttribute(
          "mediaid",
          photographer.media[previousMediaIndex].id
        );
      }
    };

    // right arrow event : next media onclick
    nextBtn.onclick = (event) => {
      const media = document
        .querySelector("#lightbox")
        .querySelector("#lightboxMedia");
      const actualMediaIndex = photographer.media.findIndex(
        ({ id }) => id == media.getAttribute("mediaId")
        //
      );

      let nextMediaIndex = actualMediaIndex + 1;

      if (nextMediaIndex > photographer.media.length) {
        nextMediaIndex = 0;
        media.src =
          "assets/photographers/medias/" + photographer.media[0].image;
        media.setAttribute("mediaid", photographer.media[0].id);
      } else {
        media.src =
          "assets/photographers/medias/" +
          photographer.media[nextMediaIndex].image;
        media.setAttribute("mediaid", photographer.media[nextMediaIndex].id);
      }
    };

    mediaDescription.setAttribute("class", "media_description");
    mediaTitle.setAttribute("class", "media_title");
    mediaTitle.textContent = `${title}`;
    mediaLikesContainer.setAttribute("class", "media_likescontainer");
    mediaLikes.setAttribute("class", "media_likes");
    mediaLikes.textContent = `${likes}`;
    mediaLikesButton.setAttribute("class", "media_likesbutton");
    mediaLikesButton.setAttribute("type", "button");
    mediaLikesButtonImage.setAttribute("class", "media_likesbuttonimage");
    mediaLikesButtonImage.setAttribute("src", icon);
    mediaPrice.setAttribute("class", "media_price");
    mediaPrice.textContent = `${price}€/jour`;

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

  return {
    getUserMedia,
  };
}
