const createMenuItem = item => {
  const { description, img_url, name, price, tag } = item;
  return $(`
  <div class="card card--hover">
    <div style="background-image: url('${img_url}');" class="card__image">
    </div>
    <div class="card__price">
      $${price}
    </div>
    <p>${name}</p>
    <p>${description}</p>
    <div class="card__footer">
      <button>Add</button>
    </div>
 </div>
  `);
};
