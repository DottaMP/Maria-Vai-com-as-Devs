
  function numberOfInstallments() {
    const installmentsValue = document.querySelector('#installments').value;
    const totalBidAmount = document.querySelector('#bid-amount').value;
    const calcNumberOfInstallments = totalBidAmount / installmentsValue;
    const numberOfInstallments = Math.ceil(calcNumberOfInstallments)
    dueDate(numberOfInstallments)
    document.querySelector('#numberInstallments').innerHTML = numberOfInstallments;
    document.getElementById('totalDebtAmount').innerHTML = totalBidAmount;
    document.getElementById('valueInstallments').innerHTML = installmentsValue;

  }

  function dueDate(parcelas) {
    const valueDate = document.querySelector('#firstDateInstallment').value;
    parseDate(valueDate, parcelas);


    console.log("data é :" + valueDate);
    console.log();
  }

  function parseDate(data, parcelas) {
    let dataDigitadaSplit = data.split("-");

    let dia = dataDigitadaSplit[2];
    let mes = dataDigitadaSplit[1];
    let ano = dataDigitadaSplit[0];
    ano = parseInt(ano);
    mes = parseInt(mes)

    if (parcelas >= 12) {

      const anos = Math.floor(parcelas / 12);
      ano = ano + anos;
      ano;
      let meses = parcelas % 12;
      mes = mes + meses;

      if (mes >= 12) {
        ano++;
        mes = mes - 12;
      }

    } if (parcelas < 12) {
      mes = mes + parcelas;
    }
    
    const dataFimpago = new Date(ano, mes, dia);
    document.getElementById('dueDate').innerHTML = dataFimpago;
  }


