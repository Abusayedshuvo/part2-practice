// Task -1:

const heights2 = [167, 190, 120, 165, 137];
function findLowestNumber(heights2) {
  let lowNumber = heights2[0];
  for (let i of heights2) {
    if (lowNumber > i) {
      lowNumber = i;
    }
  }
  return lowNumber;
}
// console.log(findLowestNumber(heights2));

// Task -2:
const heights3 = ["rahim", "robin", "rafi", "ron", "rashed"];
function lowestName(names) {
  let lowName = names[0];
  for (let i = 0; i < names.length; i++) {
    if (lowName.length > names[i].length) {
      lowName = names[i];
    }
  }
  return lowName;
}
// console.log(lowestName(heights3));

// Task-3
function calculateElectronicsBudget(laptopQun, tabletQun, mobileQun) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  if (
    typeof laptopQun !== "number" ||
    typeof tabletQun !== "number" ||
    typeof mobileQun !== "number"
  ) {
    return "Please input only number value";
  }
  const total =
    laptopQun * laptopPrice + tabletQun * tabletPrice + mobileQun * mobilePrice;
  return total;
}

// console.log(calculateElectronicsBudget(2, 3, 4));

// Task 4
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let totalPrice = 0;
  for (phone of phones) {
    totalPrice = totalPrice + phone.price;
  }
  const averagePrice = totalPrice / phones.length;
  return averagePrice;
}

console.log(findAveragePhonePrice(phones));

// Task 5
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salary(employees) {
  let salaryIs = 0;
  for (employ of employees) {
    salaryIs =
      salaryIs + employ.experience * employ.increment + employ.starting;
  }
  return salaryIs;
}

console.log(salary(employees));
