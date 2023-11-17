const demoEventSchedule = new EventSchedule(
  "Demo Event Schedule",
  new Date("December 19, 2022"),
  [
    new ScheduleItem("Item 1", [7, 10], [8, 10], ["https://example.com"]),
    new ScheduleItem("Item 2", [8, 20], [9, 20], ["https://example.com"]),
  ]
);

const demoNormalSchedule = new WeekRepeatSchedule(
  "Normal Schedule",
  [1, 2, 3, 4, 5],
  [
    new ScheduleItem(
      "Item 1",
      [11, 10],
      [12, 10],
      ["https://example.com", "https://joinmastodon.org", "https://deno.land"]
    ),
    new ScheduleItem("Item 2", [12, 20], [13, 20], []),
  ]
);

const schedules = [demoEventSchedule, demoNormalSchedule];
const fallbackSchedule = demoNormalSchedule;
