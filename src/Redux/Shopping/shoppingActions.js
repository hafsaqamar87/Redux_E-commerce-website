import * as actionTypes from "./shoppingType";


export const addToCart = (itemID) => {
    return {
      type: actionTypes.ADD_TO_CART,
      payload: {
        id: itemID,
      },
    };
  };
  
  export const removeFromCart = (itemID) => {
    return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: {
        id: itemID,
      },
    };
  };
  
  export const adjustItemQty = (itemID, qty) => {
    return {
      type: actionTypes.ADJUST_ITEM_QTY,
      payload: {
        id: itemID,
        qty,
      },
    };
  };

  
  export const loadCurrentItem = (item) => {
    return {
      type: actionTypes.LOAD_CURRENT_ITEM,
      payload: item,
    };
  };
  
  export const addProduct = (newProduct) => {
    console.log(newProduct)
 
     
     return {
         type: actionTypes.SELL_PRODUCT,
         payload: newProduct,
     }
 }

export const addToFavourite = (ItemID, isFavourite) => {
  return {
      type: actionTypes.ADD_TO_FAVOURITE,
      payload: {
          id: ItemID,
          Favourite: isFavourite,
      }
  }
}
export const removeFromFavourite = (ItemID, isFavourite) => {
  return {
      type: actionTypes.REMOVE_FROM_FAVOURITE,
      payload: {
          id: ItemID,
          Favourite: isFavourite,
      }
  }
}