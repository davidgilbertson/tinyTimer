var tinyTimer = {
  currentRun: {},
  lastStart: 0,
  history: [],
  currentName: '',
  start: function(stepName, notes) {
    this.notes = notes;
    this.lastStart = new Date().valueOf();
    this.currentRun = {};
    this.currentRun[stepName] = 0;
    this.currentName = stepName;
  },
  next: function(stepName) {
    var elapsedTime = new Date().valueOf() - this.lastStart;
    this.currentRun[this.currentName] = elapsedTime;
    this.currentName = stepName;
    this.lastStart = new Date().valueOf();
  },
  stop: function() {
    this.currentRun[this.currentName] = new Date().valueOf() - this.lastStart;
    this.currentRun.notes = this.notes; //passed in with the start function
    this.history.push(this.currentRun);
    this.storeHistory();
  },
  storeHistory: function() {
    if (!window.localStorage) { return; }
    var history;
    if (!!window.localStorage.timerLog) { //there is previous history in LS
      history = JSON.parse(window.localStorage.timerLog);
      history.push(this.currentRun);
    } else {
      history = this.history;
    }
    window.localStorage.timerLog = JSON.stringify(history);
  },
  getHistory: function() {
    var history;
    if (!!window.localStorage) {
      history = JSON.parse(localStorage.timerLog);
    } else {
      history = this.history;
    }
    history.reverse(); //It's reversed so the column order matches the current step order
    console.log('Run history (most recent at top)');
    console.table(history);
  },
  clear: function() {
    this.history.length = 0;
    lastStart: 0,
    window.localStorage && window.localStorage.removeItem('timerLog');
  }
};