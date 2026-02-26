window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  document.querySelector(".cloud-left").style.transform =
    `translateY(${scroll * -0.2}px)`;

  document.querySelector(".cloud-right").style.transform =
    `translateY(${scroll * -0.25}px)`;
});
