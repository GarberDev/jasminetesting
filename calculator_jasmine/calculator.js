window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");

  amount.value = 10000;
  years.value = 5;
  rate.value = 5;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  if (isNaN(monthly)) {
    alert("This is not an acceptable input");
  } else {
    document.getElementById("monthly-payment").innerText = monthly;
  }
}
