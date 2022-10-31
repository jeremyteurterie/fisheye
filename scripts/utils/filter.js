function sortMediasByType(type) {
  let medias = document.querySelectorAll(".article_media");
  medias = [].slice.call(medias);
  console.log(medias);
  if (type === "titre") {
    sortByTitle(medias);
  } else if (type === "date") {
    sortByDate(medias); // Par date
  } else {
    sortByLike(medias); // sinon Pop
  }

  /***************   Titre   ***********************/
  function sortByTitle(medias) {
    medias.sort(function (a, b) {
      return a.dataset.title.localeCompare(b.dataset.title);
    });
  }

  /***************    Pop  *******************/
  function sortByLike(medias) {
    medias.sort(function (a, b) {
      return b.dataset.likes - a.dataset.likes;
    });
  }

  /****************   Date   ***********************/
  function sortByDate(medias) {
    medias.sort(function (a, b) {
      return a.dataset.date.localeCompare(b.dataset.date);
    });
  }

  const gallerieMedia = document.querySelector(".gallerieMedia");
  gallerieMedia.innerHTML = "";

  medias.forEach((media) => {
    gallerieMedia.append(media);
  });
}
