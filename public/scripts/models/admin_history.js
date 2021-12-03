$(() => {
  const $adminHistory = $(`
  <section id="adminHistory" class="container container--card">
  </section>
`);
  window.$adminHistory = $adminHistory;
  window.adminHistory = {};

  const clearMenu = () => {
    $adminHistory.empty();
  };

  window.adminHistory.clearMenu = clearMenu;

  const addHistoryItems = (histories) => {
    clearMenu();
    console.log('inside add orderItems: ', histories);
    for (const history in histories) {
      const { status, order_number,
        date_created,
        user_name,
        user_phone } = histories[history][0];
      $adminHistory.append(`
    <article>
        <header>
          <p>Order no. ${order_number}</p>
          <p>${new Date(date_created).toLocaleString()}</p>
        </header>
        <p>Customer Name: ${user_name}</p>
        <p>Customer Phone Number: ${user_phone}</p>
        <table>
          <tr>
            <th>Items</th>
            <th>Qty</th>
          </tr>
    `);
      for (const item of histories[history]) {
        $adminHistory.find('table').filter(':last').append(createAdminHistory(item));
      }
      $adminHistory.find('article').filter(':last').append(`
        </table>
        </article>
      `);
    }
  };

  window.adminHistory.addHistoryItems = addHistoryItems;


});
