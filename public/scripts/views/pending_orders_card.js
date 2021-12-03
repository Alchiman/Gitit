const createPendingOrders = order => {
  const {
    item_name,
    item_qty
  } = order;
  return $(`
          <tr>
            <td>${item_name}</td>
            <td>${item_qty}</td>
          </tr>
  `);
};
