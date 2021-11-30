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

  const createMenuItem = (item) => {
    const { description, img_url, name, price, tag } = item;
    const menuItem = $(`
    <div class="card card--hover">
      <div style="background-image: url('${img_url}');" class="card__image">
      </div>
      <div class="card__price">
        $${price}
      </div>
      <p>${name}</p>
      <p>${description}</p>
      <div class="card__footer">
        <button>Add</button>
      </div>
   </div>
    `);

    $menuList.append(menuItem);
  };

  const addMenuItems = (items) => {
    clearMenu();
    for (const item in items) {
      createMenuItem(items[item]);
    }
  };

  window.menuItems.addMenuItems = addMenuItems;
});
