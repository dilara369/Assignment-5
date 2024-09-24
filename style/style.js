document
  .getElementById("History-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("historyData").classList.remove("hidden");
    document.getElementById("donate-data").classList.add("hidden");

    const element = document.getElementById("History-button");
    element.style.backgroundColor = "#B4F461";
    const elementTwo = document.getElementById("donation-button");
    elementTwo.style.backgroundColor = "gray";
  });

document
  .getElementById("donation-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("historyData").classList.add("hidden");
    document.getElementById("donate-data").classList.remove("hidden");

    const element = document.getElementById("History-button");
    element.style.backgroundColor = "white";
    const elementTwo = document.getElementById("donation-button");
    elementTwo.style.backgroundColor = "#B4F461";
  });

function tranSaction(donate , donateName) {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();
// donate+" taka is "+donateName
 const transDiv=document.createElement('div');
 transDiv.innerHTML=` <h1> ${donate} taka is ${donateName} ,${date}, ${time} </h1> `
  document.getElementById("History-list").appendChild(transDiv);
} 

document
  .getElementById("donate-now-button")
  .addEventListener("click", function () {
    const firstDonateAmount = document.getElementById("input-money").value;
    const donate = parseFloat(firstDonateAmount);
    const name=document.getElementById('titleOne').innerText;
    if (isNaN(donate) || donate <= 0) {
      alert("please enter valid amount");
      return;
    }

    const myBalance = document.getElementById("balance").innerText;

    if (donate > myBalance) {
      alert("you have not enough money");
      return;
    }
    tranSaction(donate ,name);
  });
document
  .getElementById("second-donate-button")
  .addEventListener("click", function () {
    const secondDonateAmount =
      document.getElementById("second-input-money").value;
      const nameTwo=document.getElementById('titletwo').innerText;
    const donate = parseFloat(secondDonateAmount);
    if (isNaN(donate) || donate <= 0) {
      alert("please enter valid amount");
      return;
    }

    const myBalance = document.getElementById("balance").innerText;

    if (donate > myBalance) {
      alert("you have not enough money");
      return;
    }
    tranSaction(donate ,nameTwo);
  });
document
  .getElementById("third-donate-button")
  .addEventListener("click", function () {
    const thirdDonateAmount =
      document.getElementById("third-input-money").value;
    const donate = parseFloat(thirdDonateAmount);
    const nameThree=document.getElementById('titlethree').innerText;
    if (isNaN(donate) || donate <= 0) {
      alert("please enter valid amount");
      return;
    }

    const myBalance = document.getElementById("balance").innerText;

    if (donate > myBalance) {
      alert("you have not enough money");
      return;
    }
    tranSaction(donate ,nameThree);
  });

//   calculate
document
  .getElementById("donate-now-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let amount = document.getElementById("initial-balance").innerText;
    amount = parseInt(amount);
    let inputField = document.getElementById("input-money");
    let donate = inputField.value;
    donate = parseInt(donate);
    inputField.value = "";
    amount += donate;

    let myBalance = document.getElementById("balance").innerText;
    myBalance = myBalance.replace("BDT", "").trim();
    myBalance = parseInt(myBalance);
    myBalance -= donate;

    if (isNaN(amount) || amount <= 0) {
      alert("please enter valid amount");
      return;
    }
    if (amount > myBalance) {
      alert("you have not enough money");
      return;
    }
    // i put the condition here cause code read line by line

    document.getElementById("initial-balance").innerText = amount + "BDT";
    document.getElementById("balance").innerText = myBalance + "BDT";

    document.getElementById("my_modal_6").checked = true;
  });
// second
document
  .getElementById("second-donate-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let secondAmount = document.getElementById("second-initial-blnc").innerText;
    secondAmount = parseInt(secondAmount);
    let secondInputField = document.getElementById("second-input-money");
    let secondDonate = secondInputField.value;
    secondDonate = parseInt(secondDonate);
    secondInputField.value = "";
    secondAmount += secondDonate;

    let mySecondBalance = document.getElementById("balance").innerText;
    mySecondBalance = mySecondBalance.replace("BDT", "").trim();
    mySecondBalance = parseInt(mySecondBalance);
    mySecondBalance -= secondDonate;

    if (isNaN(secondAmount) || secondAmount <= 0) {
      alert("please enter valid amount");
      return;
    }
    if (secondAmount > mySecondBalance) {
      alert("you have not enough money");
      return;
    }

    document.getElementById("second-initial-blnc").innerText =
      secondAmount + "BDT";
    document.getElementById("balance").innerText = mySecondBalance + "BDT";

    document.getElementById("my_modal_6").checked = true;
  });
// 3rd
document
  .getElementById("third-donate-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let thirdAmount = document.getElementById(
      "third-initial-balance"
    ).innerText;
    thirdAmount = parseInt(thirdAmount);
    let thirdInputField = document.getElementById("third-input-money");
    let thirdDonate = thirdInputField.value;
    thirdDonate = parseInt(thirdDonate);
    thirdInputField.value = "";
    thirdAmount += thirdDonate;

    let thirdmyBalance = document.getElementById("balance").innerText;
    thirdmyBalance = thirdmyBalance.replace("BDT", "").trim();
    thirdmyBalance = parseInt(thirdmyBalance);
    thirdmyBalance -= thirdDonate;

    if (isNaN(thirdAmount) || thirdAmount <= 0) {
      alert("please enter valid amount");
      return;
    }
    if (thirdAmount > thirdmyBalance) {
      alert("you have not enough money");
      return;
    }

    document.getElementById("third-initial-balance").innerText =
      thirdAmount + "BDT";
    document.getElementById("balance").innerText = thirdmyBalance + "BDT";

    document.getElementById("my_modal_6").checked = true;
  });

// history
