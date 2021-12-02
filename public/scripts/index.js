/* eslint-disable no-undef */
// Client facing scripts here
$(document).ready(function() {
  views_manager.navBarRender('navBarUser');
  getAllMenuItems().then(function(json) {
    menuItems.addMenuItems(json);
    views_manager.render("menuList");

    //setup menu item button listeners
    let itemCount = 0;
    $("nav p").text(itemCount);
    $(".card__footer button").on("click", function() {
      itemCount++;
      //add item to cart object for calculating items
      const itemName = $(this)
        .parent()
        .parent()
        .find("p")[0].innerText;
      orderSummary.addToCart(itemName);
      $("nav p").text(itemCount);
    });
  });

  views_manager.navBarRender('navBarAdmin');
  getAllMenuItems().then(function(json) {
    adminMenuItems.adminAddMenuItems(json);
    views_manager.render("adminMenuList");
  });

  views_manager.navBarRender('navBarUser');
  views_manager.render("menuList");
  // addNewItem()
  // createOrder().then(function(json) {
  //   console.log(json);
  // });
});
