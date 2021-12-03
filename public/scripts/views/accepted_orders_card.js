const $acceptOrder = $(`
<article>
        <header>
          <p>order number</p>
          <p>created at</p>
        </header>
        <p>user number</p>
        <p>phone number</p>
        <table>
          <tr>
            <th>Items</th>
            <th>Qty</th>
          </tr>
          <tr>
            <td>item name</td>
            <td>qty</td>
          </tr>
        </table>

        <footer>
          <button class="ready-btn">ready</button>
        </footer>
      </article>`;
window.$acceptOrder = $acceptOrder;

// const acceptedOrder = order => {
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
//           <button>ready</button>
//         </footer>
//       </article>
//   `);
// };
