/* eslint-disable indent */
/* eslint-disable no-undef */
$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.render = function(component) {
    $menuList.detach();
    $orderSummary.detach();
    $profile.detach();
    $orderRedirect.detach();
    $orderReceipt.detach();

    switch (component) {
      case 'menuList':
        $menuList.appendTo($main);
        break;
      case 'orderSummary':
        $orderSummary.appendTo($main);
        break;
      case 'profile':
        $profile.appendTo($main);
        break;
      case 'orderRedirect':
        $orderRedirect.appendTo($main);
        break;
      case 'orderReceipt':
        $orderReceipt.appendTo($main);
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.render('menuList');
        }, 2000);
        break;
      }
    }
  };
});




