document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM content to be fully loaded before attaching event listeners
  
    // Selecting necessary elements
    var arrowBtn = document.getElementById('arrowBtn');
    var dayInput = document.getElementById('day');
    var monthInput = document.getElementById('month');
    var yearInput = document.getElementById('year');
    var yearSpan = document.getElementById('yearSpan');
    var monthsSpan = document.getElementById('monthsSpan');
    var daysSpan = document.getElementById('daysSpan');
  
    // Adding click event listener to the arrow button
    arrowBtn.addEventListener('click', function () {
      // Get user input values
      var day = parseInt(dayInput.value, 10) || 0;
      var month = parseInt(monthInput.value, 10) || 0;
      var year = parseInt(yearInput.value, 10) || 0;
  
      // Current date
      var currentDate = new Date();
  
      // User input date
      var userDate = new Date(year, month - 1, day);
  
      // Calculate the age
      var ageInMilliseconds = currentDate - userDate;
      var ageInSeconds = ageInMilliseconds / 1000;
      var ageInMinutes = ageInSeconds / 60;
      var ageInHours = ageInMinutes / 60;
      var ageInDays = ageInHours / 24;
  
      // Update the output spans
      yearSpan.textContent = Math.floor(ageInDays / 365);
      monthsSpan.textContent = Math.floor((ageInDays % 365) / 30);
      daysSpan.textContent = Math.floor(ageInDays % 30);
    });
  });
  