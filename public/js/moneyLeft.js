function getMoneyLeft() {
  const incomeElem = document.getElementById("incomeMoney");
  const spendingLeftElem = document.getElementById("spendingLeft");
  const spendingElems = document.querySelectorAll(".wholeSpending");

  if (!incomeElem || !spendingLeftElem) {
    console.error("Required elements not found in the DOM");
    return;
  }

  const income = Number(incomeElem.innerText) || 0;

  let totalSpending = 0;
  spendingElems.forEach((el) => {
    const value = Number(el.innerText);
    if (!isNaN(value)) {
      totalSpending += value;
    }
  });

  // Update the spendingTotal display (optional, if you want to show it)
  const spendingTotalElem = document.getElementById("spendingTotal");
  if (spendingTotalElem) {
    spendingTotalElem.innerText = totalSpending;
  }

  const moneyLeft = income - totalSpending;
  spendingLeftElem.innerText = moneyLeft;
}
