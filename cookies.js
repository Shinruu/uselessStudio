// Check if the user has accepted cookies
if (localStorage.getItem("cookiesAccepted") !== "true") {
  // Show the cookie banner
  document.getElementById("cookieBanner").style.display = "block";

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
