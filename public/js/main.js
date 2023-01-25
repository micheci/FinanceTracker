

function addSubs(){
    let total=document.getElementsByTagName("span");
    console.log(total)
    let sum=0;
     for (const element of total) {
        sum+=Number(element.innerHTML);
        //  element.style.color = nums;
       } 
document.getElementById("total").innerHTML+=sum;
} 