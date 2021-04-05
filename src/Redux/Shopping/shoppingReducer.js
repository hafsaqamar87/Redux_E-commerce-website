import * as actionTypes from "./shoppingType";
const INITIAL_STATE = {
  products: JSON.parse(localStorage.getItem('allproducts'))||[

    {
      id: 1,
      title: "Watch That CHANGED Our Life",
      description:
        "Time is the wisest counselor of all",
      price: 1500.0,
      image:
      "https://images.unsplash.com/photo-1611353230196-d43954b19316?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHdhdGNoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Watch That CHANGED Our Life",
      description:
      "Time is the wisest counselor of all",
      price: 1300.0,
      image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzl8fHdhdGNoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
       
    },
    {
      id: 3,
      title: "Watch That CHANGED Our Life",
      description:"Time is the wisest counselor of all",
      price: 1000.0,
      image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
       
    },
    {
      id: 4,
      title: "Watch That CHANGED Our Life",
      description:"Time is the wisest counselor of all",
      price: 1000.0,
      image:
      "https://images.unsplash.com/photo-1611353230196-d43954b19316?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHdhdGNoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
       
    },
    {
      id: 5,
      title: "Watch That CHANGED Our Life",
      description:"Time is the wisest counselor of all",
      price: 1200.0,
      image:
      "https://images.unsplash.com/photo-1507679622673-989605832e3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fHdhdGNoZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
       
    },
    {
      id: 6,
      title: "Watch That CHANGED Our Life",
      description:"Time is the wisest counselor of all",
      price: 2000.0,
      image:
      "https://images.unsplash.com/photo-1557466362-9cc33e8460ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhdGNoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
       
    },
  ],
  cart: [],
 
  favourite:[],
  isFavourite:false,
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
      case actionTypes.SELL_PRODUCT: {
        const newList = [...state.products, action.payload]
        localStorage.setItem('allProducts', JSON.stringify(newList))


        
        return {
            ...state,
            products: newList,

        }
}



case actionTypes.ADD_TO_FAVOURITE:
  const favitem =  state.products.find((product) => product.id === action.payload.id );
  const inFavourite = state.favourite.find((favitem) => favitem.id === action.payload.id ? true : false);
  console.log(state.favourite)
  console.log(favitem)
  console.log(inFavourite)

  return {
    // isFavourite: true,
    // ...state,
    // favourite: inFavourite ? state.favourite.map((favitem) => 
    // favitem.id === action.payload.id 
    // ? {...favitem, qty: favitem.qty+1}
    // : favitem) 
    // : [...state.favourite, {...favitem, qty: 1}],
    ...state,
    favourite: !inFavourite?[...state.favourite,favitem]:null
  };
  case actionTypes.REMOVE_FROM_FAVOURITE:
  return {
    ...state,
    favourite: state.favourite.filter((favitem) => favitem.id !== action.payload.id),
  }
    default:
      localStorage.setItem('allProducts', JSON.stringify(state.products))
      return state;
  }
};

export default shopReducer;