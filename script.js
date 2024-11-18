// Initial References
let DecInp = document.getElementById("dec-input");
let BinInp = document.getElementById("bin-input");
let errormsg = document.getElementById("error-msg");

// convert Decimal To Binary when user input in the decimal field
DecInp.addEventListener("input" , () => {
    let DecValue = parseInt(DecInp.value);
    // convert decimal into binary
    BinInp.value = DecValue.toString(2);
});

// convert Binary To Decimal when user input in the binary field
BinInp.addEventListener("input" , () => {
    let BinValue = BinInp.value;
    // if the binary number is valid then convert it
    if(BinValiditor(BinValue)){
        DecInp.value = parseInt(BinValue , 2);
        errormsg.textContent = "";
    }
    // Else display an error msg
    else{
        errormsg.textContent = "Please Enter a valid Binary Input";
    }
    // Function to check if the binary number is valid i.e it does not conatin any number other than "0" and "1"
    function BinValiditor(num){
        for(let i = 0; i < num.length ; i++){
            if(num[i] != "0" && num[i] != "1"){
                return false;
            }
        }
        return true;
    }
});