var customerInfo;
var customerget;
var customers;


if((localStorage.getItem("customers")!=null)){
    loadCustomerTable();
}

document.getElementById("btnBack").onclick = function(){
    window.location.href = "cashier_dashboard.html";
}


document.getElementById("btnAddCustomer").onclick =function(){

    var customerId = document.getElementById("id").value;
    var customerName = document.getElementById("name").value;
    var customerPhoneNo = document.getElementById("phoneNo").value;
    var customerEmail = document.getElementById("email").value;

    customers  = [{
        "id": customerId,
        "name": customerName,
        "phoneNo":customerPhoneNo,
        "email":customerEmail
    }];
    if((localStorage.getItem("customers")==null)){
        localStorage.setItem("customers",JSON.stringify(customers));
    }else{
        cashierget=JSON.parse(localStorage.getItem("customers"));
        cashierget.push(customers[0]);
        localStorage.setItem("customers",JSON.stringify(customerget));
    }
    
    
    loadCustomerTable();
}

function loadCustomerTable(){
    customerget = JSON.parse(localStorage.getItem("customers"));
    console.log(customerget);
    
    let tableboady = document.getElementById("tblCustomerInfo");
    let body = `<tr>
                        <th>Cashier ID</th>
                        <th>Cashier Name</th>
                        <th>Phone No</th>
                        <th>E-mail</th>
                    </tr>`;
                    customerget.forEach(element => {
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