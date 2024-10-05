
// אירוע שינוי בתיבת בחירה מוצר
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('product').addEventListener('change', function() {
        var selectedValue = this.value;
        console.log("You selected: " + selectedValue);
    });
    document.getElementById('management-type').addEventListener('change', function() {
        var selectedManage = this.value;
        console.log("You selected: " + selectedManage);
    });
});

// אירוע מעבר למסך שני
document.getElementById('goToPage2')?.addEventListener('click', () => {
    window.location.href = 'netunim.html';
});

// אירוע חזרה למסך ראשי
document.getElementById('goToPage1')?.addEventListener('click', () => {
    
    window.location.href = 'index.html';
});

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
window.addEventListener('beforeunload', function (e) {
  // Custom logic to execute before the page unloads (e.g., on refresh)
 // e.preventDefault();  Necessary for some browsers
  e.returnValue = null; // Required to trigger the confirmation dialog in some browsers
  document.getElementById('product').innerHTML = ""; 
});
//בחירת מסלול
document.getElementById('product').addEventListener('focus', function() {
    console.log("Select box opened");
    let muzarSelect= document.getElementById('product').innerHTML;
     let nihulSelect = document.getElementById('management-type').innerHTML;
    if (muzarSelect === "" || nihulSelect === "") { alert("נדרש לבחור סוג מוצר וסוג ניהול");
    return;}
    else {document.getElementById('maslul-type').innerHTML="נבחר";}

});



