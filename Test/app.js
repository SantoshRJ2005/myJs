/*
var emps = {
  IT: ["IT1", "IT2", "IT3"],
  HR: ["HR1", "HR2", "HR3"],
  Finance: ["Finance1", "Finance2", "Finance3"],
};

function getEmp() {
  var dept = document.getElementById("dept").value;
  var emp = document.getElementById("emp");
  emp.innerHTML = "<option>Select Employee</option>";
  if (dept) {
    var empList = emps[dept];
    for (let i = 0; i < empList.length; i++) {
      var opt = document.createElement("option");
      opt.text = empList[i];
      opt.value = empList[i];
      emp.append(opt);
    }
  }
}

function Ispeed() {
  var marquee = document.getElementById("myMarquee");
  var speed = parseInt(marquee.getAttribute("scrollamount"));
  marquee.setAttribute("scrollamount", speed + 10);
  console.log(speed);
}

function direction() {
  var marquee = document.getElementById("myMarquee");
  var direction = marquee.getAttribute("direction");
  if (direction === "left") {
    marquee.setAttribute("direction", "right");
  } else {
    marquee.setAttribute("direction", "left");
  }
}

*/

function Add(a, b) {
  var c = a + b;
  return c;
}

x = function (x) {
  var a = 3.14 * r * r;
  return a;
};

x = function (a, b) {
  var ans = a * b;
  return ans;
};

Add(9, 6);
x(5);
x(7, 9);

function Emp() {
  this.name = "Masstech";
}

function Details() {
  var obj = new Emp();
  console.log(obj.name);
}

Details();
