let shoppingCart = []
let shoppingCartTotal = { total: 0 };
let domItems = [];

const setCartTotal = () => {
    domItems.push(`Cart Total: ${shoppingCartTotal.total}\n`);
}

const calculateCartTotal = () => {
    shoppingCartTotal.total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        shoppingCartTotal.total += item.price;
    }
    setCartTotal();
}

const addItemToCart = (name, price) => {
    shoppingCart.push({
        name, price
    });
    calculateCartTotal();
    updateTax();
}

const updateTax = () => {
    domItems.push(`Total taxes: ${shoppingCartTotal.total * 0.1}\n`);
}

const renderPage = (selectedProducts) => {
    for (let i = 0; i < selectedProducts.length; i++) {
        const selectedItem = selectedProducts[i];
        addItemToCart(selectedItem.name, selectedItem.price);
    }

    if (shoppingCart.length === 0) {
        setCartTotal();
        updateTax();
        domItems.push('Shopping Cart is Empty!\n');
        return;
    }
    domItems.push('Item   | Price\n');
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        domItems.push(`${item.name}   | ${item.price}\n`);
    }
    const domToWrite = domItems.join("");
    console.log(domToWrite);
    // for tests
    return domToWrite;
};


module.exports = {
    renderPage
};

/** tests */
const selection1 = [];
const selection2 = [{ name: 'Nike Air Zoom 3', price: 140.00 }, { name: 'Adidas Dame 7', price: 190.00 }];

renderPage(selection2);