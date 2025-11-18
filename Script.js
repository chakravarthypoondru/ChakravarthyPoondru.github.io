// PHOTO ROTATION LOGIC
const photos = [
  "https://raw.githubusercontent.com/chakravarthypoondru/ChakravarthyPoondru.github.io/main/photos/Flowers.jpg",
  "https://raw.githubusercontent.com/chakravarthypoondru/ChakravarthyPoondru.github.io/main/photos/Hills.jpg",
  "https://raw.githubusercontent.com/chakravarthypoondru/ChakravarthyPoondru.github.io/main/photos/Light.jpg"
];
let pIndex = 0;
const photoElement = document.getElementById("photo-rotator");

photoElement.onerror = () => {
  photoElement.src = "https://via.placeholder.com/400x400?text=No+Photo";
};

function rotatePhotos() {
  photoElement.src = photos[pIndex];
  pIndex = (pIndex + 1) % photos.length;
}
rotatePhotos();
setInterval(rotatePhotos, 3000);

// CAPTIONS IN BOTTOM PANEL
const captions = [
  "health is wealth",
  "layoffs are part of job",
  "panic leads to failure",
  "life is not just job"
];
const captionEl = document.getElementById("bottom-caption");
let capIndex = 0;
function rotateCaption() {
  captionEl.textContent = captions[capIndex];
  captionEl.classList.add("show");
  setTimeout(() => captionEl.classList.remove("show"), 2000);
  capIndex = (capIndex + 1) % captions.length;
}
rotateCaption();
setInterval(rotateCaption, 3000);
