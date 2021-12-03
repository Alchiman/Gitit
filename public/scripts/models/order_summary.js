$(() => {
  const $orderSummary = $(`
    <section id="orders" class="container container--orders">
    <h1>Order Summary</h1>
    <div>
      <table id="summary" class="table--items">
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
      </table>
      <div class="total">
        <div class="price">
          <p>Subtotal</p>
          <p id="subtotal"></p>
        </div>
        <div class="price">
          <p>GST</p>
          <p id="gst"></p>
        </div>
        <div class="price">
          <p>PST</p>
          <p id="pst"></p>
        </div>
        <div class="price">
          <p>Total</p>
          <p id="total"></p>
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
    return $(`
      <tr>
      <td>
        <p>${name}</p>
      </td>
      <td>
        ${quantity}
      </td>
      <td>
        <p>$${price}</p>
      </td>
    </tr>
    `);
  };

  orderSummary.createItemReceipt = createItemReceipt;

  $orderSummary.find('#orders-button').on("click", function() {
    const message = "You order has been placed, the restuaurant owner will notify you of your estimated pick up time in a short moment.";
    sendCustomerSms(3, message);
    setTimeout(() => {
      views_manager.render('orderReceipt');
    }, 1000);
  });
});
