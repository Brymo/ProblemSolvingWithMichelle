let state = "";

function isEnd() {
  return state == "NN" || state == "NYY" || state == "NYN" || state == "Y";
}

function decide(saidYes) {
  if (isEnd()) {
    state = "";
    return;
  }
  state = state.concat(saidYes ? "Y" : "N");
}

function textToShow() {
  if (state == "")
    return "IS IT HIGH PRIORITY \n (Does it impact our objectives)?";
  if (state == "Y")
    return "OWN IT W/ YOUR TEAM!  ASK THESE Q's \n - What are our realities? \n - What are our options? \n - What is the chosen path to our ideal solution? \n THEN MAKE A GAME PLAN, DELEGATE, AND KEEP AT IT!";
  if (state == "N") return "IS IT URGENT\n(safety, legality, compliance)?";
  if (state == "NN") return "NOTE IT + LEAVE IT!";
  if (state == "NY") return "COULD SOMEONE ON YOUR TEAM OWN IT?";
  if (state == "NYY") return "DELEGATE!";
  if (state == "NYN")
    return "IF IT MUST BECOME HIGH PRIORITY BC OF IT'S URGENCY, GO FOR IT!";
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
