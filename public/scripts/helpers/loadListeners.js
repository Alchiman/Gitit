
$(() => {
  //render and add listeners

  views_manager.render("orderSummary");
  views_manager.render("pendingOrders"); //for testing only
  $("#accept-pending").on("click", function() {
    views_manager.overlay("orderAcceptedPopup");
  });

  $("#reject-pending").on("click", function() {
    views_manager.overlay("rejectedMessageForm");
  });

  //DELETE ITEM CONFIRM LISTENER
  views_manager.render("deleteItemPopup"); //for testing only
  $("#item-delete-popup button").on("click", function() {
    console.log("delete me please");
    $itemDeletePopup.detach(); //don't do this when actually using form
  });

  //REJECT BUTTON LISTENER
  views_manager.render("rejectedMessageForm");
  $("#rejected-message-form button").on("click", function() {
    $rejectedMessageForm.detach(); //don't do this when actually using form
  });

  //ACCEPT ORDER CONFIRM MESSAGE LISTENER
  views_manager.render("orderAcceptedPopup"); //for testing only
  $(".popup-button").on("click", function() {
    $orderAcceptedPopup.detach(); //don't do this when actually using form
  });

  //
  // views_manager.render("rejectedMessageForm"); //for testing only
  // $(".popup-button").on("click", function() {
  //   $orderAcceptedPopup.detach(); //don't do this when actually using form
  // });
  views_manager.render('orderSummary');
  $("#orders-button").on("click", function() {
    console.log("placeholder button");
    sendCustomerSms();
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
