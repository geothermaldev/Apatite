const errorToastDisplay = (message) => {
  // Don't show toast if no message is provided
  if (message === null) return;

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

const fallbackHandler = (data) => {
  // Check is fallback schedule is available otherwise return and show an error
  if (fallbackSchedule === null) {
    noFallbackScheduleAvailable();
    return;
  }

  errorToastDisplay(data.errorMessage);

  /*
    Set the "header" of the page as the fallback schedule title
    Then define the element that will contain the list of fallback schedule items
  */
  document.getElementById("fallbackTitle").innerText = fallbackSchedule.name;
  const fallbackList = document.getElementById("fallbackList");

  // Here we run this function for every schedule listing in the fallback schedule
  fallbackSchedule.schedule.forEach((scheduleItem, index) => {
    /* 
      Here we create an container element "in memory" (as in just existing in JS for now)
      Then we create two more elements for the name and URL and attach their data
      Then we attach these two elements to the original container
      Finally, we append the container to the fallbackList div that already exists
    */
    let itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "fallbackItemContainer");
    itemContainer.setAttribute(
      "onclick",
      `window.location.href = "${scheduleItem.url}"`
    );

    let itemName = document.createElement("p");
    itemName.innerText = scheduleItem.name;
    itemName.setAttribute("class", "fallbackItemName");

    let itemOpenLabel = document.createElement("p");
    itemOpenLabel.innerText = "Open";
    itemOpenLabel.setAttribute("class", "fallbackItemOpenLabel");

    // Add the name and URL to the container we created
    itemContainer.append(itemName);
    itemContainer.append(itemOpenLabel);
    // Finally, attach the container to the fallbackList div
    fallbackList.append(itemContainer);
  });
};
