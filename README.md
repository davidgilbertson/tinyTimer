tinyTimer
=========

Use the timer to record the running time for particular areas of your code, then output the results to the console in a neat little table.

The timer requires a console that supports the console.table() command.

![screenshot](https://raw.github.com/davidgilbertson/tinyTimer/master/screenshot.png)

## Installation

Just copy paste the timer code into your code. Obviously you should be adding it your app's namespace.

If you prefer, you can include the script using a script tag, but if you're not concatenating you javascript files at build time then this is just another network request that the world doesn't need.


## Example Usage

tinyTimer.start('Load Data', 'This is my first run');

//Some code that takes some time to run

tinyTimer.next('Processing data');

//Some code that processes the data

tinyTimer.next('Draw to DOM')

//Some code that draws the data to the DOM

tinyTimer.stop();

You can visualize your data by typing the following in the console

tinyTimer.getHistory();