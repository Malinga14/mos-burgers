document.addEventListener('DOMContentLoaded', loadCart);

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCart(cart);
}

function displayCart(cart) {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemDiv = document.createElement('tr');
        itemDiv.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.code}', this.value)" />
            </td>
            <td>${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeItem('${item.code}')">Remove</button></td>
        `;
        cartItems.appendChild(itemDiv);
    });

    document.getElementById('total-price').textContent = `Total: LKR ${total.toFixed(2)}`;
}

function updateQuantity(code, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.code === code);
    if (item) {
        item.quantity = parseInt(quantity, 10);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart(cart);
    }
}

function removeItem(code) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(i => i.code !== code);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCart(updatedCart);
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = parseFloat(document.getElementById('total-price').textContent.replace('Total: LKR ', '')) || 0;
    const amountPaid = parseFloat(document.getElementById('amount-paid').value) || 0;

    if (amountPaid < total) {
        alert('Amount paid is less than the total!');
        return;
    }

    const balance = amountPaid - total;
    document.getElementById('balance').textContent = `Balance: LKR ${balance.toFixed(2)}`;
});

document.getElementById('generate-receipt-btn').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = parseFloat(document.getElementById('total-price').textContent.replace('Total: LKR ', '')) || 0;
    const amountPaid = parseFloat(document.getElementById('amount-paid').value) || 0;
    const balance = amountPaid - total;

    const orderId = new Date().getTime();
    generateReceipt(cart, amountPaid, total, balance, orderId);

    updateOrderHistory(cart, total, orderId);
    localStorage.removeItem('cart');
    displayCart([]);
});


function updateOrderHistory(cart, total, orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const userId = 'currentUser';
    const orderDate = new Date().toISOString().split('T')[0];

    const newOrder = {
        userId: userId,
        items: cart.map(item => `${item.name} - LKR ${item.price} x ${item.quantity}`),
        total: total,
        date: orderDate
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
}


function generateReceipt(cart, amountPaid, total, balance, orderId) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    let items = '';
    cart.forEach(item => {
        const itemTotal = item.price * (item.quantity || 1);
        items += `${item.name} - LKR ${item.price} x ${item.quantity || 1} = LKR ${itemTotal.toFixed(2)}\n`;
    });

    const discount = parseFloat(document.getElementById('discount').value) || 0;
    const finalAmount = total - (total * (discount / 100));

    doc.setFontSize(16);
    doc.text('MOS Burger Shop', 10, 10);
    doc.setFontSize(12);
    doc.text(`Order ID: ${orderId}`, 10, 20);
    doc.text(`Date: ${formattedDate}`, 10, 30);
    doc.text(`Time: ${formattedTime}`, 10, 40);
    doc.text('Items:', 10, 50);
    doc.text(items, 10, 60);
    doc.text(`Total: LKR ${total.toFixed(2)}`, 10, 60 + (cart.length * 10));
    doc.text(`Discount: ${discount}%`, 10, 70 + (cart.length * 10));
    doc.text(`Final Amount: LKR ${finalAmount.toFixed(2)}`, 10, 80 + (cart.length * 10));
    doc.text(`Amount Paid: LKR ${amountPaid.toFixed(2)}`, 10, 90 + (cart.length * 10));
    doc.text(`Balance: LKR ${balance.toFixed(2)}`, 10, 100 + (cart.length * 10));

    doc.save(`receipt_${orderId}.pdf`);
}

loadCart();