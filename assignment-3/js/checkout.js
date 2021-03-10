var body = document.querySelector("body");
body.addEventListener("keyup", checkTabPress);

function checkTabPress(e) {
  if (e.keyCode == 9) {
    var regex = RegExp("d{ 1, 5}sw.s(\bw *\bs) { 1, 2 } w *.");
    streetAddress = document.getElementById("street-address").value;

    if (regex.test(streetAddress)) {
      return true;
    } else {
      alert("Incorrect Address! Re-enter a valid address!");
    }
  }
}

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
