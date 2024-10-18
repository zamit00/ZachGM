window.onload = function() {

   
    sumsum();}

function gotohome(){
    window.location.href = 'index.html';
   
}


function sumsum() {
            
    // Retrieve values from input fields
    let x1 = parseInt(document.getElementsByName("txt1")[0].value);
    let x2 = parseInt(document.getElementsByName("txt2")[0].value);
    let dn = parseFloat(document.getElementsByName("dmeynihul")[0].value);
    let ribitchoose=document.getElementById("selectribit");
    let ribit=ribitchoose.value;
    
    let z=0.04-dn/100;

    if(x1<0||x2<0){alert('סכומים לא תקינים');numbermakor0();return;}
    let selectElement = document.getElementById("selecttkofa");
    let x3 = selectElement.value; // Gets the selected value
    
   const textopen="סכום השקעה עתידי לתקופה של - ";
   const textnext=" שנים:       ";
   const shach = " ש\"ח"; 
   
   
   if (document.getElementById("rd11").checked){z1=0.09-dn/100;}
    if (document.getElementById("rd22").checked){z1=0.05-dn/100;}
    if (document.getElementById("rd33").checked){z1=0.02-dn/100;}
    if (document.getElementById("rd44").checked){z1=ribit-dn/100;}

    
   
    
   let sum=hishuv(x1,x2,z,x3);
   
    if (isNaN(sum) ) {alert('סכומים לא תקינים');numbermakor0();return;}
        let integerPart=part(sum);
       
        document.getElementById("lblfirst0").textContent=textopen + x3 + textnext + integerPart + shach;
        document.getElementById("lblfirst0").style.display = "block";

        sum=hishuv(x1,x2,z1,x3);
        integerPart=part(sum);
   
        document.getElementById("lblfirst00").textContent=textopen + x3 + textnext + integerPart + shach;
        document.getElementById("lblfirst00").style.display = "block";
  

    if(x3<10){
        document.getElementById("lblfirst10").style.display = "block";
        document.getElementById("lblfirst100").style.display = "block";
        sum=hishuv(x1,x2,z,10);
        integerPart=part(sum);
        document.getElementById("lblfirst10").textContent=textopen + "10" + textnext + integerPart + shach;
        
        sum=hishuv(x1,x2,z1,10);
        integerPart=part(sum);
        document.getElementById("lblfirst100").textContent=textopen + "10" + textnext + integerPart + shach;

    }
    else {document.getElementById("lblfirst10").style.display = "none";
          document.getElementById("lblfirst100").style.display = "none";
    }

    if(x3<20){
        document.getElementById("lblfirst20").style.display = "block";
        document.getElementById("lblfirst200").style.display = "block";
        sum=hishuv(x1,x2,z,20);
        integerPart=part(sum);
        document.getElementById("lblfirst20").textContent=textopen + "20" + textnext + integerPart + shach;
        
        sum=hishuv(x1,x2,z1,20);
        integerPart=part(sum);
        document.getElementById("lblfirst200").textContent=textopen + "20" + textnext + integerPart + shach;

            }
    else {document.getElementById("lblfirst20").style.display = "none";
        document.getElementById("lblfirst200").style.display = "none";
    }

    if(x3<30){
        document.getElementById("lblfirst30").style.display = "block";
        document.getElementById("lblfirst300").style.display = "block";
        sum=hishuv(x1,x2,z,30);
        integerPart=part(sum);
        document.getElementById("lblfirst30").textContent=textopen + "30" + textnext + integerPart + shach;
        
        sum=hishuv(x1,x2,z1,30);
        integerPart=part(sum);
        document.getElementById("lblfirst300").textContent=textopen + "30" + textnext + integerPart + shach;
    
    }
    else {document.getElementById("lblfirst30").style.display = "none";
        document.getElementById("lblfirst300").style.display = "none";
    }


}

function toggleTextboxes() {
const text1 = document.getElementById("tx1");
const text2 = document.getElementById("tx2");

if (document.getElementById("rd1").checked) {
text1.disabled = false;
text2.disabled = false;
numbermakor1();

} else if (document.getElementById("rd2").checked) {
   
text1.disabled = false;
text2.disabled = true;

numbermakor2();


} else if (document.getElementById("rd3").checked) {
text1.disabled = true;
text2.disabled = false;
numbermakor3();
}
}
function numbermakor0(){document.getElementById("tx1").value=1000;document.getElementById("tx2").value=200;}

function numbermakor1(){
if(document.getElementById("tx1").value<0 || document.getElementById("tx1").value<0 ){alert('סכומים לא תקינים');numbermakor0();return;}

if(document.getElementById("tx1").value==0){document.getElementById("tx1").value=1000;}
if(document.getElementById("tx2").value==0){document.getElementById("tx2").value=200;}

} 
function numbermakor2(){
if(document.getElementById("tx1").value<0 ){alert('סכום לא תקין');return;}
if(document.getElementById("tx1").value==0){document.getElementById("tx1").value=1000;}
document.getElementById("tx2").value=0;

} 
function numbermakor3(){
if(document.getElementById("tx2").value<0 ){alert('סכום לא תקין');return;}
if(document.getElementById("tx2").value==0){document.getElementById("tx2").value=200;}
document.getElementById("tx1").value=0;

} 

function hishuv(x,y,z,t){
    let hishuv = x + y;
    hishuv=hishuv * (1+z);
    for (let i = 1; i < t; i++) {
        hishuv = (hishuv+y) * (1+z);
    }
    //hishuv= part(hishuv)
    return hishuv;
}

function part(partx){
    let part = partx.toString().split(".");
    let integerPart = part[0]; // "123"
    integerPart=integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    part=integerPart;
    return part;

}
function gotosheelon(){
   
    localStorage.removeItem('savedMessage');
    document.getElementById("opn").style.display = "none";
    document.getElementById("cls").style.display = "block";
    document.getElementById("alltozaa").style.display = "none";
    document.getElementById("iframe").style.display = "block";

    const iframe = document.getElementById('myIframe');

    iframe.contentWindow.postMessage('clearAnswers', '*');
    iframe.style.display = 'block';
}
function backfromsheelon(){
    let touser="";
    document.getElementById("opn").style.display = "block";
    document.getElementById("cls").style.display = "none";
    document.getElementById("iframe").style.display = "none";
    document.getElementById("alltozaa").style.display = "block";
    document.getElementById("sikonnimdad").style.display = "none";
    const savedMessage = localStorage.getItem('savedMessage');
    if (savedMessage) {touser=savedMessage;
         document.getElementById("sikonnimdad").style.height="110px";
        document.getElementById("sikonnimdad").innerText='סיכון ' + touser;
    } else {
       document.getElementById("sikonnimdad").style.height="110px";
        touser="לא בוצע שאלון";
        document.getElementById("sikonnimdad").innerText=touser;
    }
    
    document.getElementById("sikonnimdad").style.display = "block";
    localStorage.removeItem('savedMessage');
    return;
       
}
function gotomaslul() {
    
   //const targetWindow = window.open('https://zamit00.github.io/HZgemel/', '_blank');
   //const message = document.getElementById("sikonnimdad").innerText;
   //if (message !== ''){
  // targetWindow.postMessage(message, 'https://zamit00.github.io/HZgemel/');}
   window.location.href = 'https://zamit00.github.io/HZgemel/';
   
}
