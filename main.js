function is_empty(string) {
    if (string.length == 0) {
        return true;
    }
    return false;
}

function getIndex(tbody) {
    let index = tbody.children.length || 0;
    return index;
}

function addCurrentInventory() {
    const name = document.getElementById("current_order_product_name").value;
    const brand = document.getElementById("current_order_product_brand").value;
    const quantity = document.getElementById("current_order_product_quantity").value;
    const price = document.getElementById("current_order_product_price").value;
    
    if (name && brand && quantity && price) {
      const table = document.getElementById("current_inventory_list");
      const row = table.insertRow();
      row.innerHTML = `
        <td>${name}</td>
        <td>${brand}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="cancelOrder(this)">Cancel</button>
        </td>
      `;
    }
  }

  function cancelOrder(button) {
    button.closest("tr").remove();
  }

    let tbody = document.querySelector("#current_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>$${productPrice}</td>`;

    tbody.innerHTML += tr;
