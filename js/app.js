(function (app) {
  'use strict';

  app.doubleBubble = function () {
    const submitButton = document.getElementById('btnSubmit');
    submitButton.addEventListener('click', captureValues);
  };

  // Capture values from the user
  function captureValues() {
    // Capture values from user
    let doubleValue = document.getElementById('doubleValue').value;
    let bubbleValue = document.getElementById('bubbleValue').value;

    // Parse values to integers
    doubleValue = parseInt(doubleValue);
    bubbleValue = parseInt(bubbleValue);

    // Test if the values are integers
    // Only if both values are integers, call the test double bubble function
    if (Number.isInteger(doubleValue) && Number.isInteger(bubbleValue)) {
      const dbArray = testDoubleBubble(doubleValue, bubbleValue);

      // Display Double Bubble
      displayDoubleBubble(dbArray);
    }
  }

  // Test Double Bubble
  function testDoubleBubble(doubleValue, bubbleValue) {
    let dbArray = [];

    // For-loop over a range of 0-100
    for (let i = 1; i <= 100; i++) {
      // Check if the number at i is multiple of both values, consider switch statement
      switch (true) {
        // If it is add "Double Bubble!" to the array.
        case i % doubleValue == 0 && i % bubbleValue == 0:
          dbArray.push('DoubleBubble');
          break;

        // Else if it is a multiple of bubble value add "Bubble" to the array.
        case i % bubbleValue == 0:
          dbArray.push('Bubble');
          break;

        // Else if it is a multiple of double value add "Double" to the array.
        case i % doubleValue == 0:
          dbArray.push('Double');
          break;

        default:
          // Else if it's not multiple of either, add the number to the array.
          dbArray.push(i);
          break;
      }
    }

    // Finally, return the array.
    return dbArray;
  }

  function displayDoubleBubble(dbArray) {
    // Get the body and row from the page
    let tableBody = document.getElementById('results');
    let templateRow = document.getElementById('dbTemplate');

    // Make sure the table is clear
    tableBody.innerHTML = '';

    // For-loop through the array
    for (let i = 0; i < dbArray.length; i += 5) {
      let tableRow = document.importNode(templateRow.content, true);
      let rowCols = tableRow.querySelectorAll('td');

      rowCols[0].classList.add(dbArray[i]);
      rowCols[0].textContent = dbArray[i];

      rowCols[1].classList.add(dbArray[i + 1]);
      rowCols[1].textContent = dbArray[i + 1];

      rowCols[2].classList.add(dbArray[i + 2]);
      rowCols[2].textContent = dbArray[i + 2];

      rowCols[3].classList.add(dbArray[i + 3]);
      rowCols[3].textContent = dbArray[i + 3];

      rowCols[4].classList.add(dbArray[i + 4]);
      rowCols[4].textContent = dbArray[i + 4];

      tableBody.appendChild(tableRow);
    }
  }
})((window.app = window.app || {}));
