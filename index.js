let state = 2;

function isEnd() {
  return state == 4 || state == 5 || state == 7 || state == 8;
}

function decide(saidYes) {
  if (isEnd()) {
    state = 2;
    return;
  }

  if (saidYes) {
    if (state == 2) {
      state = 8;
    } else if (state == 3) {
      state = 6;
    } else if (state == 6) {
      state = 5;
    }
  } else {
    if (state == 2) {
      console.log(state);
      state = 3;
    } else if (state == 3) {
      state = 4;
    } else if (state == 6) {
      state = 7;
    }
  }
}

function textToShow() {
  if (state == 2)
    return "IS IT HIGH PRIORITY \n (Does it impact our objectives)?";
  if (state == 3) return "IS IT URGENT\n(safety, legality, compliance)?";
  if (state == 4) return "NOTE IT + LEAVE IT!";
  if (state == 5) return "DELEGATE!";
  if (state == 6) return "COULD SOMEONE ON YOUR TEAM OWN IT?";
  if (state == 7)
    return "IF IT MUST BECOME HIGH PRIORITY BC OF IT'S URGENCY, GO FOR IT!";
  if (state == 8)
    return "OWN IT W/ YOUR TEAM!  ASK THESE Q's \n - What are our realities? \n - What are our options? \n - What is the chosen path to our ideal solution? \n THEN MAKE A GAME PLAN, DELEGATE, AND KEEP AT IT!";
}

function clickedYes(choseYes) {
  decide(choseYes);
  document.getElementById("text").innerText = textToShow();

  isEnd() && makeStartAgainButton();
}

function makeStartAgainButton() {
  document.getElementById("buttonBar").innerHTML = "";
  const againButton = document.createElement("div");
  againButton.id = "again";
  againButton.className = "button";
  againButton.innerText = "Start Again?";
  againButton.addEventListener("click", () => clickedStartAgain());
  document.getElementById("buttonBar").appendChild(againButton);
}

function clickedStartAgain() {
  document.getElementById("buttonBar").innerHTML = "";
  const yesButton = document.createElement("div");
  yesButton.id = "yes";
  yesButton.className = "button";
  yesButton.innerText = "YES";
  yesButton.addEventListener("click", () => clickedYes(true));
  const noButton = document.createElement("div");
  noButton.id = "no";
  noButton.className = "button";
  noButton.innerText = "NO";
  noButton.addEventListener("click", () => clickedYes(false));
  document.getElementById("buttonBar").appendChild(yesButton);
  document.getElementById("buttonBar").appendChild(noButton);

  clickedYes(true);
}

document
  .getElementById("yes")
  .addEventListener("click", () => clickedYes(true));
document
  .getElementById("no")
  .addEventListener("click", () => clickedYes(false));
