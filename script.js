let button = document.getElementById('makeItRed');
let warning = document.getElementById('warning');

let count = 0
button.addEventListener('click', function(event) {
    if (count == 0) {
        warning.style.backgroundColor="red";
        button.innerHTML = "Clear warning";
        count ++ ;
    } else {
        warning.style.backgroundColor="";
        button.innerHTML = "Make it red"
        count -- ;
    }
})