$(() => {
  //set home as the active menu
  views_manager.navBarRender('navBarUser');
  const $home = $(".navbar__item:nth-child(3)");
  $home.addClass('js-active');
  let active = $home;

  //Indicate which navigation menu is active
  $(".navbar__item").on("click", function() {
    if ($(this).text() === 'Profile') {
      views_manager.render('profile');
    } else if ($(this).text() === 'Home') {
      views_manager.render('menuList');
    } else {
      $(".container--card").detach();
      views_manager.render('orderSummary');
    }

    active.removeClass('js-active');
    active = $(this);
    active.addClass("js-active");
  });

  $(".dropdown, .dropdown span").on("click", function() {
    if ($(".dropdown-content").css('display') === 'none') {
      $(".dropdown-content").css({ display: "block" });
    } else {
      $(".dropdown-content").css({ display: "none" });
    }
  });

  $("#user-luis").on("click", function() {
    logIn(1).then(function(json) {
      console.log(json);
      $('#user-dropdown .dropbtn span').html('Luis');
      views_manager.navBarRender('navBarUser');
    });
  });

  $("#user-alireza").on("click", function() {
    logIn(3).then(function(json) {
      console.log(json);
      $('#user-dropdown .dropbtn span').html('Alireza');
      views_manager.navBarRender('navBarUser');
    });
  });

  $("#user-ivan").on("click", function() {
    logIn(2).then(function(json) {
      console.log(json);
      views_manager.navBarRender('navBarAdmin');
      $('#admin-dropdown .dropbtn span').html('Ivan');
    });
  });

  $("#user-logout").on("click", function() {
    logOut().then(function(json) {
      console.log(json);
      $('#user-dropdown .dropbtn span').html('Log In');
      views_manager.navBarRender('navBarUser');
      views_manager.render('menuList');
    });
  });
});
