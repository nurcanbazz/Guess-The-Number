//DOM 
let checkButton = document.getElementById('btn');
let output = document.getElementById('output');
let number = Math.floor(Math.random() * 100 + 1); // 1den 100 ' e kadar random sayı atandı.
let attempts = document.getElementById('attempts')

let count = 0;

//Events
checkButton.addEventListener('click' , () => {
    let input = document.getElementById('input-number').value;

    
    
    if(input === ""){                   //bir değer girilmediğinde uyarı verilir.                               
        alert("Please press a button!"); 
    }
    
    
    if(input <= 0 || input > 100){            //1 ile 100 arasında bir sayı girilmesi için uyarı verilir.               
        alert("Invalid value.Try Again!");
    }

    else if(isNaN(input)){                             //Sayı dışında başka bir değer girilmesi engellenir.      
        output.innerText = "Please Enter a Number";
   
    }

    else if (input == number){                      //Girilen değerin random sayıya eşitliğini kontrol eder.
        output.innerText ="Congratulations!"
        
        
    

    }else if(input < number){                           //Girilen değer random sayıdan küçük ise daha yüksek bir sayı girilir.Attemts artırılır.
        count++;
        output.innerText = 'Please Enter a Higher Number';
        attempts.innerText = 'Number of Attempts: ' + count;
    }
        
    else if(input > number){                            //Girilen değer random sayıdan büyük ise daha düşük bir sayı girilir.Attemts artırılır.
        count++;
        output.innerText = 'Please Enter a Lower Number';
        attempts.innerText = 'Number of Attempts: ' + count;
       
    }
    

});