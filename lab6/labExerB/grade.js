// ===== ERROR LIST  =====
// Error 1  (grade.html, Line 9): onsubmit="checkMark()" to "return checkMark()"; 
// Error 2  (grade.html, Line 17): showtable() to showTable() because JavaScript names are case-sensitive.
// Error 3  (grade.html, Line 19): grades.js to grade.js, wrong file name so the script never loaded.
// Error 4  (grade.js, Line 5): name = ""  to name === ""; "=" assigns, "===" compares.
// Error 5  (grade.js, Line 9): isNan -> isNaN, wrong capitalisation.
// Error 6  (grade.js, Line 14):mark < 0 && mark > 100 to mark < 0 || mark > 100, no number is both.
// Error 7  (grade.js, Line 28):getElementByID to getElementById.
// Error 8  (grade.js, Line 30):style.colour to style.color, CSS property uses American spelling.
// Error 9  (grade.js, Line 31):return true to return false, true lets the form submit and reload, so the result disappears.
// Error 10 (grade.js, Line 38):let i = 1 to let i = 0, the loop skipped the first row (grade A).
// Error 11 (grade.js, Line 42):innerHtml to innerHTML, wrong capitalisation.

// ===== checkMark() =====
function checkMark() {
  let name = document.forms["gradeForm"]["name"].value.trim();
  let mark = document.forms["gradeForm"]["mark"].value.trim();

  if (name === "") {
    alert("Name must be filled out.");
    return false;
  }

  if (mark === "") {
    alert("Mark field cannot be empty.");
    return false;
  }

  
  if (isNaN(mark)) {
    alert("Please enter a valid numeric value.");
    return false;
  }
  mark = Number(mark);

  if (mark < 0 || mark > 100) {
    alert("Mark must be between 0 and 100.");
    return false;
  }

  let grade, color;
  if (mark >= 80) {
    grade = "A"; color = "green";
  } else if (mark >= 65) {
    grade = "B"; color = "green";
  } else if (mark >= 50) {
    grade = "C"; color = "orange";
  } else {
    grade = "F"; color = "red";
  }


  let resultEl = document.getElementById("result");
  resultEl.innerHTML = name + " got grade " + grade;
  resultEl.style.color = color;


  document.getElementById("checkedOn").innerHTML = "Checked on: " + Date();


  return false;
}

// ===== randomMark() =====
function randomMark() {
  let m = Math.floor(Math.random() * 101);
  document.getElementById("mark").value = m;
}

// ===== showTable() =====
function showTable() {
  let grades = ["A", "B", "C", "F"];
  let ranges = ["80-100", "65-79", "50-64", "0-49"];
  let tableHTML = "<table><tr><th>Grade</th><th>Mark range</th></tr>";

  for (let i = 0; i < grades.length; i++) {
    tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
  }
  tableHTML += "</table>";
  document.getElementById("tableContainer").innerHTML = tableHTML;
}
