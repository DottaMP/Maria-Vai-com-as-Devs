

function numberOfInstallments() {
  const dueDate = document.getElementById('firstDateInstallment').value;
  dateValidator(dueDate)

  const installmentsValue = document.querySelector('#installments').value;
  const totalBidAmount = document.querySelector('#bid-amount').value;

  const calcNumberOfInstallments = totalBidAmount / installmentsValue;
  const numberOfInstallments = Math.ceil(calcNumberOfInstallments);
  document.querySelector('#numberInstallments').innerHTML = numberOfInstallments;

  document.getElementById('totalDebtAmount').innerHTML = totalBidAmount;
  document.getElementById('valueInstallments').innerHTML = installmentsValue;

  parseDate(dueDate)
  showResponse()
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
}

function showResponse() {
  const x = document.getElementsByClassName('div-hidden');
  console.log(x[0] + " " + x[1]);

  x[0].classList.remove('div-hidden');


}



