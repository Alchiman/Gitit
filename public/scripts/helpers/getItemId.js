
const getItemId = (name) => {
  let menu = window.itemStock;
  for (const key in menu) {
    if (menu[key].name === name) {
      return menu[key].id;
    }
  }
  return 'no such item';
};
