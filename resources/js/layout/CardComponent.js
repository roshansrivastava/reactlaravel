import React , { Component } from 'react';
import { ElementsConsumer , CardElement } from '@stripe/react-stripe-js';
import CardSection from './CardSection';
class CardComponent extends Component {
    handleSubmit = async (event) => {
        event.preventDefault();
        const { stripe,elements } = this.props;
        if(!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        const result=await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } 
        else{
            console.log(result.token);
        }
    };
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <CardSection />
            <button disabled={!this.props.stripe}>Submit</button>
          </form>
        );
      }
    }
export default function InjectedCheckout() {
    return (
      <ElementsConsumer>
        {({stripe, elements}) => (
          <CardComponent stripe={stripe} elements={elements} />
        )}
      </ElementsConsumer>
    )
  }
