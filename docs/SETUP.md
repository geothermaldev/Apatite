# Setup
Basil is meant to operate off your file system. This means that instead of opening a URL you open a file. This means that some mobile platforms might not be supported or work as expected. You can also try to host this online for multiple people to use the same schedule but this hasn't been tested.

## Downloading
Download the project as a ZIP file and unzip the files to your desired location. We recommend using a folder like `Download/Basil` to keep organised. 

## Setup
You will some sort of way to edit the schedules.js file to configure Basil. This can be any sort of code or text editor. Once you're ready, open `js/example.schedules.js`. Basil features a "week repeat" and "event" schedule types. The first is used to repeat for days of a week (eg repeat Monday-Friday or Monday, Wednesday). The second is used for a specific date (or event). This is useful if your schedule changes on a certain date.
- Open the index.html file in your browser. If an error occurs or nothing happens that is intended. Bookmark this file and place the bookmark where you want to use it from. This will be hard to do later.
- There are two commented examples in the file. The first one is an example of an event scehdule while the second is an example of a weekRepeat schedule.
- You can uncomment either of the example and start editing using the comments as a guide.
- Once done make sure to save the file & rename it to `example.js`
- Open the bookmark you made previously. If configured correctly you will either be redirected or see a list of schedule items.
- Open an issue if you need help as this documentation might not be completed and/or easy to understand