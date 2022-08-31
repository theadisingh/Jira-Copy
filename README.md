<p align="center"> <img src="icons/JiraCopy-128.png"> </p>

<h1 align="center"> JIRA COPY </h1>

<p align="justify">

This is a Chrome Extension which is used to copy the JIRA ID and it's title in a presentable format without any hassle of copying and pasting separately using keyboard shortcuts.

JIRA Copy uses keyboard shortcut (default: Alt+Q) which can also be changed according to user preference.

</p>

The format is as follows `[ JIRA ID ] - JIRA TITLE`

### HOW TO USE JIRA COPY

- Download and Extract the files to a location or Clone this repository to your local area using

  `git clone https://github.com/theadisingh/Jira-Copy.git`

- Open Google Chrome. Go to Settings > Extensions
- Turn ON `Developer Mode` on top right.
- Click on `Load unpacked` and point it to the downloaded/cloned repository.

### HOW TO MODIFY SHORTCUT

- Open Chrome. Go to Settings > Extensions
- On the left hand side use the hamburger menu to navigate to the section `Keyboard shortcuts`
- Find JIRA Copy in the list of extensions and find the shortcut option `Copy JIRA to Clipboard` and change it to your liking.

### HOW TO CHANGE COPY FORMAT

- Navigate to the file `background.js`
- Modify the below line to the format of your liking.

```js
jiraLink.innerHTML = "[ " + ticketId + " ] - " + ticketDescription;
```
