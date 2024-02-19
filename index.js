const buttons = document.getElementsByClassName("set");



let mahamud = [];
for(let buton of buttons){
    
    buton.addEventListener("click",function(){
    const leftSeats = document.getElementById("selected-set").innerText;

   
  
 

    
    buton.classList.add("bg-green-500");
    if(leftSeats>=4){
      return;
    }
    
    // ....................
    const title= buton.innerText;
  
   

    const titleContainer = document.getElementById("first");
    const titleContainer2 = document.getElementById("second");
    const titleContainer3 = document.getElementById("third");

   const p =document.createElement("p");
   const p2 =document.createElement("p");
   const p3 =document.createElement("p");
  
    p.innerText=title;
    p2.innerText="Economy";
    p3.innerText=550;
 
    titleContainer.appendChild(p);
    titleContainer2.appendChild(p2);
    titleContainer3.appendChild(p3);
//    ................................


// .......................
  const leftSeat = document.getElementById("selected-set");
    const textLeftSeat = leftSeat.innerText;
    const numLeftSeat = parseInt(textLeftSeat);
    const newSeat = numLeftSeat+1;
    
    setTextElementById('selected-set',newSeat);
   
     
    const leftedSeat = document.getElementById("seat-left");
    const textLeftSeat2 = leftedSeat.innerText;
    const numLeftSeat2 = parseInt(textLeftSeat2);
    const newSeat2 = numLeftSeat2-1;
    setTextElementById('seat-left',newSeat2);
   


  
    const total= document.getElementById("total-price");
    const totalPrice = total.innerText;
    const currentTotal = parseInt(totalPrice);
    const newTotal = currentTotal +550;
    
    setTextElementById('total-price', newTotal);
   
    const grand = document.getElementById("total-grand");
        const grandText = grand.innerText;
        const grandTotal = parseInt(grandText);
        const grandPrice = grandTotal +550;
        setTextElementById('total-grand', grandPrice);

});


// .......................
 

}
function checkInput(){
  
  const inputFiels = document.getElementById("input-field").value;
  const appy =document.getElementById("apply-btn");
  const leftSeats = document.getElementById("selected-set").innerText;

  if(inputFiels.trim() !=="" && leftSeats>=4 ){
    appy.disabled = false;
    appy.classList.add("bg-green-500");
  }
  else{
    appy.disabled = true;
  }
 
  
  
 
}


const appy =document.getElementById("apply-btn");
appy.addEventListener("click",function(){
  const inputFiels = document.getElementById("input-field").value;
  
  if(inputFiels==="NEW15"  ||inputFiels ==="Couple 20"){
       
      const totalPrice = document.getElementById("total-price").innerText;
     
   const container=document.getElementById("discount-con");
   const p = document.createElement("p");
   p.innerText ="Discount Amount:";
   container.appendChild(p);
   
   if(inputFiels==="NEW15"){
    newTotalPrice = totalPrice *15 /100;
    const p2 = document.createElement("p");
    p2.innerText ="BDT "+newTotalPrice;
    container.appendChild(p2);
  
    const grands = document.getElementById("total-grand");
    const newGrands = parseInt(grands);
    const newGrands2=   totalPrice - newTotalPrice;
    grands.innerText =newGrands2;
    
   }
   else{
    newTotalPrice = totalPrice *20 /100;
    const p2 = document.createElement("p");
    p2.innerText ="BDT "+newTotalPrice;
    container.appendChild(p2);
    const grands = document.getElementById("total-grand");
    const newGrands = parseInt(grands);
    const newGrands2=   totalPrice - newTotalPrice;
    grands.innerText =newGrands2;
   }
   
   const inputHide = document.getElementById("input-class");
   inputHide.classList.add("hidden");
 

  }
 
 else{
  alert("invalid cupon");
 }
  
})
// ...........
function nextButton(){
  const phoneInput = document.getElementById("phone").value;
  const nextBtn = document.getElementById("next-btn");
  const leftSeats = document.getElementById("selected-set").innerText;
  if( phoneInput.trim() !=="" && leftSeats>=1){
    nextBtn.disabled = false;
    nextBtn.classList.add("bg-green-500");
  }
  else{
    nextBtn.disabled = true;
  }
  nextBtn.addEventListener("click",function(){
    
  })
}

         
          
         
// ....


// ................
function  setTextElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
  }
document.getElementById("conti").addEventListener("click",function(){
  window.location.reload();
})



