var cashierInfo;
var cashierget;
var cashiers;


if((localStorage.getItem("cashiers")!=null)){
    loadCashierTable();
}

document.getElementById("btnBack").onclick = function(){
    window.location.href = "admin_dashboard.html";
}


document.getElementById("btnAddCashier").onclick =function(){

    var cashierId = document.getElementById("id").value;
    var cashierName = document.getElementById("name").value;
    var cashierPhoneNo = document.getElementById("phoneNo").value;
    var cashierEmail = document.getElementById("email").value;

    cashiers  = [{
        "id": cashierId,
        "name": cashierName,
        "phoneNo":cashierPhoneNo,
        "email":cashierEmail
    }];
    if((localStorage.getItem("cashiers")==null)){
        localStorage.setItem("cashiers",JSON.stringify(cashiers));
    }else{
        cashierget=JSON.parse(localStorage.getItem("cashiers"));
        cashierget.push(cashiers[0]);
        localStorage.setItem("cashiers",JSON.stringify(cashierget));
    }
    
    
    loadCashierTable();
}

function loadCashierTable(){
    cashierget = JSON.parse(localStorage.getItem("cashiers"));
    console.log(cashierget);
    
    let tableboady = document.getElementById("tblCashierInfo");
    let body = `<tr>
                        <th>Cashier ID</th>
                        <th>Cashier Name</th>
                        <th>Phone No</th>
                        <th>E-mail</th>
                    </tr>`;
    cashierget.forEach(element => {
        console.log(element);
        
        body +=`
        <tr class="tr">
                        <th>${element.id}</th>
                        <td>${element.name}</td>
                        <td>${element.phoneNo}</td>
                        <td>${element.email}</td>
        </tr>
    `;
    });
    tableboady.innerHTML = body;
}