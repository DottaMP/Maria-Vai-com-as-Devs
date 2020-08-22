
function numberOfInstallments() {
  const totalBidAmount = document.querySelector('.bid-amount').value;
  const installmentsValue = document.querySelector('.installments').value;
  const calcNumberOfInstallments = totalBidAmount / installmentsValue;
  //console.log(parseFloat(calcNumberOfInstallments.toFixed(2)));
  return parseFloat(calcNumberOfInstallments.toFixed(2))

}




function dueDate() {
  const valueDate = document.querySelector('.date').value;
  const calcDueDate = new Date(valueDate).getMonth() + 2
  console.log(calcDueDate);
  return calcDueDate;

}
dueDate();