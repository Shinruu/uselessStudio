// check if the preloader has already been loaded
if (!localStorage.getItem("preloaderLoaded")) {
  // show the preloader
  document.getElementById("preloader").style.display = "block";

  // do something (e.g. load assets)
  setTimeout(function () {
    // add a class to trigger the fade out animation
    document.getElementById("preloader").classList.add("fade-out");
    // save that the preloader has been loaded
    localStorage.setItem("preloaderLoaded", true);
  }, 2400);
  // 2400 is the timer for the gif itself
}

// Get the navigation banner elements
const navBanner = document.querySelectorAll(".nav-link");

// Check if the navigation banner should be shown based on the cookies
if (localStorage.getItem("navigationShown") !== "true") {
  // Hide the navigation banner by default
  navBanner.forEach(function (elem) {
    elem.style.display = "none";
    elem.style.opacity = "0";
  });

  // Set a delay of 2.4 seconds before showing and fading in the navigation banner
  setTimeout(function () {
    // Fade in the navigation banner by gradually increasing its opacity
    let opacity = 0;
    const intervalId = setInterval(function () {
      navBanner.forEach((element) => {
        element.style.opacity = opacity;
        element.style.display = "block";
      });
      opacity += 0.1;
      if (opacity >= 1) {
        clearInterval(intervalId);
        // Set a cookie to remember that the navigation banner has been shown
        localStorage.setItem("navigationShown", "true");
      }
    }, 50);
  }, 2400);
} else {
  // Show the navigation banner immediately if the cookies indicate it has been shown before
  navBanner.forEach(function (elem) {
    elem.style.display = "block";
    elem.style.opacity = "1";
  });
}

// Check if the user has accepted cookies
if (localStorage.getItem("cookiesAccepted") !== "true") {
  // Check if the banner has been displayed before
  if (localStorage.getItem("cookieBannerDisplayed") !== "true") {
    // Set a delay of 2.4 seconds before showing the cookie banner
    setTimeout(function () {
      document.getElementById("cookieBanner").style.display = "block";
      // Store that the banner has been displayed before
      localStorage.setItem("cookieBannerDisplayed", "true");
    }, 2400);
  } else {
    document.getElementById("cookieBanner").style.display = "block";
  }

  // Add an event listener to the "Accept" button
  document
    .getElementById("acceptCookies")
    .addEventListener("click", function () {
      // Store that the user has accepted cookies
      localStorage.setItem("cookiesAccepted", "true");
      // Hide the cookie banner
      document.getElementById("cookieBanner").style.display = "none";
    });
}
