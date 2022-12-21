const time = new Date();
const [year, month, date, day] = [
  time.getFullYear(),
  time.getMonth(),
  time.getDate(),
  time.getDay(),
];

const demoEventSchedule = {
  name: "Demo Event Schedule",
  type: "event",
  dateValid: new Date("December 19, 2022"),
  schedule: [
    {
      name: "Item 1",
      startTime: new Date(year, month, date, 7, 10),
      endTime: new Date(year, month, date, 8, 10),
      url: "https://www.google.com",
    },
    {
      name: "Item 2",
      startTime: new Date(year, month, date, 8, 20),
      endTime: new Date(year, month, date, 9, 20),
      url: "https://www.google.com",
    },
  ],
};

const demoNormalSchedule = {
  name: "Normal Schedule",
  type: "weekRepeat",
  daysValid: [1, 2, 3, 4],
  schedule: [
    {
      name: "Item 1",
      startTime: new Date(year, month, date, 7, 10),
      endTime: new Date(year, month, date, 8, 10),
      url: "https://www.google.com",
    },
    {
      name: "Item 2",
      startTime: new Date(year, month, date, 8, 20),
      endTime: new Date(year, month, date, 9, 20),
      url: "https://www.google.com",
    },
  ],
};

const schedules = [demoEventSchedule, demoNormalSchedule];
const fallbackSchedule = demoNormalSchedule;
