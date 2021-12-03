const $itemDeletePopup = $(`
<div class="overlay"></div>
<div id="item-delete-popup" class="popup-window">
<p>ARE YOU SURE
YOU WANT TO DELETE</p>
    <button class="popup-button">delete</button>
</div>
`);

$itemDeletePopup.find('button').on("click", function() {
  const deleteThis = itemManager.selectedItem;
  deleteItem({ name: deleteThis }).then(() => {
    $itemDeletePopup.detach();
    menuItems.fetchUserItems();
    adminMenuItems.fetchAdminItems();
  });
});
window.$itemDeletePopup = $itemDeletePopup;
