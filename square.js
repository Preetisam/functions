function square(num){
    return num * num;
}
function calculator(){
    let userinput = doucment.getElementById("number").value;
    let output = square(usrInput);
    let outElement = document.getElementById("output");
    outputElement.value = output;

}