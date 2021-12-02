$(() => {
  const $orderRedirect = $(`
  <section id="order-redirect">
    <div class="redirect">
      <p>Your order has been placed.</p>
      <p>You will be redirected to your Orders page</p>
      <p>You will also receive a text message with your order details</p>
    </div>
  </section>
  `);
  window.$orderRedirect = $orderRedirect;
});
