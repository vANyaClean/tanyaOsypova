let amIanAddict = document.querySelector('input[type="radio"]:checked');
let button = document.getElementById("form-button");
button.addEventListener('click',()=>{
    if(amIanAddict.value === "yes"){
    alert("ADDICTED")
    }
    else alert ("NOT ADDICTED");
});
