const getShippingMessage = (country, price, deliveryFee) => {
  if (!country || country.trim().length <= 1) {
    throw new Error("Invalid country name");
  }

  if (price <= 0) {
    throw new Error("Price must be greater than 0");
  }

  if (deliveryFee <= 0) {
    throw new Error("Delivery fee must be greater than 0");
  }

  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
};

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
