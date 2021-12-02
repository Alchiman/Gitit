/* eslint-disable indent */
/* eslint-disable no-undef */
$(() => {

  const $main = $('#main-content');
  const $nav = $('nav');
  window.views_manager = {};
  // window.twilio = {};

  window.views_manager.overlay = function(component) {
    switch (component) {
      case 'orderAcceptedPopup':
        $orderAcceptedPopup.appendTo($main);
        break;
      case 'rejectedPopup':
        $rejectedPopup.appendTo($main);
        break;
      case 'rejectedMessageForm':
        $rejectedMessageForm.appendTo($main);
        break;
      case 'itemDeletePopup':
        $itemDeletePopup.appendTo($main);
        break;
      case 'itemEditPopup':
        $itemEditPopup.appendTo($main);
        break;
      case 'createItemForm':
        $createItemForm.appendTo($main);
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
        }, 2000);
        break;
      }
    }
  };

  window.views_manager.navBarRender = function(component) {
    $navbar_user.detach();
    $navbar_admin.detach();

    switch (component) {
      case 'navBarUser':
        $navbar_user.appendTo($nav);
        break;
      case 'navBarAdmin':
        $navbar_admin.appendTo($nav);
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.render('navBarUser');
        }, 2000);
        break;
      }
    }
  };

  window.views_manager.render = function(component) {
    $menuList.detach();
    $orderSummary.detach();
    $profile.detach();
    $orderRedirect.detach();
    $orderReceipt.detach();
    $adminHistory.detach();
    $createItemForm.detach();
    $adminMenuList.detach();
    $pendingOrders.detach();
    $orderAcceptedPopup.detach();
    $rejectedPopup.detach();
    $rejectedMessageForm.detach();
    $itemDeletePopup.detach();
    $itemEditPopup.detach();
    $createItemForm.detach();

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
      case 'adminHistory':
        $adminHistory.appendTo($main);
        break;
      case 'createItemForm':
        $createItemForm.appendTo($main);
        break;
      case 'adminMenuList':
        $adminMenuList.appendTo($main);
        break;
      case 'pendingOrders':
        $pendingOrders.appendTo($main);
        break;
      case 'orderAcceptedPopup':
        $orderAcceptedPopup.appendTo($main);
        break;
      case 'rejectedPopup':
        $rejectedPopup.appendTo($main);
        break;
      case 'rejectedMessageForm':
        $rejectedMessageForm.appendTo($main);
        break;
      case 'itemDeletePopup':
        $itemDeletePopup.appendTo($main);
        break;
      case 'itemEditPopup':
        $itemEditPopup.appendTo($main);
        break;
      case 'createItemForm':
        $createItemForm.appendTo($main);
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




