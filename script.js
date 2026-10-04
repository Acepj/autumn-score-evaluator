
alert("Welcome to the Autumn Score Evaluator!");


let studentName = prompt("Please enter your name:");

if (studentName === null || studentName.trim() === "") {
  alert('The name cannot be empty. We will use "Unknown Student" instead.');
  studentName = "Unknown Student";
} else {
  studentName = studentName.trim();
}


let scoreInput = prompt("Hello " + studentName + "! Please enter your score (0 - 100):");
let wantsToContinue = confirm("Do you want to continue?");


if (wantsToContinue === false) {
  showCancelledMessage();
} else {
  const remark = evaluateScore(scoreInput);
  let scoreText = "(empty)";
  if (scoreInput !== null && scoreInput.trim() !== "") {
    scoreText = scoreInput.trim();
  }

  showResult(studentName, scoreText, remark);
}

function evaluateScore(score) {
  
  if (score === null || score.trim() === "") {
    return "Invalid score";
  }


  const numberScore = Number(score);


  if (Number.isNaN(numberScore) || numberScore <= 0 || numberScore > 100) {
    return "Invalid score";
  }


  if (numberScore >= 90) {
    return "Excellent"; 
  } else if (numberScore >= 75) {
    return "Passed"; 
  } else {
    return "Failed"; 
  }
}

function showResult(name, scoreText, remark) {
  
  document.getElementById("resultName").textContent = name;
  document.getElementById("resultScore").textContent = scoreText;

  const remarkElement = document.getElementById("resultRemark");
  remarkElement.textContent = remark;

  
  const remarkClasses = {
    "Excellent": "remark-excellent",
    "Passed": "remark-passed",
    "Failed": "remark-failed",
    "Invalid score": "remark-invalid"
  };
  remarkElement.classList.add(remarkClasses[remark]);

  
  document.getElementById("resultRows").hidden = false;
  document.getElementById("resultMessage").hidden = true;

  
  document.getElementById("resultCard").hidden = false;
}


function showCancelledMessage() {
  
  document.getElementById("resultRows").hidden = true;
  document.getElementById("resultMessage").hidden = false;

  
  document.getElementById("resultCard").hidden = false;
}
