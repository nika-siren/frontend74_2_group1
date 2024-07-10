window.addEventListener("DOMContentLoaded", () => {
  const smoothScroll = () => {
    const links = document.querySelectorAll(".menu-link");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute("href"));

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      });
    });
  };

  smoothScroll();

  var splide = new Splide(".splide", {
    pagination: false,
    start: 0,
    perPage: 1,
    perMove: 1,
    rewind: true,
    autoplay: true,
    breakpoints: {
      1024: {
        heightRatio: 0.775,
      },
      840: {
        heightRatio: 0.85,
      },
      786: {
        heightRatio: 1,
      },
      666: {
        heightRatio: 1.35,
      },
      555: {
        heightRatio: 1.65,
      },
      464: {
        heightRatio: 1.9,
      },
      430: {
        heightRatio: 2.4,
      },
    },
    classes: {
      arrows: "splide__arrows arrows",
      arrow: "splide__arrow arrow",
      prev: "splide__arrow--prev l-bts",
      next: "splide__arrow--next r-bts",
    },
  });
  splide.mount();
});
