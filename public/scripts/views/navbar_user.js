const $navbar_user = $(`
  <img class="navbar__logo" src="./images/gitit-logo.png" alt="logo">
    <span class="navbar__item">Profile</span>
    <span class="navbar__item">Home</span>
    <span class="navbar__item">
      <i class="fas fa-cart-arrow-down"></i>
      Order
      <p></p>
    </span>
    <div id='user-dropdown' class="dropdown">
      <button class="dropbtn"><span>Log In</span>
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <button id="user-luis">Log in As Luis</button>
        <button id="user-alireza">Log in As Alireza</button>
        <button id="user-ivan">Log in As Ivan</button>
        <button id="user-logout">Log Out</button>
      </div>
    </div>
  `);
window.$navbar_user = $navbar_user;
