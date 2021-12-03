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
      const { status, order_number,
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
      if (status !== 'accepted') {
        $pendingOrders.find('article').filter(':last').append(`
        </table>

        <footer>
          <button>Accept</button>
          <button>Reject</button>
        </footer>
        </article>
      `);
      } else if (status === 'accepted') {
        $pendingOrders.find('article').filter(':last').append(`
        </table>

        <footer>
          <button>FULFILL</button>
        </footer>
        </article>
        `);
      }
      //THIS IS ALL BUTTON LISTENERS
      if (status === 'accepted') {
        $pendingOrders.find('footer').filter(':last').find('button').filter(':first').on("click", function() {
          views_manager.overlay("orderReadyPopup");
          window.activeOrder = order_number;
          console.log(window.activeOrder);
          window.myTimeout = setTimeout(() => {
            fulfillOrder(window.activeOrder).then(() => {
              return getAdminPendingAcceptedOrders();
            })
              .then((data) => {
                pendingOrders.addOrderItems(data.items);
                views_manager.render('pendingOrders');
              });
          }, 3000);
        });
      } else {
        $pendingOrders.find('footer').filter(':last').find('button').filter(':first').on("click", function() {
          views_manager.overlay("orderAcceptedPopup");
          window.activeOrder = order_number;
          console.log(window.activeOrder);
        });
        $pendingOrders.find('footer').filter(':last').find('button').filter(':last').on("click", function() {
          views_manager.overlay("rejectedMessageForm");
          window.activeOrder = order_number;
        });
      }
    }
  };

  window.pendingOrders.addOrderItems = addOrderItems;


});
