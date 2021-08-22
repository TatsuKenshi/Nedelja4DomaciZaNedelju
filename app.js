// 1
const table = document.querySelector(".table");
const submitForm = document.querySelector(".newPlayer");
const playerName = document.querySelector("#name");
const playerFederation = document.querySelector("#federation");
const payerRating = document.querySelector("#rating");

function addPlayer(
  table,
  submitForm,
  playerName,
  playerFederation,
  playerRating
) {
  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let newDataRow = document.createElement("tr");
    newDataRow.innerHTML = `
    <td>${playerName.value}</td>
    <td>${playerFederation.value}</td>
    <td>${playerRating.value}</td>
    `;
    table.append(newDataRow);
    playerName.value = "";
    playerFederation.value = "";
    playerRating.value = "";
  });
}
addPlayer(table, submitForm, playerName, playerFederation, playerRating);

// 2

const numberA = document.querySelector("#a");
const numberB = document.querySelector("#b");
const submitBtn = document.querySelector("#btn");
const result = document.querySelector("#result");
console.log(result);
const checker = document.querySelector("#checker");

function addition(numberA, numberB, submitBtn, result) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let total = Number(numberA.value) + Number(numberB.value);
    result.innerHTML = `The result is: ${total}`;
    numberA.value = "";
    numberB.value = "";
  });
}
addition(numberA, numberB, submitBtn, result);

// 3
const calcForm = document.querySelector(".calcForm");

checker.addEventListener("change", function (e) {
  calcForm.classList.toggle("hidden");
});
