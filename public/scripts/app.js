/* eslint-disable no-undef */
// Client facing scripts here
$(document).ready(function() {
  //set up item counter
  let itemCount = 0;
  $("nav p").text(itemCount);

  //set home as the active menu
  const $home = $(".navbar__item:nth-child(2)");
  $home.addClass('js-active');
  let active = $home;

  // const renderMenuItems = () => {
  //   const $menuItems = createMenuItem();

  //   $("main").append($menuItems);
  // };

  //increment the cart counter on click
  $(".card__footer button").on("click", function() {
    itemCount++;
    $("nav p").text(itemCount);
  });

  //Indicate which navigation menu is active
  $(".navbar__item").on("click", function() {
    if ($(this).text() === 'History') {
      $(".container--card").remove();
    }
    if ($(this).text() === 'Home' && active.text() !== 'Home') {
      $(".container--card").remove();
      renderMenuItems();
    } else {
      $(".container--card").remove();
    }

    active.removeClass('js-active');
    active = $(this);
    active.addClass("js-active");
  });
});
