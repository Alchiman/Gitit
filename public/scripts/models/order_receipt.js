$(() => {
  const $orderReceipt = $(`
  <section>
    <div>
      <h1>Active Order</h1>
      <div class="card">
        <p>Placed on: Tuesday Nov 30th, 2021 3:31pm</p>
        <p>TOTAL: $73.92</p>
        <p>STATUS: PENDING</p>
        <span>You will be notified by text message when the order is ready</span>
        <button>Cancel</button>
      </div>
    </div>
    <div>
      <h1>History</h1>
      <div class="card">
        <p>PLACED ON: Sunday Nov 28th, 2021 10:54am</p>
        <p>TOTAL: $34.31</p>
      </div>
      <div class="card">
        <p>PLACED ON: Monday Nov 9th, 2021 2:21pm</p>
        <p>TOTAL: $14.11</p>
      </div>
    </div>
  </section>
  `);
  window.$orderReceipt = $orderReceipt;
});
