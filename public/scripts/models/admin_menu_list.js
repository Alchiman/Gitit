/* eslint-disable camelcase */
$(() => {
  const $adminMenuList = $(`
    <section id ="menu-items" class="container container--card">
    <button class="add-button"><i class="fas fa-plus"></i></button>
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
    for (const item in items) {
      const menuItem = createAdminMenuItem(items[item]);
      $adminMenuList.append(menuItem);
    }
  };

  window.adminMenuItems.adminAddMenuItems = adminAddMenuItems;
});
