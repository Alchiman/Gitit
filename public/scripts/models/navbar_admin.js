$(() => {
  //set home as the active menu
  views_manager.navBarRender('navBarAdmin');
  const $orders = $(".navbar__item:nth-child(4)");
  $orders.addClass('js-active');
  let active = $orders;

  //Indicate which navigation menu is active
  $(".navbar__item").on("click", function() {
    if ($(this).text() === 'Profile') {
      views_manager.render('profile');
    } else if ($(this).text() === 'Menu') {
      views_manager.render('adminMenuList');
    } else if ($(this).text() === 'History') {
      views_manager.render('adminHistory');
    }

    active.removeClass('js-active');
    active = $(this);
    active.addClass("js-active");
  });

  $(".dropdown").on("click", function() {
    if ($(".dropdown-content").css('display') === 'none') {
      $(".dropdown-content").css({ display: "block" });
    } else {
      $(".dropdown-content").css({ display: "none" });
    }
  });

  $("#admin-luis").on("click", function() {
    logIn(1).then(function(json) {
      console.log(json);
      views_manager.navBarRender('navBarUser');
      $('#user-dropdown .dropbtn span').html('Luis');
      views_manager.render('menuList');
    });
  });

  $("#admin-alireza").on("click", function() {
    logIn(3).then(function(json) {
      console.log(json);
      views_manager.navBarRender('navBarUser');
      $('#user-dropdown .dropbtn span').html('Alireza');
      views_manager.render('menuList');
    });
  });

  $("#admin-ivan").on("click", function() {
    logIn(2).then(function(json) {
      console.log(json);
      $('#admin-dropdown .dropbtn span').html('Ivan');
      views_manager.navBarRender('navBarAdmin');
      views_manager.render("adminMenuList");
    });
  });

  $("#admin-logout").on("click", function() {
    logOut().then(function(json) {
      $('#admin-dropdown .dropbtn span').html('Log In');
      views_manager.navBarRender('navBarUser');
      views_manager.render('menuList');
      console.log(json);
    });
  });

  window.onclick = function(e) {
    if (!e.target.matches('#admin-dropdown .dropbtn')
      && !e.target.matches('#admin-dropdown .dropdown-content button')
      && !e.target.matches('#user-dropdown .dropbtn')
      && !e.target.matches('#admin-dropdown .dropdown-content button')) {
      if ($(".dropdown-content").css('display') === 'block') {
        $(".dropdown-content").css({ display: "none" });
      }
    }
  };
});
