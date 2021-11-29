/* eslint-disable indent */
/* eslint-disable no-undef */
$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.render = function(component) {
    $menuList.detach();

    switch (component) {
      case 'menuList':
        $menuList.appendTo($main);
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




