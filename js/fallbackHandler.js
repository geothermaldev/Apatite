const errorToastDisplay = (message) => {
  return;
  // Define the toast container
  const toastContainer = document.getElementById("toast");

  // Create the toast title element
  const titleElement = document.createElement("p");
  titleElement.setAttribute("class", "toast-title");
  titleElement.innerText = "Alert";
  // Create the toast message element
  const messageElement = document.createElement("p");
  messageElement.setAttribute("class", "toast-message");
  messageElement.innerText = message;

  // Append the title and message to the toast container
  toastContainer.append(titleElement);
  toastContainer.append(messageElement);

  // Start toast animation
  toastContainer.classList.add("toastStartAnimation");

  // Wait for animation end, verify animation, and run toast hide animation
  document.addEventListener("animationend", (event) => {
    if (event.animationName !== "toastStartAnimation") return;

    setTimeout(() => {
      toastContainer.classList.add("toastEndAnimation");
    }, 2500);
  });
};

const noFallbackScheduleAvailable = () => {
  // Set the title as "Fallback Unavailable"
  document.getElementById("fallbackTitle").innerText = "Fallback Unavailable";

  // Create a paragraph element and set the text to the explanation
  const errorExplanation = document.createElement("p");
  errorExplanation.innerText =
    "No fallback schedule has been defined. You can define one in the schedules.js file.";
  errorExplanation.setAttribute("id", "noFallbackErrorExplanation");

  // Attach the explanation to the document
  document.getElementById("fallbackList").append(errorExplanation);
};

const fallbackHandler = (errorMessage) => {
  // Check is fallback schedule is available otherwise return and show an error
  if (fallbackSchedule === null) {
    noFallbackScheduleAvailable();
    return;
  }

  // Show error toast if there is an error message
  if (errorMessage !== null) errorToastDisplay(errorMessage);

  // Set the fallback schedule title on the fallbackTitle element
  document.getElementById("fallbackTitle").innerText = fallbackSchedule.name;

  // Here we run this function for every schedule listing in the fallback schedule
  fallbackSchedule.schedule.forEach((scheduleItem, index) => {
    // Create button for the schedule item, attach name, and set the type as "button"
    let itemButton = document.createElement("button");
    itemButton.innerText = scheduleItem.name;
    itemButton.setAttribute("type", "button");

    /* 
      If there is no URL, disable the button and add a different class
      Otherwise, add an onclick event to the button with a different class
    */
    if (scheduleItem.url === null) {
      itemButton.setAttribute("disabled", "true");
      itemButton.setAttribute("class", "fallbackItemButtonNoLink");
    } else {
      itemButton.setAttribute(
        "onclick",
        `window.location.href = "${scheduleItem.url}"`
      );
      itemButton.setAttribute("class", "fallbackItemButtonLink");
    }

    // Finally, attach the container to the fallbackList element
    document.getElementById("fallbackList").append(itemButton);
  });
};
