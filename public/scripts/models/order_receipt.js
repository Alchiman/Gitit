// $(() => {
//   const $orderReceipt = $(`
//   <section id="orderReceipt" class="container container--card">
//   </section>
// `);
//   window.$orderReceipt = $orderReceipt;
//   window.orderReceipt = {};

//   const clearMenu = () => {
//     $orderReceipt.empty();
//   };

//   window.orderReceipt.clearMenu = clearMenu;

// const addReceiptItem = (receipts) => {
//   clearMenu();
//   for (const receipt in receipts) {
//     const { status, order_number,
//       date_created,
//       user_name,
//       user_phone } = receipts[receipt][0];
//     $orderReceipt.append(`
//   <article>
//       <header>
//         <p>Order no. ${order_number}</p>
//         <p>${new Date(date_created).toLocaleString()}</p>
//       </header>
//       <p>Customer Name: ${user_name}</p>
//       <p>Customer Phone Number: ${user_phone}</p>
//       <table>
//         <tr>
//           <th>Items</th>
//           <th>Qty</th>
//         </tr>
//   `);
//     for (const item of receipts[receipt]) {
//       $orderReceipt.find('table').filter(':last').append(createorderReceipt(item));
//     }
//     $orderReceipt.find('article').filter(':last').append(`
//       </table>

//       <footer>
//         <button>CANCEL</button>
//       </footer>
//       </article>
//       `);
//   }
// };

// window.orderReceipt.addReceiptItem = addReceiptItem;


// });

$(() => {
  const $orderReceipt = $(`
  <section id="orderReceipt" class="container container--card">
  </section>
`);
  window.$orderReceipt = $orderReceipt;
  window.orderReceipt = {};

  const clearMenu = () => {
    $orderReceipt.empty();
  };

  window.orderReceipt.clearMenu = clearMenu;

  const addReceiptItem = (receipt) => {
    clearMenu();
    console.log("im adding receipts now!", receipt.result);
    const { id, item_id, order_id, quantity } = receipt.result;
    console.log(id, item_id, order_id, quantity);
    const yourReceipt = $(`    <div>
    <h1>Active Order</h1>
    <div id="receipt" class="card">
      <p>${new Date().toLocaleString()}</p>
      <p>STATUS: PENDING</p>
      <span>You will be notified by text message when the order is ready</span>
      <button>Cancel</button>
    </div>
  </div>
  `);

    $orderReceipt.append(yourReceipt);
  };

  window.orderReceipt.addReceiptItem = addReceiptItem;
});
// $(() => {
//   const $orderReceipt = $(`
//   <section>
    // <div>
    //   <h1>Active Order</h1>
    //   <div class="card">
    //     <p>Placed on: Tuesday Nov 30th, 2021 3:31pm</p>
    //     <p>TOTAL: $73.92</p>
    //     <p>STATUS: PENDING</p>
    //     <span>You will be notified by text message when the order is ready</span>
    //     <button>Cancel</button>
    //   </div>
    // </div>
    // <div>
    //   <h1>History</h1>
    //   <div class="card">
    //     <p>PLACED ON: Sunday Nov 28th, 2021 10:54am</p>
    //     <p>TOTAL: $34.31</p>
    //   </div>
    //   <div class="card">
    //     <p>PLACED ON: Monday Nov 9th, 2021 2:21pm</p>
    //     <p>TOTAL: $14.11</p>
    //   </div>
    // </div>
//   </section>
//   `);
//   window.$orderReceipt = $orderReceipt;
// });
