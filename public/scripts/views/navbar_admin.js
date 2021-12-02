const $navbar_admin = $(`
  <img class="navbar__logo" src="./images/gitit-logo.png" alt="logo">
    <span class="navbar__item">Profile</span>
    <span class="navbar__item">Home</span>
    <span class="navbar__item">
      <i class="fas fa-cart-arrow-down"></i>
      History
      <p></p>
    </span>
    <div id='admin-dropdown' class="dropdown">
      <button class="dropbtn"><span>Log In</span>
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <button id="admin-luis">Log in As Luis</button>
        <button id="admin-alireza">Log in As Alireza</button>
        <button id="admin-ivan">Log in As Ivan</button>
        <button id="admin-logout">Log Out</button>
      </div>
    </div>
  `);
window.$navbar_admin = $navbar_admin;
