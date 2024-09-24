function getInnerTextValue(id){
    const innerTextValue = parseFloat(document.getElementById(id).innerText);
    return innerTextValue; 
}

function getInputValue(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}