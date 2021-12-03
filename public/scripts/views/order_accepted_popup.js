const $orderAcceptedPopup = $(`
<div class="overlay"></div>
<div class="popup-window">
  <form action="" method="POST">
    <textarea placeholder="Default value..."cols="30" rows="10"></textarea
    >
    <button class="popup-button">accept</button>
  </form>
</div>
`);
$orderAcceptedPopup.find('button').on("click", function(e) {
  e.preventDefault();
  console.log('i am about to accept: ', window.activeOrder);
  acceptOrder('accepted', window.activeOrder).then(() => {
    return getAdminPendingAcceptedOrders();
  })
    .then((data) => {
      sendCustomerSms(1, $orderAcceptedPopup.find('textarea').val()); // change from 3 to 2 to send to customer
      pendingOrders.addOrderItems(data.items);
      views_manager.render('pendingOrders');
    });
});
window.$orderAcceptedPopup = $orderAcceptedPopup;
