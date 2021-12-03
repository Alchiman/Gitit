const createAdminMenuItem = (item) => {
  const { description, img_url, name, price, tag } = item;
  return $(`
  <article class="card card--hover">
    <div class="delete-button"><i class="fas fa-times-circle"></i></div>
    <div style="background-image: url('${img_url}');" class="card__image">
    </div>
    <div class="card__price">
      $${price}
    </div>
    <p>${name}</p>
    <p>${description}</p>
    <div class="card__footer">
      <button>Edit</button>
    </div>
 </article>
  `);
};
