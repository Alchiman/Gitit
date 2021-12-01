/* eslint-disable func-style */
function getAllMenuItems() {
  let url = "/api/";
  return $.ajax({
    url,
  });
}
function updateItem() {
  return $.ajax({
    method: "POST",
    url: "admins/menus/edit",
    data: { name: 'bird', price:2, description:'cant swim', img_url:'../images/sushi-alaska-roll.jpg', tag : 'is maybe fish', originalName : 'Alaska Roll'}
  });
}