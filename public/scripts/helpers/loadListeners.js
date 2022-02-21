
$(() => {
  //render and add listeners

  views_manager.render('profile');
  $(".card__footer button").on("click", function() {
    itemCount++;
    $("nav p").text(itemCount);
  });

  views_manager.render('menuList');
});
