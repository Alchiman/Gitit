const $pendingOrders = $(`
<article>
        <header>
          <p>order number</p>
          <p>order number</p>
        </header>
        <p>user name</p>
        <p>user phone</p>
        <table>
          <tr>
            <th>Items</th>
            <th>Qty</th>
          </tr>
          <tr>
            <td>item name</td>
            <td>item qty</td>
          </tr>
        </table>

        <footer>
          <button>accept</button>
          <button>rejected</button>
        </footer>
      </article>



`);

// const pendingOrders = order => {
//   const {
//     order_number,
//     created_at,
//     user_name,
//     user_phone,
//     item_name,
//     item_qty
//   } = order;
//   return $(`
// <article>
//         <header>
//           <p>${order_number}</p>
//           <p>${created_at}</p>
//         </header>
//         <p>${user_name}</p>
//         <p>${user_phone}</p>
//         <table>
//           <tr>
//             <th>Items</th>
//             <th>Qty</th>
//           </tr>
//           <tr>
//             <td>${item_name}</td>
//             <td>${item_qty}</td>
//           </tr>
//         </table>

//         <footer>
//           <button>accept</button>
//           <button>rejected</button>
//         </footer>
//       </article>
//   `);
// };
// window.$pendingOrders = $pendingOrders;
