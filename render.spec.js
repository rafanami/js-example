const { renderPage } = require('./render');
describe('renderPage', () => {
    it('should render the string with total zero and Shopping Cart is Empty! message for an empty selection', async () => {
        const result = renderPage([]);
        expect(result).toBe(`Cart Total: 0
Total taxes: 0
Shopping Cart is Empty!`);
    });
    it('should render the string with total 330 and taxes 33 the list of products for the second selection', async () => {
        const result = renderPage([{ name: 'Nike Air Zoom 3', price: 140.00 }, { name: 'Adidas Dame 7', price: 190.00 }]);
        expect(result).toBe(`Cart Total: 330
Total taxes: 33
Item   | Price
Nike Air Zoom 3   | 140
Adidas Dame 7   | 190`);
    });
});