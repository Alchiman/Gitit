// const $adminHistory = $(`
//   <div>
//     <div class="container-cards flex flex-column space-between">
//       <div>
//         Order Id
//         <div>
//           <div class="flex space-between">
//             <p class="">item 1</p>
//             <p>$1</p>
//           </div>
//           <div class="flex space-between">
//             <p class="">item2</p>
//             <p>$2</p>
//           </div>
//           <div class="flex space-between">
//             <p class="">item3</p>
//             <p>$3</p>
//           </div>
//           <div class="flex flex-end">
//             <p class="">TOTAL $</p>
//             <p></p>
//           </div>
//         </div>
//       </div>
//       <div class="flex space-between align-center">
//         <div>
//           <p>Start Time Stamp</p>
//           <p>NULL</p>
//         </div>
//         <p>Rejected</p>
//       </div>
//     </div>
//     <div class="container-cards flex flex-column space-between">
//       <div>
//         Order Id
//         <div>
//           <div class="flex space-between">
//             <p class="">item 1</p>
//             <p>$1</p>
//           </div>
//           <div class="flex space-between">
//             <p class="">item2</p>
//             <p>$2</p>
//           </div>
//           <div class="flex space-between">
//             <p class="">item3</p>
//             <p>$3</p>
//           </div>
//           <div class="flex flex-end">
//             <p class="">TOTAL $</p>
//             <p></p>
//           </div>
//         </div>
//       </div>
//       <div class="flex space-between align-center">
//         <div>
//           <p>Start Time Stamp</p>
//           <p>Fulfilled Time Stamp</p>
//         </div>
//         <p>Rejected</p>
//       </div>
//     </div>
//   </div>
//   `);
// window.$adminHistory = $adminHistory;


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
