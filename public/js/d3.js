// Work on getting type of spending and amount spending to fill out the graph
//use document.getElementBYtag to get info
let savings=document.getElementById("savings")
savings=(Number(savings.innerHTML))

let school=document.getElementById("school")
school=(Number(school.innerHTML))

let investments=document.getElementById("investments")
investments=(Number(investments.innerHTML))

let recreation=document.getElementById("recreation")
recreation=(Number(recreation.innerHTML))

let personal=document.getElementById("personal")
personal=(Number(personal.innerHTML))

let medical=document.getElementById("medical")
medical=(Number(medical.innerHTML))

let food=document.getElementById("food")
food=(Number(food.innerHTML))

let housing=document.getElementById("housing")
housing=(Number(housing.innerHTML))

let utilities=document.getElementById("utilities")
utilities=(Number(utilities.innerHTML))


let transportation=document.getElementById("transportation")
transportation=(Number(transportation.innerHTML))

let miscellaneous=document.getElementById("miscellaneous")
miscellaneous=(Number(miscellaneous.innerHTML))

var xValues = ["Savings", "School", "Investments","Personal","Food","Housing","Utilities","Transportation","Recreation","Medical","Miscellaneous"];
var yValues = [savings, school,investments,personal,food,housing,utilities,transportation,recreation,medical,miscellaneous];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#386e6b",
  "#151514",
  "#ff9768",
  "#ffff00",
  "#003153",
  "#a35c74",
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  },
  options: {
    title: {
      display: true,
      text: "Spending Types"
    }
  }
});