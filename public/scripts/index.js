/* eslint-disable no-undef */
// Client facing scripts here
$(document).ready(function() {
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
  updateUserInfo()
  // createOrder().then(function(json) {
  //   console.log(json);
  // });

  $(".dropdown").on("click", function() {
    if ($(".dropdown-content").css('display') === 'none') {
      $(".dropdown-content").css({ display: "block" });
    } else {
      $(".dropdown-content").css({ display: "none" });
    }
  });

  $("#luis").on("click", function() {
    logIn(1).then(function(json) {
      console.log(json);
    });
  });

  $("#alireza").on("click", function() {
    logIn(3).then(function(json) {
      console.log(json);
    });
  });

  $("#ivan").on("click", function() {
    logIn(2).then(function(json) {
      console.log(json);
    });
  });

  $("#logout").on("click", function() {
    logOut().then(function(json) {
      console.log(json);
    });
  });


  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content button')) {
      if ($(".dropdown-content").css('display') === 'block') {
        $(".dropdown-content").css({ display: "none" });
      }
    }
  };
});
