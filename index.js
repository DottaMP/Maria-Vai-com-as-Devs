
let totalDebtAmount = 26646.50;
let totalBidAmount = 4372.54;
document.getElementById('totalDebtAmount').innerHTML = 'R$' + totalDebtAmount;


function numberOfInstallments() {

  const dueDate = document.getElementById('firstDateInstallment').value;
  dateValidator(dueDate)
  let installmentsValue = document.querySelector('#installments').value;

  finalValueCalculator(totalBidAmount, installmentsValue);

  let finalValue;
  if (numberOfInstallments == 1) {
    finalValue = totalBidAmount;
  } else if (2 > numberOfInstallments <= 12) {
    finalValue = totalBidAmount * 1.1
  } else if (13 < numberOfInstallments <= 24) {
    finalValue = totalBidAmount * 1.15
  } else if (25 < numberOfInstallments <= 36) {
    finalValue = totalBidAmount * 1.17
  } else if (37 < numberOfInstallments <= 48) {
    finalValue = totalBidAmount * 1.2
  } else {
    finalValue = totalBidAmount * 1.25
  };

  finalValueCalculator(finalValue, installmentsValue);

  parseDate(dueDate);
  showResponse();
};

function finalValueCalculator(value, parcela) {

  let calcNumberOfInstallments = value / parcela;
  console.log(calcNumberOfInstallments);
  let numberOfInstallments = Math.ceil(calcNumberOfInstallments);
  let lastInstallment = value - (parcela * (numberOfInstallments - 1));

  document.getElementById('bid-amount').innerHTML = 'R$' + value.toFixed(2);
  document.getElementById('lastInstallment').innerHTML = 'R$' + lastInstallment.toFixed(2);

  document.querySelector('#numberInstallments').innerHTML = numberOfInstallments;
  document.getElementById('valueInstallments').innerHTML = 'R$' + parcela;

}

function parseDate(date) {

  const dataDigitadaSplit = date.split("-");

  const day = dataDigitadaSplit[2];
  const mouth = dataDigitadaSplit[1];
  const year = dataDigitadaSplit[0];
  const data = day + '/' + mouth + '/' + year;

  document.getElementById('dueDate').innerHTML = data;
};


function dateValidator(date) {
  const selectDate = new Date(date);
  const nowDate = Date.now();

  if (selectDate < nowDate) {
    alert('data invalida')
  }
};


function showResponse() {
  const x = document.getElementsByClassName('div-hidden');

  x[0].classList.remove('div-hidden');
}



