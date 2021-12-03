// const $pendingOrders = $(`
// <article>
//         <header>
//           <p>order number</p>
//           <p>order number</p>
//         </header>
//         <p>user name</p>
//         <p>user phone</p>
//         <table>
//           <tr>
//             <th>Items</th>
//             <th>Qty</th>
//           </tr>
//           <tr>
//             <td>item name</td>
//             <td>item qty</td>
//           </tr>
//         </table>
//         <footer>
//           <button id="accept-pending">accept</button>
//           <button id="reject-pending">rejected</button>
//         </footer>
//   </article>
// `);

// window.$pendingOrders = $pendingOrders;

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
