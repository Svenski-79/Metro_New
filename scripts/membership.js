const appealingImages = [
  "./assets/facilities/badminton.webp",
  "./assets/facilities/gym.webp",
  "./assets/facilities/permit-room.webp",
  "./assets/facilities/pool.webp",
  "./assets/facilities/rooms.webp",
  "./assets/facilities/snooker.webp",
  "./assets/facilities/waiting-area.webp",
];
let previousIndex = 0;
function randomImageGenerator() {
  let index = Math.floor(Math.random() * (appealingImages.length - 1));
  while (previousIndex == index) {
    index = Math.floor(Math.random() * (appealingImages.length - 1));
  }
  previousIndex = index;
  const image = document.createElement("img");
  image.setAttribute("draggable", false);
  // image.setAttribute("src", "./assets/facilities/pool.webp");
  image.setAttribute("src", appealingImages[index]);
  return image;
}

const scrollers = document.querySelectorAll(".scroller");

scrollers.forEach((scroller) => {
  const innerScroller = scroller.querySelector(".scroller__inner");
  let scollerImageCount = scroller.getAttribute("data-count");
  for (let i = 0; i < scollerImageCount; i++) {
    innerScroller.append(randomImageGenerator());
  }
});

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
