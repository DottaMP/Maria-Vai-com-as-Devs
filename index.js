let installmentsValue = document.querySelector('.installmentsValue').value;
let totalBidAmount = document.querySelector('.bid-amount').value;
document.querySelector('.valueInstallments').innerHTML = installmentsValue;
document.querySelector('.totalDebtAmount').innerHTML = totalBidAmount;

function numberOfInstallments() {
  const calcNumberOfInstallments = totalBidAmount / installmentsValue;
  const numberOfInstallments = Math.ceil(calcNumberOfInstallments)
  dueDate(numberOfInstallments)
  document.querySelector('.numberInstallments').innerHTML = numberOfInstallments;

}
 numberOfInstallments()


function dueDate() {
  const valueDate = document.querySelector('.firstDateInstallment').value;

}

