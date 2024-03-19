const sliderItems = document.querySelectorAll('.reviews__articles');
const prevBtn = document.querySelector('.review__left_button');
const nextBtn = document.querySelector('.review__right_button');
let currentIndex = 0;

function showItem(index) {
  sliderItems.forEach(item => item.classList.remove('active'));
  sliderItems[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  showItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  showItem(currentIndex);
});

// var menuDiv = document.getElementById("review__menu"),
//     articleLength = menuDiv.getElementsByTagName("article").length - 1,
//     maxMargin = 0 - (1000 * articleLength);

// var leftMargin = 0,
//     startMargin = 0,
//     leftButton = document.getElementsByClassName("review__left_button")[0],
//     rightButton = document.getElementsByClassName("review__right_button")[0];

// function control() {
//     if(leftMargin >= 0) {
//       leftButton.style.display = "none";
//       rightButton.style.display = "block";
//     }
//     else if(leftMargin <= maxMargin) {
//       leftButton.style.display = "block";
//       rightButton.style.display = "none";
//     }
//     else {
//       leftButton.style.display = "block";
//       rightButton.style.display = "block";
//     }
// }

// control();

// function next() {
//     startMargin = leftMargin;
//     leftMargin -= 1000;
//     menuDiv.style.marginLeft = startMargin - 1000 + "px";
//     control();
// }

// function back() {
//     startMargin = leftMargin;
//     leftMargin += 1000;
//     menuDiv.style.marginLeft = startMargin + 1000 + "px";
//     control();
// }

// leftButton.addEventListener("click", back, false);
// rightButton.addEventListener("click", next, false);