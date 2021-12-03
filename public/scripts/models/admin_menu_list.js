/* eslint-disable camelcase */
$(() => {
  const $adminMenuList = $(`
    <section id ="menu-items" class="container container--card">
    </section>
  `);
  window.$adminMenuList = $adminMenuList;
  window.adminMenuItems = {};

  const clearMenu = () => {
    $adminMenuList.empty();
  };

  window.adminMenuItems.clearMenu = clearMenu;

  const adminAddMenuItems = (items) => {
    clearMenu();
    $adminMenuList.append($(`<button class="add-button"><i class="fas fa-plus"></i></button>`));
    for (const item in items) {
      const menuItem = createAdminMenuItem(items[item]);
      $adminMenuList.append(menuItem);
      // console.log($adminMenuList.find('article')
      //   .filter(':last')
      //   .find('p')
      //   .filter(':first')[0].innerText);
      $adminMenuList.find('article').filter(':last').find(".delete-button").on("click", function() {
        itemManager.selectedItem = $(this)
          .parent()
          .parent()
          .find("p")[0].innerText;
        views_manager.overlay("itemDeletePopup");
      });
    }
  };

  window.adminMenuItems.adminAddMenuItems = adminAddMenuItems;

  const fetchAdminItems = () => {
    return getAllMenuItems().then(function(json) {
      adminMenuItems.adminAddMenuItems(json);
      views_manager.render("adminMenuList");

      $(".card__footer button").on("click", function() {
        views_manager.overlay("itemEditPopup");
      });

      $(".add-button").on("click", function() {
        views_manager.overlay("createItemForm");
      });
    });
  };

  window.adminMenuItems.fetchAdminItems = fetchAdminItems;
});
