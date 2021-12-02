const $rejectedMessageForm = $(`
<div class="overlay"></div>
  <div id="rejected-message-form" class="popup-window">
    <form action="" method="POST">
      <textarea placeholder="Why?"cols="30" rows="10"></textarea
      >
      <button class="popup-button">accept</button>
    </form>
  </div>
  `);
window.$rejectedMessageForm = $rejectedMessageForm;
