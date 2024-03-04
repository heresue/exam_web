$(function () {
  // slide
  let now = 0;
  const slideCount = $(".slide ul li").length;
  const slideList = $(".slide ul");

  setInterval(function () {
    now = (now + 1) % slideCount;
    slideList.css("left", 100 * -now + "%");
  }, 2500);

  // tabs
  $(".tab-tit").on("click", function (event) {
    event.preventDefault();

    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });

  // modal
  $(".list-bbs li:first-child").on("click", function () {
    $("#modal").css("display", "flex");
  });
  $("#modalClose").on("click", function () {
    $("#modal").hide();
  });
});
