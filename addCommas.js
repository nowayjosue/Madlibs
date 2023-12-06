function addCommas(number) {
    // Convert the number to a string
    let numString = number.toString();
  
    // Separate the integer and decimal parts (if any)
    let [integerPart, decimalPart] = numString.split('.');
  
    // Add commas to the integer part
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Combine the integer and decimal parts (if any)
    if (decimalPart !== undefined) {
      return `${integerPart}.${decimalPart}`;
    } else {
      return integerPart;
    }
  }
  
  // Test Cases
  console.log(addCommas(1234)); // "1,234"
  console.log(addCommas(1000000)); // "1,000,000"
  console.log(addCommas(9876543210)); // "9,876,543,210"
  console.log(addCommas(6)); // "6"
  console.log(addCommas(-10)); // "-10"
  console.log(addCommas(-5678)); // "-5,678"
  
  // Additional Tests
  console.log(addCommas(12345.678)); // "12,345.678"
  console.log(addCommas(-3141592.65)); // "-3,141,592.65"
  console.log(addCommas(12345678901234567890)); // "12,345,678,901,234,567,890"
module.exports = addCommas;