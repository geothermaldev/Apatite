// Create a class to reduce potential user errors when creating a new schedule
class ScheduleTime {
  constructor(hour, minutes) {
    const time = new Date();
    const [year, month, date, day] = [
      time.getFullYear(),
      time.getMonth(),
      time.getDate(),
      time.getDay(),
    ];

    return new Date(year, month, date, hour, minutes);
  }
}

const demoEventSchedule = {
  name: "Demo Event Schedule",
  type: "event",
  dateValid: new Date("December 19, 2022"),
  schedule: [
    {
      name: "Item 1",
      startTime: new ScheduleTime(7, 10),
      endTime: new ScheduleTime(8, 10),
      url: "https://www.google.com",
    },
    {
      name: "Item 2",
      startTime: new ScheduleTime(8, 20),
      endTime: new ScheduleTime(9, 20),
      url: "https://www.google.com",
    },
  ],
};

const demoNormalSchedule = {
  name: "Normal Schedule",
  type: "weekRepeat",
  daysValid: [1, 2, 3, 4, 5],
  schedule: [
    {
      name: "Item 1",
      startTime: new ScheduleTime(11, 10),
      endTime: new ScheduleTime(12, 10),
      url: "https://www.google.com",
    },
    {
      name: "Item 2",
      startTime: new ScheduleTime(12, 20),
      endTime: new ScheduleTime(13, 20),
      url: "https://www.google.com",
    },
  ],
};

const schedules = [demoEventSchedule, demoNormalSchedule];
const fallbackSchedule = demoNormalSchedule;
