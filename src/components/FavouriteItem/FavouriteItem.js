import React from 'react';
import  "./FavoriteItem.css";
import { connect } from 'react-redux';
import { removeFromFavourite } from '../../Redux/Shopping/shoppingActions';



const FavouriteItem = ({item, removeFromFavourite }) => {
  console.log({item})
  return (
    <div className="wrapper">
     
     <> <img src={item.image} alt={'item.title'} className="image_size" />
      <div className="container1">
        <p className="title">{item.title}</p>
        <p className="description">{item.description}</p>
        <p className="price">Rs.{item.price}</p>
      </div>
      <div>
        <button onClick={() => removeFromFavourite(item.id)} className="delete_btn">
          Remove Item</button>
      </div>
      </>
    </div>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavourite: (id) => dispatch(removeFromFavourite(id))
  }
}

export default connect(null, mapDispatchToProps)(FavouriteItem);