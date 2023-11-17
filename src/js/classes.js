// Schedule Contents Classes
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

class ScheduleItem {
  constructor(name, startTime, endTime, url) {
    this.name = name;
    this.startTime = new ScheduleTime(startTime[0], startTime[1]);
    this.endTime = new ScheduleTime(endTime[0], endTime[1]);
    this.url = url;
  }
}

// Schedule Classes

class BasicSchedule {
  constructor(name, schedule) {
    this.name = name;
    this.schedule = schedule;
  }
}

class EventSchedule extends BasicSchedule {
  constructor(name, dateValid, schedule) {
    super(name, schedule);

    this.type = "event";
    this.dateValid = dateValid;
  }
}

class WeekRepeatSchedule extends BasicSchedule {
  constructor(name, daysValid, schedule) {
    super(name, schedule);

    this.type = "weekRepeat";
    this.daysValid = daysValid;
  }
}
