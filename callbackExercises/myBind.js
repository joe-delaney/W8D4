Function.prototype.myBind = function(context) {
  //Return an arrow function
  //The arrow function captures this and context
  //In the anonymous function, call Function.prototype.apply on this, passing the context

  return () => {
    this.apply(context);
  };

};



class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"