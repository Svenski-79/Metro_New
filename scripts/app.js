const mobileNavigationToggle = document.querySelector(
  ".navigation__hamburger__icon"
);

mobileNavigationToggle.addEventListener("click", function () {
  let navigationLinks = this.parentNode.children[0];
  let finalNavHeight = navigationLinks.scrollHeight;
  this.classList.toggle("open");
  if (this.classList.contains("open")) {
    navigationLinks.animate(
      [{ height: 0 }, { height: `${finalNavHeight}px` }],
      {
        duration: 400,
        easing: "ease-in-out",
        direction: "normal",
        fill: "forwards",
      }
    );
  } else {
    navigationLinks.animate(
      [{ height: 0 }, { height: `${finalNavHeight}px` }],
      {
        duration: 400,
        easing: "ease-in-out",
        direction: "reverse",
        fill: "forwards",
      }
    );
  }
});
