class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();

    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();


    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    const boundTick = this._tick.bind(this);


    setInterval(boundTick, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;

    // Use console.log to print it.
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds++;

    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();