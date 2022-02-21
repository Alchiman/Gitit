const createReceiptItem = receipt => {
  const {
    item_name,
    item_qty
  } = receipt;
  return $(`
          <tr>
            <td>${item_name}</td>
            <td>${item_qty}</td>
          </tr>
  `);
};
