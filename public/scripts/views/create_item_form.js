const $createItemForm = $(`
<div class="container-forms padding-s flex flex-column align-center">
  <input type="text" placeholder="TITLE">
  <input type="text" placeholder="PRICE">
  <input type="text" placeholder="IMG_URL">
  <select>
    <option value="">Food</option>
    <option value="">Drinks</option>
    <option value="">Dessert</option>
    <option selected="selected" value="">Appetizer</option>
    <option value="">Special</option>
    <option value="">To go</option>
  </select>
  <textarea name="description" cols="30" rows="5"></textarea>
  <button>CREATE ITEM</button>
  </div>
  `);
window.$createItemForm = $createItemForm;
