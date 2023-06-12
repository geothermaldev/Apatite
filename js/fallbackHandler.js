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
  document.getElementById("fallbackTitle").innerText = "Fallback Unavailable";

  const noFallbackErrorExplanation = document.createElement("p");
  noFallbackErrorExplanation.innerText =
    "No schedules have been defined. Make sure to define your schedules in the schedules.js file.";
  noFallbackErrorExplanation.setAttribute(
    "class",
    "noFallbackErrorExplanation"
  );

  const fallbackListDiv = document.getElementById("fallbackList");
  fallbackListDiv.append(noFallbackErrorExplanation);
};

const fallbackHandler = (errorMessage) => {
  // Check is fallback schedule is available otherwise return and show an error
  if (fallbackSchedule === null) {
    noFallbackScheduleAvailable();
    return;
  }

  // Show error toast if there is an error message
  if (errorMessage !== null) errorToastDisplay(errorMessage);

  // Add the fallback schedule title to the fallbackTitle element
  document.getElementById("fallbackTitle").innerText = fallbackSchedule.name;

  // Then define the fallbackList element
  const fallbackList = document.getElementById("fallbackList");

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
    fallbackList.append(itemButton);
  });
};
