function getMoneyLeft(){
  
    let moneyLeft=document.getElementById('incomeMoney')
    let spendingLeft=document.getElementById("spendingMoney");
    console.log(spendingLeft)
    
    let total=Number(moneyLeft.innerHTML)- Number(spendingTotal.innerHTML)
   
    
    document.getElementById("spendingLeft").innerHTML+=total;

    
    
 
 }
 