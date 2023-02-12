# Setup

Basil was created to run off your file system! This means that instead of opening a URL to a hosted server you open a link to a local file. This does mean that some mobile browsers might not work as expected. You can also try to host this online but this hasn't been tested and may not work properly.

## Downloading

Download the project as a ZIP file and unzip the files to your desired location. Make sure all the files are in the same order! Otherwise things might break. We recommend using a folder like `Download/Basil` or `Download/Static/Basil` to keep organised!

## Configuring

To get started you will need:

- Have downloaded the files
- A way to edit files like a text or code editor

### Getting Started

- Open up the main `index.html` file in your browser. Bookmark this page now as it will likely be more difficult later. The bookmark will serve as a "button" to send you to the websites you configure!
- Open up your editor and load up `js/example.schedules.js`
- Basil features two types of schedules. These are "event" and "weekRepeat". The first takes priority and runs on a specific date and the second repeats every specified day (eg. Mon-Fri, Tue-Wed).
- Once you decided which schedule types to use and configure you can use this format to add a new schedule:

  ```js
  const uniqueScheduleName = {
      name: "Example Name" // A human friendly name
      type: "" // Either "event" or "weekRepeat"
      dateValid: new Date("December 25, 2031") // Only use for "event" type
      daysValid: [1,2,3,4,5] // Only use for "weekRepeat" type. Sunday = 0, Monday = 1 and so on
      schedule: [ // Here go the schedule items. To add more just copy the example below. Make sure to have them comma seperated.
          {
              name:  "Example Name", // A human friendly name
              startTime: new ScheduleTime(9, 49), // The last two are the hour & minutes (24hr format). Only change the these!
              endTime: new ScheduleTime(10, 49), // The last two are the hour & minutes (24hr format). Only change the these!
              url: "https://github.com/TheLimifiedLime/Basil", // The URL to open
          }
      ]
  }
  ```

- If you are adding multiple schedules make sure they don't conflict. Otherwise it will cause an error!
- Now scroll to the bottom of the file. You will see something that looks like this. Replace the demoSchedule with the names of your schedules. Make sure they are comma seperated!
  ```js
  const schedules = [demoSchedule];
  ```
- You will also see something like this. If you want to have a fallback schedule in case of an error or no matching schedule then replace the placeholder! Otherwise set it as `null` to leave it empty.
  ```js
  const fallbackSchedule = demoNormalSchedule;
  // Alternatively set it to empty like this
  const fallbackSchedule = null;
  ```
- Now make sure to save the file and then rename it to `schedules.js` (removing the "example." part).
- Click on the bookmark you set up earlier. If you are redirected or see your fallback schedule then you're done! If you see an error there could be an issue with your configuration. If you need help open an issue!
