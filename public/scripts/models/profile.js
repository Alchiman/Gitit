$(() => {
  const $profile = $(`
    <section id="profile">
    <div class="auth-form-outer">
      <h2 class="header">Update Profile</h2>
      <form class="form" onSubmit={handleSubmit}>
        <div class="form-group">
        <label htmlFor="name">Name</label>
          <input name="name" type="text" required></input>
          <label htmlFor="phone">Phone Number</label>
          <input name="phone" type="text" required></input>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required></input>
          <button class="btn cursor">Update</button>
        </div>
      </form>
    </div>
  </section>
  `);

  $profile.find('button').on("click", function(e) {
    e.preventDefault();
    const name = $profile.find('input[name="name"]').val();
    const phone = $profile.find('input[name="phone"]').val();
    const email = $profile.find('input[name="email"]').val();

    updateUserInfo(name, email, phone).then(() => {
      return getUserInfo();
    })
      .then((data) => {
        if (!data.user[0].is_admin) {
          return views_manager.render("menuList");
        } else {
          views_manager.render("adminMenuList");
        }
      });
  });
  window.$profile = $profile;
});
