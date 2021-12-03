$(() => {
  const $adminHistory = $(`
  <section id="adminHistory" class="container container--card">
  <div>
  </div>
  </section>
`);
  window.$adminHistory = $adminHistory;
  window.adminHistory = {};

  const clearMenu = () => {
    $adminHistory.empty();
  };

  window.adminHistory.clearMenu = clearMenu;

  const addHistoryItems = (histories) => {
    clearMenu();
    histories.forEach(history => {
      console.log(history);
    });
  };

  window.adminHistory.addHistoryItems = addHistoryItems;


});
