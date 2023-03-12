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
