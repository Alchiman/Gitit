/* eslint-disable camelcase */
$(() => {
  const $menuList = $(`
    <section id ="menu-items" class="container container--card">
    </section>
  `);
  window.$menuList = $menuList;
  window.menuItems = {};

  const clearMenu = () => {
    $menuList.empty();
  };

  window.menuItems.clearMenu = clearMenu;

  const addMenuItems = (items) => {
    clearMenu();
    for (const item in items) {
      const menuItem = createMenuItem(items[item]);
      $menuList.append(menuItem);
    }
  };

  window.menuItems.addMenuItems = addMenuItems;
});
