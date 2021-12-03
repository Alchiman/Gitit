const $orderReadyPopup = $(`
<div class="overlay"></div>
<div class="popup-window">
<p>THE CUSTOMER HAS BEEN
NOTIFIED YOU WILL BE REDIRECTED
TO THE ORDERS PAGE IN 3 SECONDS</p>
    <button class="popup-button">undo</button>
</div>
`);

$orderReadyPopup.find('button').on("click", function(e) {
  e.preventDefault();
  console.log('i want to undo');
  clearTimeout(window.myTimeout);
  views_manager.render("pendingOrders");
});

window.$orderReadyPopup = $orderReadyPopup;
