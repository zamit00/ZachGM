document.getElementById('product').addEventListener('change', handleSelectChange);
document.getElementById('management-type').addEventListener('change', handleSelectChange);
document.getElementById('maslul-type').addEventListener('mousedown', handleSelectChange);
// --------------------------------------------------------------------------------------------
function handleSelectChange() {
    let optButton = document.getElementById("optButton");
    optButton.value = ""; // Assign value
    optButton.textContent = ""; // Assign text

    let muzarSelect = document.getElementById('product');
    let nihulSelect = document.getElementById('management-type');

    let value1 = muzarSelect.value;
    let value2 = nihulSelect.value === "ללא העדפה" ? muzarSelect.value : nihulSelect.value;

    // Only call the function if both values are selected (non-empty)
    if (value1 !== "" && value2 !== "") {
        getMaslul(value1, value2);
    }
}   
// --------------------------------------------------------------------------------------------
function getMaslul(x, y) {
    // Check if either of the select fields is empty
    if (x === "" || y === "") {
        return;
    } else {
        document.getElementById('maslul-type').innerHTML = '';
        const act1="מתמחים בניהול אקטיבי"; const act2="כללי";const act3 = "אג\"ח";
        const act4="מניות";const act5="שיקלי"; const act6="מתמחים באפיקי השקעה סחירים"; 

        const act7="עוקבי מדדים"; const act8="מדד";

        const act9="קיימות"; 
        const act10="הלכתי"; 
        const yeled="ילד";
     
 // קורא נתונים מקובץ    
       fetch('data.txt')
          .then(response => response.text())
          .then(data => {
            
          let fieldRashi = data.split('maslulend'); 
          fieldRashi.forEach(function(item) {
          let fields = item.split(',');              
           if (y===x){
               if(x==="קופת גמל להשקעה"){
                    if (fields[3].includes(yeled){
                        x===x;
                    }
                    else{  if (fields[3].includes(x) && item.includes(y)) {
                    addOption(fields[1], fields[2]);
                     }                        
                    }
                }
                       }   
          if (y === "אקטיבי") {

               if(x==="קופת גמל להשקעה"){
                    if (fields[3].includes(yeled){
                        x===x;
                    }
                    else{        const actionsA = [act1, act2, act3, act4, act5, act6];
                            if (fields[3].includes(x) && actionsA.some(action => fields[5].includes(action))) {
                            addOption(fields[1], fields[2]);
                             }                        
                    }
                }
            }  




          if (y==="פאסיבי"){ 
               if(x==="קופת גמל להשקעה"){
                    if (fields[3].includes(yeled){
                        x===x;
                    }
                    else{ const actionsP = [act7, act8];
                          if (fields[3].includes(x) && actionsP.some(action => fields[5].includes(action))) {
                            addOption(fields[1], fields[2]);
                             }                        
                    }
                }
            }  





              

          if (y==="קיימות"){ 
             if(x==="קופת גמל להשקעה"){
                    if (fields[3].includes(yeled){
                        x===x;
                    }
                    else{ const actionsP = [act7, act8];
                           if (fields[3].includes(x) && fields[5].includes(act9) ) {
                            addOption(fields[1], fields[2]);
                             }                        
                    }
                }
            } 


          if (y==="הלכתי"){
             if(x==="קופת גמל להשקעה"){
                    if (fields[3].includes(yeled){
                        x===x;
                    }
                    else{ if (fields[3].includes(x) && fields[5].includes(act10) ) {
                    addOption(fields[1], fields[2]);
                             }                        
                    }
                }
            } 





  
    
    }); 
    });
    }
} 
// --------------------------------------------------------------------------------------------
// add a new option
function addOption(value, text) {
    // Get the select element
    var select = document.getElementById('maslul-type');

    // Create a new option element
    var newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = value+ "-" +text;

    // Append the new option to the select element
    select.appendChild(newOption);
}
// --------------------------------------------------------------------------------------------
document.getElementById('maslul-type').addEventListener('change', function() {
    let muzarSelect = document.getElementById('maslul-type');
    let value1 = muzarSelect.options[muzarSelect.selectedIndex].value;
    console.log(value1);
    let varsplit = value1.split('-');
    console.log(varsplit[0]);

    // Correctly set the value and text of the option with id "optButton"
    let optButton = document.getElementById("optButton");
    optButton.value = varsplit[0]; // Assign value
    optButton.textContent = varsplit[0]; // Assign text
    console.log(parseInt(document.getElementsByName("txt1")[0]?.value));
    });

// --------------------------------------------------------------------------------------------
// אירוע מעבר למסך שני
document.getElementById('goToPage2')?.addEventListener('click', () => {
    window.location.href = 'netunim.html';
});
// --------------------------------------------------------------------------------------------
// אירוע חזרה למסך ראשי
document.getElementById('goToPage1')?.addEventListener('click', () => {
    
    window.location.href = 'index.html';
});
// --------------------------------------------------------------------------------------------
// אירוע הצג נתונים
document.getElementById('mybutton').addEventListener('click', () => {
    let kupaID = parseInt(document.getElementsByName("txt1")[0]?.value);
    
    // ניקוי פלטים קודמים
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`output${i}`).textContent = '';
        if (i <= 7) {
            document.getElementById(`schom${i}`).textContent = '';
            document.getElementById(`ahuz${i}`).textContent = '';
        }
    }


   if (isNaN(kupaID)) { return;}

 // קורא נתונים מקובץ    
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            let searchString=`<${kupaID}>,`;



// Add your logic to check if `searchString` is found
if (!data.includes(searchString)) {
    return; // Exit the function if searchString is not found in the content
}

            const startIndex = data.indexOf(searchString)+ searchString.length;

            if (startIndex === -1) return;

            let allString = data.substring(startIndex); 

            let fields = allString.split(',');
            
// ממלא שדות נתונים בטבלאות
            document.getElementById('output1').textContent = fields[0] || '';
            document.getElementById('output2').textContent = fields[1] || '';
            document.getElementById('output3').textContent = fields[2] || '';
            document.getElementById('output4').textContent = fields[3] || '';
            document.getElementById('output5').textContent = fields[4] || '';
            document.getElementById('output6').textContent = Number(fields[6] || 0).toLocaleString() + " מלשח";
            document.getElementById('output7').textContent = fields[7] + '%';
            document.getElementById('output8').textContent = fields[8] + '%';
            document.getElementById('output9').textContent = fields[9] + '%';
            document.getElementById('output10').textContent = fields[11];

            document.getElementById('schom1').textContent = Number(fields[31] || 0).toLocaleString() + " אשח";
            document.getElementById('schom2').textContent = Number(fields[33] || 0).toLocaleString() + " אשח";
            document.getElementById('schom3').textContent = Number(fields[35] || 0).toLocaleString() + " אשח";
            document.getElementById('schom4').textContent = Number(fields[37] || 0).toLocaleString() + " אשח";
            document.getElementById('schom5').textContent = Number(fields[39] || 0).toLocaleString() + " אשח";
            document.getElementById('schom6').textContent = Number(fields[41] || 0).toLocaleString() + " אשח";
            document.getElementById('schom7').textContent = Number(fields[43] || 0).toLocaleString() + " אשח";

            document.getElementById('ahuz1').textContent = (Number(fields[32] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz2').textContent = (Number(fields[34] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz3').textContent = (Number(fields[36] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz4').textContent = (Number(fields[38] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz5').textContent = (Number(fields[40] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz6').textContent = (Number(fields[42] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz7').textContent = (Number(fields[44] || 0) * 100).toLocaleString() + '%';
        })
        .catch(error => console.error('Error fetching the file:', error));
});
// --------------------------------------------------------------------------------------------
window.addEventListener('beforeunload', function (e) {
  // Custom logic to execute before the page unloads (e.g., on refresh)
 // e.preventDefault();  Necessary for some browsers
  e.returnValue = null; // Required to trigger the confirmation dialog in some browsers
   
});
