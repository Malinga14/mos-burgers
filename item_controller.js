var itemInfo;
var itemsget;
var items;

if((localStorage.getItem("Items")!=null)){
    loadItemTable();
}

document.getElementById("btnBack").onclick = function(){
    window.location.href = "admin_dashboard.html";
}


document.getElementById("addItem").onclick =function(){

    var itemCode = document.getElementById("itemCode").value;
    var itemName = document.getElementById("itemName").value;
    var qty = document.getElementById("qty").value;
    var price = document.getElementById("price").value;
    var discount = document.getElementById("discount").value;

    items  = [{
        "itemCode": itemCode,
        "itemName": itemName,
        "qty":qty,
        "price":price,
        "discount":discount
    }];
    if((localStorage.getItem("Items")==null)){
        localStorage.setItem("Items",JSON.stringify(items));
    }else{
        itemsget=JSON.parse(localStorage.getItem("Items"));
        itemsget.push(items[0]);
        localStorage.setItem("Items",JSON.stringify(itemsget));
    }
    
    
    loadItemTable();
}

function loadItemTable(){
    itemsget = JSON.parse(localStorage.getItem("Items"));
    
    let tableboady = document.getElementById("tblItemInfo");
    let body = `<tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>QTY</th>
                        <th>Price</th>
                        <th>Discount</th>
                    </tr>`;
    itemsget.forEach(element => {
        console.log(element);
        
        body +=`
        <tr class="tr">
                        <th>${element.itemCode}</th>
                        <td>${element.itemName}</td>
                        <td>${element.qty}</td>
                        <td>${element.price}</td>
                        <td>${element.discount}</td>
        </tr>
    `;
    });
    tableboady.innerHTML = body;
}