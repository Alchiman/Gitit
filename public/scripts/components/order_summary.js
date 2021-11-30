$(() => {
  const $orderSummary = $(`
    <section id="orders" class="container container--orders">
    <h1>Order Summary</h1>
    <div>
      <table class="table--items">
        <tr>
          <td>
            <p>Item</p>
          </td>
          <td>
            <p>Quantity</p>
          </td>
          <td>
            <p>Price</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Alaska Roll</p>
          </td>
          <td>
            <select>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option selected="selected" value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </td>
          <td>
            <p>$22.00</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Alaska Roll</p>
          </td>
          <td>
            <select>
              <option value="">0</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option selected="selected" value="">5</option>
            </select>
          </td>
          <td>
            <p>$22.00</p>
          </td>
        </tr>
      </table>
      <div class="total">
        <div class="price">
          <p>Subtotal</p>
          <p>$66.00</p>
        </div>
        <div class="price">
          <p>GST</p>
          <p>$3.30</p>
        </div>
        <div class="price">
          <p>PST</p>
          <p>$4.62</p>
        </div>
        <div class="price">
          <p>Total</p>
          <p>$73.92</p>
        </div>
      </div>
      <button id="orders-button">
        Place Order
      </button>
    </div>
  </section>
  `);
  window.$orderSummary = $orderSummary;

  window.orderSummary = {};
  window.orderSummary.cart = {};
  const addToCart = (itemName) => {
    if (orderSummary.cart[itemName]) {
      orderSummary.cart[itemName] = orderSummary.cart[itemName] + 1;
    } else {
      orderSummary.cart[itemName] = 1;
    }
  };

  orderSummary.addToCart = addToCart;

  const createItemReceipt = (name, price, quantity) => {
    const $itemReceipt = $(`
      <tr>
      <td>
        <p>Alaska Roll</p>
      </td>
      <td>
        <select>
          <option value="">0</option>
          <option value="">1</option>
          <option value="">2</option>
          <option selected="selected" value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </td>
      <td>
        <p>$22.00</p>
      </td>
    </tr>
    `);
  };

  // const clearMenu = () => {
  //   $menuList.empty();
  // };

  // window.menuItems.clearMenu = clearMenu;

});
