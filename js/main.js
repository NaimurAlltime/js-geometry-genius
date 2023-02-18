let serial = 0;

// first card area calculation
document.getElementById('first-card').addEventListener('click', function(){
    const name = document.getElementById('first-card-name').innerText;

    //  get the data using common function by getInputValueById
    const baseHeightMultiple = getInputValueById('triangle-base', 'triangle-height');
    // validation get none value 
    if(isNaN(baseHeightMultiple)){
        return;
    }
    serial += 1;

    const half = 0.5;
    // area calculate 
    const triangleArea = half * baseHeightMultiple;
    const triangleAreaToFixed = triangleArea.toFixed(2);

    // condition check and show data 
    if(Number.isInteger(triangleArea)){
        displayData(name, triangleArea);
        }
        else{
            displayData(name, triangleAreaToFixed);
        }
});

// second card area calculation
document.getElementById('second-card').addEventListener('click', function(){
    const name = document.getElementById('second-card-name').innerText;

    //  get the data using common function by getInputValueById
    const rectangleArea = getInputValueById('rectangle-width', 'rectangle-length');
    // validation get none value 
    if(isNaN(rectangleArea)){
        return;
    }
    serial += 1;
    
    const rectangleAreaToFixed = rectangleArea.toFixed(2);

     // condition check and show data 
    if(Number.isInteger(rectangleArea)){
        displayData(name, rectangleArea);
        }
        else{
            displayData(name, rectangleAreaToFixed);
        }
});

// third card area calculation
document.getElementById('third-card').addEventListener('click', function(){
    serial += 1;
    const name = document.getElementById('third-card-name').innerText;

    //  get the data using common function by getTextValueById
    const ParallelogramArea = getTextValueById('parallelogram-base', 'parallelogram-height');
    const ParallelogramAreaToFixed = ParallelogramArea.toFixed(2);

     // condition check and show data 
    if(Number.isInteger(ParallelogramArea)){
        displayData(name, ParallelogramArea);
        }
        else{
            displayData(name, ParallelogramAreaToFixed);
        }
});

// four card area calculation
document.getElementById('four-card').addEventListener('click', function(){
    serial += 1;
    const name = document.getElementById('four-card-name').innerText;

    //  get the data using common function by getTextValueById
    const twoDiagonalMultiple = getTextValueById('diagonal-one', 'diagonal-two');
    const half = 0.5;
    // area calculate 
    const rhombusArea = half * twoDiagonalMultiple;

    const rhombusAreaToFixed = rhombusArea.toFixed(2);

     // condition check and show data 
    if(Number.isInteger(rhombusArea)){
        displayData(name, rhombusArea);
        }
        else{
            displayData(name, rhombusAreaToFixed);
        }
});

// five card area calculation
document.getElementById('five-card').addEventListener('click', function(){
    serial += 1;
    const name = document.getElementById('five-card-name').innerText;

    //  get the data using common function by getTextValueById
    const perimeterBaseMultiple = getTextValueById('pentagon-perimeter', 'pentagon-base');
    const half = 0.5;
    // area calculate 
    const pentagonArea = half * perimeterBaseMultiple;

    const pentagonAreaToFixed = pentagonArea.toFixed(2);

     // condition check and show data 
    if(Number.isInteger(pentagonArea)){
        displayData(name, pentagonArea);
        }
        else{
            displayData(name, pentagonAreaToFixed);
        }
});

// six card area calculation
document.getElementById('six-card').addEventListener('click', function(){
    serial += 1;
    const name = document.getElementById('six-card-name').innerText;

    //  get the data using common function by getTextValueById
    const semiMajorMinorMultiple = getTextValueById('semi-major-axis', 'semi-minor-axis');
    const pi = 3.14159;
    // area calculate 
    const ellipseArea = pi * semiMajorMinorMultiple;

    const ellipseAreaToFixed = ellipseArea.toFixed(2);

     // condition check and show data 
    if(Number.isInteger(ellipseArea)){
        displayData(name, ellipseArea);
        }
        else{
            displayData(name, ellipseAreaToFixed);
        }
});

