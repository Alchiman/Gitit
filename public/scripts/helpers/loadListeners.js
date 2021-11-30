$(() => {
  //render and add listeners
  views_manager.render('orderSummary');
  $("#orders-button").on("click", function() {
    views_manager.render('orderRedirect');
    setTimeout(() => {
      views_manager.render('orderReceipt');
    }, 1000);
  });

  views_manager.render('profile');
  $(".card__footer button").on("click", function() {
    itemCount++;
    $("nav p").text(itemCount);
  });

  views_manager.render('menuList');
  //set up item counter
  // let itemCount = 0;
  // $("nav p").text(itemCount);
  // $(".card__footer button").on("click", function() {
  //   itemCount++;
  //   $("nav p").text(itemCount);
  // });

  //set home as the active menu
  const $home = $(".navbar__item:nth-child(3)");
  $home.addClass('js-active');
  let active = $home;

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
