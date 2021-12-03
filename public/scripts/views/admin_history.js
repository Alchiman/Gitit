const createAdminHistory = history => {
  const {
    item_name,
    item_qty
  } = history;
  return $(`
          <tr>
            <td>${item_name}</td>
            <td>${item_qty}</td>
          </tr>
  `);
};
