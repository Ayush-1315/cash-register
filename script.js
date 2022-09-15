// Declaring Variables
var bill = document.getElementById("bill");
var next = document.querySelector("#proceed");
var cashGiven = document.querySelector(".cashGiven");
var cashAmt = document.querySelector("#cash");
var check = document.querySelector("#check");
var returncash = document.querySelector(".returnAmount");
var setKey=false;
var noteValue=[2000,500,100,20,10,5,1];
// Cash Variables
var notes=document.querySelectorAll('.numberNotes');
function returnCash(amount) {
    // if(Math.floor(amount/2000)!=0){
    //     c2000.innerHTML=Math.floor((amount/2000));
    //     amount=amount%2000;
    // }else{
    //     c2000.innerHTML="";
    // }
    // if(Math.floor(amount/500)!=0){
    //     c500.innerHTML=Math.floor((amount/500));
    //     amount=amount%500;
    // }
    // else{
    //     c500.innerHTML="";
    // }
    // if(Math.floor(amount/100)!=0){
    //     c100.innerHTML=Math.floor((amount/100));
    //     amount=amount%100;
    // }
    // else{
    //     c100.innerHTML="";
    // }
    // if(Math.floor(amount/20)!=0){
    //     c20.innerHTML=Math.floor((amount/20));
    //     amount=amount%20;
    // }
    // else{
    //     c20.innerHTML="";
    // }
    // if(Math.floor(amount/10)!=0){
    //     c10.innerHTML=Math.floor((amount/10));
    //     amount=amount%10;
    // }
    // else{
    //     c10.innerHTML="";
    // }
    // if(Math.floor(amount/5)!=0){
    //     c5.innerHTML=Math.floor((amount/5));
    //     amount=amount%5;
    // }
    // else{
    //     c5.innerHTML="";
    // }
    // if(amount/1!=0){
    //     c1.innerHTML=amount;
    // }
    // else{
    //     c1.innerHTML="";

for(let i=0;i<notes.length;i++){
    if(Math.trunc(amount/noteValue[i])!=0){
        notes[i].innerText=Math.trunc(amount/noteValue[i]);
        amount=amount%noteValue[i]; 
    }
    else{
        notes[i].innerHTML="";
    }
}
  returncash.style.display="flex";
}
function checkBill(){
    if (bill.value > 0) {
        cashGiven.style.display = "flex";
        setKey=true;
      } else {
        alert("Please enter a valid amount.");
      }
}
function checkCash(){
    if (cashAmt.value <= 0) {
        alert("Please enter a valid amount.");
      } 
      else if (parseInt(bill.value)>parseInt(cashAmt.value)) {
        alert("Customer underpaid!!!!");
      } 
      else {
        returnCash(cashAmt.value - bill.value);
      }
}
next.addEventListener("click",checkBill);
check.addEventListener("click",checkCash);
document.addEventListener('keydown',function(event){
    if(event.key=="Enter"){
        if(setKey==false){
            checkBill();
        }
        else{
            checkCash();
        }
    };
})
