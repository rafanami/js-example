let shoppingCart = []
let shoppingCartTotal = 0;
let domToWrite = ``;

const setCartTotal = () => {
    domToWrite = domToWrite.concat(`Cart Total: ${shoppingCartTotal}\n`);
}

const calculateCartTotal = () => {
    shoppingCartTotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        shoppingCartTotal += item.price;
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
    domToWrite = domToWrite.concat(`Total taxes: ${shoppingCartTotal * 0.1}\n`);
}

const renderPage = (selectedProducts) => {
    shoppingCart = []
    shoppingCartTotal = 0;
    domToWrite = ``;

    for (let i = 0; i < selectedProducts.length; i++) {
        const selectedItem = selectedProducts[i];
        addItemToCart(selectedItem.name, selectedItem.price);
    }

    if (shoppingCart.length === 0) {
        domToWrite = domToWrite.concat('Shopping Cart is Empty!\n');
        return;
    }
    domToWrite = domToWrite.concat('Item   | Price\n');
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        domToWrite = domToWrite.concat(`${item.name}   | ${item.price}\n`);
    }
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