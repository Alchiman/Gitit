const createReceipt = () => {
  console.log("the cart items:", window.orderSummary.cart);
  console.log("the itemStock:", window.itemStock);


  let cartItems = window.orderSummary.cart;
  let cartItemKeys = Object.keys(window.orderSummary.cart);
  let menu = window.itemStock;
  let subTotal = 0;
  let string = '';
  for (const item of cartItemKeys) {
    const nameOfItem = menu[item - 1].name;
    const priceOfItem = menu[item - 1].price;
    const quantityOfItem = cartItems[item];
    const receipt = orderSummary.createItemReceipt(nameOfItem, priceOfItem * quantityOfItem, quantityOfItem);
    $($orderSummary.find('table')).append(receipt);
    string += `You ordered ${cartItems[item]} ${menu[item - 1].name}`;
    subTotal += menu[item - 1].price * cartItems[item];
  }
  const gst = subTotal * .05;
  const pst = subTotal * .07;
  const total = gst + pst + subTotal;

  $($orderSummary.find('#subtotal')).append(`$${subTotal}`);
  $($orderSummary.find('#gst')).append(`$${gst.toFixed(2)}`);
  $($orderSummary.find('#pst')).append(`$${pst.toFixed(2)}`);
  $($orderSummary.find('#total')).append(`$${total.toFixed(2)}`);

  return subTotal;
};
