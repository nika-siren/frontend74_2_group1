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

  new Splide(".splide", {
    type: "fade",
    pagination: false,
    rewind: true,
    autoplay: true,
    breakpoints: {
      897: {
        type: "slide",
        rewind: false,
        perPage: 2,
      },
    },
    classes: {
      arrows: "splide__arrows arrows",
      arrow: "splide__arrow arrow",
      prev: "splide__arrow--prev l-bts",
      next: "splide__arrow--next r-bts",
    },
  }).mount();
});
