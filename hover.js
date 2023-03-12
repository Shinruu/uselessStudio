$(document).ready(function () {
  $("#project1").on("mouseenter", function () {
    $("#hover2").hide();
    $("#hover3").hide();
    $("#hover4").hide();
    $("#hover5").hide();
    $("#hover1").show(1);
  });

  $("#project2").on("mouseenter", function () {
    $("#hover1").hide();
    $("#hover3").hide();
    $("#hover4").hide();
    $("#hover5").hide();
    $("#hover2").show(1);
  });

  $("#project3").on("mouseenter", function () {
    $("#hover1").hide();
    $("#hover2").hide();
    $("#hover4").hide();
    $("#hover5").hide();
    $("#hover3").show(1);
  });

  $("#project4").on("mouseenter", function () {
    $("#hover1").hide();
    $("#hover2").hide();
    $("#hover3").hide();
    $("#hover5").hide();
    $("#hover4").show(1);
  });

  $("#project5").on("mouseenter", function () {
    $("#hover1").hide();
    $("#hover2").hide();
    $("#hover3").hide();
    $("#hover4").hide();
    $("#hover5").show(1);
  });
});
