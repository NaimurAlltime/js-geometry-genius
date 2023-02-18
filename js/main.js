let serial = 0;

// common function get input value
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

// common function to display data
function displayData(name, area) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${name}</td>
      <td>${area}cm<sup>2</sup></td>
      <td>
      <button class="bg-blue-500 outline-none text-white font-semibold px-2 rounded-md">Covert to m<sup>2</sup></button>
      </td>
      
    `;
    container.appendChild(tr);
  }