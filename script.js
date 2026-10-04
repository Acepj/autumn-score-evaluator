/* =========================================================
   AUTUMN SCORE EVALUATOR — script.js
   ---------------------------------------------------------
   Program flow:
     1. Welcome message with alert()
     2. Ask for the student's name with prompt()
     3. Ask for the score with prompt()
     4. Ask if the user wants to continue with confirm()
     5. Evaluate the score with the evaluateScore() function
     6. Show the result on the webpage
   ========================================================= */

/* ---------------------------------------------------------
   STEP 1 — Welcome message
   --------------------------------------------------------- */
alert("Welcome to the Autumn Score Evaluator!");

/* ---------------------------------------------------------
   STEP 2 — Ask for the student's name
   --------------------------------------------------------- */
let studentName = prompt("Please enter your name:");

// Validation: empty input for the name (nothing typed, or "Cancel" pressed).
// prompt() returns null when the user presses "Cancel".
if (studentName === null || studentName.trim() === "") {
  alert('The name cannot be empty. We will use "Unknown Student" instead.');
  studentName = "Unknown Student";
} else {
  studentName = studentName.trim();
}

/* ---------------------------------------------------------
   STEP 3 — Ask for the score
   --------------------------------------------------------- */
let scoreInput = prompt("Hello " + studentName + "! Please enter your score (0 - 100):");

/* ---------------------------------------------------------
   STEP 4 — Ask if the user wants to continue
   --------------------------------------------------------- */
let wantsToContinue = confirm("Do you want to continue?");

/* ---------------------------------------------------------
   STEP 5 — Show the result on the webpage
   --------------------------------------------------------- */
if (wantsToContinue === false) {
  // The user pressed "Cancel": do not show a score result at all.
  showCancelledMessage();
} else {
  // The user pressed "OK": evaluate the score and show the result.
  const remark = evaluateScore(scoreInput);

  // If the score box was left empty, show "(empty)" on the page.
  let scoreText = "(empty)";
  if (scoreInput !== null && scoreInput.trim() !== "") {
    scoreText = scoreInput.trim();
  }

  showResult(studentName, scoreText, remark);
}


/* =========================================================
   FUNCTIONS
   (Function declarations are "hoisted", so the code above can
    already call them even though they are written down here.)
   ========================================================= */

/**
 * Evaluates a score and returns the matching remark.
 *
 * Validation — every one of these returns an "Invalid ..." message:
 *   - empty input  (nothing typed, or "Cancel" was pressed)
 *   - non-numeric  (for example "abc")
 *   - zero         (0)
 *   - negative     (-10)
 *   - beyond 100   (105)
 *
 * Score guide:
 *   90 - 100  ->  "Excellent"
 *   75 - 89   ->  "Passed"
 *   1  - 74   ->  "Failed"
 *
 * @param {string|null} score - the raw text typed in the prompt()
 * @returns {string} the remark, or an "Invalid ..." message for bad input
 */
function evaluateScore(score) {
  // Validation 1: EMPTY input (null means "Cancel" was pressed)
  if (score === null || score.trim() === "") {
    return "Invalid Input. No name or score entered.";
  }

  const numberScore = Number(score);

  if (Number.isNaN(numberScore)) {
    return "Invalid Input. Please enter a number.";
  }

  if (numberScore < 0) {
    return "Invalid Input. The score cannot be negative.";
  }

  if (numberScore == 0) {
    return "Invalid Score. No score entered.";
  }

  if (numberScore > 100) {
    return "Invalid Score. The score cannot be higher than 100.";
  }

  // Conditional branching: decide the remark
  if (numberScore >= 90) {
    return "Excellent"; // 90 - 100
  } else if (numberScore >= 75) {
    return "Passed"; // 75 - 89
  } else {
    return "Failed"; // 1 - 74
  }
}

/**
 * Displays the final result inside the result panel on the webpage.
 *
 * @param {string} name      - the student's name
 * @param {string} scoreText - the entered score, as text
 * @param {string} remark    - "Excellent", "Passed", "Failed",
 *                             or an "Invalid ..." message
 */
function showResult(name, scoreText, remark) {
  // Fill in the three result lines
  document.getElementById("resultName").textContent = name;
  document.getElementById("resultScore").textContent = scoreText;

  const remarkElement = document.getElementById("resultRemark");
  remarkElement.textContent = remark;

  // Give the remark its own autumn colour: every remark has a CSS class.
  // Anything that is not "Excellent", "Passed" or "Failed" is an
  // invalid score, so it gets the invalid colour instead.
  if (remark === "Excellent") {
    remarkElement.classList.add("remark-excellent");
  } else if (remark === "Passed") {
    remarkElement.classList.add("remark-passed");
  } else if (remark === "Failed") {
    remarkElement.classList.add("remark-failed");
  } else {
    remarkElement.classList.add("remark-invalid");
  }

  // Show the score lines and hide the "cancelled" message
  document.getElementById("resultRows").hidden = false;
  document.getElementById("resultMessage").hidden = true;

  // Reveal the result panel
  document.getElementById("resultCard").hidden = false;
}

/**
 * Shows a simple "Evaluation cancelled." message on the webpage.
 * (Used when the user presses "Cancel" in the confirm() dialog.)
 */
function showCancelledMessage() {
  // Hide the score lines and show the cancel message instead
  document.getElementById("resultRows").hidden = true;
  document.getElementById("resultMessage").hidden = false;

  // Reveal the result panel
  document.getElementById("resultCard").hidden = false;
}
