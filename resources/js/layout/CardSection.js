import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'


const CARD_ELEMENT_OPTIONS = {
    style :{
        base:{
            color:'green',
            fontSize:'24px',
            fontFamily:'sans-serif',
            fontSmoothing:'antialiased',
            "::placeholder":{
                color:'#CDF7DF',
            },
        },
        invalid : {
            color: "red",
            ":focus":{
                color: "red",
            },
        },
    }
}
export default function CardSection() {
  return (
      <>
      <label> 
    <div className = "cardTitle">Fill the card details</div>
    </label>
    <CardElement options= {CARD_ELEMENT_OPTIONS} />
    </>
  )
}
