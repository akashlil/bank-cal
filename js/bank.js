

function InputFlide(inputId) {
    const inputld = document.getElementById(inputId);
    const inputText = inputld.value;
    const inputFloat = parseFloat(inputText);
    inputld.value = "";
    return inputFloat;
}

function innerValue(innerInput,inputAmount) {
    const innerInputText = document.getElementById(innerInput).innerText;
    const innerInputFloat = parseFloat(innerInputText);
    const totalAmount = inputAmount + innerInputFloat;
    document.getElementById(innerInput).innerText = totalAmount;

}

function oldBalance(balance) {
    const balanceText = document.getElementById("old-balance").innerText;
    const balanceFloat = parseFloat(balanceText);
    const mainBalance = balance + balanceFloat;
    document.getElementById("old-balance").innerText = mainBalance;

}

document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositValue = InputFlide("deposit-input");
    console.log(depositValue);
    if (depositValue > 0) {
        innerValue("old-deposit", depositValue);
        oldBalance(depositValue)
    }

})
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawValue = InputFlide("withdraw-input");
    if (withdrawValue>0) {
        innerValue("old-withdraw", withdrawValue)
        oldBalance((-withdrawValue))
    }
})

        
        // // deposit
        // document.getElementById("deposit-btn").addEventListener("click", function () {
        //     const oldDeposit = document.getElementById("old-deposit").innerText;
        //     const oldDepositBalance = parseFloat(oldDeposit);


        //     const reaceDeposit = document.getElementById("deposit-input").value;
        //     const reaceDepositBalance = parseFloat(reaceDeposit);

        //     const totalDepositBalance = oldDepositBalance + reaceDepositBalance;
        //     document.getElementById("old-deposit").innerText = totalDepositBalance;


        //     const oldBalance = document.getElementById("old-balance").innerText;
        //     const oldCrenBalance = parseFloat(oldBalance);
        //     const totalBalance = oldCrenBalance + reaceDepositBalance;
        //     document.getElementById("old-balance").innerText = totalBalance;
        // })

        // // Withdraw
        // document.getElementById("withdraw-btn").addEventListener("click", function () {
        //     const oldWithdraw = document.getElementById("old-withdraw").innerText;
        //     const oldWithdrawBalance = parseFloat(oldWithdraw);


        //     const withdrawInput = document.getElementById("withdraw-input").value;
        //     const withdrawBalance = parseFloat(withdrawInput);

        //     const totalWithDraw = oldWithdrawBalance + withdrawBalance;
        //     document.getElementById("old-withdraw").innerText = totalWithDraw;
        //     const oldBalance = document.getElementById("old-balance").innerText;

        //     const oldCrenBalance = parseFloat(oldBalance);
        //     const totalBalance = oldCrenBalance - withdrawBalance;
        //     document.getElementById("old-balance").innerText = totalBalance;
        // })

