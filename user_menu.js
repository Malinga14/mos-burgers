
const menuItems = [
    { code: 'B1001', name: 'Classic Burger (Large)', price: 750, discount: '10%', category: 'Burgers' },
    { code: 'B1002', name: 'Classic Burger (Regular)', price: 1500, discount: '5%', category: 'Burgers' },
    { code: 'B1003', name: 'Turkey Burger', price: 1600, discount: '', category: 'Burgers' },
    { code: 'B1009', name: 'Cheese Burger', price: 1700, discount: '7%', category: 'Burgers' },
    { code: 'B1010', name: 'Bacon Burger', price: 1800, discount: '', category: 'Burgers' },
    { code: 'B1011', name: 'Veggie Burger', price: 1300, discount: '10%', category: 'Burgers' },
    { code: 'B1012', name: 'Double Patty Burger', price: 2000, discount: '12%', category: 'Burgers' },
    { code: 'B1013', name: 'Spicy Burger', price: 1550, discount: '', category: 'Burgers' },
    { code: 'B1014', name: 'BBQ Burger', price: 1650, discount: '8%', category: 'Burgers' },
    { code: 'B1015', name: 'Mushroom Swiss Burger', price: 1750, discount: '5%', category: 'Burgers' },

    { code: 'S1001', name: 'Crispy Chicken Submarine', price: 2000, discount: '15%', category: 'Submarines' },
    { code: 'S1002', name: 'Turkey Submarine', price: 1900, discount: '', category: 'Submarines' },
    { code: 'S1003', name: 'Roast Beef Submarine', price: 2200, discount: '10%', category: 'Submarines' },
    { code: 'S1004', name: 'Veggie Submarine', price: 1600, discount: '8%', category: 'Submarines' },
    { code: 'S1005', name: 'Italian Submarine', price: 2100, discount: '', category: 'Submarines' },
    { code: 'S1006', name: 'Philly Cheese Submarine', price: 2300, discount: '12%', category: 'Submarines' },
    { code: 'S1007', name: 'Spicy Chicken Submarine', price: 1950, discount: '5%', category: 'Submarines' },
    { code: 'S1008', name: 'Ham & Cheese Submarine', price: 1850, discount: '', category: 'Submarines' },
    { code: 'S1009', name: 'BBQ Chicken Submarine', price: 2150, discount: '7%', category: 'Submarines' },
    { code: 'S1010', name: 'Bacon & Avocado Submarine', price: 2250, discount: '', category: 'Submarines' },

    { code: 'F1001', name: 'French Fries', price: 500, discount: '', category: 'Fries' },
    { code: 'F1002', name: 'Curly Fries', price: 600, discount: '10%', category: 'Fries' },
    { code: 'F1003', name: 'Sweet Potato Fries', price: 700, discount: '', category: 'Fries' },
    { code: 'F1004', name: 'Cheese Fries', price: 800, discount: '15%', category: 'Fries' },
    { code: 'F1005', name: 'Chili Cheese Fries', price: 850, discount: '12%', category: 'Fries' },
    { code: 'F1006', name: 'Garlic Parmesan Fries', price: 900, discount: '', category: 'Fries' },
    { code: 'F1007', name: 'Truffle Fries', price: 950, discount: '10%', category: 'Fries' },
    { code: 'F1008', name: 'Waffle Fries', price: 600, discount: '', category: 'Fries' },
    { code: 'F1009', name: 'Loaded Fries', price: 1000, discount: '5%', category: 'Fries' },
    { code: 'F1010', name: 'Bacon Cheese Fries', price: 1100, discount: '8%', category: 'Fries' },

    { code: 'P1001', name: 'Pasta Alfredo', price: 1200, discount: '10%', category: 'Pasta' },
    { code: 'P1002', name: 'Spaghetti Bolognese', price: 1300, discount: '', category: 'Pasta' },
    { code: 'P1003', name: 'Carbonara', price: 1400, discount: '12%', category: 'Pasta' },
    { code: 'P1004', name: 'Pesto Pasta', price: 1500, discount: '8%', category: 'Pasta' },
    { code: 'P1005', name: 'Seafood Pasta', price: 1600, discount: '', category: 'Pasta' },
    { code: 'P1006', name: 'Vegetarian Pasta', price: 1100, discount: '5%', category: 'Pasta' },
    { code: 'P1007', name: 'Chicken Alfredo', price: 1450, discount: '10%', category: 'Pasta' },
    { code: 'P1008', name: 'Lasagna', price: 1700, discount: '15%', category: 'Pasta' },
    { code: 'P1009', name: 'Mac & Cheese', price: 900, discount: '', category: 'Pasta' },
    { code: 'P1010', name: 'Four Cheese Pasta', price: 1800, discount: '7%', category: 'Pasta' },

    { code: 'C1001', name: 'Grilled Chicken', price: 1400, discount: '', category: 'Chicken' },
    { code: 'C1002', name: 'Fried Chicken', price: 1500, discount: '10%', category: 'Chicken' },
    { code: 'C1003', name: 'Spicy Fried Chicken', price: 1600, discount: '', category: 'Chicken' },
    { code: 'C1004', name: 'BBQ Chicken', price: 1700, discount: '12%', category: 'Chicken' },
    { code: 'C1005', name: 'Teriyaki Chicken', price: 1800, discount: '', category: 'Chicken' },
    { code: 'C1006', name: 'Chicken Wings', price: 1200, discount: '5%', category: 'Chicken' },
    { code: 'C1007', name: 'Chicken Tenders', price: 1300, discount: '', category: 'Chicken' },
    { code: 'C1008', name: 'Honey Mustard Chicken', price: 1450, discount: '10%', category: 'Chicken' },
    { code: 'C1009', name: 'Garlic Herb Chicken', price: 1550, discount: '', category: 'Chicken' },
    { code: 'C1010', name: 'Buffalo Chicken', price: 1650, discount: '8%', category: 'Chicken' },

    { code: 'BE1001', name: 'Soda', price: 200, discount: '', category: 'Beverages' },
    { code: 'BE1002', name: 'Iced Tea', price: 300, discount: '10%', category: 'Beverages' },
    { code: 'BE1003', name: 'Lemonade', price: 400, discount: '', category: 'Beverages' },
    { code: 'BE1004', name: 'Coffee', price: 350, discount: '5%', category: 'Beverages' },
    { code: 'BE1005', name: 'Milkshake', price: 500, discount: '12%', category: 'Beverages' },
    { code: 'BE1006', name: 'Smoothie', price: 600, discount: '8%', category: 'Beverages' },
    { code: 'BE1007', name: 'Orange Juice', price: 450, discount: '', category: 'Beverages' },
    { code: 'BE1008', name: 'Water', price: 150, discount: '', category: 'Beverages' },
    { code: 'BE1009', name: 'Energy Drink', price: 650, discount: '10%', category: 'Beverages' },
    { code: 'BE1010', name: 'Hot Chocolate', price: 400, discount: '', category: 'Beverages' }
];

function loadMenuItems() {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';

    menuItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>LKR ${item.price}</td>
            <td>${item.discount ? item.discount : 'N/A'}</td>
            <td><button class="add-to-cart" onclick="addToCart('${item.code}', '${item.name}', ${item.price})">Add to Cart</button></td>
        `;
        itemsList.appendChild(row);
    });
}

function filterItemsByCategory(category) {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = ''; 

    const filteredItems = menuItems.filter(item => item.category === category);


    filteredItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>LKR ${item.price}</td>
            <td>${item.discount ? item.discount : 'N/A'}</td>
            <td><button class="add-to-cart" onclick="addToCart('${item.code}', '${item.name}', ${item.price})">Add to Cart</button></td>
        `;
        itemsList.appendChild(row);
    });
}


function addToCart(code, name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.code === code);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const item = { code, name, price, quantity: 1 };
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart!`);
}

loadMenuItems();

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent;
        if (category === 'Burgers') filterItemsByCategory('Burgers');
        else if (category === 'Submarines') filterItemsByCategory('Submarines');
        else if (category === 'Fries') filterItemsByCategory('Fries');
        else if (category === 'Pasta') filterItemsByCategory('Pasta');
        else if (category === 'Chicken') filterItemsByCategory('Chicken');
        else if (category === 'Beverages') filterItemsByCategory('Beverages');
        else loadMenuItems();
    });
});