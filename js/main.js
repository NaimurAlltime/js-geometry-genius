let serial = 0;

// first card area calculation
document.getElementById('first-card').addEventListener('click', function(){
    serial += 1;
    const name = document.getElementById('first-card-name').innerText;

    const baseHeightMultiple = getInputValueById('triangle-base', 'triangle-height');
    const half = 0.5;
    const triangleArea = half * baseHeightMultiple;
    const triangleAreaToFixed = triangleArea.toFixed(2);

    if(Number.isInteger(triangleArea)){
        displayData(name, triangleArea);
        }
        else{
            displayData(name, triangleAreaToFixed);
        }
});

// second card area calculation
document.getElementById('second-card').addEventListener('click', function(){
    serial += 1;
    const name = document.getElementById('second-card-name').innerText;

    const rectangleArea = getInputValueById('rectangle-width', 'rectangle-length');
    const rectangleAreaToFixed = rectangleArea.toFixed(2);

    if(Number.isInteger(rectangleArea)){
        displayData(name, rectangleArea);
        }
        else{
            displayData(name, rectangleAreaToFixed);
        }
});
