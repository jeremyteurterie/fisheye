const lightboxImage = `assets/photographers/medias/Fashion_Yellow_Beach.jpg`;
const lightbox = document.getElementById("lightbox");
lightbox.style.display = "none";
const demo = document.getElementById("demo");
const closeBtn = document.querySelector("#close");
const lightboxMedia = document.createElement("img");
lightboxMedia.setAttribute("class", "lightbox-media");
lightboxMedia.setAttribute("src", lightboxImage);
lightbox.append(lightboxMedia);

function openLightbox() {
  console.log("Clicked Button");
  lightbox.style.display = "block";
}

demo.onclick = function () {
  openLightbox();
};

function closeLightbox() {
  lightbox.style.display = "none";
}

closeBtn.addEventListener("click", closeLightbox);
