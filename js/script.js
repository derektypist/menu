// Set Object Array
const menu = [
    {
        "id": 1,
        "title": "Fruit & Nut Muesli",
        "category": "breakfast",
        "price": 2.00,
        "img": "images/breakfast-1.JPG",
        "desc": "A mix of raisins, apricots, banana chips and crunchy nuts"
    },

    {
        "id": 2,
        "title": "Simply Fruity Muesli",
        "category": "breakfast",
        "price": 2.00,
        "img": "images/breakfast-2.JPG",
        "desc": "With Tropical Papaya and Sweet Pineapple"
    },

    {
        "id": 3,
        "title": "Chocolate Chip Cereal Bar",
        "category": "breakfast",
        "price": 0.47,
        "img": "images/breakfast-3.JPG",
        "desc": "Chocolate Chip Cereal Bar for Breakfast On The Go"
    },

    {
        "id": 4,
        "title": "Cheese & Broccoli Pasta",
        "category": "lunch",
        "price": 0.55,
        "img": "images/lunch-1.JPG",
        "desc": "Mild & Creamy"
    },

    {
        "id": 5,
        "title": "Corale Baked Beans",
        "category": "lunch",
        "price": 0.98,
        "img": "images/lunch-2.JPG",
        "desc": "In Rich Tomato Sauce"
    },

    {
        "id": 6,
        "title": "Heinz Big Soup",
        "category": "lunch",
        "price": 1.00,
        "img": "images/lunch-3.JPG",
        "desc": "Beef & Vegetable"
    },

    {
        "id": 7,
        "title": "Pizza",
        "category": "lunch",
        "price": 1.50,
        "img": "images/lunch-4.JPG",
        "desc": "Deep Dish 4 Cheese Pizza"
    },

    {
        "id": 8,
        "title": "Chicken Flavour Instant Noodles",
        "category": "lunch",
        "price": 0.30,
        "img": "images/lunch-5.JPG",
        "desc": "Full of Flavour"
    },

    {
        "id": 9,
        "title": "Apricot Halves",
        "category": "dessert",
        "price": 0.80,
        "img": "images/dessert-1.JPG",
        "desc": "Available In Juice"
    },

    {
        "id": 10,
        "title": "Mandarin Segments",
        "category": "dessert",
        "price": 0.85,
        "img": "images/dessert-2.JPG",
        "desc": "Available In Juice"
    },

    {
        "id": 11,
        "title": "Apricot Halves",
        "category": "dessert",
        "price": 1.00,
        "img": "images/dessert-3.JPG",
        "desc": "Available In Juice"
    },

    {
        "id": 12,
        "title": "Chocolate Cake",
        "category": "dessert",
        "price": 1.75,
        "img": "images/dessert-4.JPG",
        "desc": "Rich Chocolate Sponge with a Smooth Milk Chocolate Ganache Buttercream Filling"
    }
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function () {
    let displayMenu = menu.map(function (item) {
        return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title} />
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">£${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
                
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;

});