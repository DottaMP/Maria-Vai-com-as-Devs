

  function numberOfInstallments() {

    const installmentsValue = document.querySelector('#installments').value;
    const totalBidAmount = document.querySelector('#bid-amount').value;

    const calcNumberOfInstallments = totalBidAmount / installmentsValue;
    const numberOfInstallments = Math.ceil(calcNumberOfInstallments);
    document.querySelector('#numberInstallments').innerHTML = numberOfInstallments;

    document.getElementById('totalDebtAmount').innerHTML = totalBidAmount;
    document.getElementById('valueInstallments').innerHTML = installmentsValue;

    const duedata = document.getElementById('firstDateInstallment').value;
    parseDate(duedata)

  }

  function parseDate(date) {

    const dataDigitadaSplit = date.split("-");
  
    const day = dataDigitadaSplit[2];
    const mouth = dataDigitadaSplit[1];
    const year = dataDigitadaSplit[0];
    const data =  day + '/' + mouth + '/' + year;

    document.getElementById('dueDate').innerHTML = data;
    
  }

 
