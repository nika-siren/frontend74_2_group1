var menuDiv = document.getElementById("review__menu"),
  articleLength = menuDiv.getElementsByTagName("article").length - 1,
  maxMargin = 0 - (1000 * articleLength);

var leftMargin = 0,
  startMargin = 0,
  leftButton = document.getElementsByClassName("review__left_button")[0],
  rightButton = document.getElementsByClassName("review__right_button")[0];

function control() {
  if (leftMargin >= 0) {
    leftButton.style.display = "none";
    rightButton.style.display = "block";
  } else if (leftMargin <= maxMargin) {
    leftButton.style.display = "block";
    rightButton.style.display = "none";
  } else {
    leftButton.style.display = "block";
    rightButton.style.display = "block";
  }
}

control();

function next() {

  function checkScreenSize() {

    if (window.innerWidth < 768) {

      // Выполнить действия для мобильных устройств

      startMargin = leftMargin;
      leftMargin -= 500;
      menuDiv.style.marginLeft = startMargin - 500 + "px";
      control();

    } else {

      // Выполнить действия для больших экранов

      startMargin = leftMargin;
      leftMargin -= 1000;
      menuDiv.style.marginLeft = startMargin - 1000 + "px";
      control();

    }

  }

  // Запуск функции при загрузке страницы и изменении размера окна

  window.addEventListener(‘load’, checkScreenSize);
  window.addEventListener(‘resize’, checkScreenSize);


}

function back() {

  function checkScreenSize() {

    if (window.innerWidth < 768) {

      // Выполнить действия для мобильных устройств

      startMargin = leftMargin;
      leftMargin += 500;
      menuDiv.style.marginLeft = startMargin + 500 + "px";
      control();

    } else {

      // Выполнить действия для больших экранов

      startMargin = leftMargin;
      leftMargin += 1000;
      menuDiv.style.marginLeft = startMargin + 1000 + "px";
      control();

    }

  }

  // Запуск функции при загрузке страницы и изменении размера окна

  window.addEventListener(‘load’, checkScreenSize);
  window.addEventListener(‘resize’, checkScreenSize);

}

leftButton.addEventListener("click", back, false);
rightButton.addEventListener("click", next, false);