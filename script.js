const valorTotal = 6999.9;
const parcelaMax = 12;
const userParcelas = prompt("Em quantas parcelas deseja pagar o seu produto?");

function simulaFinanciamento(numeroParcelas) {
  console.log("Possibilidades de parcelamento:");
  for (let i = 1; i <= parcelaMax; i++) {
    console.log(`${i}x de R$${(valorTotal / i).toFixed(2)}`);
  }

  if (numeroParcelas > parcelaMax)
    return alert(
      `Número de parcelas maior do que o permitido. Máximo de ${parcelaMax} vezes.`
    );

  console.log(
    `Você pagará em ${numeroParcelas}x de R$ ${(
      valorTotal / numeroParcelas
    ).toFixed(2)}`
  );
}
simulaFinanciamento(userParcelas);

console.log(
  "###########################--------------###########################"
);

function simulaDebito(parcelasPagas, totalDeParcelas) {
  const valorParcela = valorTotal / totalDeParcelas;
  let totalPago = 0;
  let parcelas = 0;

  do {
    totalPago += valorParcela;
    parcelas++;
  } while (parcelas < parcelasPagas);

  console.log(
    `Você pagou até o momento R$${totalPago.toFixed(
      2
    )} do total de R$ ${valorTotal} - e restam ${
      totalDeParcelas - parcelasPagas
    } parcelas no valor de R$${valorParcela.toFixed(2)}`
  );
}

simulaDebito(2, 5);
