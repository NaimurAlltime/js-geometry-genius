// common 
function getInputValueById(firstElementId, secondElementId){
    const firstInputElement = document.getElementById(firstElementId);
    const firstInputValueString = firstInputElement.value;
    const firstInputValue = parseFloat(firstInputValueString);

    const secondInputElement = document.getElementById(secondElementId);
    const secondInputValueString = secondInputElement.value;
    const secondInputValue = parseFloat(secondInputValueString);

    // multiply two input value 
    const multiple = firstInputValue * secondInputValue;

    // clear input field 
    firstInputElement.value = '';
    secondInputElement.value = '';

    return multiple;
}


// first card area calculation
document.getElementById('first-card').addEventListener('click', function(){
    const baseHeightMultiple = getInputValueById('triangle-base', 'triangle-height');
    const half = 0.5;
    const triangleArea = half * baseHeightMultiple;
    console.log(triangleArea);
})

// first card area calculation
document.getElementById('second-card').addEventListener('click', function(){
    const rectangleArea = getInputValueById('rectangle-width', 'rectangle-length');
    console.log(rectangleArea);
})