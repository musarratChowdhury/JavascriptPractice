const phones = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xaomi", price: 21000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 19000, camera: "12mp", color: "black" },
  { name: "IPhone", price: 24000, camera: "12mp", color: "black" },
  { name: "Walton", price: 10000, camera: "12mp", color: "black" },
];

function getCheapestPhone(phonesArr) {
  let minimunPrice = phonesArr[0].price;
  let minimumPricePhone = {};

  for (let index = 1; index < phonesArr.length; index++) {
    let phoneofIndex = phonesArr[index];
    if (phoneofIndex.price < minimunPrice) {
      minimunPrice = phoneofIndex.price;
      minimumPricePhone = phoneofIndex;
    }
  }

  return minimumPricePhone;
}

function totalPriceCalculator(priceArr) {
  let sum = 0;

  for (let i = 0; i < priceArr.length; i++) {
    sum += priceArr[i].price;
  }

  return sum;
}

console.log(getCheapestPhone(phones));
console.log(totalPriceCalculator(phones));
