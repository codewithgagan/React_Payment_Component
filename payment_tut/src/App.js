import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "./paymentcomponent/CheckoutForm";
import Products from "./Products";
const stripePromise = loadStripe("pk_test_XNq4QkMFplHnYo6HDBFFquEq00amRgeDq1");
function App() {
  return (
    <div className='App'>
      <div className='product'>
        <div>
          {
            <Elements stripe={stripePromise}>
              <InjectedCheckoutForm />
            </Elements>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
