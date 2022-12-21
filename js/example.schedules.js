const time = new Date();
const [year, month, date, day] = [
  time.getFullYear(),
  time.getMonth(),
  time.getDate(),
  time.getDay(),
];

/*
  ||
  ||
  ||
  --
  IMPORTANT - PLEASE READ
  To configure look through the two demo schedules below and follow their comments
  WHEN YOUR DONE
  Scroll to the bottom and follow the instructions there to define the schedules so they can be picked up by Basil
*/

const demoEventSchedule = {
  name: "Demo Event Schedule", // Used in case of fallback to this schedule
  type: "event", // Either "event" or "weekRepeat". Read README for more info about each type.
  dateValid: new Date("December 19, 2022"), // EVENT TYPE ONLY - Date valid for the event schedule
  schedule: [
    {
      friendlyName: "Item 1", // Label used in case of fallback
      startTime: new Date(year, month, date, 7, 10), // The second to last number is the hour followed by the minute (24hr format)
      endTime: new Date(year, month, date, 8, 10), // The second to last number is the hour followed by the minute (24hr format)
      url: "https://www.google.com", // The URL opened for this item. It can also be null (no commas) to fallback to show the list. Useful for break periods.
    },
    // THIS ITEM BELOW IS JUST TO SHOW HOW TO ADD MORE ITEMS. FEEL FREE TO DELETE THIS COMMENT
    {
      friendlyName: "Item 2",
      startTime: new Date(year, month, date, 8, 20),
      endTime: new Date(year, month, date, 9, 20),
      url: "https://www.google.com",
    },
  ],
};

const demoNormalSchedule = {
  name: "Normal Schedule", // Used in case of fallback to this schedule
  type: "weekRepeat", // Either "event" or "weekRepeat". Read README for more info about each type.
  daysValid: [1, 2, 3, 4], // WEEK REPEAT TYPE ONLY - A comma seperated list representing days of the week. 0 = Sunday, 1 = Monday and so on.
  schedule: [
    {
      friendlyName: "Item 1", // Label used in case of fallback
      startTime: new Date(year, month, date, 7, 10), // The second to last number is the hour followed by the minute (24hr format)
      endTime: new Date(year, month, date, 8, 10), // The second to last number is the hour followed by the minute (24hr format)
      url: "https://www.google.com", // The URL opened for this item. It can also be null (no commas) to fallback to show the list. Useful for break periods.
    },
    // THIS ITEM BELOW IS JUST TO SHOW HOW TO ADD MORE ITEMS. FEEL FREE TO DELETE THIS COMMENT
    {
      friendlyName: "Item 2",
      startTime: new Date(year, month, date, 8, 20),
      endTime: new Date(year, month, date, 9, 20),
      url: "https://www.google.com",
    },
  ],
};

/* 
    Instructions to Define Schedule:
    In schedules variable, add all the schedules defined above. Otherwise they will be ignored.
    In the fallbackSchedule variable, add a schedule to display the links to if no available schedule is available
    Alternatively, set the variable to null to just load a placeholder
*/

const schedules = [demoEventSchedule, demoNormalSchedule];
const fallbackSchedule = demoNormalSchedule;
