import React from "react";
import  "./FavoriteItem.css";
import FavouriteItem from "./FavouriteItem";
import { connect } from 'react-redux';


const Favourite = ({ favourite }) => {
  console.log(favourite)
  return (
    <div className="cart">
      <div >
        {favourite&&favourite.map((item) => (
          
         item && <FavouriteItem key={item.id} item={item} />
        ))
        }
      </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favourite: state.shop.favourite,
  };
};

export default connect(mapStateToProps)(Favourite);