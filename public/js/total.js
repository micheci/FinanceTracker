function getResult(){
   let income=document.getElementsByClassName("wholeSpending");
   console.log(income)
   let sum=0;
   for(let i=0;i<income.length;i++){
        sum+=Number(income[i].innerHTML)
   }
   
   
    document.getElementById("spendingTotal").innerHTML+=sum;

}

