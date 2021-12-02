const $rejectedMessageForm = $(`
<div class="overlay"></div>
<div class="popup-window">
  <form>
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="why?"
    ></textarea>
    <button class="popup-button">reject</button>
  </form>
</div>

  `);
window.$rejectedMessageForm = $rejectedMessageForm;
