const sliderItems = document.querySelectorAll('.reviews__articles');
const screenPrevButton = document.querySelector('.screenshots__button-prev');
const screenNextButton = document.querySelector('.screenshots__button-next');
const prevBtn = document.querySelector('.review__left_button');
const nextBtn = document.querySelector('.review__right_button');
const reviewsText = document.querySelectorAll('.screenshot');

let currentIndex = 0;

function showItem(index, elements) {
  elements.forEach(item => item.classList.remove('active'));
  elements[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  showItem(currentIndex, sliderItems);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  showItem(currentIndex, sliderItems);
});

// function showSlidesDependingOnSize() {
//   const screenWidth = window.innerWidth;
//   const reviewsText = document.querySelectorAll('.screenshot');
//   reviewsText.forEach((review, index) => {
//     if (screenWidth > 785) {
//       // review.classList.remove('active');
//       if (index < 3) {
//         review.classList.add('active');
//       }
//     } else if (screenWidth > 439) {
//       review.classList.remove('active');
//       if (index < 2) {
//         review.classList.add('active');
//       }
//     } else {
//       review.classList.remove('active');
//       if (index < 1) {
//         review.classList.add('active');
//       }
//     }
//   });
// }
// window.addEventListener('load', showSlidesDependingOnSize);
// window.addEventListener('resize', showSlidesDependingOnSize);


screenPrevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + reviewsText.length) % reviewsText.length;
  showItem(currentIndex, reviewsText);
})

screenNextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % reviewsText.length;
  showItem(currentIndex, reviewsText);
})

const smoothScroll = () => {
  const links = document.querySelectorAll('.menu-link')

  links.forEach((link) => {
      link.addEventListener('click', (event) => {
          event.preventDefault()
          const section = document.querySelector(link.getAttribute('href'))

          section.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "center",
          });
      })
  })
}

smoothScroll()