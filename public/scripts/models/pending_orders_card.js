$(() => {
  const $pendingOrders = $(`
  <section id="pendingOrders" class="container container--card">
  </section>
`);
  window.$pendingOrders = $pendingOrders;
  window.pendingOrders = {};

  const clearMenu = () => {
    $pendingOrders.empty();
  };

  window.pendingOrders.clearMenu = clearMenu;

  const addOrderItems = (orders) => {
    clearMenu();
    console.log('inside add orderItems: ', orders);
    for (const order in orders) {
      const { order_number,
        date_created,
        user_name,
        user_phone } = orders[order][0];
      // let date = new Date(date_created).toLocaleString();
      // date.toLocaleString();
      $pendingOrders.append(`
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
      for (const item of orders[order]) {
        $pendingOrders.find('table').filter(':last').append(createPendingOrders(item));
      }
      $pendingOrders.find('article').filter(':last').append(`
        </table>

        <footer>
          <button>accept</button>
          <button>rejected</button>
        </footer>
      </article>
      `);

      $pendingOrders.find('footer').filter(':last').find('button').filter(':first').on("click", function() {
        views_manager.overlay("orderAcceptedPopup");
      });
      $pendingOrders.find('footer').filter(':last').find('button').filter(':last').on("click", function() {
        views_manager.overlay("rejectedMessageForm");
      });
    }
  };

  window.pendingOrders.addOrderItems = addOrderItems;


});
