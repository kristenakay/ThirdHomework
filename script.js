

let SpecialCharacters = document.getElementById("SpecialCharacters");
let NumericalCharacters = document.getElementById("NumericalCharacters");
let LowercaseCharacters = document.getElementById("LowercaseCharacters");
let UppercaseCharacters = document.getElementById("UppercaseCharacters");
let LengthEL = document.getElementById("Data");
let GenerateEl = document.getElementById("generate");
let PasswordEl = document.getElementById("password");



GenerateEl.addEventListener("click",function() {
    event.preventDefault();
    
    value = "";
    for (i=0;i<LengthEL.length;i++) {
        

    value += LengthEL[i].value;
        
    }
    console.log(value);
    
    var loweralpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var specialchr = [" ","!","#", "$", "%" , "&" , "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[","]", "^", "_", "`","{","|","}","~","]"];
    let answer = " ";
    var upperalpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    
    
    if (value > 7 && value < 129) {
   
     
    if (SpecialCharacters.checked) {
        
        if (NumericalCharacters.checked == false) {

            if (LowercaseCharacters.checked == false) {

                if (UppercaseCharacters.checked == false) {
                    // Special on
                    for (i=0;i<value;i++) {
                    answer += specialchr[Math.floor(Math.random() * Math.floor(32))];
                    }
                    PasswordEl.textContent = answer;
                } else {
                    // Uppercase and Special on
                    for (i=0;i<value;i++) {
                        let options = [specialchr,upperalpha];
                        let great = options[Math.floor(Math.random() * Math.floor(2))];
                        if (great == specialchr) {
                            answer += specialchr[Math.floor(Math.random() * Math.floor(32))];
                        } else {
                            answer += upperalpha[Math.floor(Math.random() * Math.floor(26))];
                        }
                        
                    }
                    PasswordEl.textContent = answer;
                }
                }else if (UppercaseCharacters.checked) {
                    //Upper and Special and Lower
                    for (i=0;i<value;i++) {
                        let options = [specialchr,upperalpha,loweralpha];
                        let great = options[Math.floor(Math.random() * Math.floor(3))];
                        if (great == specialchr) {
                            answer += specialchr[Math.floor(Math.random() * Math.floor(32))];
                        } else if (great == upperalpha) {
                            answer += upperalpha[Math.floor(Math.random() * Math.floor(26))];
                        } else {
                            answer += loweralpha[Math.floor(Math.random() * Math.floor(26))];
                        }
                        
                    }
                    PasswordEl.textContent = answer;
                }
        } else if (UppercaseCharacters.checked == false) {
            if (LowercaseCharacters.checked == false) {
                // Number and special
                for (i=0;i<value;i++) {
                    let options = [specialchr,numbers];
                    let great = options[Math.floor(Math.random() * Math.floor(2))];
                    if (great == specialchr) {
                        answer += specialchr[Math.floor(Math.random() * Math.floor(32))];
                    } else {
                        answer += numbers[Math.floor(Math.random() * Math.floor(9))];
                    }
                    
                }
                PasswordEl.textContent = answer;
            }

        }
    }
    

    

    if (NumericalCharacters.checked) {
        if (SpecialCharacters.checked == false) {
            if (UppercaseCharacters.checked == false) {
                if (LowercaseCharacters.checked == false) {
                    // Numbers on
                    for (i=0;i<value;i++) {
                    answer += numbers[Math.floor(Math.random() * Math.floor(9))];
                    }
                    PasswordEl.textContent = answer;
                } else {
                    // Numbers and Lower on
                    for (i=0;i<value;i++) {
                        let options = [numbers,loweralpha];
                        let great = options[Math.floor(Math.random() * Math.floor(2))];
                        if (great == numbers) {
                            answer += numbers[Math.floor(Math.random() * Math.floor(9))];
                        } else {
                            answer += loweralpha[Math.floor(Math.random() * Math.floor(26))];
                        }
                        
                    }
                    PasswordEl.textContent = answer;
                }
            } else if (LowercaseCharacters.checked) {
                // lower and upper and numbers
                for (i=0;i<value;i++) {
                    let options = [loweralpha,upperalpha,numbers];
                    let great = options[Math.floor(Math.random() * Math.floor(3))];
                    if (great == loweralpha) {
                        answer += loweralpha[Math.floor(Math.random() * Math.floor(26))];
                    } else if (great == upperalpha) {
                        answer += upperalpha[Math.floor(Math.random() * Math.floor(26))];
                    } else {
                        answer += numbers[Math.floor(Math.random() * Math.floor(9))];
                    }
                }      
                    PasswordEl.textContent = answer;
                    console.log(answer);
            }
    }
}
    
    

        
        
    
    if (LowercaseCharacters.checked) {
        if (UppercaseCharacters.checked == false) {
            if (NumericalCharacters.checked == false) {
                if (SpecialCharacters.checked == false) {
                    // Lower on
                    for (i=0;i<value;i++) {
                    answer += loweralpha[Math.floor(Math.random() * Math.floor(26))];
                    }
                    PasswordEl.textContent = answer;
                } else {
                    // Lower and Special on
                    for (i=0;i<value;i++) {
                        let options = [specialchr,loweralpha];
                        let great = options[Math.floor(Math.random() * Math.floor(2))];
                        if (great == specialchr) {
                            answer += specialchr[Math.floor(Math.random() * Math.floor(32))];
                        } else {
                            answer += loweralpha[Math.floor(Math.random() * Math.floor(26))];
                        }
                        PasswordEl.textContent = answer;
                    }
                }
            } else if (SpecialCharacters.checked) {
                // lower and special and numbers
                for (i=0;i<value;i++) {
                    let options = [specialchr,loweralpha,numbers];
                    let great = options[Math.floor(Math.random() * Math.floor(3))];
                    if (great == loweralpha) {
                    answer += loweralpha[Math.floor(Math.random() * Math.floor(26))];
                    } else if (great == specialchr) {
                        answer += specialchr[Math.floor(Math.random() * Math.floor(32))];
                    } else {
                        answer += numbers[Math.floor(Math.random() * Math.floor(9))];
                    }
                    }       
                    PasswordEl.textContent = answer;
            } 
            }
    }
   
            
   
    
    
    if (UppercaseCharacters.checked) {
        if (LowercaseCharacters.checked == false) {
            if (SpecialCharacters.checked == false) {
            if (NumericalCharacters.checked == false) {
                // Upper on
                for (i=0;i<value;i++) {
                    answer += upperalpha[Math.floor(Math.random() * Math.floor(26))];
                }
                PasswordEl.textContent = answer;
            } else {
                // Uppercase and numbers on
                for (i=0;i<value;i++) {
                    let options = [numbers,upperalpha];
                    let great = options[Math.floor(Math.random() * Math.floor(2))];
                    if (great == numbers) {
                        answer += numbers[Math.floor(Math.random() * Math.floor(9))];
                    } else {
                        answer += upperalpha[Math.floor(Math.random() * Math.floor(26))];
                    }
                    PasswordEl.textContent = answer;
                }
            }
            PasswordEl.textContent = answer;
            } else if (NumericalCharacters.checked) {
                // numbers, and special and upper
                for (i=0;i<value;i++) {
                    let options = [specialchr,upperalpha,numbers];
                    let great = options[Math.floor(Math.random() * Math.floor(3))];
                    if (great == specialchr) {
                        answer += specialchr[Math.floor(Math.random() * Math.floor(32))];
                    } else if (great == numbers) {
                        answer += numbers[Math.floor(Math.random() * Math.floor(9))];
                    } else {
                        answer += upperalpha[Math.floor(Math.random() * Math.floor(26))];
                    }
                    
                    }       
                    PasswordEl.textContent = answer;
            }
            
            } else if (SpecialCharacters.checked == false) {
                if (NumericalCharacters.checked == false) {
                    // Lower and Upper on
                    for (i=0;i<value;i++) {
                        let options = [loweralpha,upperalpha];
                        let great = options[Math.floor(Math.random() * Math.floor(2))];
                        if (great == loweralpha) {
                            answer += loweralpha[Math.floor(Math.random() * Math.floor(26))];
                        } else {
                            answer += upperalpha[Math.floor(Math.random() * Math.floor(26))];
                        }
                        PasswordEl.textContent = answer;
                    }
                }
            } else {
                if (NumericalCharacters.checked) {
                    // Number, Upper, Special, and Lower on
                    for (i=0;i<value;i++) {
                        let options = [specialchr,upperalpha,loweralpha,numbers];
                        let great = options[Math.floor(Math.random() * Math.floor(4))];
                        if (great == specialchr) {
                        answer += specialchr[Math.floor(Math.random() * Math.floor(32))];
                        } else if (great == upperalpha) {
                            answer += upperalpha[Math.floor(Math.random() * Math.floor(26))];
                        } else if (great == loweralpha) {
                            answer += loweralpha[Math.floor(Math.random() * Math.floor(26))];
                        } else {
                            answer += numbers[Math.floor(Math.random() * Math.floor(9))];
                        }
                        }       
                        PasswordEl.textContent = answer;
                }
            }
            
    }
    if (NumericalCharacters.checked == false) {
        if (UppercaseCharacters.checked == false) {
            if (LowercaseCharacters.checked == false) {
                if (SpecialCharacters.checked == false) {
                    alert("Please enter at least one character type.")
                }
            }
        }
    }
} else 
    alert("Please enter password length between 8-128.")

});

function myFunction() {
    PasswordEl.select();
    document.execCommand("copy");
}