function storeProvision(currenStock, orderedProducts){
    let store = {};

    for(let index = 0; index<currenStock.length; index+=2){
        let product = currenStock[index];
        let quantity = Number(currenStock[index+1])

        store[product] = quantity;
    }

    for (let index = 0; index < orderedProducts.length; index+=2) {
        let orderedProduct = orderedProducts[index];
        let quantity = Number(orderedProducts[index+1])

        if (store.hasOwnProperty(orderedProduct)) {
            store[orderedProduct] += quantity
        }else{
            store[orderedProduct] = quantity
        }
        
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision([

'Chips', '5', 'CocaCola', '9', 'Bananas',

'14', 'Pasta', '4', 'Beer', '2'

],

[

'Flour', '44', 'Oil', '12', 'Pasta', '7',

'Tomatoes', '70', 'Bananas', '30'

]);