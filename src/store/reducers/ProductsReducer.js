const initState = {
    products: [
        {id: 1, name: 'unisex hoodie summer season', image: '1.jpg', price: 50, discount: 15, discountPrice: 15  - 2 / 50 * 20, quantity: 1, desc: "A beautiful dress can be as exciting as a poem. · A girl should be two things: classy and fabulous"},
        {id: 2, name: 'woman jean trouser', image: '2.jpg', price: 20, discount: 5, discountPrice: 30  - 5 / 100 * 20, quantity: 1, desc: "A beautiful dress can be as exciting as a poem. · A girl should be two things: classy and fabulous"},
        {id: 3, name: 'man t-shirt for all seasons', image: '3.jpg', price: 25, discount: 3, discountPrice: 15  - 3 / 100 * 25, quantity: 1, desc: "A beautiful dress can be as exciting as a poem. · A girl should be two things: classy and fabulous"},
        {id: 4, name: 'unisex t-shirt for all season', image: '4.jpg', price: 35, discount: 4, discountPrice: 50  - 4 / 100 * 35, quantity: 1, desc: "A beautiful dress can be as exciting as a poem. · A girl should be two things: classy and fabulous"},
        {id: 5, name: 'couples outfit for all season', image: '5.jpg', price: 100, discount: 2, discountPrice: 25  - 2 / 100 * 100, quantity: 1, desc: "A beautiful dress can be as exciting as a poem. · A girl should be two things: classy and fabulous"},
        {id: 6, name: 'male white t-shirt', image: '6.jpg', price: 15, discount: 6, discountPrice: 60  - 6 / 100 * 15, quantity: 1, desc: "A beautiful dress can be as exciting as a poem. · A girl should be two things: classy and fabulous"},
        {id: 7, name: 'unisex colored hoodie', image: '7.jpg', price: 55, discount: 2, discountPrice: 35  - 2 / 100 * 55, quantity: 1, desc: "A beautiful dress can be as exciting as a poem. · A girl should be two things: classy and fabulous"},
        {id: 8, name: 'male jean', image: '8.jpg', price: 55, discount: 7, discountPrice: 80  - 7 / 100 * 55, quantity: 1, desc: "A beautiful dress can be as exciting as a poem. · A girl should be two things: classy and fabulous"},
    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;