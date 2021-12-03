const createReceipt = () => {
  if (!Object.keys(window.orderSummary.cart).length) return false;

  if (!window.orderSummary.receiptMade) {
    let cartItems = window.orderSummary.cart;
    let cartItemKeys = Object.keys(window.orderSummary.cart);
    let menu = window.itemStock;

    for (const item of cartItemKeys) {
      const nameOfItem = menu[item - 1].name;
      const priceOfItem = menu[item - 1].price;
      const quantityOfItem = cartItems[item];
      const receipt = orderSummary.createItemReceipt(
        item,
        nameOfItem,
        (priceOfItem * quantityOfItem).toFixed(2),
        quantityOfItem
      );

      $($orderSummary.find("table")).append(receipt);
      $($orderSummary.find("table")).on("change", `#qty-${item}`, e => {
        const newQty = parseInt($(e.currentTarget).val(), 10);
        window.orderSummary.cart[item] = newQty;
        $(`#price-${item}`).html("$" + (priceOfItem * newQty).toFixed(2));
        calculateTotals();
      });
    }

    const subTotal = calculateTotals();

    return subTotal;
  }
  return "receipt already made";
};

function calculateTotals() {
  let cartItems = window.orderSummary.cart;
  let cartItemKeys = Object.keys(window.orderSummary.cart);
  let menu = window.itemStock;

  let subTotal = 0;
  let totalCount = 0;

  for (const item of cartItemKeys) {
    const nameOfItem = menu[item - 1].name;
    const priceOfItem = menu[item - 1].price;
    const quantityOfItem = cartItems[item];
    totalCount += quantityOfItem;
    subTotal += menu[item - 1].price * cartItems[item];
  }

  const gst = subTotal * 0.05;
  const pst = subTotal * 0.07;
  const total = gst + pst + subTotal;

  $($orderSummary.find("#subtotal")).html(`$${subTotal}`);
  $($orderSummary.find("#gst")).html(`$${gst.toFixed(2)}`);
  $($orderSummary.find("#pst")).html(`$${pst.toFixed(2)}`);
  $($orderSummary.find("#total")).html(`$${total.toFixed(2)}`);
  window.orderSummary.receiptMade = true;
  window.orderSummary.oldOrder = totalCount;

  return subTotal;
}
