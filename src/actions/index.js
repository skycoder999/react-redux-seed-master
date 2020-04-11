export function ProductsList() {
    return {
        type: 'PRODUCTS_LIST',
        payload: [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
            { id: 3, name: 'Product 3' }
        ]
    }
}