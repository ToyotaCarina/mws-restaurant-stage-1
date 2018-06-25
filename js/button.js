function buttonInit() {
  // Create variables for the buttons
  var actionButtons = document.getElementsByClassName("restaurant-details");

  // Add event listeners to the buttons
  for (var i = 0; i < actionButtons.length; i++) {
    actionButtons[i].addEventListener('click', actionButtonEventHandler);
    actionButtons[i].addEventListener('keydown', actionButtonEventHandler);
  }
}

function actionButtonEventHandler(event) {
  var type = event.type;
  // Grab the keydown and click events
  if (type === 'keydown') {
    // If either enter or space is pressed, execute the funtion
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.target.click();
      event.preventDefault();
    }
  } else if (type === 'click') {
    event.target.click();
  }
}