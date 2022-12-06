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
      image.setAttribute("media-id", mediaId);

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
    mediaImg.setAttribute("media-id", mediaId);
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

    // Next and previous button
    const previousBtn = document.querySelector(".gauche");
    const nextBtn = document.querySelector(".droite");

    previousBtn.onclick = (event) => {
      const media = event.target.nextElementSibling.querySelector("[media-id]");
      console.log(media);
      const actualMediaIndex = photographers.media.findIndex(
        ({ id }) => id == media.getAttribute("media-id")
      );
      console.log(actualMediaIndex);
      let previousMediaIndex = actualMediaIndex - 1;
      if (previousMediaIndex < 0)
        previousMediaIndex = photographers.media.length - 1;
    };

    // right arrow event : next media onclick
    nextBtn.onclick = (event) => {
      const media = document.querySelector("[media-id]");
      console.log(media.getAttribute("media-id"));
      console.log(
        JSON.stringify(photographer.media) +
          "photograhper  " +
          typeof photographer
      );
      const actualMediaIndex = photographer.media.findIndex(
        ({ id }) => id == media.getAttribute("media-id")
        //
      );

      const mediaImg = document.createElement("img");
      mediaImg.setAttribute(
        "src",
        "assets/photographers/medias/" + photographer.media[3].image
      );
      mediaImg.setAttribute("class", "medias");

      openLightbox(mediaImg);

      console.log(actualMediaIndex + "actual ");
      let nextMediaIndex = actualMediaIndex + 1;

      console.log(nextMediaIndex);
      if (nextMediaIndex >= photographer.media.length) nextMediaIndex = 0;
    };

    // let i = 0; // Current image index

    // previousBtn.addEventListener("click", () => {
    //   if (i <= 0) i = mediaImage.length;
    //   i--;
    //   return setImg();
    // });

    // nextBtn.addEventListener("click", () => {
    //   if (i >= mediaImage.length - 1) i = -1;
    //   i++;
    //   return setImg();
    // });

    // function setImg() {
    //   return mediaImg.setAttribute("src", "mediaImg" + mediaImg[i]);
    // }

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
