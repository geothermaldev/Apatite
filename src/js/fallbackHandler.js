const errorToastDisplay = (message) => {
  /*
    Here we use a normal system alert to show the error message instead of a custom solution
    This makes it simpler to implement and is worth the tradeoff of not being able to use styling
    For the future the Popover API may be worth considering when browser support becomes more widespread:
    https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
  */
  alert(message);
};

const noFallbackScheduleAvailable = () => {
  /* 
    This function is called whenever a fallback schedule isn't configured by the user.
    It sets a title and creates an explanation (w/ lang attribute) to display to the user
  */

  document.getElementById("fallbackTitle").innerText = "Fallback Unavailable";
  document.getElementById("fallbackTitle").setAttribute("lang", "en");

  const errorExplanation = document.createElement("p");
  errorExplanation.innerText =
    "No fallback schedule has been defined. You can define one in the schedules.js file.";
  errorExplanation.setAttribute("id", "noFallbackErrorExplanation");
  errorExplanation.setAttribute("lang", "en");

  document.getElementById("fallbackList").append(errorExplanation);
};

const scheduleItemURLOpener = (urlArray) => {
  /*
    This function processes an event for whenever a button to open link(s) for a schedule item is clicked.
    ! This does seem to trigger anti-popup browser measures when opening more than 2 links. A delay may help.
  */
  let scheduleItemURLs = urlArray.split("|");
  for (let iteration = 1; iteration < scheduleItemURLs.length; iteration++) {
    window.open(scheduleItemURLs[iteration], "_blank");
  }

  window.location.href = scheduleItemURLs[0];
};

const fallbackHandler = (message) => {
  /*
    This function is called whenever something occurs and we need to load the fallback schedule.
    Reasons for this include:
    - More than one event schedule for a given day
    - No VALID event schedules for a given day AND no repeat schedules
    - None or more than one repeating schedule for a given day
  */

  // We check if there is a fallback schedule and if there isn't we call a function to display an error.
  if (fallbackSchedule === null) {
    noFallbackScheduleAvailable();
    return;
  }

  // If there was a message argument passed then we alert it to the user.
  if (message) errorToastDisplay(message);

  // Now we set a the title of the schedule on the fallbackTitle element.
  document.getElementById("fallbackTitle").innerText = fallbackSchedule.name;
  fallbackSchedule.schedule.forEach((scheduleItem) => {
    /*
      We create a button for each ScheduleItem setting it's type and name.
      If there aren't any URLs for that ScheduleItem we disable the button.
      Otherwise, we add the URLs as a custom data attribute and add a click event listener.
      Then we add the button to the container
    */
    let itemButton = document.createElement("button");
    itemButton.innerText = scheduleItem.name;
    itemButton.setAttribute("type", "button");

    if (scheduleItem.url === null || scheduleItem.url.length <= 0) {
      itemButton.setAttribute("disabled", "true");
      itemButton.setAttribute(
        "class",
        "fallbackItemButton fallbackItemButtonNoLink"
      );
    } else {
      itemButton.setAttribute("data-urls", scheduleItem.url.join("|"));
      itemButton.setAttribute(
        "onclick",
        `scheduleItemURLOpener(event.target.dataset.urls)`
      );
      itemButton.setAttribute(
        "class",
        "fallbackItemButton fallbackItemButtonLink"
      );
    }

    document.getElementById("fallbackList").append(itemButton);
  });
};
