document.getElementById('donation-button').addEventListener('click',function(event){
event.preventDefault();
 document.getElementById('donation-button').style.display='block'
 document.getElementById('History-button').style.display='none'
})
document.getElementById('History-button').addEventListener('click',function(event){
event.preventDefault();
 document.getElementById('donation-button').style.display='none'
 document.getElementById('History-button').style.display='block'
})

document.getElementById('donate-now-button').addEventListener('click',function(event){
    event.preventDefault();
  


    let amount=document.getElementById('initial-balance').innerText;
    amount= parseInt(amount);
 let inputField =document.getElementById('input-money');
 let donate=inputField.value;
 donate= parseInt(donate);
 inputField.value = '';
 amount+=donate;
let myBalance=document.getElementById('balance').innerText;
myBalance = myBalance.replace('BDT', '').trim();
myBalance=parseInt(myBalance);
myBalance -= donate;

document.getElementById('initial-balance').innerText=amount + 'BDT'  
document.getElementById('balance').innerText = myBalance + 'BDT'    

    
    if(isNaN(amount) || amount<=0){
        alert('please enter valid amount')
        return;
    }
    if (amount > myBalance)
    {
        alert('you have not enough money');
        return;
    }  
 
  
})
// second  
document.getElementById('second-donate-button').addEventListener('click',function(event){
    event.preventDefault();
    


    let secondAmount=document.getElementById('second-initial-blnc').innerText;
    secondAmount= parseInt(secondAmount);
 let secondInputField =document.getElementById('second-input-money');
 let secondDonate=secondInputField.value;
 secondDonate= parseInt(secondDonate);
 secondInputField.value = '';
 secondAmount+=secondDonate;
let mySecondBalance=document.getElementById('balance').innerText;
mySecondBalance = mySecondBalance.replace('BDT', '').trim();
mySecondBalance=parseInt(mySecondBalance);
mySecondBalance -= secondDonate;

document.getElementById('second-initial-blnc').innerText=secondAmount + 'BDT'  
document.getElementById('balance').innerText = mySecondBalance + 'BDT'    

    
    if(isNaN(secondAmount) || secondAmount<=0){
        alert('please enter valid amount')
        return;
    }
    if (secondAmount > mySecondBalance)
    {
        alert('you have not enough money');
        return;
    }  
})
// 3rd 
document.getElementById('third-donate-button').addEventListener('click',function(event){
    event.preventDefault();
   
    let thirdAmount=document.getElementById('third-initial-balance').innerText;
    thirdAmount= parseInt(thirdAmount);
 let thirdInputField =document.getElementById('third-input-money');
 let thirdDonate=thirdInputField.value;
 thirdDonate= parseInt(thirdDonate);
 thirdInputField.value = '';
 thirdAmount+=thirdDonate;
let thirdmyBalance=document.getElementById('balance').innerText;
thirdmyBalance = thirdmyBalance.replace('BDT', '').trim();
thirdmyBalance=parseInt(thirdmyBalance);
thirdmyBalance -= thirdDonate;

document.getElementById('third-initial-balance').innerText=thirdAmount + 'BDT'  
document.getElementById('balance').innerText = thirdmyBalance+ 'BDT'    

    
    if(isNaN(thirdAmount) || thirdAmount<=0){
        alert('please enter valid amount')
        return;
    }
    if (thirdAmount> thirdmyBalance)
    {
        alert('you have not enough money');
        return;
    }  
})


// history  
function transaction(donate, time, date) {
    const date = new Date();
    const transactionItem = document.createElement('li');
    transactionItem.innerText = `${date}, ${time}: Donated ${donate} BDT by Anonymous`;
    document.getElementById('History-list').appendChild(transactionItem);
}
