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
});
