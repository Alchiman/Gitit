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

  const fetchUserItems = () => {
    return getAllMenuItems().then(function(json) {
      window.itemStock = json;
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
        orderSummary.addToCart(getItemId(itemName));
        $("nav p").text(itemCount);
      });
    });
  };

  window.menuItems.fetchUserItems = fetchUserItems;
});
