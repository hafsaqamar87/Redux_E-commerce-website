// import React, { useState } from 'react';
// import { connect } from 'react-redux';

// const CheckOut = () => {
//   const [Checkout, setCheckout] = useState({
//         name: '',
//         email: '',
//         address: '',
//         city:'',
//     }),
//         onChange = (e) => {
//             setCheckout(state => ({
//                 ...state,
//                 [e.target.name]: e.target.value
//             }))
//         }

//     const onSubmit = (e) => {
//             e.preventDefault()
//             const inputs = Object.keys(e.target)
//                 .filter(key => e.target[key].tagName === 'INPUT')
//                 .map(key => e.target[key])
//             for (const input of inputs) {
//                 if (!Checkout[input.name]) {
//                     alert(`Please enter your ${[input.name]}`)
//                     document.getElementsByName([input.name])[0].focus()
//                     return false
//                 }
//                 else{
//                      alert("Congratulation! Your Order is Placed")
//                 }
//             }
            
//     }

//     return (
//         <>
//         <h1>hello</h1>
//             <div>

//                 <div className="checkout" >

//                     <form className="checkout-form"
//                         onSubmit={onSubmit}
//                     >
                    
//                         <h1>CHECKOUT</h1>

//                         <input type="name"
//                             placeholder="Enter Your Name"
//                             name="name"
//                             value={Checkout.name}
//                             onChange={onChange}

//                         />

//                         <input type="email"
//                             name="email"
//                             placeholder="Enter Your Email"
//                             value={Checkout.email}
//                             onChange={onChange}

//                         />

//                         <input type="password"
//                             name="password"
//                             placeholder="Enter Your password"
//                             value={Checkout.password}
//                             onChange={onChange}

//                         />
//                         <button type="submit" className="submit-btn">Login</button>
//                     </form>
//                 </div>
//             </div>
//         </>

//     )
// }
// const mapStateToProps = (state) => {
//     return {
//     //   cart: state.shop.cart,
//       logindata: state.login.logindata
//     };
//   };
  

//   export default connect(mapStateToProps)(CheckOut);




