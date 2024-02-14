# Setup

Apatite was created to run off your file system! This means that instead of opening a URL to a hosted server you open a link to a local file. This does mean that mobile browsers might not work as expected. You can also try to host this online but this hasn't been tested and may not work properly.

## Downloading

Download the project as a ZIP file and unzip the files to your desired location. Make sure all the files are in the same order! Otherwise things might break. We recommend using a folder like `Download/Apatite` or `Download/Static/Apatite` to keep things organized!

## Configuring

To get started you will need:

- Have the files in your desired location.
- A way to edit files like a text or code editor.
- Some basic knowledge of JSON & JavaScript.

### Getting Started

1. Open up the main [`index.html`](../index.html) file in your browser. You should bookmark this page now as it may be more difficult later.
   - This bookmark will serve as a link or "button" to send you to the websites you configure!
2. Open up your editor and load the [`js/example.schedules.js`](../js/example.schedules.js) file to start writing your schedules.
3. You should now pick what type of schedule to start with. Apatite features two types and these are "event" and "weekRepeat". The first takes priority and runs on a specific date and the second repeats every specified day (eg. Mon-Fri, Tue-Wed).
   - If you are unsure of what schedule to pick you should start with the week repeat schedule. This the type most users are looking for!
4. Once you decided which schedule type to use you can select a template to get started. There are only a few differences between the templates and most of the contents are identical:

- [Event Schedule](#event-schedule)
- [Week Repeat Schedule](#week-repeat-schedule)

#### Event Schedule

```js
const uniqueScheduleName = {
    name: "Example Event Schedule" // A human friendly name
    type: "event"
    dateValid: new Date("December 25, 2031") // This specifies which date this schedule is valid for.
    schedule: [ // Here go the schedule items. To add more just copy the example below. Make sure to have them comma separated.
        {
            name:  "Example Name", // A human friendly name
            startTime: new ScheduleTime(9, 49), // The last two are the hour & minutes (24hr format). Only change the these!
            endTime: new ScheduleTime(10, 49), // The last two are the hour & minutes (24hr format). Only change the these!
            url: "https://github.com/TheLimifiedLime/Apatite", // The URL to open
        }
    ]
}
```

#### Week Repeat Schedule

```js
const uniqueScheduleName = {
    name: "Example Week Repeat Schedule" // A human friendly name
    type: "weekRepeat"
    daysValid: [1,2,3,4,5] // This specifies what days of the week this schedule will run on. Sunday = 0, Monday = 1 and so on.
    schedule: [ // Here go the schedule items. To add more just copy the example below. Make sure to have them comma separated.
        {
            name:  "Example Name", // A human friendly name
            startTime: new ScheduleTime(9, 49), // The last two are the hour & minutes (24hr format). Only change the these!
            endTime: new ScheduleTime(10, 49), // The last two are the hour & minutes (24hr format). Only change the these!
            url: "https://github.com/TheLimifiedLime/Apatite", // The URL to open
        }
    ]
}
```

5. Once you have your schedule(s) complete you can add it to the file!
   - If you are adding multiple schedules make sure they don't conflict. Otherwise it will cause an error!
6. Now scroll to the bottom of the file. You will see something that looks like this. Replace the demoSchedule with the names of your schedules. Make sure they are comma separated!

```js
const schedules = [demoSchedule];
```

7. You will also see something like this. If you want to have a fallback schedule in case of an error or no matching schedule then replace the placeholder! Otherwise set it as `null` to leave it empty.

```js
const fallbackSchedule = demoNormalSchedule;
// Alternatively set it to empty like this
const fallbackSchedule = null;
```

8. Now make sure to save the file and then rename it to `schedules.js` (removing the "example." part).
9. Click on the bookmark you set up earlier. If you are redirected or see your fallback schedule then you're done! If you see an error there could be an issue with your configuration. If you need help open an issue!

### Custom Themes

By default Apatite only has a dark theme. But you can override this by editing the properties in [css/theme.css](../css/theme.css) by editing the file itself or using a user styles manager!
