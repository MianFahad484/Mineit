const hashrateElement document.getElementById("hashrate");

const startMiningButton document.getElementById("start-mining-button");

const totalEarnedElement document.getElementById("total-earned");


startMiningButton.addEventListener("click", startMining);


function stantilining() {

    // Send a request to the mining pool server to start mining fetch("/start-mining")

    .then(response > response.json())

    then(data => {

        // Update the mining stats on the page hashrateElement.textContent data.hashrate; totalEarnedElement.textContent data.totalEarned; });
}
window.alert("welcome to BitMiner")