import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext  )

  return (
   <form className='place-order' action="">
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input type="text" name="name" placeholder="First Name"/><br/>
                <input type="text" name="name" placeholder="Last Name"/><br/>
            </div>
            <input type="email" placeholder='Email address' />
            <input type="text" placeholder='Street' />
            <div className="multi-fields">
                <input type="text" name="name" placeholder="City"/><br/>
                <input type="text" name="name" placeholder="State"/><br/>
            </div>
            <div className="multi-fields">
                <input type="text" name="name" placeholder="Zip code"/><br/>
                <input type="text" name="name" placeholder="Country"/><br/>
            </div>
            <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
   </form>
  )
}

export default PlaceOrder