document.getElementById('deposit-btn').addEventListener('click', function (){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    // convert the value from string to number using parseFloat
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update the balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
});
//////////////////////////////////////////////////////////////////////////////////////////////////
// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function() {
    // get the amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
    // convert the value from string to number using parseFloat
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update the balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the withdraw input field
    withdrawInput.value = '';
})
