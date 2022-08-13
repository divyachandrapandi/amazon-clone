export const initialState = {
    basket : [],
    user: null,
}
// state is object of basket array
// ation is object literal which have type, and item object

// selector 
export const getBasketTotal = (basket) => basket?.reduce((total, item) => (total + item.price), 0)

const reducer = (state, action) => {
    console.log(state,action)
    switch (action.type){
        case 'ADD_TO_BASKET': //when type is ADD_TO_BASKET--> add item to basket
            return {
                ...state,
                basket:[...state.basket, 
                        action.item],
            };

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket : []
            }
            
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];

            if (index >=0){
                newBasket.splice(index, 1); //goto the position of index given as slice out the element until one ie ex: splice(4,1)--> got to 4th index position, slice that one element
            } else {
                console.warn( `can't remove product (id : ${action.id}) as its not in basket!`);

            }
            return {
                ...state,
                basket :newBasket,
            }
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            }  
    }
}

export default reducer;