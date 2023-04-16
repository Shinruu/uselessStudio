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
