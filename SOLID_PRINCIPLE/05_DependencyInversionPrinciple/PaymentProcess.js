class PaymentProcessor {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  processPayment(amount) {
    this.paymentGateway.processPayment(amount);
  }
}

class PayPalGateway {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via PayPal...`);
  }
}

class StripeGateway {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via Stripe...`);
  }
}

const paypalGateway = new PayPalGateway();
const stripeGateway = new StripeGateway();

const paymentProcessor1 = new PaymentProcessor(paypalGateway);
paymentProcessor1.processPayment(100);

const paymentProcessor2 = new PaymentProcessor(stripeGateway);
paymentProcessor2.processPayment(200);
