// Work on getting type of spending and amount spending to fill out the graph
//use document.getElementBYtag to get info
let SpendingValues=document.getElementsByTagName

var xValues = ["Savings", "School", "Investments", "Clothes"];
var yValues = [55, 49, 44, 24];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Spending Types"
    }
  }
});