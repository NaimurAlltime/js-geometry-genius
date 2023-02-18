// common function get the input value
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

// common function get the text value
function getTextValueById(firstElementId, secondElementId){
    const firstInputElement = document.getElementById(firstElementId);
    const firstInputValueString = firstInputElement.innerText;
    const firstInputValue = parseFloat(firstInputValueString);

    const secondInputElement = document.getElementById(secondElementId);
    const secondInputValueString = secondInputElement.innerText;
    const secondInputValue = parseFloat(secondInputValueString);

    // multiply two input value 
    const multiple = firstInputValue * secondInputValue;

    return multiple;
}

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