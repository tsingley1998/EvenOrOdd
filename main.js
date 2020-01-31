function getEven() {
    let num = document.getElementById('num').value;
    let result = document.getElementById('result');
    
    
    //console.log(num % 2);
    
    if (num % 2 == 0) {
        
        result.innerText =  "This number is even!";
        //result = result + " is Even!"
    }
    
    console.log(num % 2);
    
    if (num % 2 == 1) {
        result.innerText =  "This number is odd!";
    }
    
    //console.log(num  % 2);
    
    if (isNaN(num )) {
        result.innerText = "Not a number, try again!";
    }

}

