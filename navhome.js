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
