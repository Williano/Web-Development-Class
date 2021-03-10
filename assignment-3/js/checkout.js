// $("#form").validate({
//   onkeyup: function (element, event) {
//     if (event.which === 9) {
//       this.element(element);
//     } else {
//       return;
//     }
//   },
// });

function validateCreditCard() {
  var cardNumber = document.getElementById("card-number").value;

  if (cardNumber.length === 16) {
    cardArray = cardNumber.split("");

    evenOrOdd(cardArray);
  } else {
    alert("Credit Card Must be 16 digits");
  }
}

function evenOrOdd(numbers) {
  const evenNumbers = [];
  const oddNumbers = [];
  numbers.forEach((number) => {
    if (parseInt(number) % 2 === 0) {
      evenNumbers.push(parseInt(number) * 2);
    } else {
      oddNumbers.push(parseInt(number));
    }
  });

  var evenSum = evenNumbers.reduce((acc, val) => acc + val, 0);
  var oddSum = oddNumbers.reduce((acc, val) => acc + val, 0);

  var total = evenSum + oddSum;

  if (total % 10 === 0) {
    alert("Good credit card");
  } else {
    alert("Invalid Credit Card");
  }
}
