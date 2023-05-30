window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }

  const button = document.getElementById('calc-submit');
  if (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  var loanAmountInput = document.getElementById("loan-amount");
  var loanYearsInput = document.getElementById("loan-years");
  var loanRateInput = document.getElementById("loan-rate");

  loanAmountInput.value = "15000";
  loanYearsInput.value = "5";
  loanRateInput.value = "5";

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  var currentUIValues = getCurrentUIValues();
  var monthlyPayment = calculateMonthlyPayment(currentUIValues);
  var monthlyPaymentElement = document.getElementById('monthly-payment');

  if (!isNaN(monthlyPayment)) {
    monthlyPaymentElement.innerText = '$' + monthlyPayment;
    monthlyPaymentElement.style.visibility = 'visible';
  } else {
    monthlyPaymentElement.style.visibility = 'hidden';
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const { amount, years, rate } = values;
  const interestRate = rate / 100;
  const loanTerm = years * 12;
  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
  const formattedMonthlyPayment = monthlyPayment.toFixed(2);
  return formattedMonthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentElement = document.getElementById('monthly-payment');
  monthlyPaymentElement.innerText = monthly;
}
