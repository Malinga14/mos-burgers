var itemsget;
let body;

loadItemCards();
document.getElementById("btnLogOut").onclick = function () {

    window.location.href = "login.html";

}

document.getElementById("btnCustomerHandler").onclick = function () {
    window.location.href = "customer.html";
}

function loadItemCards(){
    itemsget = JSON.parse(localStorage.getItem("Items"));

    let cardBody = document.getElementById("burger");
    itemsget.forEach(element => {
        console.log(element);

    body += `
    <div class="col">
        <div class="card shadow-sm text-bg-dark" style="border-radius: 20px;" id="cards">
            <img src="img/burger.png" style="border-radius: 20px;">
                <div class="card-body text-bg-dark">
                    <div class="d-flex justify-content-between align-items-center ">
                        <div class="btn-group ">
                            <button type="button" class="btn btn-sm btn-outline-warning" id="burgerIC">${element.itemCode}</button>
                            <button type="button" class="btn btn-sm btn-outline-warning" id="burgerDis">Rs.${element.price}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    });
    cardBody.innerHTML = body;
}