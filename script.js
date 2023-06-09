const numArray = document.querySelectorAll(".numbers");
const opt = document.querySelectorAll(".opt");

// getting the values

let value = "";
for (let i =0;i < numArray.length; i++){

numArray[i].addEventListener('click',function(){
    value += numArray[i].textContent;

    if(value.length < 23){
        document.getElementsByClassName("screen")[0].textContent = value;
    }
    else{
        document.getElementsByClassName("screen")[0].textContent = "Can't perform";
    }
    
    });
}

// AC (allclear)
opt[4].addEventListener('click',function(){
value = "0"
document.getElementsByClassName("screen")[0].textContent = value;
value = ""
})

// C (clear)
opt[0].addEventListener('click',function(){
let val = value.split("");
val.splice(val.length - 1,1);
value = val.join("");
if (value !== ""){
    document.getElementsByClassName("screen")[0].textContent = value;
}else{
    value = "0";
    document.getElementsByClassName("screen")[0].textContent = value;
    value = "";
}
})
// OPERATIONS
//multiplication (*) 
opt[1].addEventListener('click',function(){
value += opt[1].textContent;
document.getElementsByClassName("screen")[0].textContent = value;
})

// addition (+)
opt[2].addEventListener('click',function(){
value += opt[2].textContent;
document.getElementsByClassName("screen")[0].textContent = value;
})

// substraction (-)
opt[3].addEventListener('click',function(){
value += opt[3].textContent;
document.getElementsByClassName("screen")[0].textContent = value;
})

// division (/)
opt[5].addEventListener('click',function(){
value += opt[5].textContent;
document.getElementsByClassName("screen")[0].textContent = value;
})

// equals (=)
opt[6].addEventListener('click',function(){

if(eval(value) < 99999999999999999999999){
    try {
        value = eval(value);
        document.getElementsByClassName("screen")[0].textContent = value;
        value = value.toString();  
    } catch (error) {
        document.getElementsByClassName("screen")[0].textContent = "Malformed expression";
    }
}
else{
    document.getElementsByClassName("screen")[0].textContent = "Can't perform";
}
})
