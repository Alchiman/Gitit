/* eslint-disable no-undef */
// Client facing scripts here
$(document).ready(function() {
  //set up item counter
  let itemCount = 0;
  $("nav p").text(itemCount);

  //set home as the active menu
  const $home = $(".navbar__item:nth-child(3)");
  $home.addClass('js-active');
  let active = $home;

  //render for now, later we need to getMenu at start and render
  views_manager.render('menuList');

  //increment the cart counter on click
  $(".card__footer button").on("click", function() {
    itemCount++;
    $("nav p").text(itemCount);
  });

  //Indicate which navigation menu is active
  $(".navbar__item").on("click", function() {
    if ($(this).text() === 'Profile') {
      views_manager.render('profile');
    } else if ($(this).text() === 'Home') {
      views_manager.render('menuList');
    } else {
      $(".container--card").detach();
      views_manager.render('orderSummary');
    }

    active.removeClass('js-active');
    active = $(this);
    active.addClass("js-active");
  });
});
