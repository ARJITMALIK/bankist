"use strict";
// NOTE: all imports--
const welcomeLabel = document.querySelector(".appname p");
const inputUserName = document.getElementById("inputUserName");
const inputPassword = document.getElementById("inputPassword");
const loginButton = document.querySelector(".loginButton");

// NOTE: movement selectors--
const appContainer = document.getElementById("appContainer");
const p2 = document.querySelector(".p2");
const totalMoney = document.querySelector(".totalMoney");
const total = document.querySelector(".total");
const moveRow = document.querySelector(".move-row");
const movementType = document.getElementById("movementType");
const movementDate = document.querySelector(".movementDate");
const moveMoney = document.querySelector(".move-money");
const movements = document.querySelector(".movements-move");
// const moveStatus = document.getElementById("move-status");
// NOTE: controls selectors--
const loanInput = document.querySelector(".loanInput");
const loanButton = document.querySelector(".loanButton");
const transferUser = document.querySelector(".transferUser");
const transferInput = document.querySelector(".transferInput");
const transferButton = document.querySelector(".transferButton");
const closeUser = document.querySelector(".closeUser");
const closePIN = document.querySelector(".closePIN");
const closeButton = document.querySelector(".closeButton");

// NOTE: summary--
const incoming = document.querySelector(".in");
const out = document.querySelector(".out");
const sortButton = document.querySelector(".sortButton");
const unsortButton = document.querySelector(".unsortButton");

// NOTE: timer--
const timer = document.querySelector(".timer");

// NOTE: all users--
const users = {
  user1: {
    owner: "Arjit Malik",
    PIN: 1111,
    username: [],
    movements: [1200, -300, 400, -500, 1500, 4000],
  },
  user2: {
    owner: "Vishakha Chaudhary",
    PIN: 2222,
    username: [],
    movements: [1300, 300, -400, -600, 1500],
  },
  user3: {
    owner: "Ashu Chaudhary",
    PIN: 3333,
    username: [],
    movements: [-1500, 400, 400, 500, -100, 4000, 300],
  },

  user4: {
    owner: "Garima Arora",
    PIN: 4444,
    username: [],
    movements: [100, 300, 400, -500, 1000],
  },
};
// NOTE: all functions --

const userNameGenerator = function (user) {
  const stringParts = user.owner.trim().split(" ");
  const ar = [];
  const username = function (stringParts) {
    for (let i = 0; i < stringParts.length; i++) {
      let temp = stringParts[i];
      ar.push(temp.slice(0, 1).toLowerCase());
    }
    return ar.join("");
  };

  user.username = username(stringParts);
};

const activeUser = function (user) {
  currentUser = user;
};

function displayMovements(currentUser) {
  let type;
  let row;
  movements.textContent = "";
  for (let index = 0; index < currentUser.movements.length; index++) {
    if (Number(currentUser.movements[index] < 0)) {
      type = "WITHDRAWL";
      row = `<div class="move-row">
           <div class="move-status">
           <div id="movementType" class="movemove move2">${
             index + 1
           } ${type}</div>
           <div class="movementDate">${date}</div>
           </div>
           <div class="move-money">${Math.abs(
             currentUser.movements[index]
           )}</div>
           </div>`;
    } else {
      type = "DEPOSIT";
      row = `<div class="move-row">
           <div class="move-status">
           <div id="movementType" class="movemove move1">${
             index + 1
           } ${type}</div>
           <div class="movementDate">${date}</div>
           </div>
           <div class="move-money">${Math.abs(
             currentUser.movements[index]
           )}</div>
           </div>`;
    }

    movements.insertAdjacentHTML("afterbegin", row);
  }
}

function displaySummary(currentUser) {
  out.textContent = "";
  incoming.textContent = "";
  let incomingsum = 0;
  let outgoingsum = 0;
  for (let i = 0; i < currentUser.movements.length; i++) {
    if (currentUser.movements[i] < 0) {
      outgoingsum += Number(currentUser.movements[i]);
    } else {
      incomingsum += Number(currentUser.movements[i]);
    }
  }
  out.textContent = ` $${Math.abs(outgoingsum)}`;
  incoming.textContent = ` $${Math.abs(incomingsum)}`;
}

function displayTotal(currentUser) {
  let sum = 0;
  for (let i = 0; i < currentUser.movements.length; i++) {
    sum += Number(currentUser.movements[i]);
  }
  total.textContent = sum;
}

function sortDisplay(currentUser) {
  let type;
  let row;
  movements.textContent = "";
  for (let index = 0; index < currentUser.movements.length; index++) {
    if (currentUser.movements[index] < 0) {
      if (Number(currentUser.movements[index] < 0)) {
        type = "WITHDRAWL";
        row = `<div class="move-row">
           <div class="move-status">
           <div id="movementType" class="movemove move2">${
             index + 1
           } ${type}</div>
           <div class="movementDate">${date}</div>
           </div>
           <div class="move-money">${Math.abs(
             currentUser.movements[index]
           )}</div>
           </div>`;
      } else {
        type = "DEPOSIT";
        row = `<div class="move-row">
           <div class="move-status">
           <div id="movementType" class="movemove move1">${
             index + 1
           } ${type}</div>
           <div class="movementDate">${date}</div>
           </div>
           <div class="move-money">${Math.abs(
             currentUser.movements[index]
           )}</div>
           </div>`;
      }
      movements.insertAdjacentHTML("afterbegin", row);
    }
  }
  for (let index = 0; index < currentUser.movements.length; index++) {
    if (currentUser.movements[index] > 0) {
      if (Number(currentUser.movements[index] < 0)) {
        type = "WITHDRAWL";
        row = `<div class="move-row">
           <div class="move-status">
           <div id="movementType" class="movemove move2">${
             index + 1
           } ${type}</div>
           <div class="movementDate">${date}</div>
           </div>
           <div class="move-money">${Math.abs(
             currentUser.movements[index]
           )}</div>
           </div>`;
      } else {
        type = "DEPOSIT";
        row = `<div class="move-row">
           <div class="move-status">
           <div id="movementType" class="movemove move1">${
             index + 1
           } ${type}</div>
           <div class="movementDate">${date}</div>
           </div>
           <div class="move-money">${Math.abs(
             currentUser.movements[index]
           )}</div>
           </div>`;
      }
      movements.insertAdjacentHTML("afterbegin", row);
    }
  }
}

// // NOTE: prior preparations --
userNameGenerator(users.user1);
userNameGenerator(users.user2);
userNameGenerator(users.user3);
userNameGenerator(users.user4);

let currentUser;
let transferToUser;

const curDate = new Date();
const date = `${curDate.getDate()}/${curDate.getMonth()}/${curDate.getFullYear()}`;

// NOTE: functionality--

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputUserName.value && inputPassword.value) {
    if (
      inputUserName.value == users.user1.username &&
      inputPassword.value == users.user1.PIN
    ) {
      appContainer.classList.remove("hidden");
      welcomeLabel.textContent = `Welcome back , ${users.user1.owner}`;
      activeUser(users.user1);
      displayMovements(users.user1);
      displaySummary(currentUser);
      displayTotal(currentUser);
      inputPassword.value = "";
      inputUserName.value = "";
      p2.textContent = `As of ${date}  ${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}`;
    } else if (
      inputUserName.value == users.user2.username &&
      inputPassword.value == users.user2.PIN
    ) {
      appContainer.classList.remove("hidden");
      welcomeLabel.textContent = `Welcome back , ${users.user2.owner}`;
      activeUser(users.user2);
      displayMovements(users.user2);
      displaySummary(currentUser);
      displayTotal(currentUser);
      inputPassword.value = "";
      inputUserName.value = "";
    } else if (
      inputUserName.value == users.user3.username &&
      inputPassword.value == users.user3.PIN
    ) {
      appContainer.classList.remove("hidden");
      welcomeLabel.textContent = `Welcome back , ${users.user3.owner}`;
      activeUser(users.user3);
      displayMovements(users.user3);
      displaySummary(currentUser);
      displayTotal(currentUser);
      inputPassword.value = "";
      inputUserName.value = "";
    } else if (
      inputUserName.value == users.user4.username &&
      inputPassword.value == users.user4.PIN
    ) {
      appContainer.classList.remove("hidden");
      welcomeLabel.textContent = `Welcome back , ${users.user4.owner}`;
      activeUser(users.user4);
      displayMovements(users.user4);
      displaySummary(currentUser);
      displayTotal(currentUser);
      inputPassword.value = "";
      inputUserName.value = "";
    }
  }
});

loanButton.addEventListener("click", function () {
  if (loanInput.value && loanInput.value > 0) {
    currentUser.movements.push(loanInput.value);
    displayMovements(currentUser);
    total.value = " ";
    displaySummary(currentUser);
    displayTotal(currentUser);
    loanInput.value = "";
  }
});

transferButton.addEventListener("click", function () {
  if (
    transferUser.value &&
    transferInput.value &&
    transferUser.value !== currentUser.username &&
    transferInput.value > 0 &&
    transferInput.value < Number(total.value)
  ) {
    if (transferUser.value === "am") {
      transferToUser = users.user1;
      transferToUser.movements.push(transferInput.value);
      currentUser.movements.push(-transferInput.value);
      displayMovements(currentUser);
      displaySummary(currentUser);
      displayTotal(currentUser);
      transferInput.value = "";
      transferUser.value = "";
    } else if (transferUser.value === "vc") {
      transferToUser = users.user2;
      transferToUser.movements.push(transferInput.value);
      currentUser.movements.push(-transferInput.value);
      displayMovements(currentUser);
      displaySummary(currentUser);
      displayTotal(currentUser);
      transferInput.value = "";
      transferUser.value = "";
    } else if (transferUser.value === "as") {
      transferToUser = users.user3;
      transferToUser.movements.push(transferInput.value);
      currentUser.movements.push(-transferInput.value);
      displayMovements(currentUser);
      displaySummary(currentUser);
      displayTotal(currentUser);
      transferInput.value = "";
      transferUser.value = "";
    } else if (transferUser.value === "ga") {
      transferToUser = users.user4;
      transferToUser.movements.push(transferInput.value);
      currentUser.movements.push(-transferInput.value);
      displayMovements(currentUser);
      displaySummary(currentUser);
      displayTotal(currentUser);
      transferInput.value = "";
      transferUser.value = "";
    }
  }
});

closeButton.addEventListener("click", function () {
  if (closeUser.value && closePIN.value) {
    if (closeUser.value === "am" && closePIN.value == users.user1.PIN) {
      delete users.user1;
      appContainer.classList.add("hidden");
      welcomeLabel.textContent = "Login to get started";
      console.log(users);
    } else if (closeUser.value === "vc" && closePIN.value == users.user2.PIN) {
      delete users.user2;
      appContainer.classList.add("hidden");
      welcomeLabel.textContent = "Login to get started";
      console.log(users);
    } else if (closeUser.value === "ac" && closePIN.value == users.user3.PIN) {
      delete users.user3;
      appContainer.classList.add("hidden");
      welcomeLabel.textContent = "Login to get started";
      console.log(users);
    } else if (closeUser.value === "ga" && closePIN.value == users.user4.PIN) {
      delete users.user4;
      appContainer.classList.add("hidden");
      welcomeLabel.textContent = "Login to get started";
      console.log(users);
    }
  }
});

sortButton.addEventListener("click", function () {
  sortDisplay(currentUser);
});
unsortButton.addEventListener("click", function () {
  displayMovements(currentUser);
});

timer.textContent = " "; // FIXME:
