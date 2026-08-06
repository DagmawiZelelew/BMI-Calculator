const weight = document.getElementById("weight");
const height = document.getElementById("height");
const response = document.getElementById("response");
const submit = document.getElementById("submit");
let ans;
//=====================================================
submit.onclick= function(){
    let usrweight = Number(weight.value);
    let usrheight = Number(height.value);
    ans = usrweight/usrheight**2;
    if(isNaN(ans)){
     response.textContent = "Invalid Response!!!";   
    }
    else if (usrheight<=0 || usrweight <=0 ){
        response.textContent = `Invalid Response!!!`;
    }
    else if (ans <18.5 ){
        response.textContent = `${ans.toFixed(2)}! Thats Underweight.`
    }
      else if (ans >= 18.5 && ans <= 24.9 ){
        response.textContent = `${ans.toFixed(2)}! Thats Normal Weight, No worries!`
   }
      else if (ans >= 25.0 && ans <= 29.9 ){
        response.textContent = `${ans.toFixed(2)}! Thats Overweight!`
   }
      else {
        response.textContent = `${ans.toFixed(2)}! Thats Critical, Please Inform your local Doctors!`
   }







}