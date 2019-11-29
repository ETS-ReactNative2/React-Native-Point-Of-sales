import axios from 'axios'
export const addToCart= (id)=>{
    return{
        type: 'ADD_TO_CART',
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: 'REMOVE_ITEM',
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: 'SUB_QUANTITY',
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: 'ADD_QUANTITY',
        id
    }
}

// add qt action
export const postOrder=(input,total)=>{
    console.log("TOTAL=",total)
    // total=90
    // console.log("DATA INPUT",inputs)
    return{
        type: 'POST_ORDER',
        payload:axios.post('https://poswebsite.herokuapp.com/product/order',{body: {subtotal:total,order:input}})
    }
  }