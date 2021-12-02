$(() => {
  const $profile = $(`
    <section id="profile">
    <div class="auth-form-outer">
      <h2 class="header">Update Profile</h2>
      <form class="form" onSubmit={handleSubmit}>
        <div class="form-group">
        <label htmlFor="name">Name</label>
          <input type="text" required defaultValue={add in later}></input>
          <label htmlFor="phone">Phone Number</label>
          <input type="text" required defaultValue={add in later}></input>
          <label htmlFor="email">Email</label>
          <input type="email" required defaultValue={add in later}></input>
          <label htmlFor="pass">Password</label>
          <input type="password"
            placeholder="Leave blank to keep the same password."></input>
          <label htmlFor="passconfirm">Password Confirmation</label>
          <input type="password"
            placeholder="Leave blank to keep the same password."></input>
          <button class="btn cursor">Update</button>
          <label>
            Cancel Update
          </label>
        </div>
      </form>
    </div>
  </section>
  `);
  window.$profile = $profile;
});
