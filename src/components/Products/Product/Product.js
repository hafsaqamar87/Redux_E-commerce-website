import React from 'react';
import {Link } from 'react-router-dom';
import styles from './Product.module.css';

import{connect} from 'react-redux';
import {
  loadCurrentItem,
  addToCart,
  addToFavourite,

} from "../../../Redux/Shopping/shoppingActions";

const Product = ({ product, addToCart, loadCurrentItem,addToFavourite}) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>Rs.{product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      
        <button
        onClick={() => addToFavourite(product.id)}
        className={`${styles.buttons__btn} ${styles.buttons__add}`}>
          Add To Favorite
        </button>
     
       
     
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    addToFavourite:(id)=>dispatch(addToFavourite(id))
  };
};

export default connect(null, mapDispatchToProps)(Product);
