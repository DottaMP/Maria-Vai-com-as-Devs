
let totalDebtAmount = 26646.50;
let totalBidAmount = 4372.54;
document.getElementById('totalDebtAmount').innerHTML = 'R$' + totalDebtAmount;

function numberOfInstallments() {

  const dueDate = document.getElementById('firstDateInstallment').value;
  let installmentsValue = document.querySelector('#installments').value;

  let calcNumberOfInstallments = totalBidAmount / installmentsValue;
  let numberOfInstallments = Math.ceil(calcNumberOfInstallments);
  let lastInstallment = totalBidAmount - (installmentsValue * (numberOfInstallments));


  let finalValue = 0;

  if (numberOfInstallments == 1) {
    finalValue = totalBidAmount;
  } else if (numberOfInstallments >= 2 & numberOfInstallments <= 3) {
    finalValue = totalBidAmount * 1.115
  } else if (numberOfInstallments >= 4 & numberOfInstallments <= 12) {
    finalValue = totalBidAmount * 1.10
  } else if (numberOfInstallments >= 13 & numberOfInstallments <= 24) {
    finalValue = totalBidAmount * 1.075
  } else {
    finalValue = totalBidAmount * 1.055
  };

  calcNumberOfInstallments = finalValue / installmentsValue;
  numberOfInstallments = Math.ceil(calcNumberOfInstallments);
  lastInstallment = finalValue - (installmentsValue * (numberOfInstallments - 1));

  let discountCalculation = totalDebtAmount - finalValue;
  let discountPercent = (discountCalculation / totalDebtAmount) * 100;

  document.getElementById('discountPercent').innerHTML = 'R$' + discountCalculation.toFixed(2) + ' ' + discountPercent.toFixed(2) + '%'

  document.getElementById('bid-amount').innerHTML = 'R$' + finalValue.toFixed(2);
  document.getElementById('lastInstallment').innerHTML = 'R$' + lastInstallment.toFixed(2);

  document.querySelector('#numberInstallments').innerHTML = numberOfInstallments;
  document.getElementById('valueInstallments').innerHTML = 'R$' + installmentsValue;

  parseDate(dueDate);
  showResponse();
};


function parseDate(date) {

  const dataDigitadaSplit = date.split("-");

  const day = dataDigitadaSplit[2];
  const mouth = dataDigitadaSplit[1];
  const year = dataDigitadaSplit[0];
  const data = day + '/' + mouth + '/' + year;

  document.getElementById('dueDate').innerHTML = data;
};

function showResponse() {
  const hidden = document.getElementsByClassName('div-hidden');
  hidden[0].classList.remove('div-hidden');
}

function buttonClick() {
  const template = `
    <div class= "d-flex justify-content-center">
      <div class="alert alert-primary col-md-6 d-flex justify-content-center" role="alert">
        Sua proposta foi enviada com sucesso!
      </div>
    </div>
  `;

  document.getElementById('btn').innerHTML = template

  const menssager = document.getElementsByClassName('div-appear');
  menssager[0].classList.add('div-hidden');

}


