const $itemEditPopup = $(`
<div class="overlay"></div>
      <div class="popup-window">
        <form action="" method="POST">
          <input type="text" placeholder="title" />
          <input type="number" placeholder="price" />
          <input type="url" placeholder="url" />
          <select>
            <option value="">Food</option>
            <option value="">Drinks</option>
            <option value="">Dessert</option>
            <option selected="selected" value="">Appetizer</option>
            <option value="">Special</option>
            <option value="">To go</option>
          </select>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="description"
          ></textarea>
          <button>update</button>
        </form>
      </div>
`);
window.$itemEditPopup = $itemEditPopup;
