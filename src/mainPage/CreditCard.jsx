import React, { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCVV] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationChange = (event) => {
    setExpiration(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setPaymentError("");

    setTimeout(() => {
      const paymentResponse = { success: true };

      if (paymentResponse.success) {
        console.log("Payment successful");
      } else {
        console.log("Payment failed");
        setPaymentError("Payment failed. Please try again.");
      }

      setIsLoading(false);
    }, 2000);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="expiration">Expiration Date</label>
        <input
          type="text"
          id="expiration"
          value={expiration}
          onChange={handleExpirationChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCVVChange}
          required
        />
      </div>
      <button className="submit-button" type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Submit Payment"}
      </button>
      {paymentError && <p className="error-message">{paymentError}</p>}
    </form>
  );
};

export default PaymentForm;
