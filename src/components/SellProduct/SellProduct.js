
import { useState,useEffect } from "react"
import './SellProduct.css'
import { connect } from 'react-redux';
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {storage} from '../../firebase';

// import {addProduct} from '../../Redux/SellProducts/SellProductsActions'
import{addProduct} from '../../Redux/Shopping/shoppingActions'
const SellProduct = ({ products }) => {
  console.log(products)
  
  const [newProduct, setNewProduct] = useState({
   id: products.length + 1,
   title: '', 
    image: '',
    url:'',
    price:'',
    description:'',
}),

[image, setImage] = useState();   
const onChangeHandler=(e)=>{
  setNewProduct(state=>({
    ...state,
          [e.target.name]: e.target.value
  }))
},

 onhandleChangeImg=(e)=>{
  setImage(e.target.files[0])
    
  }

  useEffect(() => {
    if (image) {
      console.log(image)
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', () => { }, () => { }, () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                setNewProduct(state => ({
                    ...state,
                    image: url
                }))
            })
        })
    }
  }, [image])

 
   const dispatch = useDispatch(),
   history = useHistory(),
    sellProduct = (e) => {
    e.preventDefault()
    let ProductIsready = true
    // for (const prop of Object.values(newProduct)) {
    //   console.log(newProduct)
    //     if (!prop || prop === '0') {
    //       ProductIsready = false
    //         break
    //     }
    // }
    if (ProductIsready) {
      dispatch(addProduct(newProduct))
      console.log(newProduct)
        history.push('/')
    }
  }
 
  const  addImg = () => {
      document.getElementsByName('image')[0].click()
    }
  
    

    

  return (
    <>
      <div className="sell_form">
        <form 
        onSubmit={sellProduct}
        >
          <h2 className="sell_title">Everything You Need To Start Selling Online Today</h2>
          <h3><label htmlFor="Brandname">Brand Name:</label></h3>
          <input name='title'
            value={newProduct.title}
            onChange={onChangeHandler}
            type="text"
            placeholder="Enter Brand Name"
            // id="ibox"
          /><br /><br />

          <h3><label htmlFor="price">Price:</label></h3>
          <input name='price'
            value={newProduct.price}
            onChange={onChangeHandler}
            type="text"
            placeholder="Enter Price " /><br /><br />

          <h3><label htmlFor="description">Description:</label></h3>
          <textarea name='description'
            value={newProduct.description}
            onChange={onChangeHandler}
            placeholder="Enter Description"
          />
          <h3><label htmlFor="formFileLg" className="form-label">
            Upload Image</label>
          </h3>
          <input className="form-control"
            id="formFileLg"
            name='img'
            onChange={onhandleChangeImg}

            type="file" />

          <div className='add_img' onClick={addImg}>
            {image ? <>{newProduct.image ? <img className='img'  height="100" width="150" src={newProduct.image} alt={image.name} /> :
            <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>} </> :
              // <img src=""/>
              <img src="https://i.stack.imgur.com/V8oUW.jpg" height="40" width="80" />
            }
          </div>
       
          <button className="submit_button" type="submit" >
            Submit</button>
        </form>

      </div>


    </> 
  )
        }

const mapStateToProps = (state) => {
  return {
    products: JSON.parse(localStorage.getItem('allProducts')) || state.sell.products
  };
};

export default connect(mapStateToProps)(SellProduct);
