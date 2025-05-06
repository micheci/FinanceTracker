function getResult() {
  let income = document.getElementsByClassName("wholeSpending");
  console.log(income, "elSpending");

  let sum = 0;
  for (let i = 0; i < income.length; i++) {
    sum += Number(income[i].dataset.amount);
  }

  document.getElementById("spendingTotal").innerHTML = `${sum.toFixed(2)}`;
}
