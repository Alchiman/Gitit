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
          <input name="phone" type="text" required defaultValue={add in later}></input>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required defaultValue={add in later}></input>
          <button class="btn cursor">Update</button>
        </div>
      </form>
    </div>
  </section>
  `);
  window.$profile = $profile;
});
